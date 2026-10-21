export const navigationItems = [
  ['sobre', 'O Aja'],
  ['espaco', 'O Espaço'],
  ['localizacao', 'Localização'],
  ['clube', 'Clube Aja'],
  ['planos', 'Planos'],
  ['contato', 'Contato'],
] as const;

export const spaceNames = [
  'Sala executiva', 'Sala de reunião', 'Recepção', 'Sala de atendimento',
  'Sala Black', 'Copa', 'Sala de reunião', 'Sala de atendimento',
];

export const locationItems = [
  {
    image: 'salvador-shopping.jpg',
    alt: 'Vista aérea do Salvador Shopping e do centro empresarial ao redor',
    title: 'Ao lado do Salvador Shopping',
    body: 'Um dos mais importantes centros financeiros em Salvador. Tenha acesso ao endereço comercial em uma das melhores regiões de Salvador/BA e garanta credibilidade para fazer novos contratos, sem custos de um escritório físico.',
  },
  {
    image: 'forum-ruy-barbosa.jpg',
    alt: 'Fachada do Fórum Ruy Barbosa em Salvador',
    title: 'Centralizado aos principais fóruns',
    body: 'Próximo a um dos principais hospitais e pontos de referência da cidade.',
  },
  {
    image: 'metro-pernambues.jpg',
    alt: 'Estação Pernambués do Metrô Bahia',
    title: 'Próximo à estação do Metrô',
    body: 'Um dos mais importantes centros financeiros em Salvador. Tenha acesso ao endereço comercial em uma das melhores regiões de Salvador/BA e garanta credibilidade para fazer novos contratos, sem custos de um escritório físico.',
  },
  {
    image: 'recepcao-ceo.jpg',
    alt: 'Hall de entrada em estilo clássico no CEO Salvador Shopping',
    title: 'Todo o luxo do melhor centro empresarial da cidade.',
    body: 'Próximo a um dos principais hospitais e pontos de referência da cidade.',
  },
];

export const roomPlans = [
  {
    variant: 'silver',
    name: 'Sala Silver',
    price: '44',
    unit: ',90 /hora',
    images: [
      ['sala-gold-a.jpg', 'Sala de reunião do Aja Lawspace'],
      ['sala-gold-b.jpg', 'Ambiente de atendimento do Aja Lawspace'],
    ],
    whatsapp: 'Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20sala%20Silver',
  },
  {
    variant: 'black',
    name: 'Sala Black',
    price: '64',
    unit: ',90 /hora',
    images: [
      ['sala-1-a.jpg', 'Sala executiva do Aja Lawspace'],
      ['sala-1-b.jpg', 'Espaço de reunião do Aja Lawspace'],
    ],
    whatsapp: 'Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20sala%20Black',
  },
] as const;

export const monthlyPlans = [
  { name: 'CAAB', price: '107', unit: ',90 /mês' },
  { name: 'Office', price: '77', unit: ',90 /mês' },
  { name: 'Business', price: '237', unit: ',90 /mês' },
] as const;

export const planFeatures = [
  { name: 'Endereço fiscal', values: ['', '', 'e comercial'] },
  { name: 'Gestão de documentos', values: ['', '', ''] },
  { name: 'Desconto em serviços gráficos', values: ['50%', '50%', null] },
  { name: 'Fotografias do escritório', values: ['', '', ''] },
  { name: 'Horas de reunião incluídas', values: ['2h Black + 2h Silver', null, '4h Black / mês'] },
  { name: 'Digitalização e impressão', values: [null, null, '100 pág. digit. · 50 pág. P/B'] },
  { name: 'Serviço de telefonia com anotação e encaminhamento de recados', values: [null, null, ''] },
  { name: 'Desconto em horas excedentes', values: ['30%', null, '50%'] },
] as const;
