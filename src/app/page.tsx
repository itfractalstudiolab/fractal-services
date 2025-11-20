import { ArrowRight, Zap, BrainCircuit, Rocket, Puzzle, Calendar, ShoppingCart, MessageCircle, Instagram, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const FRACTAL_LINKS = [
  {
    label: "Fractal OPS™",
    icon: <Zap size={16} strokeWidth={2.5} />,
    href: "https://ops.fractalstudiolab.com/",
    subtitle: "Automatización, data y operaciones que ejecutan por ti."
  },
  {
    label: "Fractal Consulting",
    icon: <BrainCircuit size={16} strokeWidth={2.5} />,
    href: "https://consult.fractalstudiolab.com/",
    subtitle: "Estrategia accionable para decidir con claridad."
  },
  {
    label: "Fractal 72hDigital™",
    icon: <Rocket size={16} strokeWidth={2.5} />,
    href: "https://72hdigital.fractalstudiolab.com/",
    subtitle: "Tu activo digital listo en 72 horas para vender.",
    demos: [
      {
        label: "Order Constructor (Demo)",
        icon: <Puzzle size={16} strokeWidth={2.5} />,
        href: "https://order.fractalstudiolab.com/",
        subtitle: "Mini funnels y pedidos claros, medibles y repetibles."
      },
      {
        label: "Bookings (Demo)",
        icon: <Calendar size={16} strokeWidth={2.5} />,
        href: "https://bookings.fractalstudiolab.com/",
        subtitle: "Reservas y agendas automatizadas sin perder control."
      },
      {
        label: "E-comm (Demo)",
        icon: <ShoppingCart size={16} strokeWidth={2.5} />,
        href: "https://e-com.fractalstudiolab.com/",
        subtitle: "Infraestructura lista para escalar tu tienda online."
      }
    ]
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
          <div className="relative h-36 w-full overflow-hidden flex items-center justify-center text-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ff2ba6,_#b025ff_40%,_#050015_100%)]" />
            {/* patrón sutil */}
            <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[linear-gradient(120deg,rgba(255,255,255,0.35)_0,transparent_25%,transparent_75%,rgba(255,255,255,0.35)_100%),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:220%_220%,32px_32px] animate-hero-glow" />
            <div className="relative z-10 w-full max-w-xs mx-auto">
              <div className="inline-block bg-white/10 text-white/80 text-[10px] font-bold tracking-wider uppercase rounded-full px-2 py-0.5 mb-2">
                Primer Trimestre 2026
              </div>
              <div className="text-sm font-semibold text-white/90 mb-2">5/8 cupos disponibles</div>
              <div className="w-full bg-white/20 rounded-full h-2.5">
                <div className="bg-white rounded-full h-2.5" style={{ width: `${(3 / 8) * 100}%` }}></div>
              </div>
              <p className="text-xs text-white/70 mt-2">Para marcas que quieran hacer parte del laboratorio digital.</p>
            </div>
          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="pt-6 px-6 pb-4 text-center">
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
              link.demos ? (
                <Accordion type="single" collapsible className="w-full" key={link.label}>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger 
                      className="group relative flex items-center gap-3 rounded-2xl px-4 py-3
                                 bg-[linear-gradient(135deg,#ff2ba6,#ff5acb)]
                                 shadow-[0_10px_26px_rgba(255,43,166,0.55)]
                                 hover:shadow-[0_16px_34px_rgba(255,43,166,0.75)]
                                 hover:-translate-y-0.5 transition
                                 animate-link-in opacity-0
                                 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none
                                 overflow-hidden hover:no-underline"
                      style={{ animationDelay: `${0.06 * idx + 0.12}s` }}
                    >
                      <div className="flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-sm backdrop-blur-sm text-white">
                          {link.icon}
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-sm font-semibold leading-tight">{link.label}</p>
                        <p className="mt-1 text-[11px] text-white/95 leading-snug">{link.subtitle}</p>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-white" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 space-y-2">
                      {link.demos.map((demo, demoIdx) => (
                        <a
                          key={demo.label}
                          href={demo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex items-center gap-3 rounded-xl px-4 py-2
                                     bg-white/5
                                     hover:bg-white/10
                                     hover:-translate-y-px transition
                                     animate-link-in opacity-0"
                          style={{ animationDelay: `${0.06 * (idx + demoIdx + 1) + 0.12}s` }}
                        >
                          <div className="flex items-center justify-center">
                            <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-sm backdrop-blur-sm text-white">
                              {demo.icon}
                            </div>
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-xs font-semibold leading-tight">{demo.label}</p>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-white/50 group-hover:translate-x-0.5 transition" />
                          </div>
                        </a>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
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
                  <div className="flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-sm backdrop-blur-sm text-white">
                      {link.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold leading-tight">{link.label}</p>
                    <p className="mt-1 text-[11px] text-white/95 leading-snug">{link.subtitle}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs group-hover:bg-white/25 group-hover:translate-x-0.5 transition">
                    <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              )
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
