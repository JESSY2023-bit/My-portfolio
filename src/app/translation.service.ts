import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Language = 'fr' | 'en';
type Dictionary = Record<string, string>;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly language = signal<Language>('fr');
  private readonly dictionaries = signal<Record<Language, Dictionary>>({ fr: {}, en: {} });

  constructor(private readonly http: HttpClient) {
    this.load('fr');
    this.load('en');
  }

  translate(key: string): string {
    return this.dictionaries()[this.language()][key] ?? key;
  }

  toggle(): void {
    this.language.update((current) => current === 'fr' ? 'en' : 'fr');
  }

  private load(language: Language): void {
    this.http.get<Dictionary>(`assets/i18n/${language}.json`).subscribe((dictionary) => {
      this.dictionaries.update((current) => ({ ...current, [language]: dictionary }));
    });
  }
}
