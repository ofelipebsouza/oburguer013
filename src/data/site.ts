export const site = {
  name: 'O Burguer 013',
  url: 'https://oburguer013.vercel.app',
  instagram: 'https://www.instagram.com/oburguer013/',
  handle: '@oburguer013',
  phone: '5513982252686',
  displayPhone: '(13) 98225-2686',
  address: 'Av. Bartolomeu de Gusmão, 33',
  neighborhood: 'Embaré, Santos — SP',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=-23.9743322,-46.3204792',
  waze: 'https://www.waze.com/ul?ll=-23.9743322,-46.3204792&navigate=yes',
};

export const whatsapp = (message = 'Olá, O Burguer 013! Quero conhecer o cardápio atualizado e fazer um pedido. Vocês estão atendendo hoje?') =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;

// Vitrine baseada nas referências fornecidas, sem preços ou disponibilidade presumidos.
// Atualize apenas a partir do cardápio vigente confirmado pelo estabelecimento.
export const menu = [
  {
    id: 'artesanais',
    name: 'Artesanais da casa',
    label: 'O clássico que chama',
    category: 'carne',
    image: '/images/hero-burger.webp',
    description: 'Pão dourado, burger na chapa e aquela vontade de dar a primeira mordida.',
    detail: 'Conheça as combinações artesanais da casa. Peça o cardápio atualizado para escolher seu burger e conferir ingredientes, valores e disponibilidade.',
    message: 'Olá! Quero conhecer os burgers artesanais do O Burguer 013. Podem me enviar o cardápio atualizado e os valores?',
    tag: 'BURGER ARTESANAL',
  },
  {
    id: 'egg',
    name: 'O Burguer Egg',
    label: 'Uma mordida caprichada',
    category: 'carne',
    image: '/images/egg-burger.webp',
    description: 'O Egg que já apareceu por aqui. Consulte a receita e as opções do dia.',
    detail: 'O Burguer Egg faz parte das referências da casa. Consulte o atendimento para confirmar a composição atual, adaptações, valores e disponibilidade.',
    message: 'Olá! Fiquei com vontade do O Burguer Egg. Ele está disponível hoje? Gostaria de saber os ingredientes e o valor.',
    tag: 'O BURGUER EGG',
  },
  {
    id: 'vegetais',
    name: 'Na pegada vegetal',
    label: 'Seu rolê, seu burger',
    category: 'vegetal',
    image: '/images/veggie-burger.webp',
    description: 'Grão-de-bico ou berinjela? Conheça as opções vegetais no atendimento.',
    detail: 'A casa já apresentou burgers à base de grão-de-bico ou berinjela. Confirme as opções disponíveis, o pão, os molhos e o preparo com a equipe, especialmente em caso de restrições alimentares.',
    message: 'Olá! Gostaria de conhecer as opções vegetais do O Burguer 013. Têm burger de grão-de-bico ou berinjela hoje? Podem confirmar ingredientes e valores?',
    tag: 'OPÇÕES VEGETAIS',
  },
];
