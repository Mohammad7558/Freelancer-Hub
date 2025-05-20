import React from 'react';

const Service = () => {
  const services = [
    {
      title: "Web Development",
      icon: "💻",
      description: "Get responsive and high-performing websites built by expert developers.",
    },
    {
      title: "Graphic Design",
      icon: "🎨",
      description: "Creative logos, branding, and visuals to elevate your business identity.",
    },
    {
      title: "Content Writing",
      icon: "✍️",
      description: "Engaging blog posts, articles, and website copy tailored to your audience.",
    },
    {
      title: "Digital Marketing",
      icon: "📈",
      description: "Boost your online presence with SEO, social media, and PPC experts.",
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description: "Custom mobile apps for iOS and Android, built to scale your business.",
    },
    {
      title: "Virtual Assistance",
      icon: "🧑‍💼",
      description: "Reliable administrative support to help you stay organized and productive.",
    },
    {
      title: "Video Editing",
      icon: "🎬",
      description: "Professional video editing for YouTube, social media, and marketing.",
    },
    {
      title: "UI/UX Design",
      icon: "🖌️",
      description: "User-focused design to enhance usability and visual appeal across platforms.",
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
