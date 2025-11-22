
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award, Users, Globe, ChevronRight, BarChart2, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const { t, content } = useLanguage();
  const { CLIENTS } = content;

  // List of clients that need gigantic logo display (approx 4x)
  const GIGANTIC_LOGOS = [
    "Daewoo"
  ];

  // List of clients that need huge logo display (approx 3x)
  const HUGE_LOGOS = [
    "Daewoong"
  ];

  // List of clients that need very large logo display (approx 2.5x)
  const VERY_LARGE_LOGOS = [
    "Hyundai",
    "Myungin",
    "PharmaEssentia",
    "Roche",
    "Sanofi"
  ];

  // List of clients that need extra large logo display (approx 2x)
  const EXTRA_LARGE_LOGOS = [
    "Ahn-Gook",
    "LitePharmTech",
    "Ipsen"
  ];

  // List of clients that need larger logo display (approx 1.5x)
  const LARGE_LOGOS = [
    "Daewon", 
    "Daiichi-Sankyo", 
    "Samchundang",
    "Samjin",
    "Santen",
    "Taejoon"
  ];

  // List of clients that need medium logo display (approx 0.8x)
  const MEDIUM_LOGOS = [
    // Optus moved to EXTRA_SMALL
  ];

  // List of clients that need medium-small logo display (approx 0.6x)
  const MEDIUM_SMALL_LOGOS = [
    "Kyowa Kirin"
  ];

  // List of clients that need smaller logo display (approx 0.5x)
  const SMALL_LOGOS = [
    "CSL Behring"
  ];

  // List of clients that need extra small logo display (approx 0.4x)
  const EXTRA_SMALL_LOGOS = [
    "Optus"
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden font-sans bg-slate-50">
      {/* Professional Hero Section with Depth */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Updated Image: Abstract Data / Evidence / Structure (No neurons) */}
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef5209529422?auto=format&fit=crop&q=80&w=2013" 
            alt="Healthcare Data Evidence and Value" 
            className="w-full h-full object-cover"
          />
          {/* Advanced Overlay for Depth */}
          <div className="absolute inset-0 bg-ndnex-dark/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-ndnex-dark/80 via-transparent to-slate-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20 pb-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in shadow-2xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ndnex-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ndnex-orange"></span>
              </span>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase font-display">{t.heroBadge}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 font-display text-white drop-shadow-2xl animate-fade-in-up">
              {t.heroTitlePrefix} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ndnex-orange via-white to-blue-200">
                {t.heroTitleHighlight}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl font-light drop-shadow-sm animate-fade-in-up delay-100">
              {t.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 animate-fade-in-up delay-200">
              <Link to="/services" className="w-full sm:w-auto bg-ndnex-orange text-white px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-orange-600 transition-all flex items-center justify-center gap-2 font-sans shadow-xl shadow-orange-900/20 hover:translate-y-[-2px]">
                {t.exploreServices} <ArrowRight size={20} />
              </Link>
              <Link to="/experience" className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-lg text-center text-white border border-white/20 hover:bg-white/10 transition-all font-sans backdrop-blur-sm flex items-center justify-center gap-2">
                {t.viewExperience}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements for Texture */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-ndnex-blue/20 to-transparent blur-3xl pointer-events-none"></div>
      </section>

      {/* Corporate Stats Bar - Floating Glass Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-gray-100">
          {[
            { number: "60+", label: "Clients", sub: "Global & Domestic Partners", icon: <Globe className="text-ndnex-orange mb-4" size={32} /> },
            { number: "70+", label: "Therapeutic Areas", sub: "Oncology, Rare Diseases, & More", icon: <Award className="text-ndnex-blue mb-4" size={32} /> },
            { number: "100%", label: "Client Retention", sub: "Strategic Partnership Focus", icon: <Users className="text-ndnex-dark mb-4" size={32} /> }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-transform duration-300">
              {stat.icon}
              <span className="text-5xl font-bold text-ndnex-dark font-display tracking-tight mb-2">{stat.number}</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="text-gray-500 text-sm font-medium">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Introduction / Philosophy - Pattern Background */}
      <section className="py-32 bg-slate-50 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-block border-b-2 border-ndnex-orange pb-1">
                <h2 className="text-sm font-bold text-ndnex-dark uppercase tracking-widest">{t.whyNdnex}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-ndnex-dark font-display leading-tight">
                {t.whyTitlePrefix} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ndnex-orange to-orange-600">{t.whyTitleHighlight1}</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-ndnex-blue to-indigo-600">{t.whyTitleHighlight2}</span>.
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed font-light whitespace-pre-line">
                {t.whyDescription}
              </p>
              
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-3 text-ndnex-dark font-bold text-lg hover:gap-5 transition-all group">
                  <span className="border-b-2 border-ndnex-dark group-hover:border-ndnex-orange transition-colors">{t.learnMission}</span>
                  <ArrowRight size={20} className="text-ndnex-orange" />
                </Link>
              </div>
            </div>

            {/* Right: Visual Composition */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-ndnex-orange/20 to-ndnex-blue/20 rounded-3xl blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" 
                  alt="Data Analytics and Strategy" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 animate-float hidden md:block">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-ndnex-blue">
                      <BarChart2 size={24} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-ndnex-dark text-lg">{t.evidenceGeneration}</p>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{t.evidenceDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid Summary - Cards with Hover Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
             {[
               { title: content.SERVICES[0].title, desc: content.SERVICES[0].description, icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
               { title: content.SERVICES[1].title, desc: content.SERVICES[1].description, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
               { title: content.SERVICES[2].title, desc: content.SERVICES[2].description, icon: CheckCircle2, color: "text-purple-600", bg: "bg-purple-50" },
               { title: content.SERVICES[3].title, desc: content.SERVICES[3].description, icon: Database, color: "text-orange-600", bg: "bg-orange-50" }
             ].map((item, i) => (
               <Link to="/services" key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-ndnex-orange/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} rounded-bl-full opacity-50 transition-transform group-hover:scale-150 duration-500`}></div>
                  <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center ${item.color} mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-ndnex-dark mb-3 font-display group-hover:text-ndnex-orange transition-colors leading-tight">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center text-xs font-bold text-gray-400 group-hover:text-ndnex-orange transition-colors uppercase tracking-widest">
                    {t.learnMore} <ChevronRight size={14} className="ml-1" />
                  </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Clients Grid - Dark Themed "Logo Wall" */}
      <section className="py-32 bg-ndnex-dark relative overflow-hidden">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-ndnex-dark via-transparent to-ndnex-dark"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
             <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-3">{t.ourClients}</h2>
                <p className="text-gray-400 text-lg font-light max-w-xl whitespace-pre-line">{t.clientsDesc}</p>
             </div>
             <Link to="/experience" className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white hover:text-ndnex-dark transition-all font-bold text-sm flex items-center gap-2 group backdrop-blur-sm">
               {t.viewSuccess} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
           
           {/* Client Grid with White Cards for Logo Visibility */}
           <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
             {CLIENTS.map((client, idx) => {
               const isGigantic = GIGANTIC_LOGOS.includes(client.name);
               const isHuge = HUGE_LOGOS.includes(client.name);
               const isVeryLarge = VERY_LARGE_LOGOS.includes(client.name);
               const isExtraLarge = EXTRA_LARGE_LOGOS.includes(client.name);
               const isLarge = LARGE_LOGOS.includes(client.name);
               const isMedium = MEDIUM_LOGOS.includes(client.name);
               const isMediumSmall = MEDIUM_SMALL_LOGOS.includes(client.name);
               const isSmall = SMALL_LOGOS.includes(client.name);
               const isExtraSmall = EXTRA_SMALL_LOGOS.includes(client.name);
               
               let sizeClass = 'h-7 md:h-8'; // Default Standard Size (approx 32px)
               if (isGigantic) sizeClass = 'h-28 md:h-32'; // Gigantic (4x)
               else if (isHuge) sizeClass = 'h-20 md:h-24'; // Huge (3x)
               else if (isVeryLarge) sizeClass = 'h-16 md:h-20'; // Very Large (2.5x)
               else if (isExtraLarge) sizeClass = 'h-14 md:h-16'; // Extra Large (2x)
               else if (isLarge) sizeClass = 'h-10 md:h-12'; // Large (1.5x)
               else if (isMedium) sizeClass = 'h-6 md:h-7'; // Medium (0.8x approx 26px)
               else if (isMediumSmall) sizeClass = 'h-4 md:h-5'; // Medium Small (0.6x)
               else if (isSmall) sizeClass = 'h-3.5 md:h-4'; // Small (0.5x)
               else if (isExtraSmall) sizeClass = 'h-2.5 md:h-3'; // Extra Small (0.4x)

               const content = (
                 <>
                   {client.logo ? (
                     <div className="w-full h-full flex items-center justify-center p-2">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className={`${sizeClass} w-auto max-w-full object-contain transition-all duration-300`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            // Fallback to showing text
                            const sibling = e.currentTarget.nextSibling as HTMLElement;
                            if (sibling) sibling.style.display = 'block';
                          }}
                        />
                        <span className="hidden text-[10px] md:text-xs font-bold text-gray-700 text-center leading-tight">{client.name}</span>
                     </div>
                   ) : (
                     <span className="text-[10px] md:text-xs font-bold text-gray-400 hover:text-ndnex-orange text-center leading-tight px-1 transition-colors">
                       {client.name}
                     </span>
                   )}
                 </>
               );

               return client.link ? (
                 <a 
                   key={idx} 
                   href={client.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-white h-20 rounded-xl flex items-center justify-center border border-transparent hover:border-ndnex-orange hover:shadow-lg hover:scale-[1.03] transition-all duration-300 shadow-md cursor-pointer group overflow-hidden relative"
                 >
                   {content}
                 </a>
               ) : (
                 <div key={idx} className="bg-white h-20 rounded-xl flex items-center justify-center border border-transparent hover:border-ndnex-orange hover:shadow-lg hover:scale-[1.03] transition-all duration-300 shadow-md cursor-default group overflow-hidden relative">
                   {content}
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* CTA Section - Gradient & Impact */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-30 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-50"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl md:text-5xl font-bold text-ndnex-dark font-display mb-6">{t.readyTitle}</h2>
           <p className="text-xl text-gray-500 font-light mb-10 max-w-2xl mx-auto">
             {t.readyDesc}
           </p>
           <Link to="/contact" className="inline-flex items-center gap-3 bg-ndnex-dark text-white px-12 py-6 rounded-full font-bold hover:bg-ndnex-blue transition-all shadow-2xl hover:-translate-y-1 text-lg group">
             {t.startConversation} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </section>
    </div>
  );
};
