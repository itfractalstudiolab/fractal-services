import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';

const FRACTAL_LINKS = [
  {
    label: "Fractal OPS™",
    icon: "⚡",
    href: "https://ops.fractalstudiolab.com/",
    subtitle: "Automatización, data y operaciones que ejecutan por ti."
  },
  {
    label: "Fractal Consulting",
    icon: "🧠",
    href: "https://consult.fractalstudiolab.com/",
    subtitle: "Estrategia accionable para decidir con claridad."
  },
  {
    label: "Fractal 72hDigital™",
    icon: "🚀",
    href: "https://72hdigital.fractalstudiolab.com/",
    subtitle: "Tu activo digital listo en 72 horas para vender."
  },
  {
    label: "Order Constructor",
    icon: "🧩",
    href: "https://order.fractalstudiolab.com/",
    subtitle: "Mini funnels y pedidos claros, medibles y repetibles."
  },
  {
    label: "Bookings",
    icon: "📅",
    href: "https://bookings.fractalstudiolab.com/",
    subtitle: "Reservas y agendas automatizadas sin perder control."
  },
  {
    label: "E-comm",
    icon: "🛒",
    href: "https://e-com.fractalstudiolab.com/",
    subtitle: "Infraestructura lista para escalar tu tienda online."
  }
];

export default function FractalLinksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050015] text-white font-body">
      {/* fondo general con glow suave */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,43,166,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(58,123,255,0.2),_transparent_55%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0,_#050015_70%)]" />

      {/* margen horizontal para mobile y desktop */}
      <div className="w-full max-w-sm sm:max-w-md px-3 sm:px-4 py-8">
        {/* CARD PRINCIPAL */}
        <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_28px_80px_rgba(0,0,0,0.85)] overflow-hidden animate-card-in">
          
          {/* HERO SUPERIOR */}
          <div className="relative h-36 w-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ff2ba6,_#b025ff_40%,_#050015_100%)]" />
            {/* patrón sutil */}
            <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[linear-gradient(120deg,rgba(255,255,255,0.35)_0,transparent_25%,transparent_75%,rgba(255,255,255,0.35)_100%),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:220%_220%,32px_32px] animate-hero-glow" />

            {/* Avatar con foto real */}
            <div className="absolute inset-x-0 bottom-0 translate-y-1/2 flex justify-center z-20">
              <div className="relative">
                {/* glow detrás */}
                <div className="absolute -inset-1 blur-md bg-[conic-gradient(from_180deg,_rgba(255,255,255,0.35),rgba(255,43,166,0.85),rgba(58,123,255,0.85),rgba(255,255,255,0.35))]" />
                <div className="relative w-16 h-16 rounded-full bg-black/90 border-2 border-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center">
                  <img
                    src="https://picsum.photos/seed/avatar/64/64"
                    alt="Fractal Studio Lab"
                    className="w-full h-full object-cover"
                    data-ai-hint="man portrait"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="pt-10 px-6 pb-4 text-center">
            <p className="text-[13px] font-semibold">@fractalstudiolab</p>
            <p className="mt-1 text-[11px] text-white/70 leading-snug max-w-xs mx-auto">
              Estrategia, diseño y OPS™ con el stack más moderno
              para escalar tu negocio sin fricción.
            </p>

            {/* Icono IG */}
            <div className="mt-4 mb-1 flex justify-center">
              <a
                href="https://instagram.com/fractalstudiolab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 hover:border-white/60 hover:bg-white/10 hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* BOTONERA */}
          <div className="px-4 pb-4 space-y-3">
            {FRACTAL_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 rounded-2xl px-4 py-3
                           bg-[linear-gradient(135deg,#ff2ba6,#ff5acb)]
                           shadow-[0_10px_26px_rgba(255,43,166,0.55)]
                           hover:shadow-[0_16px_34px_rgba(255,43,166,0.75)]
                           hover:-translate-y-0.5 transition
                           animate-link-in opacity-0
                           focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none
                           overflow-hidden"
                style={{ animationDelay: `${0.06 * idx + 0.12}s` }}
              >
                {/* icono izquierda */}
                <div className="flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-sm backdrop-blur-sm">
                    {link.icon}
                  </div>
                </div>

                {/* texto */}
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold leading-tight">
                    {link.label}
                  </p>
                  <p className="mt-1 text-[11px] text-white/95 leading-snug">
                    {link.subtitle}
                  </p>
                </div>

                {/* flecha derecha */}
                <div className="flex items-center">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs group-hover:bg-white/25 group-hover:translate-x-0.5 transition">
                   <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA WHATSAPP COMO DOCK */}
          <div className="px-4 pb-4">
            <a
              href="https://wa.me/573505310614?text=Hola%20Fractal,%20quiero%20un%20diagn%C3%B3stico%20digital%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-white text-black px-4 py-2.5 text-[12px] font-medium shadow-[0_14px_35px_rgba(0,0,0,0.65)]
                         hover:bg-neutral-100 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.75)] transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agenda tu diagnóstico express por WhatsApp</span>
            </a>
          </div>

          {/* FOOTER */}
          <div className="px-4 pb-3">
            <p className="text-[10px] text-center text-white/35 tracking-wide">
              Powered by Fractal Studio Lab
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
