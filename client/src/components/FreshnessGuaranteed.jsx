// FreshnessGuaranteed.jsx
import { Leaf } from "lucide-react";

export default function FreshnessGuaranteed() {
  return (
    <div className="bg-green-50 flex flex-col items-center justify-center px-6 py-8 mt-14">
      
      {/* Icon + Title */}
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 flex items-center justify-center bg-green-500 rounded-full mx-auto mb-6 shadow-lg">
          <Leaf className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Freshness Guaranteed 🌱
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          We bring you farm-fresh produce straight from trusted sources.  
          With our strict quality checks, you can be confident that every item you order is <span className="font-semibold text-green-600">fresh, healthy, and natural</span>.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-8">
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🥦 Farm to Table</h3>
            <p className="text-gray-600 text-sm">Fresh produce sourced directly from farmers and trusted suppliers.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🧪 Quality Checked</h3>
            <p className="text-gray-600 text-sm">Every item is inspected for freshness and quality before delivery.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🌍 Eco-Friendly</h3>
            <p className="text-gray-600 text-sm">We use sustainable practices and minimal packaging for a greener planet.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🍎 Seasonal Picks</h3>
            <p className="text-gray-600 text-sm">Enjoy seasonal fruits and vegetables at their peak freshness.</p>
          </div>
        </div>

        {/* Call to Action */}
        <a href="/products" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition">
          Shop Fresh Now
        </a>
      </div>
    </div>
  );
}
