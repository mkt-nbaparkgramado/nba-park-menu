import { MenuCategory } from './types';

// Helper to generate AI images based on description
const getAIImage = (prompt: string, seed?: number) => {
  const style = "professional food photography, 4k, cinematic lighting, dark mood, delicious, high detail, restaurant quality, sharp focus, black background";
  const encodedPrompt = encodeURIComponent(`${prompt}, ${style}`);
  const randomSeed = seed || Math.floor(Math.random() * 1000);
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${randomSeed}&width=800&height=1000&nologo=true`;
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'combos',
    title: 'COMBOS',
    portugueseTitle: 'Combos',
    showPrice: true,
    items: [
      {
        id: 'legendary-exp',
        name: 'EXPERIÊNCIA LENDÁRIA',
        description: 'Costelinha suína assada 300g ao molho barbecue, servida com batatas rústicas + Chopp 500ml.',
        price: 114.90,
        image: 'assets/COMBO - Experiência Lendária.png',
        isBestSeller: true
      },
      {
        id: 'combo-craque',
        name: 'COMBO CRAQUE',
        description: 'Legends Burger (Blend de black angus 120g, cheddar, bacon, alface, tomate, cebola roxa, maionese) + Petit Gateau com sorvete.',
        price: 89.90,
        image: 'assets/COMBO - Craque.png',
      },
      {
        id: 'combo-fast',
        name: 'COMBO JOGO RÁPIDO',
        description: 'Special Hot Dog (Pão brioche, salsicha, maionese, ketchup, mostarda) + Soda Italiana refrescante.',
        price: 69.90,
        image: 'assets/COMBO - Jogada Rápida.png',
      }
    ]
  },
  {
    id: 'warm-up',
    title: 'WARM UP',
    portugueseTitle: 'Entradas',
    subtitle: 'ENTRADAS E PORÇÕES',
    showPrice: false,
    items: [
      {
        id: 'fries',
        name: 'FRIES',
        description: 'Batatas fritas palito 200g com maionese do coach.',
        price: 37.90,
        image: 'assets/FRITAS 1.jpg'
      },
      {
        id: 'cheese-pastry',
        name: 'CHEESE PASTRY',
        description: 'Massa de pastel artesanal com queijos e maionese do coach. 8 unidades.',
        price: 44.90,
        image: 'assets/PASTEL DE QUEIJO.png'
      }
    ]
  },
  {
    id: 'burgers',
    title: 'BURGERS',
    portugueseTitle: 'Hambúrgueres',
    subtitle: 'SELEÇÃO MVP',
    showPrice: false,
    items: [
      {
        id: 'legends-burger',
        name: 'LEGENDS BURGER',
        description: 'Blend de black angus 120g, queijo cheddar, bacon, alface, tomate, cebola roxa crua e maionese do coach.',
        price: 69.90,
        isBestSeller: true,
        image: 'assets/LEGEND BURGER.png',
        details: 'Servido com nossas deliciosas Fritas crocantes'
      },
      {
        id: 'double-classic',
        name: 'DOUBLE CLASSIC',
        description: 'Duplo burger de black angus 2X 120g com cebola caramelizada, bacon, queijo cheddar e maionese do coach.',
        price: 79.90,
        image: 'assets/DOUBLE CLASSIC.png',
        details: 'Servido com nossas deliciosas Fritas crocantes'
      },
      {
        id: 'chicken-burger',
        name: 'CHICKEN BURGER',
        description: 'Blend suculento de frango 120g, queijo cheddar, bacon, alface, tomate, cebola roxa crua e maionese do coach.',
        price: 58.90,
        image: 'assets/CHICKEN BURGER.png',
        details: 'Servido com nossas deliciosas Fritas crocantes'
      },
      {
        id: 'special-hot-dog',
        name: 'SPECIAL HOT DOG',
        description: 'Clássico Americano. Pão brioche de hot dog com salsicha, maionese, ketchup e mostarda.',
        price: 54.90,
        image: 'assets/HOT DOG.png',
        details: 'Servido com nossas deliciosas Fritas crocantes'
      }
    ]
  },
  {
    id: 'specials',
    title: 'SPECIALS',
    portugueseTitle: 'Pratos Especiais',
    subtitle: 'ASSINATURA DO CHEF',
    showPrice: false,
    items: [
      {
        id: 'steak-pasta',
        name: 'STEAK & PASTA',
        description: 'Entrecot grelhado 200g e massa ao molho quatro queijos.',
        price: 94.90,
        isNew: true,
        image: 'assets/STEAK & PASTA.jpg'
      },
      {
        id: 'bbq-ribs',
        name: 'BBQ RIBS',
        description: 'Costelinha suína assada 300g ao molho barbecue, servida com batatas rústicas.',
        price: 89.90,
        isNew: true,
        image: 'assets/BBQ RIBS.jpg',
      },
      {
        id: 'rib-lasagna',
        name: 'RIB LASAGNA',
        description: 'Lasanha de costela desfiada com mix de queijos e molho sugo.',
        price: 84.90,
        isNew: true,
        image: 'assets/RIB LASAGNA.jpg'
      },
      {
        id: 'grilled-tilapia',
        name: 'GRILLED TILAPIA',
        description: 'Tilápia grelhada na chapa 200g, acompanhada de legumes salteados e molho de manga.',
        price: 89.90,
        isNew: true,
        image: 'assets/GRILLED TILAPIA.jpg'
      }
    ]
  },
  {
    id: 'day-to-day',
    title: 'DIA A DIA',
    portugueseTitle: 'Executivos',
    subtitle: 'ESCOLHAS EXECUTIVAS',
    showPrice: false,
    items: [
      {
        id: 'executive-plate',
        name: 'PRATOS EXECUTIVOS',
        description: 'Escolha entre Bife de Coxão Mole ou Peito de Frango grelhado (200g). Acompanha arroz, ovo frito, batata frita, tomate e alface.',
        price: 67.90,
        isBestSeller: true,
        image: 'assets/BEEF EXECUTIVE.png',
        images: [
          'assets/BEEF EXECUTIVE.png',
          'assets/CHICKEN EXECUTIVE.png'
        ]
      },
      {
        id: 'bolognese-pasta',
        name: 'BOLOGNESE PASTA',
        description: 'Massa ao molho bolonhesa tradicional.',
        price: 67.90,
        isNew: true,
        image: 'assets/SPAGHETTI BOLOGNESA.jpg'
      }
    ]
  },
  {
    id: 'rookies',
    title: 'ROOKIES',
    portugueseTitle: 'Infantil',
    subtitle: 'PARA OS PEQUENOS ASTROS',
    showPrice: false,
    items: [
      {
        id: 'rookie-burger',
        name: 'ROOKIE BURGER',
        description: 'Blend de black angus 120g, queijo cheddar e batata palito.',
        price: 54.90,
        isBestSeller: true,
        image: 'assets/KIDS BURGER.png'
      },
      {
        id: 'kids-plate',
        name: 'PRATO KIDS',
        description: 'Iscas de coxão mole ou frango grelhado (100g). Acompanha arroz, ovo frito e batata frita OU Spaghetti na manteiga.',
        price: 47.90,
        image: 'assets/PRATOS KIDS.png',
      }
    ]
  },
  {
    id: 'greens',
    title: 'GREENS',
    portugueseTitle: 'Saladas',
    subtitle: 'FRESCO & LEVE',
    showPrice: false,
    items: [
      {
        id: 'classic-caesar',
        name: 'CLASSIC CAESAR',
        description: 'Clássica salada caesar com alface americana, croûtons, queijo parmesão ralado e molho caesar.',
        price: 39.90,
        image: 'assets/CAESER SALAD.png'
      },
      {
        id: 'chicken-caesar',
        name: 'CHICKEN CAESAR',
        description: 'Salada caesar com 100g de iscas de frango, alface americana, croûtons e queijo parmesão.',
        price: 49.90,
        image: 'assets/CHICKEN CAESER.png'
      }
    ]
  },
  {
    id: 'overtime',
    title: 'OVERTIME',
    portugueseTitle: 'Sobremesas',
    subtitle: 'UM FINAL DOCE',
    showPrice: false,
    items: [
      {
        id: 'petit-gateau',
        name: 'PETIT GATEAU',
        description: 'Petit gateau de chocolate com sorvete de baunilha, praliné de amêndoas e calda de chocolate.',
        price: 42.90,
        image: 'assets/PETIT GATEAU.png',
      },
      {
        id: 'red-berry',
        name: 'RED BERRY CHEESECAKE',
        description: 'Cheesecake com calda de frutas vermelhas.',
        price: 44.90,
        image: 'assets/RED BERRY CHEESECAKE 02.jpg'
      },
      {
        id: 'ice-cream',
        name: 'ICE CREAM',
        description: 'Duas bolas de sorvete (1 chocolate, 1 baunilha) com praliné e calda.',
        price: 37.90,
        image: 'assets/SORVETE.png'
      }
    ]
  },
  {
    id: 'drinks',
    title: 'DRINKS',
    portugueseTitle: 'Bebidas',
    subtitle: 'ESPECIAIS DA NBA',
    showPrice: false,
    items: [
      {
        id: 'this-is-nba',
        name: 'THIS IS NBA',
        description: 'Campari, martini, licor 43, suco de laranja e água com gás. (Alcoólico)',
        price: 59.90,
        isBestSeller: true,
        image: 'assets/DRINK THIS IS NBA.png',
        subCategory: 'alcoholic'
      },
      {
        id: 'celtics',
        name: 'CELTICS',
        description: 'Gin, licor de melão, suco de limão e água tônica. (Alcoólico)',
        price: 59.90,
        image: 'assets/DRINK CELTCS.png',
        subCategory: 'alcoholic'
      },
      {
        id: 'lakers',
        name: 'LAKERS',
        description: 'Whisky Bourbon Bulleit, xarope de manga, maracujá, água com gás e mirtilos. (Alcoólico)',
        price: 59.90,
        image: 'assets/DRINK LAKERS.png',
        subCategory: 'alcoholic'
      },
      {
        id: 'bulls',
        name: 'BULLS',
        description: 'Vodka, xarope de morango, suco de limão e espuma de gengibre. (Alcoólico)',
        price: 59.90,
        image: 'assets/DRINK BULLS.png',
        subCategory: 'alcoholic'
      },
      {
        id: 'chopp',
        name: 'CHOPP',
        description: 'Chopp extremamente gelado. Disponível nas versões 385ml e 500ml.',
        price: 18.90,
        image: 'assets/CHOPP.png',
        subCategory: 'alcoholic',
        details: '385ml / 500ml'
      },
      {
        id: 'caipirinha',
        name: 'CAIPIRINHA',
        description: 'A autêntica caipirinha brasileira. Cachaça, limão taiti fresco e açúcar.',
        price: 29.90,
        image: 'assets/CAIPIRINHA.png',
        subCategory: 'alcoholic'
      },
      {
        id: 'italian-soda',
        name: 'SODA ITALIANA',
        description: 'Soda italiana refrescante nos sabores Morango, Maçã Verde, Kiwi e Jabuticaba. Outros sabores disponíveis sob consulta.',
        price: 24.90,
        isBestSeller: true,
        image: 'assets/Soda Morango.png',
        images: [
          'assets/Soda Morango.png',
          'assets/Soda Maçã Verde.png',
          'assets/Soda Kiwi.png',
          'assets/Soda Jabuticaba.png'
        ],
        subCategory: 'non-alcoholic',
        imageFit: 'contain'
      }
    ]
  }
];