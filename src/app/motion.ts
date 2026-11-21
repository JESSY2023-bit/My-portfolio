import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fait apparaître l'élément (classe `in`) la première fois qu'il entre à l'écran. */
@Directive({ selector: '[reveal]', host: { class: 'reveal', '[style.--delay]': 'delay() + "ms"' } })
export class Reveal implements OnInit, OnDestroy {
  readonly delay = input(0, { alias: 'reveal', transform: (v: unknown) => Number(v) || 0 });
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      node.classList.add('in');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add('in');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

/** Incline légèrement l'élément en 3D selon la position de la souris. */
@Directive({
  selector: '[tilt]',
  host: { class: 'tilt', '(pointermove)': 'move($event)', '(pointerleave)': 'reset()' },
})
export class Tilt {
  private readonly el = inject(ElementRef<HTMLElement>);

  move(e: PointerEvent): void {
    if (prefersReducedMotion() || e.pointerType !== 'mouse') return;
    const node = this.el.nativeElement as HTMLElement;
    const r = node.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    node.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
    node.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
    node.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
    node.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`);
  }

  reset(): void {
    const s = (this.el.nativeElement as HTMLElement).style;
    s.setProperty('--rx', '0deg');
    s.setProperty('--ry', '0deg');
  }
}

/** Halo qui suit le curseur à l'intérieur de l'élément. */
@Directive({ selector: '[spotlight]', host: { class: 'spotlight', '(pointermove)': 'move($event)' } })
export class Spotlight {
  private readonly el = inject(ElementRef<HTMLElement>);

  move(e: PointerEvent): void {
    const node = this.el.nativeElement as HTMLElement;
    const r = node.getBoundingClientRect();
    node.style.setProperty('--sx', `${e.clientX - r.left}px`);
    node.style.setProperty('--sy', `${e.clientY - r.top}px`);
  }
}

/** Expose --progress (0 → 1) : défilement de la page entière, ou de l'élément si mode = 'element'. */
@Directive({ selector: '[scrollProgress]' })
export class ScrollProgress implements OnInit, OnDestroy {
  readonly mode = input<'page' | 'element', unknown>('page', { alias: 'scrollProgress', transform: (v: unknown) => (v === 'element' ? 'element' : 'page') });
  private readonly el = inject(ElementRef<HTMLElement>);
  private frame = 0;
  private readonly update = () => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const node = this.el.nativeElement as HTMLElement;
      let p: number;
      if (this.mode() === 'page') {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        p = max > 0 ? window.scrollY / max : 0;
      } else {
        const r = node.getBoundingClientRect();
        p = (window.innerHeight * 0.85 - r.top) / r.height;
      }
      p = Math.min(1, Math.max(0, p));
      node.style.setProperty('--progress', p.toFixed(4));
    });
  };

  ngOnInit(): void {
    if (prefersReducedMotion()) {
      (this.el.nativeElement as HTMLElement).style.setProperty('--progress', this.mode() === 'page' ? '0' : '1');
      return;
    }
    this.update();
    window.addEventListener('scroll', this.update, { passive: true });
    window.addEventListener('resize', this.update);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.update);
    window.removeEventListener('resize', this.update);
    cancelAnimationFrame(this.frame);
  }
}
