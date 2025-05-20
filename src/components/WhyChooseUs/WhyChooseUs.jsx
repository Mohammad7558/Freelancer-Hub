import React from 'react';
import { FaUsers, FaClipboardCheck, FaHandshake, FaUserFriends, FaMoneyCheckAlt, FaHeadset, FaPaintBrush, FaClock } from 'react-icons/fa';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Professional & Experienced Team",
      icon: <FaUsers className="text-3xl text-indigo-600 mb-4" />,
    },
    {
      title: "Tailored Event Planning",
      icon: <FaClipboardCheck className="text-3xl text-indigo-600 mb-4" />,
    },
    {
      title: "Reliable Vendor Network",
      icon: <FaHandshake className="text-3xl text-indigo-600 mb-4" />,
    },
    {
      title: "Customer-Centric Approach",
      icon: <FaUserFriends className="text-3xl text-indigo-600 mb-4" />,
    },
    {
      title: "Affordable Packages",
      icon: <FaMoneyCheckAlt className="text-3xl text-indigo-600 mb-4" />,
    },
    {
      title: "24/7 Customer Support",
      icon: <FaHeadset className="text-3xl text-indigo-600 mb-4" />,
    },
    {
      title: "Creative Design & Themes",
      icon: <FaPaintBrush className="text-3xl text-indigo-600 mb-4" />,
    },
    {
      title: "On-Time Execution",
      icon: <FaClock className="text-3xl text-indigo-600 mb-4" />,
    },
  ];

  return (
    <section className="mt-20 bg-gray-100 py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 hover:border-l-4 border-indigo-500"
          >
            <div className="flex flex-col items-start">
              {point.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">
                We provide exceptional service to make your events truly memorable and stress-free.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
