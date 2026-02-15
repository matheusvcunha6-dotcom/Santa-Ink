import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand with Round Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="group inline-flex flex-col items-center md:items-start mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent group-hover:bg-white transition-all duration-300 transform group-hover:scale-105 mb-4">
                <span className="font-display font-bold text-2xl tracking-tighter text-white group-hover:text-black transition-colors duration-300">
                  SI
                </span>
              </div>
              <span className="font-display font-bold text-lg tracking-[0.3em] text-white uppercase">
                Santa Ink
              </span>
            </a>
            <p className="text-zinc-500 font-sans text-sm max-w-xs">
              Estúdio profissional focado em arte, higiene e exclusividade. Transformando ideias em arte eterna em Guarulhos.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="p-2 border border-zinc-800 text-white hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 border border-zinc-800 text-white hover:bg-white hover:text-black transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-8">
              Localização & Contato
            </h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={20} className="text-white mr-4 mt-1 flex-shrink-0" />
                <p className="text-zinc-400 text-sm leading-relaxed">
                  R. Jorge Street, 96<br />
                  Jd. Gumercindo, Guarulhos - SP<br />
                  07090-020
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-white mr-4 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">
                  (11) 4962-3941
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-8">
              Horário de Funcionamento
            </h4>
            <div className="flex items-start">
              <Clock size={20} className="text-white mr-4 mt-1 flex-shrink-0" />
              <ul className="text-zinc-400 text-sm space-y-3">
                <li className="flex justify-between w-52 border-b border-zinc-900 pb-2">
                  <span>Segunda - Sexta:</span>
                  <span className="text-white">10h às 20h</span>
                </li>
                <li className="flex justify-between w-52 border-b border-zinc-900 pb-2">
                  <span>Sábado:</span>
                  <span className="text-white">10h às 18h</span>
                </li>
                <li className="flex justify-between w-52">
                  <span>Domingo:</span>
                  <span className="text-zinc-600 font-bold">Fechado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-sans uppercase tracking-[0.3em]">
          <p>© 2024 Santa Ink Studio. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com excelência em Guarulhos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;