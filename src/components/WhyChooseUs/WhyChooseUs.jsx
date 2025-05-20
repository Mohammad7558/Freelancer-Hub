import React from 'react';
import {
  FaUsers,
  FaClipboardCheck,
  FaHandshake,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaHeadset,
  FaPaintBrush,
  FaClock,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Skilled & Verified Freelancers",
      icon: <FaUsers className="text-3xl text-indigo-600 mb-4" />,
      description: "Connect with top-rated freelancers who are verified for skills and professionalism.",
    },
    {
      title: "Easy Project Management",
      icon: <FaClipboardCheck className="text-3xl text-indigo-600 mb-4" />,
      description: "Track milestones, deadlines, and deliverables with intuitive tools.",
    },
    {
      title: "Secure Payments",
      icon: <FaMoneyCheckAlt className="text-3xl text-indigo-600 mb-4" />,
      description: "Enjoy peace of mind with escrow payments and transparent transactions.",
    },
    {
      title: "Diverse Talent Pool",
      icon: <FaUserFriends className="text-3xl text-indigo-600 mb-4" />,
      description: "Access professionals from all over the world across multiple industries.",
    },
    {
      title: "Reliable Collaboration",
      icon: <FaHandshake className="text-3xl text-indigo-600 mb-4" />,
      description: "Seamless communication tools to keep freelancers and clients aligned.",
    },
    {
      title: "24/7 Support",
      icon: <FaHeadset className="text-3xl text-indigo-600 mb-4" />,
      description: "Our dedicated support team is always here to help, anytime you need.",
    },
    {
      title: "Creative & Technical Experts",
      icon: <FaPaintBrush className="text-3xl text-indigo-600 mb-4" />,
      description: "Find experts for everything from design and marketing to software development.",
    },
    {
      title: "On-Time Delivery",
      icon: <FaClock className="text-3xl text-indigo-600 mb-4" />,
      description: "Freelancers committed to delivering high-quality work on time, every time.",
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
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
