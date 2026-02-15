import React, { useState } from 'react';
import { FAQS } from '../constants';
import SectionTitle from './SectionTitle';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900 transition-all duration-500 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <h3 className={`font-display text-lg md:text-xl font-medium uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
          {question}
        </h3>
        <div className={`p-1 rounded-full border border-zinc-800 transition-all duration-500 ${isOpen ? 'bg-white border-white rotate-180' : ''}`}>
          <ChevronDown 
            className={`transition-colors duration-300 ${isOpen ? 'text-black' : 'text-zinc-600'}`} 
            size={18} 
          />
        </div>
      </button>
      
      <div className={`faq-grid ${isOpen ? 'open' : ''}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-8">
            <div className="h-px w-full bg-zinc-800 mb-6"></div>
            <p className="font-sans text-zinc-400 font-light leading-relaxed text-lg">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-32 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="font-display text-zinc-600 tracking-[0.6em] uppercase text-xs mb-4">Central de Ajuda</h4>
          <SectionTitle title="Dúvidas Frequentes" centered />
        </div>
        
        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-600 text-sm font-sans mb-4">Ainda tem alguma pergunta?</p>
          <a 
            href="https://wa.me/551149623941" 
            className="text-white border-b border-zinc-800 hover:border-white transition-all pb-1 font-display uppercase tracking-widest text-sm"
          >
            Fale conosco via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;