const resources = [
  {
    title: "Technical Data Sheet",
    description: "Find technical data sheets for all our products available for direct download.",
    image: "/resources1.webp",
  },
  {
    title: "Safety Data Sheet",
    description: "Find safety data sheets for all our products available for direct download.",
    image: "/resources2.webp",
  },
  {
    title: "Brochures",
    description: "Look here to find corporate literature, product and application brochures for download.",
    image: "/resources3.webp",
  },
];

export default function ResourcesCenter() {
  return (
    <section className="py-18 bg-white px-4 md:px-12 mb-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className="text-center group transition-all duration-300 hover:scale-105"
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full mb-6"
            />
            <h3 className="text-xl font-semibold mb-2 poppins text-gray-900">
              {resource.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed open-sans">
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
