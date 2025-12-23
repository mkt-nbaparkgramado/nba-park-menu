import React, { useState, useEffect, useRef, useMemo } from 'react';
import HeroSection from './components/HeroSection';
import MenuNav from './components/MenuNav';
import MenuItemCard from './components/MenuItemCard';
import ProductModal from './components/ProductModal';
import { MENU_DATA } from './data';
import { MenuCategory, MenuItem } from './types';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  // --- DATA PREPARATION ---
  const displayedMenu = useMemo(() => {
    const bestSellers: MenuItem[] = [];
    MENU_DATA.forEach(cat => {
      if (cat.id !== 'combos') {
        cat.items.forEach(item => {
          if (item.isBestSeller) {
            bestSellers.push(item);
          }
        });
      }
    });

    // Limit to exactly 4 items as requested
    const limitedBestSellers = bestSellers.slice(0, 4);

    const bestSellersCategory: MenuCategory = {
      id: 'best-sellers',
      title: 'MAIS VENDIDOS',
      portugueseTitle: 'Destaques',
      // No Subtitle
      items: limitedBestSellers,
      showPrice: false 
    };

    return [bestSellersCategory, ...MENU_DATA];
  }, []);

  // Items for the Attract Loop in Hero
  const attractItems = useMemo(() => {
    const ids = ['legends-burger', 'bbq-ribs', 'petit-gateau'];
    const items: MenuItem[] = [];
    displayedMenu.forEach(cat => {
        cat.items.forEach(i => {
            if (ids.includes(i.id) && !items.find(existing => existing.id === i.id)) {
                items.push(i);
            }
        });
    });
    return items;
  }, [displayedMenu]);

  // --- STATE ---
  const [activeCategory, setActiveCategory] = useState<string>(displayedMenu[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const isManualScroll = useRef(false);

  // --- ACTIONS ---
  
  const scrollToCategory = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      isManualScroll.current = true;
      setActiveCategory(id);
      
      // Calculate offset. 
      // Menu is sticky approx 190px. We want a larger gap ("respiro") for the title.
      const menuHeightWithBuffer = 280; 
      
      const y = element.getBoundingClientRect().top + window.pageYOffset - menuHeightWithBuffer; 
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => { isManualScroll.current = false; }, 1000);
    }
  };

  const scrollToTop = () => {
    isManualScroll.current = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (displayedMenu.length > 0) setActiveCategory(displayedMenu[0].id);
    setTimeout(() => { isManualScroll.current = false; }, 1000);
  };

  // --- EFFECTS ---

  // Back to Top Button visibility
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.55;
      setShowBackToTop(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const onScroll = () => {
      if (isManualScroll.current) return;
      const headerOffset = 280; 
      const currentScrollPosition = window.scrollY + headerOffset;
      let currentId = displayedMenu[0].id;

      for (const category of displayedMenu) {
        const element = sectionRefs.current[category.id];
        if (element && element.offsetTop <= currentScrollPosition) {
          currentId = category.id;
        }
      }
      setActiveCategory((prev) => (prev !== currentId ? currentId : prev));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [displayedMenu]);

  const isShowPrice = (item: MenuItem | null) => {
    if (!item) return false;
    const cat = MENU_DATA.find(c => c.items.some(i => i.id === item.id));
    return !!cat?.showPrice;
  };

  return (
    <div className="flex flex-col bg-nba-dark min-h-screen text-white font-roboto selection:bg-nba-red selection:text-white pb-20">
      
      <HeroSection attractItems={attractItems} />

      <MenuNav 
        categories={displayedMenu} 
        activeId={activeCategory} 
        onSelect={scrollToCategory} 
      />

      {/* Fixed Back to Top Button 
          - Positioned fixed top-[200px] (moved up).
          - Increased padding (p-5) and icon size (36) for better visibility.
          - Right aligned.
      */}
      <button 
        onClick={scrollToTop}
        className={`fixed top-[200px] right-8 z-40 bg-nba-red text-white p-5 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-500 active:scale-95 border-2 border-white/20
          ${showBackToTop ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
      >
        <ArrowUp size={36} />
      </button>

      {/* 
        MAIN CONTENT 
        -mt-24 pulls the content UP behind the sticky menu.
        z-0 ensures it stays behind the menu (z-50).
      */}
      <main className="flex-1 w-full bg-court-pattern -mt-24 relative z-0 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          {displayedMenu.map((category: MenuCategory) => (
            <section 
              key={category.id} 
              id={category.id}
              ref={(el) => { sectionRefs.current[category.id] = el; }}
              className="py-16 scroll-mt-[280px]"
            >
              {/* Section Header */}
              <div className="mb-12 text-center">
                <h2 className="text-7xl font-action text-white uppercase tracking-tight mb-2 drop-shadow-lg">
                  {category.title}
                </h2>
                {category.portugueseTitle && (
                     <h3 className="text-4xl font-action text-white/60 uppercase tracking-widest mb-4">
                        {category.portugueseTitle}
                     </h3>
                )}
                <div className="h-2 w-32 bg-nba-red mx-auto mb-4" />
                {category.subtitle && (
                  <p className="font-action text-nba-blue uppercase tracking-[0.2em] text-2xl">
                    {category.subtitle}
                  </p>
                )}
              </div>

              {/* RENDER LOGIC: Check for Drinks */}
              {category.id === 'drinks' ? (
                <div className="space-y-16">
                    
                    {/* Alcoholic Drinks */}
                    <div>
                         <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] bg-white/20 flex-1" />
                            <span className="font-action text-3xl uppercase text-white/90 tracking-wider">Drinks Especiais (Alcoólicos)</span>
                            <div className="h-[1px] bg-white/20 flex-1" />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {category.items.filter(i => i.subCategory === 'alcoholic').map((item) => (
                                <MenuItemCard 
                                    key={item.id} 
                                    item={item} 
                                    showPrice={!!category.showPrice}
                                    onClick={setSelectedItem}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Non-Alcoholic (Specifically Sodas) */}
                    <div>
                         <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] bg-white/20 flex-1" />
                            <span className="font-action text-3xl uppercase text-nba-red tracking-wider">Sodas Italianas (Sem Álcool)</span>
                            <div className="h-[1px] bg-white/20 flex-1" />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {category.items.filter(i => i.subCategory === 'non-alcoholic').map((item) => (
                                <MenuItemCard 
                                    key={item.id} 
                                    item={item} 
                                    showPrice={!!category.showPrice}
                                    onClick={setSelectedItem}
                                />
                            ))}
                        </div>
                    </div>
                </div>
              ) : (
                /* Standard Grid for other categories */
                <div className="grid grid-cols-2 gap-8">
                    {category.items.map((item) => (
                    <MenuItemCard 
                        key={`${category.id}-${item.id}`} 
                        item={item} 
                        showPrice={!!category.showPrice}
                        onClick={setSelectedItem}
                    />
                    ))}
                </div>
              )}

            </section>
          ))}
        </div>
        
        <footer className="pt-24 pb-16 text-center border-t border-white/10 bg-nba-dark mt-16">
          <p className="font-action text-5xl text-white uppercase">NBA Park Gramado</p>
          <p className="text-gray-500 text-lg mt-3 uppercase tracking-[0.3em]">
            ÚNICO NO MUNDO
          </p>
        </footer>
      </main>

      <ProductModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        showPrice={isShowPrice(selectedItem)}
      />

    </div>
  );
};

export default App;