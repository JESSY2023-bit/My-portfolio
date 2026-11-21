import { Injectable, signal } from '@angular/core';
import fr from '../assets/i18n/fr.json';
import en from '../assets/i18n/en.json';

type Language = 'fr' | 'en';
type Dictionary = Record<string, string>;

// Traductions embarquées dans le bundle : pas de requête HTTP, pas de clignotement au chargement.
const DICTIONARIES: Record<Language, Dictionary> = { fr, en };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly language = signal<Language>('fr');

  translate(key: string): string {
    return DICTIONARIES[this.language()][key] ?? key;
  }

  toggle(): void {
    this.language.update((current) => (current === 'fr' ? 'en' : 'fr'));
  }
}
