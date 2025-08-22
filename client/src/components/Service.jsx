// Services.jsx
import { Truck, Leaf, Tag, Heart } from "lucide-react";

export default function Services() {
    
  const services = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Fastest Delivery",
      desc: "Groceries delivered in under 30 minutes.",
      bg: "bg-green-500",
      href: '/fastestDelevery'
    },
    {
      id: 2,
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Freshness Guaranteed",
      desc: "Fresh produce straight from the source.",
      bg: "bg-green-500",
      href: '/freshnessGuaranteed'
    },
    {
      id: 3,
      icon: <Tag className="w-8 h-8 text-white" />,
      title: "Affordable Prices",
      desc: "Quality groceries at unbeatable prices.",
      bg: "bg-green-500",
      href: '/affordablePrices'
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Trusted by Thousands",
      desc: "Loved by 10,000+ happy customers.",
      bg: "bg-green-500",
      href: '/trustedthousands'
    },
  ];

  return (
    <section id="service" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10 relative inline-block">
          Our Services
          <span className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {services.map((service) => (
          <a href={service.href}
            key={service.id}
            className="flex items-center justify-center flex-col space-x-4 bg-green-50 shadow-md rounded-xl p-6 h-[400px] hover:shadow-lg transition duration-400 cursor-pointer hover:bg-green-300"
          >
            {/* Icon */}
            <div
              className={`w-20 h-20 flex items-center justify-center mb-2 rounded-lg ${service.bg}`}
            >
              {service.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="font-semibold text-center text-2xl">{service.title}</h3>
              <p className="text-gray-600 text-md">{service.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
