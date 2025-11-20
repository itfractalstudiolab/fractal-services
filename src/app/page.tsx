import { FRACTAL_LINKS } from "@/lib/fractal-links";
import { Instagram, MessageCircle } from 'lucide-react';

export default function FractalLinksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground font-body p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-card rounded-3xl shadow-2xl shadow-primary/10 border border-primary/20 px-6 py-8 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl bg-[radial-gradient(circle_at_top,_hsl(var(--primary)),_transparent_60%),_radial-gradient(circle_at_bottom,_hsl(var(--accent)),_transparent_55%)]" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center bg-black/60 shadow-lg">
              <span className="text-3xl font-bold tracking-tight text-white">FS</span>
            </div>

            <div className="text-center">
              <h1 className="font-semibold text-xl text-white">@fractalstudiolab</h1>
              <p className="text-sm leading-snug text-white/70 mt-2 max-w-xs">
                Impulsamos tu marca con estrategia digital, OPS™ y el stack
                más moderno para escalar tu negocio.
              </p>
            </div>

            <div className="mt-1 mb-3 flex gap-4">
              <a href="https://instagram.com/fractalstudiolab" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <div className="w-full flex flex-col gap-3">
              {FRACTAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-primary px-4 py-3.5 text-center text-primary-foreground shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-primary"
                >
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <p className="font-semibold tracking-tight">
                      {link.label}
                    </p>
                    {link.subtitle && (
                      <p className="mt-0.5 text-xs text-primary-foreground/80">
                        {link.subtitle}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/573505310614"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium shadow-md hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" />
              Habla con nosotros en WhatsApp
            </a>
            
            <footer className="mt-4 text-center">
                <p className="text-xs text-white/40">
                    Powered by Fractal Studio Lab
                </p>
             </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
