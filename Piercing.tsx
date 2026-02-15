import React from 'react';
import { PIERCER } from '../constants';
import SectionTitle from './SectionTitle';
import { Instagram, MessageCircle, ShieldCheck } from 'lucide-react';

const Piercing: React.FC = () => {
  return (
    <section id="piercing" className="py-24 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="mb-10 text-center lg:text-left">
              <h4 className="font-display text-zinc-600 tracking-[0.4em] uppercase text-xs mb-2">High Quality Piercing</h4>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
                Body Piercing
              </h2>
              <p className="font-display text-xl text-zinc-400 uppercase tracking-widest">
                 {PIERCER.name}
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-900/30 p-8 border-l-2 border-white backdrop-blur-sm relative overflow-hidden">
                <p className="text-zinc-400 font-sans leading-relaxed text-lg italic relative z-10">
                  "{PIERCER.description}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PIERCER.services.map((service, index) => (
                  <div key={index} className="flex items-center text-zinc-300 text-sm font-sans tracking-wide">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    {service}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <a 
                  href={PIERCER.whatsapp}
                  className="flex items-center justify-center px-10 py-4 bg-white text-black font-display text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Solicitar Orçamento
                </a>
                <a 
                  href={PIERCER.instagram}
                  className="flex items-center justify-center px-10 py-4 border border-zinc-800 text-white font-display text-sm font-bold uppercase tracking-widest hover:border-white transition-all"
                >
                  <Instagram size={18} className="mr-2" />
                  Ver Joalheria
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Moldura Decorativa Externa */}
              <div className="absolute -inset-4 border border-zinc-900 rounded-sm pointer-events-none"></div>
              
              {/* Container da Imagem com Enquadramento Corrigido */}
              <div className="relative aspect-square md:aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800 z-10 shadow-2xl">
                <img 
                  src={PIERCER.image} 
                  alt="Body Piercing Profissional" 
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                />
              </div>

              {/* Badge de Biossegurança */}
              <div className="absolute -bottom-4 -right-4 bg-white text-black p-5 z-20 flex flex-col items-center shadow-xl border border-black min-w-[100px]">
                <ShieldCheck size={28} className="mb-1" />
                <span className="font-display font-bold text-[9px] uppercase tracking-tighter leading-none text-center">Protocolo<br/>Hospitalar</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Piercing;