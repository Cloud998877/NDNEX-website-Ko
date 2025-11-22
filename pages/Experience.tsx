
import React from 'react';
import { BookOpen, Activity, ArrowUpRight, Heart, Brain, Eye, Dna, Stethoscope, Pill, Thermometer, Droplet, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t, content } = useLanguage();
  const { THERAPEUTIC_AREAS, PUBLICATIONS } = content;

  // Helper to get icon based on category
  const getCategoryIcon = (category: string) => {
    if (category.includes("Oncology") || category.includes("종양학")) return <Dna />;
    if (category.includes("Endocrinology") || category.includes("내분비")) return <Droplet />;
    if (category.includes("Cardiovascular") || category.includes("심혈관")) return <Heart />;
    if (category.includes("Neurology") || category.includes("신경학")) return <Brain />;
    if (category.includes("Dermatology") || category.includes("피부과")) return <Zap />;
    if (category.includes("Gastroenterology") || category.includes("소화기")) return <Pill />;
    if (category.includes("Hematology") || category.includes("혈액학")) return <Thermometer />;
    if (category.includes("Musculoskeletal") || category.includes("근골격계")) return <Activity />;
    if (category.includes("Ophthalmology") || category.includes("안구")) return <Eye />;
    return <Stethoscope />;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
       {/* Header with Background */}
       <div className="relative pt-40 pb-24 bg-ndnex-dark overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2070" 
              alt="Medical Research" 
              className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ndnex-dark"></div>
         </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display whitespace-pre-line">{t.experienceTitle || "Experience & \nPublications"}</h1>
           <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed border-l-4 border-white/20 pl-6 whitespace-pre-line">
             {t.experienceDesc}
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Disease Areas - Categorized Grid Style */}
        <div className="mb-24">
          <div className="text-center mb-16">
             <h2 className="text-sm font-bold text-ndnex-orange uppercase tracking-widest mb-2">{t.deepExpertise}</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-ndnex-dark font-display">{t.therapeuticAreas}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {THERAPEUTIC_AREAS.map((area, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                {/* Card Header */}
                <div className="bg-slate-50 p-6 border-b border-gray-100 flex items-center gap-4 group-hover:bg-orange-50/50 transition-colors">
                   <div className="p-3 bg-white rounded-xl text-ndnex-orange shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(area.category)}
                   </div>
                   <h4 className="font-bold text-lg text-ndnex-dark font-display leading-tight">{area.category}</h4>
                </div>
                
                {/* Card Body */}
                <div className="p-6">
                   <div className="flex flex-wrap gap-2">
                      {area.diseases.map((disease, dIdx) => (
                        <span key={dIdx} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100 hover:bg-ndnex-blue/5 hover:text-ndnex-blue hover:border-ndnex-blue/20 transition-colors cursor-default">
                           <span className="w-1.5 h-1.5 rounded-full bg-ndnex-orange/50 mr-2"></span>
                           {disease}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications - Academic List Style */}
        <div className="border-t border-gray-200 pt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-50 rounded-xl text-ndnex-blue">
               <BookOpen size={28} />
            </div>
            <h2 className="text-3xl font-bold text-ndnex-dark font-display">{t.selectedPublications}</h2>
          </div>

          <div className="grid gap-6">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-ndnex-orange/50 hover:shadow-lg transition-all group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:bg-ndnex-orange transition-colors"></div>
                <div className="flex flex-col md:flex-row justify-between gap-6 pl-4">
                   <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold mb-3">
                        <span className="bg-slate-800 text-white px-3 py-1 rounded-full">{pub.year}</span>
                        <span className="text-ndnex-blue uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">{pub.journal}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display leading-snug group-hover:text-ndnex-dark transition-colors">
                        {pub.title}
                      </h3>
                      
                      <p className="text-base text-gray-600 font-medium">
                        {pub.authors}
                      </p>
                   </div>
                   
                   {pub.link && (
                     <div className="shrink-0 self-start md:self-center">
                       <a 
                         href={pub.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-sm font-bold text-ndnex-dark bg-gray-50 px-6 py-3 rounded-xl hover:bg-ndnex-orange hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                       >
                         {t.readArticle} <ArrowUpRight size={18} />
                       </a>
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
