import { Artist, FAQItem, Piercer } from './types';

export const ARTISTS: Artist[] = [
  {
    id: 'bruno',
    name: 'Bruno',
    specialties: ['Traços Finos', 'Minimalismo', 'Escritas'],
    image: '/img/bruno.jpeg', 
    whatsapp: 'https://wa.me/5511000000000',
    instagram: 'https://www.instagram.com/brunotattoosp'
  },
  {
    id: 'jeferson',
    name: 'Jeferson',
    specialties: ['Realismo', 'Blackwork', 'Fechamentos'],
    image: '/img/bruno.jpeg',
    whatsapp: 'https://wa.me/5511000000000',
    instagram: 'https://www.instagram.com/jefetattoo'
  }
];

export const PIERCER: Piercer = {
  name: 'Vinicius',
  description: 'Trabalhamos exclusivamente com Titânio Grau Implante e Ouro 18k. Procedimentos assépticos seguindo rigorosamente as normas da ANVISA e protocolos internacionais de segurança.',
  services: ['Perfurações básicas e avançadas', 'Atualização de joias', 'Tratamento de granulomas', 'Visagismo de Orelha'],
  whatsapp: 'https://wa.me/5511000000000',
  instagram: 'https://www.instagram.com/piercer.degaspare',
  image: 'https://images.unsplash.com/photo-1542453003-887754988713?q=80&w=800&h=1000&auto=format&fit=crop'
};

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona o orçamento?',
    answer: 'Envie referência, tamanho aproximado em centímetros e o local do corpo desejado pelo WhatsApp do tatuador escolhido para receber um orçamento detalhado.'
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Aceitamos PIX, dinheiro e cartões de crédito em até 3x sem juros. Projetos maiores podem ter condições especiais de parcelamento.'
  },
  {
    question: 'Menor de idade pode tatuar?',
    answer: 'Não. Seguimos a legislação brasileira rigorosamente. Realizamos procedimentos apenas em maiores de 18 anos, sem exceções.'
  },
  {
    question: 'Quais os cuidados pós-tatuagem?',
    answer: 'Fornecemos um guia completo de cuidados. Em resumo: manter a higienização com sabonete neutro, aplicar a pomada recomendada e evitar exposição solar, mar e piscina nos primeiros 15 dias.'
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/ink1/600/600?grayscale',
  'https://picsum.photos/seed/ink2/600/600?grayscale',
  'https://picsum.photos/seed/ink3/600/600?grayscale',
  'https://picsum.photos/seed/ink4/600/600?grayscale',
  'https://picsum.photos/seed/ink5/600/600?grayscale',
  'https://picsum.photos/seed/ink6/600/600?grayscale',
  'https://picsum.photos/seed/ink7/600/600?grayscale',
  'https://picsum.photos/seed/ink8/600/600?grayscale',
];