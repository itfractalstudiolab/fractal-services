"use client"

import { useState } from 'react';
import { ArrowRight, Zap, BrainCircuit, Rocket, Puzzle, Calendar, ShoppingCart, MessageCircle, Instagram, ChevronDown, Bot } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"


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

const formSchema = z.object({
  name: z.string().min(2, { message: "Tu nombre es importante." }),
  business: z.string().min(2, { message: "Dinos el nombre de tu negocio." }),
  challenge: z.string().min(10, { message: "Cuéntanos un poco más, al menos 10 caracteres." }),
  magicWand: z.string().min(10, { message: "Sin miedo, ¡describe tu visión! Mínimo 10 caracteres." }),
})

export default function FractalLinksPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      business: "",
      challenge: "",
      magicWand: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const header = `----------\n**NUEVA APLICACIÓN - LABORATORIO FRACTAL**\n----------`;
    const message = `
*Hola, soy:* ${values.name}
*Mi negocio es:* ${values.business}

*Mi mayor reto ahora mismo es:*
${values.challenge}

*Si tuviera una varita mágica para mi negocio, haría esto:*
${values.magicWand}
    `.trim();

    const encodedMessage = encodeURIComponent(`${header}\n\n${message}`);
    const whatsappUrl = `https://wa.me/573505310614?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setDialogOpen(false);
    form.reset();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050015] text-white font-body">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,43,166,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(58,123,255,0.2),_transparent_55%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0,_#050015_70%)]" />

      <div className="w-full max-w-sm sm:max-w-md px-3 sm:px-4 py-8">
        <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_28px_80px_rgba(0,0,0,0.85)] overflow-hidden animate-card-in">
          
          <div className="relative h-36 w-full overflow-hidden flex items-center justify-center text-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ff2ba6,_#b025ff_40%,_#050015_100%)]" />
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

          <div className="pt-6 px-6 pb-4 text-center">
            <p className="text-[13px] font-semibold">@fractalstudiolab</p>
            <p className="mt-1 text-[11px] text-white/70 leading-snug max-w-xs mx-auto">
              Estrategia, diseño y OPS™ con el stack más moderno
              para escalar tu negocio sin fricción.
            </p>

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
                      style={{ animationDelay: `${0.06 * idx + 0.12}s` }}
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
                  style={{ animationDelay: `${0.06 * idx + 0.12}s` }}
                >
                  <div className="flex-1 text-center">
                    <p className="text-sm font-semibold leading-tight">{link.label}</p>
                    <p className="mt-1 text-[11px] text-white/95 leading-snug">{link.subtitle}</p>
                  </div>
                </a>
              )
            ))}
             <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full bg-transparent border-accent text-accent hover:bg-accent/10 hover:text-accent animate-link-in opacity-0"
                  style={{ animationDelay: `${0.06 * FRACTAL_LINKS.length + 0.12}s` }}>
                  <Bot className="mr-2 h-4 w-4" />
                  Aplicar al Laboratorio
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[480px] bg-[#0A061F] border-white/20 text-white">
                <DialogHeader>
                  <DialogTitle className="text-accent text-2xl font-bold text-center">Aplica al Laboratorio Fractal</DialogTitle>
                  <DialogDescription className="text-white/70 text-center pt-2">
                    Esto no es un formulario cualquiera. Es el primer paso para transformar tu negocio. Responde con honestidad.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tu Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Ada Lovelace" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de tu Negocio</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Enigma Corp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="challenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>¿Cuál es el mayor reto que enfrenta tu negocio ahora?</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Ej: 'No logro que mis ventas sean predecibles' o 'Mis procesos manuales me consumen todo el día'." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="magicWand"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Si tuvieras una varita mágica, ¿qué único problema resolverías hoy?</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Ej: 'Quisiera un sistema que me traiga clientes calificados en piloto automático'." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90">
                        Enviar Aplicación a WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

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
