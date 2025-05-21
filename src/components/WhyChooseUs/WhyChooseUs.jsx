import React from 'react';
import {
  FaCode, FaPaintBrush, FaBullhorn, FaLanguage,
  FaMusic, FaVideo, FaDraftingCompass, FaChartBar
} from 'react-icons/fa';

const categories = [
  {
    title: 'Development & IT',
    services: 8,
    icon: FaCode,
    description: 'Software Engineer, Web / Mobile Developer & More',
  },
  {
    title: 'Design & Creative',
    services: 8,
    icon: FaPaintBrush,
    description: 'Website Design Adobe XD, Figma, Adobe Photoshop',
  },
  {
    title: 'Digital Marketing',
    services: 1,
    icon: FaBullhorn,
    description: 'Service Digital and Social Media Management',
  },
  {
    title: 'Writing & Translation',
    services: 1,
    icon: FaLanguage,
    description: 'Writing, Translation Project, get It Quickly done',
  },
  {
    title: 'Music & Audio',
    services: 0,
    icon: FaMusic,
    description: 'Freelancer Music, Audio Services, Music Projects',
  },
  {
    title: 'Video & Animation',
    services: 0,
    icon: FaVideo,
    description: 'Animation Video Maker that Brings Studio Quality',
  },
  {
    title: 'Programming & Tech',
    services: 1,
    icon: FaDraftingCompass,
    description: 'Programmers and coders Both for Your Project',
  },
  {
    title: 'Finance & Accounting',
    services: 4,
    icon: FaChartBar,
    description: 'Team Works, Collaboration Meet for Your Business',
  },
];

const CategoryGrid = () => {
  return (
    <section className="px-4 py-16 md:px-20 bg-base-100 transition-all duration-300">
      <h2 className="text-4xl font-bold text-center mb-14 text-base-content">
        Explore Services by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              className="group border border-base-300 rounded-2xl p-6 bg-base-200 shadow-lg hover:shadow-2xl hover:border-primary hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="bg-white/10 rounded-full w-14 h-14 flex items-center justify-center shadow-inner group-hover:bg-white/20 transition-all">
                  <Icon className="text-2xl text-blue-800 dark:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-base-content group-hover:text-primary">
                  {cat.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;
