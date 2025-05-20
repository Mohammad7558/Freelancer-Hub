import React from 'react';

const Service = () => {
  const services = [
    {
      title: "Wedding Planning",
      icon: "💍",
      description: "Creating unforgettable weddings tailored to your vision and traditions.",
    },
    {
      title: "Corporate Events",
      icon: "🏢",
      description: "Professional planning for conferences, meetings, and business celebrations.",
    },
    {
      title: "Birthday Parties",
      icon: "🎉",
      description: "Fun and personalized birthday celebrations for all ages.",
    },
    {
      title: "Concert Management",
      icon: "🎤",
      description: "Seamless execution of live music events and large-scale performances.",
    },
    {
      title: "Product Launches",
      icon: "🚀",
      description: "Planning and execution of successful product launches with a lasting impact.",
    },
    {
      title: "Trade Shows",
      icon: "🏷️",
      description: "End-to-end management of trade show booths, displays, and presentations.",
    },
    {
      title: "Charity Events",
      icon: "🤝",
      description: "Organizing charity fundraisers and events to support important causes.",
    },
    {
      title: "Team Building Activities",
      icon: "🤸‍♂️",
      description: "Creative and engaging team-building events to foster collaboration and communication.",
    },
  ];
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20 my-20">
      <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
