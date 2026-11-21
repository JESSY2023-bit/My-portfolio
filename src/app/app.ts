import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { TranslationService } from './translation.service';
import { FEATURED, MILESTONES, OTHER_PROJECTS, ROLES, SKILL_GROUPS, STACK_STRIP, Text } from './portfolio.data';
import { Reveal, ScrollProgress, Spotlight, Tilt, prefersReducedMotion } from './motion';

@Component({
  selector: 'app-root',
  imports: [Reveal, Tilt, Spotlight, ScrollProgress],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly i18n = inject(TranslationService);
  protected readonly language = this.i18n.language;
  protected readonly dark = signal(
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches,
  );
  protected readonly menuOpen = signal(false);
  protected readonly roleIndex = signal(0);

  protected readonly first = 'Jessy'.split('');
  protected readonly last = 'Odriv'.split('');
  protected readonly roles = ROLES;
  protected readonly strip = [...STACK_STRIP, ...STACK_STRIP];
  protected readonly featured = FEATURED;
  protected readonly projects = OTHER_PROJECTS;
  protected readonly skillGroups = SKILL_GROUPS;
  protected readonly milestones = MILESTONES;
  protected readonly year = new Date().getFullYear();

  constructor() {
    effect(() => {
      document.documentElement.dataset['theme'] = this.dark() ? 'dark' : 'light';
      document.documentElement.lang = this.language();
    });

    if (!prefersReducedMotion()) {
      const id = setInterval(() => this.roleIndex.update((i) => (i + 1) % this.roles.length), 2800);
      inject(DestroyRef).onDestroy(() => clearInterval(id));
    }
  }

  protected t(key: string): string {
    return this.i18n.translate(key);
  }

  protected l(text: Text): string {
    return text[this.language()];
  }

  protected toggleLanguage(): void {
    this.i18n.toggle();
  }

  protected toggleTheme(): void {
    this.dark.update((v) => !v);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
