"use client";

import { useState } from "react";
import { ROIParameter } from "@/data/products";
import { Sparkles, ArrowRight } from "lucide-react";

type CalculatorProps = {
  calculator: {
    title: string;
    description: string;
    params: ROIParameter[];
    calculate: (values: number[]) => {
      primaryLabel: string;
      primaryValue: string;
      secondaryLabel: string;
      secondaryValue: string;
    };
  };
};

export default function ProductCalculator({ calculator }: CalculatorProps) {
  const [values, setValues] = useState<number[]>(
    calculator.params.map((p) => p.defaultValue)
  );

  const handleSliderChange = (idx: number, newVal: number) => {
    const nextValues = [...values];
    nextValues[idx] = newVal;
    setValues(nextValues);
  };

  const results = calculator.calculate(values);

  const triggerModal = () => {
    window.dispatchEvent(new Event("open-conversion-modal"));
  };

  return (
    <div className="border border-muted/15 rounded-2xl bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
        <Sparkles className="size-5 text-emerald-500 shrink-0" />
        {calculator.title}
      </h3>
      <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
        {calculator.description}
      </p>

      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Sliders Input */}
        <div className="lg:col-span-7 space-y-6">
          {calculator.params.map((param, idx) => (
            <div key={param.name} className="space-y-2">
              <div className="flex items-center justify-between font-semibold text-xs sm:text-sm text-slate-300">
                <span>{param.label}</span>
                <span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {values[idx]} {param.unit}
                </span>
              </div>
              <input
                type="range"
                min={param.min}
                max={param.max}
                step={param.step}
                value={values[idx]}
                onChange={(e) => handleSliderChange(idx, Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold">
                <span>{param.min} {param.unit}</span>
                <span>{param.max} {param.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-muted/15 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between h-full space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {results.primaryLabel}
              </p>
              <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                {results.primaryValue}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {results.secondaryLabel}
              </p>
              <p className="text-xl font-bold text-white">
                {results.secondaryValue}
              </p>
            </div>
          </div>

          <button
            onClick={triggerModal}
            className="w-full btn-primary py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            Garantir esse Ganho
            <ArrowRight className="size-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
