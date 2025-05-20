import React from 'react';
import {
  FaCode, FaPaintBrush, FaBullhorn, FaLanguage,
  FaMusic, FaVideo, FaDraftingCompass, FaChartBar
} from 'react-icons/fa';

const categories = [
  {
    title: 'Development & IT',
    services: 8,
    icon: <FaCode />,
    description: 'Software Engineer, Web / Mobile Developer & More',
  },
  {
    title: 'Design & Creative',
    services: 8,
    icon: <FaPaintBrush />,
    description: 'Website Design Adobe XD, Figma, Adobe Photoshop',
  },
  {
    title: 'Digital Marketing',
    services: 1,
    icon: <FaBullhorn />,
    description: 'Service Digital and Social Media Management',
  },
  {
    title: 'Writing & Translation',
    services: 1,
    icon: <FaLanguage />,
    description: 'Writing, Translation Project, get It Quickly done',
  },
  {
    title: 'Music & Audio',
    services: 0,
    icon: <FaMusic />,
    description: 'Freelancer Music, Audio Services, Music Projects',
  },
  {
    title: 'Video & Animation',
    services: 0,
    icon: <FaVideo />,
    description: 'Animation Video Maker that Brings Studio Quality',
  },
  {
    title: 'Programming & Tech',
    services: 1,
    icon: <FaDraftingCompass />,
    description: 'Programmers and coders Both for Your Project',
  },
  {
    title: 'Finance & Accounting',
    services: 4,
    icon: <FaChartBar />,
    description: 'Team Works, Collaboration Meet for Your Business',
  },
];

const CategoryGrid = () => {
  return (
    <section className="px-4 py-12 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Explore Services by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="relative">
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <div className="text-2xl text-green-900">{cat.icon}</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">{cat.services} Service{cat.services !== 1 && 's'}</p>
              <h3 className="text-lg font-semibold text-gray-800">{cat.title}</h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;