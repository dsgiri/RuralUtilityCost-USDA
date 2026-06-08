import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToolCard } from './components/ToolCard';
import { PaymentEstimateTool } from './components/PaymentEstimateTool';
import { PlaceholderTool } from './components/PlaceholderTool';
import { AboutView, LegalView } from './components/SharedViews';
import { ContactView } from './components/ContactView';
import { NotFoundView } from './components/NotFoundView';
import { CookieBanner } from './components/CookieBanner';
import { TOOLS } from './data';
import { ViewState, Tool, Category } from './types';
import { Search, Info } from 'lucide-react';
import { trackEvent } from './lib/analytics';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');

  useEffect(() => {
    const saved = localStorage.getItem('usda-favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    let newFavs;
    if (favorites.includes(id)) {
      newFavs = favorites.filter(favId => favId !== id);
    } else {
      newFavs = [...favorites, id];
    }
    setFavorites(newFavs);
    localStorage.setItem('usda-favorites', JSON.stringify(newFavs));
  };

  const handleNavigate = (view: ViewState) => {
    trackEvent('page_view', { page_path: `/${view}` });
    setCurrentView(view);
    if (view !== 'tool-view') {
      setActiveTool(null);
    }
    window.scrollTo(0, 0);
  };

  const selectTool = (tool: Tool) => {
    trackEvent('click', { element: `tool_${tool.id}` });
    setActiveTool(tool);
    setCurrentView('tool-view');
    window.scrollTo(0, 0);
  };

  const renderToolsGrid = (tools: Tool[], emptyMessage: string) => {
    if (tools.length === 0) {
      return (
        <div className="text-center py-12 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <Info className="w-8 h-8 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600 font-medium">{emptyMessage}</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            isFavorite={favorites.includes(tool.id)}
            onToggleFavorite={toggleFavorite}
            onSelect={selectTool}
          />
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 mt-4 gap-6">
              <div>
                <p className="text-xs font-bold text-[#0369a1] mb-1 uppercase tracking-widest">Decision Support Tools</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Program Planning Hub</h2>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => handleNavigate('tools')}
                  className="w-full sm:w-auto px-6 py-2 border-2 border-black font-bold text-xs uppercase tracking-widest bg-white text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                >
                  Explore Calculators
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-black text-[#1a1a1a] tracking-tight">Featured Resources</h2>
                <button onClick={() => handleNavigate('tools')} className="text-[#0369a1] font-bold text-xs uppercase tracking-widest hover:underline">
                  View all
                </button>
              </div>
              {renderToolsGrid(TOOLS.slice(0, 3), "No tools available.")}
            </div>
            
            <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-black text-[#1a1a1a] mb-2 tracking-tight">Record Organization</h2>
              <p className="text-slate-600 mb-0 max-w-3xl leading-relaxed">
                Good program outcomes begin with clean inputs. Use our modules to organize base acres, reported planting figures, and eligibility boundaries before speaking with your local advisors.
              </p>
            </div>
          </div>
        );
      
      case 'tools':
        const filteredTools = filterCategory === 'All' 
          ? TOOLS 
          : TOOLS.filter(t => t.category === filterCategory);
        
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h1 className="text-4xl font-black text-[#1a1a1a] tracking-tight mb-2">Programs & Tools</h1>
              <p className="text-slate-500 font-medium max-w-2xl text-lg">Select a robust calculator or resource module below.</p>
            </div>

            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar space-x-3">
              {['All', 'Acreage', 'Payment Estimation', 'Disaster Support', 'Decision Tools', 'Resources', 'Records'].map(cat => (
                 <button
                  key={cat}
                  onClick={() => setFilterCategory(cat as Category | 'All')}
                  className={`flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black transition-colors ${
                    filterCategory === cat 
                      ? 'bg-black text-white' 
                      : 'bg-white text-[#1a1a1a] hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {renderToolsGrid(filteredTools, "No tools found for this category.")}
          </div>
        );

      case 'favorites':
        const favTools = TOOLS.filter(t => favorites.includes(t.id));
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h1 className="text-4xl font-black text-[#1a1a1a] tracking-tight mb-2">Saved Modules</h1>
              <p className="text-slate-500 font-medium max-w-2xl text-lg">Quick access to your most frequently used estimators.</p>
            </div>
            {renderToolsGrid(favTools, "You haven't saved any tools yet. Click the heart icon on a tool card to add it here.")}
          </div>
        );

      case 'tool-view':
        if (!activeTool) return null;
        return (
          <div className="animate-in fade-in duration-300">
            <button 
              onClick={() => handleNavigate('tools')}
              className="text-[#0369a1] font-bold text-xs uppercase tracking-widest hover:text-black mb-6 flex items-center transition-colors"
            >
              &larr; Back to directory
            </button>
            {activeTool.id === 'payment-estimate' ? (
              <PaymentEstimateTool />
            ) : (
              <PlaceholderTool tool={activeTool} />
            )}
          </div>
        );

      case 'about':
        return <AboutView />;
      case 'legal':
        return <LegalView />;
      case 'contact':
        return <ContactView />;
      case 'not-found':
        return <NotFoundView onNavigate={handleNavigate} />;
        
      default:
        return <NotFoundView onNavigate={handleNavigate} />;
    }
  };

  // Track initial page load
  useEffect(() => {
    trackEvent('page_view', { page_path: '/home' });
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfdfc] text-[#1a1a1a] font-sans flex flex-col selection:bg-[#0369a1] selection:text-white">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-12">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
      <CookieBanner />
      
      {/* Required style injection for scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}