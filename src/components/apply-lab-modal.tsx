"use client";

import { useState } from "react";

type Step1Data = {
  name: string;
  businessName: string;
  businessType: string;
};

type Step2Data = {
  mainChallengePreset: string;
  mainChallengeOther: string;
  stage: string;
};

type Step3Data = {
  desiredOutcome: string[];
  urgency: string;
  consent: boolean;
};

const BUSINESS_TYPES = [
  "Local físico",
  "Servicio profesional",
  "Ecommerce",
  "SaaS / Startup",
  "Otro"
];

const MAIN_CHALLENGES = [
  "No tengo ventas predecibles",
  "No llegan suficientes leads",
  "Dependo de procesos manuales",
  "Mis campañas no convierten"
];

const STAGES = [
  "Validando idea",
  "Vendiendo de forma informal",
  "Negocio estable pero caótico",
  "Listo para escalar"
];

const DESIRED_OUTCOMES = [
  "Sistema que traiga clientes cada semana",
  "Embudos claros y medibles",
  "Orden en procesos y automatizaciones",
  "Lanzar una nueva unidad digital"
];

const URGENCY_LEVELS = [
  "Lo necesito para ayer",
  "En los próximos 3 meses",
  "Estoy explorando opciones"
];

interface ApplyLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplyLabModal({ isOpen, onClose }: ApplyLabModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [step1, setStep1] = useState<Step1Data>({
    name: "",
    businessName: "",
    businessType: ""
  });

  const [step2, setStep2] = useState<Step2Data>({
    mainChallengePreset: "",
    mainChallengeOther: "",
    stage: ""
  });

  const [step3, setStep3] = useState<Step3Data>({
    desiredOutcome: [],
    urgency: "",
    consent: false
  });

  if (!isOpen) return null;

  const canGoNextStep1 =
    step1.name.trim().length > 1 &&
    step1.businessName.trim().length > 1 &&
    step1.businessType !== "";

  const canGoNextStep2 =
    step2.mainChallengePreset !== "" && step2.stage !== "";

  const canSubmit =
    step3.desiredOutcome.length > 0 &&
    step3.urgency !== "" &&
    step3.consent;

  const toggleDesiredOutcome = (value: string) => {
    setStep3((prev) => {
      const exists = prev.desiredOutcome.includes(value);
      if (exists) {
        return {
          ...prev,
          desiredOutcome: prev.desiredOutcome.filter((v) => v !== value)
        };
      }
      return { ...prev, desiredOutcome: [...prev.desiredOutcome, value] };
    });
  };

  const handleSubmitWhatsApp = () => {
    if (!canSubmit) return;

    const phone = "573505310614"; // your number without +
    const textLines = [
      "**Aplicación al Laboratorio Fractal**",
      "----------",
      `*Nombre:* ${step1.name}`,
      `*Negocio:* ${step1.businessName}`,
      `*Tipo de negocio:* ${step1.businessType}`,
      "----------",
      `*Mayor reto:* ${
        step2.mainChallengePreset
      }${ step2.mainChallengeOther ? ` - ${step2.mainChallengeOther}` : ''}`,
      `*Etapa actual:* ${step2.stage}`,
      "----------",
      `*Resultado ganador que busca:* ${step3.desiredOutcome.join(", ")}`,
      `*Urgencia:* ${step3.urgency}`
    ];

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      textLines.join("\n")
    )}`;

    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in-0">
      {/* CARD MODAL */}
      <div className="w-full max-w-md mx-4 rounded-3xl bg-[#040116] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.9)] overflow-hidden animate-in zoom-in-95">
        {/* HEADER */}
        <div className="relative px-6 pt-5 pb-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white text-center">
            Aplica al Laboratorio Fractal
          </h2>
          <p className="mt-1 text-xs text-white/60 text-center">
            Tres pasos rápidos para entender si tu negocio encaja con el lab.
          </p>

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-white/60 hover:text-white text-2xl leading-none"
          >
            ×
          </button>

          {/* PROGRESO */}
          <div className="mt-4 flex items-center gap-2 justify-center">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 w-10 rounded-full transition ${
                  step >= s ? "bg-[#4B7BFF]" : "bg-white/15"
                }`}
              />
            ))}
          </div>

          <p className="mt-2 text-[11px] text-white/50 text-center uppercase tracking-[0.18em]">
            Paso {step} de 3
          </p>
        </div>

        {/* CONTENIDO */}
        <div className="px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in-0">
              <p className="text-sm text-white/80 text-center mb-1">
                Empecemos por ti y tu negocio 🧬
              </p>

              <div>
                <label className="block text-xs text-white/70 mb-1.5">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  value={step1.name}
                  onChange={(e) =>
                    setStep1((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Ej: Ada Lovelace"
                  className="w-full rounded-xl bg-transparent border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4B7BFF]"
                />
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-1.5">
                  Nombre de tu Negocio
                </label>
                <input
                  type="text"
                  value={step1.businessName}
                  onChange={(e) =>
                    setStep1((prev) => ({
                      ...prev,
                      businessName: e.target.value
                    }))
                  }
                  placeholder="Ej: Enigma Corp"
                  className="w-full rounded-xl bg-transparent border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4B7BFF]"
                />
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-2">
                  Tipo de negocio
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BUSINESS_TYPES.map((type) => {
                    const active = step1.businessType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setStep1((prev) => ({ ...prev, businessType: type }))
                        }
                        className={`text-[11px] rounded-full px-3 py-2 border transition
                          ${
                            active
                              ? "bg-[#ff2ba6] border-[#ff2ba6] text-white shadow-[0_8px_20px_rgba(255,43,166,0.5)]"
                              : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                          }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in-0">
              <p className="text-sm text-white/80 text-center mb-1">
                Ubicamos tu reto y tu momento actual ⚙️
              </p>

              <div>
                <label className="block text-xs text-white/70 mb-2">
                  ¿Cuál es el mayor reto que enfrenta tu negocio ahora?
                </label>
                <div className="space-y-2">
                  {MAIN_CHALLENGES.map((challenge) => {
                    const active = step2.mainChallengePreset === challenge;
                    return (
                      <button
                        key={challenge}
                        type="button"
                        onClick={() =>
                          setStep2((prev) => ({
                            ...prev,
                            mainChallengePreset: challenge,
                            mainChallengeOther: ''
                          }))
                        }
                        className={`w-full text-left text-[12px] rounded-xl px-3 py-2 border transition
                          ${
                            active
                              ? "bg-[#ff2ba6] border-[#ff2ba6] text-white shadow-[0_8px_20px_rgba(255,43,166,0.45)]"
                              : "bg-white/5 border-white/15 text-white/75 hover:bg-white/10"
                          }`}
                      >
                        {challenge}
                      </button>
                    );
                  })}
                   <button
                        type="button"
                        onClick={() =>
                          setStep2((prev) => ({
                            ...prev,
                            mainChallengePreset: "Otro"
                          }))
                        }
                        className={`w-full text-left text-[12px] rounded-xl px-3 py-2 border transition
                          ${
                            step2.mainChallengePreset === "Otro"
                              ? "bg-[#ff2ba6] border-[#ff2ba6] text-white shadow-[0_8px_20px_rgba(255,43,166,0.45)]"
                              : "bg-white/5 border-white/15 text-white/75 hover:bg-white/10"
                          }`}
                      >
                        Otro
                      </button>
                  {step2.mainChallengePreset === "Otro" && (
                    <textarea
                      value={step2.mainChallengeOther}
                      onChange={(e) =>
                        setStep2((prev) => ({
                          ...prev,
                          mainChallengeOther: e.target.value
                        }))
                      }
                      placeholder="Describe tu reto con tus palabras..."
                      className="w-full mt-1 rounded-xl bg-transparent border border-white/20 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#4B7BFF] min-h-[60px]"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-2">
                  ¿En qué momento está tu negocio?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {STAGES.map((st) => {
                    const active = step2.stage === st;
                    return (
                      <button
                        key={st}
                        type="button"
                        onClick={() =>
                          setStep2((prev) => ({ ...prev, stage: st }))
                        }
                        className={`text-[11px] rounded-full px-3 py-2 border transition
                          ${
                            active
                              ? "bg-[#4B7BFF] border-[#4B7BFF] text-white shadow-[0_8px_20px_rgba(75,123,255,0.5)]"
                              : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                          }`}
                      >
                        {st}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in-0">
              <p className="text-sm text-white/80 text-center mb-1">
                Definimos qué sería éxito para ti 🎯
              </p>

              <div>
                <label className="block text-xs text-white/70 mb-2">
                  Si Fractal te ayuda, ¿qué sería un resultado ganador? (multi-selección)
                </label>
                <div className="space-y-2">
                  {DESIRED_OUTCOMES.map((outcome) => {
                    const active = step3.desiredOutcome.includes(outcome);
                    return (
                      <button
                        key={outcome}
                        type="button"
                        onClick={() => toggleDesiredOutcome(outcome)}
                        className={`w-full text-left text-[12px] rounded-xl px-3 py-2 border transition
                          ${
                            active
                              ? "bg-[#ff2ba6] border-[#ff2ba6] text-white shadow-[0_8px_20px_rgba(255,43,166,0.45)]"
                              : "bg-white/5 border-white/15 text-white/75 hover:bg-white/10"
                          }`}
                      >
                        {outcome}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-2">
                  Nivel de urgencia
                </label>
                <div className="space-y-2">
                  {URGENCY_LEVELS.map((level) => {
                    const active = step3.urgency === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() =>
                          setStep3((prev) => ({ ...prev, urgency: level }))
                        }
                        className={`w-full text-left text-[12px] rounded-xl px-3 py-2 border transition
                          ${
                            active
                              ? "bg-[#4B7BFF] border-[#4B7BFF] text-white shadow-[0_8px_20px_rgba(75,123,255,0.5)]"
                              : "bg-white/5 border-white/15 text-white/75 hover:bg-white/10"
                          }`}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="mt-3 flex items-start gap-2.5 text-[11px] text-white/60">
                <input
                  type="checkbox"
                  checked={step3.consent}
                  onChange={(e) =>
                    setStep3((prev) => ({
                      ...prev,
                      consent: e.target.checked
                    }))
                  }
                  className="mt-[3px] h-3.5 w-3.5 shrink-0 appearance-none rounded-sm border border-white/40 bg-transparent checked:bg-[#4B7BFF] checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-[#4B7BFF]"
                />
                Acepto que el equipo de Fractal me contacte por WhatsApp con
                una propuesta alineada a mis respuestas.
              </label>
            </div>
          )}
        </div>

        {/* FOOTER ACCIONES */}
        <div className="px-6 pb-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
              className="text-xs text-white/60 hover:text-white transition"
            >
              ← Volver
            </button>
          ) : (
            <span />
          )}

          {step < 3 && (
            <button
              onClick={() =>
                step === 1 && canGoNextStep1
                  ? setStep(2)
                  : step === 2 && canGoNextStep2
                  ? setStep(3)
                  : null
              }
              disabled={(step === 1 && !canGoNextStep1) || (step === 2 && !canGoNextStep2)}
              className={`ml-auto rounded-full px-5 py-2 text-xs font-medium flex items-center gap-1 transition
                ${
                  (step === 1 && !canGoNextStep1) ||
                  (step === 2 && !canGoNextStep2)
                    ? "bg-white/10 text-white/40 cursor-not-allowed"
                    : "bg-[#4B7BFF] text-white shadow-[0_10px_30px_rgba(75,123,255,0.6)] hover:bg-[#5b88ff]"
                }`}
            >
              Siguiente
              <span>→</span>
            </button>
          )}

          {step === 3 && (
            <button
              onClick={handleSubmitWhatsApp}
              disabled={!canSubmit}
              className={`ml-auto rounded-full px-5 py-2 text-xs font-medium flex items-center gap-2 transition
                ${
                  !canSubmit
                    ? "bg-white/10 text-white/40 cursor-not-allowed"
                    : "bg-[#00ff90] text-black shadow-[0_12px_32px_rgba(0,255,144,0.6)] hover:bg-[#5cffb4]"
                }`}
            >
              Enviar aplicación a WhatsApp
              <span className="text-base">↗</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
