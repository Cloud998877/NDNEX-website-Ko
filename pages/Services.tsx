
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, BarChart, Database, Server, Check, ArrowRight, ChevronDown, ChevronUp, Award, Zap, Target, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t, content } = useLanguage();
  const { SERVICES } = content;
  
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getIcon = (name: string, className = "w-6 h-6") => {
    switch(name) {
      case 'Globe': return <Globe className={className} />;
      case 'BarChart': return <BarChart className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Server': return <Server className={className} />;
      default: return <Globe className={className} />;
    }
  };

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  // Mobile Toggle
  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header with Background Image */}
      <div className="relative pt-40 pb-24 bg-ndnex-dark border-b border-gray-200 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Data Analytics Dashboard" 
              className="w-full h-full object-cover opacity-10 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ndnex-dark via-ndnex-dark/95 to-ndnex-dark/80"></div>
            {/* Abstract Shapes */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-ndnex-orange/10 blur-3xl transform rotate-12"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
              <span className="w-2 h-2 rounded-full bg-ndnex-orange animate-pulse"></span>
              <span className="text-xs font-bold text-white tracking-widest uppercase">{t.expertise}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
              {t.comprehensive} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.solutions}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed border-l-4 border-ndnex-orange pl-6">
              {t.solutionsDesc}
            </p>
         </div>
      </div>

      {/* Desktop Split View (Hidden on Mobile) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar Navigation */}
          <div className="col-span-4 space-y-4">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-2 flex items-center gap-2">
                <Layers size={14} /> {t.serviceMenu}
              </h3>
              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 group relative overflow-hidden border ${
                      activeServiceId === service.id 
                        ? 'bg-white shadow-xl border-ndnex-orange/30 translate-x-2' 
                        : 'bg-white/50 hover:bg-white border-transparent hover:border-gray-200 hover:shadow-sm'
                    }`}
                  >
                    {/* Active Indicator */}
                    {activeServiceId === service.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-ndnex-orange"></div>
                    )}
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-2.5 rounded-lg transition-colors shadow-sm ${
                        activeServiceId === service.id ? 'bg-ndnex-orange text-white' : 'bg-slate-100 text-gray-400 group-hover:text-ndnex-dark group-hover:bg-white'
                      }`}>
                        {getIcon(service.iconName, "w-5 h-5")}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg font-display leading-none mb-1 ${
                          activeServiceId === service.id ? 'text-ndnex-dark' : 'text-gray-500 group-hover:text-gray-800'
                        }`}>
                          {service.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Quick Contact Box */}
              <div className="mt-12 bg-ndnex-dark p-6 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                <h4 className="font-bold font-display text-lg mb-2 relative z-10">{t.needProposal}</h4>
                <p className="text-sm text-gray-300 mb-4 relative z-10">{t.proposalDesc}</p>
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-ndnex-orange hover:text-white transition-colors relative z-10">
                  {t.contactUs} <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="col-span-8">
            <div key={activeService.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 animate-fade-in h-full relative overflow-hidden">
               {/* Decorative Background Icon */}
               <div className="absolute -top-6 -right-6 text-gray-50 opacity-50 rotate-12 transform scale-150 pointer-events-none">
                  {getIcon(activeService.iconName, "w-96 h-96")}
               </div>
               
               <div className="relative z-10">
                 {/* Title Header */}
                 <div className="flex flex-col gap-6 mb-10 border-b border-gray-100 pb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 text-ndnex-dark rounded-2xl flex items-center justify-center shadow-inner border border-gray-100">
                       {getIcon(activeService.iconName, "w-10 h-10 text-ndnex-orange")}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display mb-3">{activeService.title}</h2>
                      <p className="text-xl text-gray-500 font-light">{activeService.description}</p>
                    </div>
                 </div>

                 {/* Detailed Content */}
                 <div className="space-y-8">
                   {/* Highlight Box */}
                   <div className="bg-blue-50/50 border-l-4 border-ndnex-blue p-6 rounded-r-xl">
                      <h3 className="text-sm font-bold text-ndnex-blue uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Target size={16} /> {t.strategicValue}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg italic">
                        "{activeService.longDescription.split('.')[0]}."
                      </p>
                   </div>

                   <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line">
                     <p>{activeService.longDescription.substring(activeService.longDescription.indexOf('.') + 1)}</p>
                   </div>

                   {/* Features Grid */}
                   <div className="pt-6">
                      <h3 className="text-lg font-bold text-ndnex-dark font-display mb-6 flex items-center gap-2">
                        <Award size={20} className="text-ndnex-orange" /> 
                        {t.keyCapabilities}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeService.features.map((feature, idx) => (
                          <div key={idx} className="bg-slate-50 hover:bg-white p-4 rounded-xl border border-gray-100 hover:border-ndnex-orange/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 group">
                            <div className="mt-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 text-ndnex-blue shadow-sm group-hover:bg-ndnex-blue group-hover:text-white group-hover:border-ndnex-blue transition-all">
                              <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900">{feature}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* Service Specific CTA */}
                   <div className="mt-12 pt-8 border-t border-gray-100 flex justify-end">
                      <Link to="/contact" className="bg-ndnex-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-ndnex-blue transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                        {t.consultOn} {activeService.title.split(' ')[0]} <ArrowRight size={18} />
                      </Link>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Accordion View (Visible only on Mobile) */}
      <div className="lg:hidden max-w-3xl mx-auto px-4 py-12 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-ndnex-dark font-display">Our Services</h2>
          <p className="text-gray-500 text-sm mt-2">Tap to explore details</p>
        </div>

        {SERVICES.map((service) => {
          const isExpanded = expandedService === service.id;
          return (
            <div 
              key={service.id} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                isExpanded ? 'border-ndnex-orange shadow-xl ring-1 ring-ndnex-orange/20' : 'border-gray-100 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between p-6 text-left bg-white relative z-10"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl shadow-sm transition-colors ${isExpanded ? 'bg-ndnex-orange text-white' : 'bg-slate-100 text-gray-500'}`}>
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg font-display ${isExpanded ? 'text-ndnex-dark' : 'text-gray-700'}`}>
                      {service.title}
                    </h3>
                    {!isExpanded && (
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{service.description}</p>
                    )}
                  </div>
                </div>
                {isExpanded ? <ChevronUp className="text-ndnex-orange shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden bg-slate-50/50 ${
                  isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-2 border-t border-gray-100">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                    <p className="text-sm text-blue-900 font-medium leading-relaxed">
                      "{activeService.description}"
                    </p>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-sm whitespace-pre-line">
                    {service.longDescription}
                  </p>
                  
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap size={14} className="text-ndnex-orange" /> Capabilities
                    </h4>
                    <ul className="grid gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-ndnex-blue/10 text-ndnex-blue flex items-center justify-center shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link to="/contact" className="w-full bg-ndnex-dark text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg">
                      {t.inquireAbout} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
