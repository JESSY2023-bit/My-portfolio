import { Component, inject, signal } from '@angular/core';
import { TranslationService } from './translation.service';
import { PROJECTS, SKILLS } from './portfolio.data';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly i18n = inject(TranslationService);
  protected readonly language = this.i18n.language;
  protected readonly lightMode = signal(false);
  protected readonly menuOpen = signal(false);

  protected t(key: string): string {
    return this.i18n.translate(key);
  }

  protected toggleLanguage(): void {
    this.i18n.toggle();
    this.menuOpen.set(false);
  }

  protected toggleTheme(): void {
    this.lightMode.update((current) => !current);
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((current) => !current);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected readonly projects = PROJECTS;
  protected readonly skills = SKILLS;
}
