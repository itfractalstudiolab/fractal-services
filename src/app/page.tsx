"use client"

import { useState } from 'react';
import { ArrowRight, Instagram, ChevronDown, Users, MessageCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ApplyLabModal } from '@/components/apply-lab-modal';

const FRACTAL_LINKS = [
  {
    label: "Fractal OPS™",
    href: "https://ops.fractalstudiolab.com/",
    subtitle: "Automatización y data para tu negocio."
  },
  {
    label: "Fractal Consulting",
    href: "https://consult.fractalstudiolab.com/",
    subtitle: "Estrategia accionable para decidir claro."
  },
  {
    label: "Fractal 72hDigital™",
    href: "https://72hdigital.fractalstudiolab.com/",
    subtitle: "Tu activo digital listo en 72 horas.",
    demos: [
      {
        label: "Order Constructor (Demo)",
        icon: <Puzzle size={16} strokeWidth={2.5} />,
        href: "https://order.fractalstudiolab.com/",
        subtitle: "Mini funnels y pedidos claros y medibles."
      },
      {
        label: "Bookings (Demo)",
        icon: <Calendar size={16} strokeWidth={2.5} />,
        href: "https://bookings.fractalstudiolab.com/",
        subtitle: "Reservas y agendas automatizadas."
      },
      {
        label: "E-comm (Demo)",
        icon: <ShoppingCart size={16} strokeWidth={2.5} />,
        href: "https://e-com.fractalstudiolab.com/",
        subtitle: "Infraestructura lista para escalar tu tienda."
      }
    ]
  }
];

import { Puzzle, Calendar, ShoppingCart } from 'lucide-react';

export default function FractalLinksPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [showLabInfo, setShowLabInfo] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050015] text-white font-body">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,43,166,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(58,123,255,0.2),_transparent_55%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0,_#050015_70%)]" />

      <div className="w-full max-w-sm sm:max-w-md px-3 sm:px-4 py-8">
        <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_28px_80px_rgba(0,0,0,0.85)] overflow-hidden animate-card-in">
          
          <div className="px-4 pt-4 pb-5">
            <div className="relative rounded-2xl bg-gradient-to-r from-[#ff2ba6] via-[#b025ff] to-[#3A7BFF] p-[1px] shadow-[0_14px_40px_rgba(0,0,0,0.8)]">
              <div className="rounded-2xl bg-[#090016]/90 px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      Primer trimestre 2026
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      5/8 cupos disponibles
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowLabInfo(true)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs font-semibold text-white/90 hover:bg-white/20 hover:border-white/60 transition"
                    aria-label="Más información sobre el Laboratorio Fractal"
                  >
                    ?
                  </button>
                </div>

                <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[62.5%] bg-gradient-to-r from-[#ff2ba6] to-[#ffe66d]" />
                </div>

                <p className="mt-2 text-[11px] text-white/70 leading-snug">
                  Para marcas que quieran hacer parte del laboratorio digital trimestral de Fractal.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsApplyModalOpen(true)}
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl border border-[#4B7BFF] bg-transparent px-4 py-2.5 text-sm font-medium text-[#e0e5ff] hover:bg-[#151F4A] hover:border-[#7f9cff] transition shadow-[0_10px_26px_rgba(0,0,0,0.7)]"
            >
              <span className="text-base">🧪</span>
              <span>Aplicar al Laboratorio</span>
            </button>
          </div>

          <div className="pt-2 px-6 pb-4 text-center">
            <p className="text-[13px] font-semibold">@fractalstudiolab</p>
            <p className="mt-1 text-[11px] text-white/70 leading-snug max-w-xs mx-auto">
              Estrategia, diseño y OPS™ con el stack más moderno
              para escalar tu negocio sin fricción.
            </p>

            <div className="mt-4 mb-1 flex justify-center gap-2">
              <a
                href="https://instagram.com/fractalstudiolab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 hover:border-white/60 hover:bg-white/10 hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://fractalstudiolab.com/nosotros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conoce al equipo"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 hover:border-white/60 hover:bg-white/10 hover:text-white transition"
              >
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="px-4 pb-4 space-y-3">
            {FRACTAL_LINKS.map((link, idx) => (
              link.demos ? (
                <Accordion type="single" collapsible className="w-full" key={link.label}>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger 
                      className="group relative flex items-center justify-between gap-3 rounded-2xl px-4 py-3
                                 bg-[linear-gradient(135deg,#ff2ba6,#ff5acb)]
                                 shadow-[0_10px_26px_rgba(255,43,166,0.55)]
                                 hover:shadow-[0_16px_34px_rgba(255,43,166,0.75)]
                                 hover:-translate-y-0.5 transition
                                 animate-link-in opacity-0
                                 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none
                                 overflow-hidden hover:no-underline"
                      style={{ animationDelay: `${0.06 * (idx + 1) + 0.12}s` }}
                    >
                      <div className="flex-1 text-center">
                        <p className="text-sm font-semibold leading-tight">{link.label}</p>
                        <p className="mt-1 text-[11px] text-white/95 leading-snug">{link.subtitle}</p>
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-white group-data-[state=open]:rotate-180" />
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
                          style={{ animationDelay: `${0.06 * (idx + demoIdx + 2) + 0.12}s` }}
                        >
                          <div className="flex items-center justify-center">
                            <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-sm backdrop-blur-sm text-white">
                              {demo.icon}
                            </div>
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-xs font-semibold leading-tight">{demo.label}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/50 group-hover:translate-x-0.5 transition" />
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
                            overflow-hidden text-center justify-center"
                  style={{ animationDelay: `${0.06 * (idx + 1) + 0.12}s` }}
                >
                  <div className="flex-1 text-center">
                    <p className="text-sm font-semibold leading-tight">{link.label}</p>
                    <p className="mt-1 text-[11px] text-white/95 leading-snug">{link.subtitle}</p>
                  </div>
                </a>
              )
            ))}
          </div>

          <div className="px-4 pb-4">
            <a
              href="https://wa.me/573505310614?text=Hola%20Fractal,%20quiero%20un%20diagn%C3%B3stico%20digital%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 rounded-full bg-[#00ff90] text-black px-4 py-2.5 text-[12px] font-medium shadow-[0_14px_35px_rgba(0,0,0,0.65)]
                         hover:bg-[#5cffb4] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.75)] transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4" />
                <span>Agenda tu diagnóstico</span>
              </div>
              <span className="text-[11px]">express por WhatsApp</span>
            </a>
          </div>

          <div className="px-4 pb-3">
            <p className="text-[10px] text-center text-white/35 tracking-wide">
              Powered by Fractal Studio Lab
            </p>
          </div>
        </div>
      </div>
      <ApplyLabModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
      {showLabInfo && (
        <LabInfoModal onClose={() => setShowLabInfo(false)} />
      )}
    </main>
  );
}

type LabInfoModalProps = {
  onClose: () => void;
};

const LAB_INFO_SECTIONS = [
  {
    title: "¿Qué es el Laboratorio Fractal?",
    body: `Es un programa trimestral para máximo 8 marcas que quieren trabajar
de la mano de Fractal en estrategia, embudos y OPS™. Durante 3 meses
entras a un entorno de experimentación guiada: diseñamos, probamos y
medimos acciones concretas para tu negocio digital.`
  },
  {
    title: "¿Cómo funciona el ciclo trimestral?",
    body: `Cada trimestre abrimos solo 8 cupos. Iniciamos con un diagnóstico
profundo, definimos un objetivo principal (ventas, leads, procesos,
lanzamiento, etc.) y armamos un roadmap de 90 días. Cada mes se ejecutan
sprints con entregables claros y revisiones estratégicas. Al final del
trimestre tienes un sistema montado, medible y documentado.`
  },
  {
    title: "¿Qué incluye para tu marca?",
    body: `• Sesiones de estrategia y priorización con el equipo de Fractal.\n
• Diseño y optimización de al menos un embudo clave para tu negocio.\n
• Implementación de automatizaciones OPS™ para quitar carga manual.\n
• Acompañamiento en campañas, contenido o activos digitales según tu caso.\n
• Tablero compartido con métricas, avances y próximos pasos.`
  },
  {
    title: "¿Qué esperamos de las marcas dentro del lab?",
    body: `Buscamos equipos comprometidos: que puedan implementar decisiones
con rapidez, compartir datos reales y estar abiertos a experimentar.
Pedimos disponibilidad para las sesiones acordadas y respuesta ágil en
los canales definidos (WhatsApp / email / tablero compartido).`
  },
  {
    title: "Cupos, inversión y siguiente paso",
    body: `Solo aceptamos 8 marcas por trimestre para mantener foco y profundidad.
La inversión varía según el tamaño del negocio y el alcance definido,
y se confirma después de revisar tu aplicación. Si te interesa entrar
al próximo ciclo, completa la aplicación y te contactamos por WhatsApp
con los detalles exactos.`
  }
];

function LabInfoModal({ onClose }: LabInfoModalProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg mx-4 rounded-3xl bg-[#070015]/95 border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.9)] overflow-hidden animate-fade-in">

        {/* HEADER CON ESTÉTICA FRACTAL */}
        <div className="relative px-6 pt-6 pb-5 border-b border-white/10 bg-gradient-to-b from-[#b025ff20] to-transparent">
          
          <h2 className="text-lg font-semibold text-white text-center flex items-center justify-center gap-2">
            <span className="text-[#ff2ba6] text-xl">🧪</span>
            ¿Cómo funciona el Laboratorio Fractal?
          </h2>

          <p className="mt-1 text-[11px] text-white/60 text-center">
            Lee esto antes de aplicar. Te ayuda a saber si el lab encaja con tu marca.
          </p>

          {/* BOTÓN CERRAR */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-white/60 hover:text-white text-lg transition"
          >
            ×
          </button>
        </div>

        {/* CONTENIDO SCROLLABLE */}
        <div className="px-5 py-5 space-y-4 max-h-[60vh] overflow-y-auto">

          {LAB_INFO_SECTIONS.map((section, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={section.title}
                className={`rounded-2xl border transition overflow-hidden
                  ${
                    isOpen
                      ? "border-[#ff2ba6] bg-white/10 shadow-[0_0_25px_rgba(255,43,166,0.25)]"
                      : "border-white/10 bg-white/5 hover:bg-white/[0.08]"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#ff2ba6] text-xs">◆</span>
                    <span className="text-sm font-medium text-white">
                      {section.title}
                    </span>
                  </div>

                  <span
                    className={`text-xs text-white/60 transform transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-[12px] leading-relaxed whitespace-pre-line text-white/70">
                      {section.body}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="px-5 pt-3 pb-5 border-t border-white/10 flex flex-col items-center">
          <button
            onClick={onClose}
            className="text-xs text-white/60 hover:text-white transition"
          >
            Cerrar
          </button>

          <p className="mt-1 text-[10px] text-white/40 text-center leading-tight">
            Cuando lo tengas claro, vuelve y aplica al laboratorio desde el banner principal.
          </p>
        </div>
      </div>
    </div>
  );
}