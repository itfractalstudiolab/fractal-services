import { FRACTAL_LINKS } from "@/lib/fractal-links";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function FractalLinksPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'header-image');
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020011] text-white font-body p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#04020B] shadow-[0_24px_80px_rgba(0,0,0,0.65)] border border-white/5 animate-fade-in-up">
          <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl bg-[radial-gradient(circle_at_top,_hsl(var(--primary)),_transparent_55%),_radial-gradient(circle_at_bottom,_hsl(var(--accent)),_transparent_55%)]" />

          <div className="relative z-10">
            <div className="relative">
              {headerImage && (
                <Image
                  src={headerImage.imageUrl}
                  alt={headerImage.description}
                  data-ai-hint={headerImage.imageHint}
                  width={400}
                  height={112}
                  className="h-28 w-full rounded-t-3xl object-cover"
                />
              )}
              <div className="flex justify-center">
                <div className="relative -mt-8 w-16 h-16 rounded-full border-2 border-white/70 bg-black/70 flex items-center justify-center shadow-lg">
                  <span className="text-sm font-semibold tracking-tight">
                    Fractal
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 pt-4 pb-6 text-center">
              <p className="text-[13px] font-semibold mb-1">@fractalstudiolab</p>
              <p className="text-xs text-white/70 leading-snug max-w-xs mx-auto">
                Estrategia, diseño y OPS™ con el stack más moderno para escalar
                tu negocio sin fricción.
              </p>

              <div className="mt-4 mb-2 flex justify-center">
                <a
                  href="https://instagram.com/fractalstudiolab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="px-4 pb-5 space-y-3">
              {FRACTAL_LINKS.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 shadow-lg shadow-primary/40 transition-all transform-gpu hover:-translate-y-0.5 hover:shadow-primary/55 animate-slide-up opacity-0"
                  style={{ animationDelay: `${0.05 * idx + 0.15}s` }}
                >
                  <div className="relative z-10 text-left">
                    <p className="text-sm font-semibold leading-none text-primary-foreground">
                      {link.label}
                    </p>
                    <p className="mt-1 text-[11px] text-primary-foreground/90 leading-snug">
                      {link.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-primary-foreground/90 transition-colors group-hover:bg-white/25">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(255,255,255,0.25),transparent,rgba(255,255,255,0.25))] mix-blend-screen transition-opacity" />
                </a>
              ))}
            </div>

            <div className="px-4 pb-4 sticky bottom-0 bg-gradient-to-t from-[#04020B] via-[#04020B] to-transparent pt-2">
              <a
                href="https://wa.me/573505310614?text=Hola%20Fractal,%20quiero%20un%20diagn%C3%B3stico%20digital%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white text-black px-4 py-2.5 text-xs font-medium shadow-md hover:bg-neutral-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agenda un diagnóstico express por WhatsApp</span>
              </a>
            </div>
            
            <footer className="px-4 pb-4 pt-2 text-center">
                <p className="text-[10px] text-white/40 tracking-wide">
                    Powered by Fractal Studio Lab
                </p>
             </footer>
          </div>
        </div>
      </div>
    </main>
  );
}