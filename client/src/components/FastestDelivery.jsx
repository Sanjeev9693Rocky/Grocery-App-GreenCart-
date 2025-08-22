// FastestDelivery.jsx
import { Truck } from "lucide-react";

export default function FastestDelivery() {
  return (
    <div className="bg-green-50 flex flex-col items-center justify-center px-6 py-8 mt-14">
      
      {/* Icon + Title */}
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 flex items-center justify-center bg-green-500 rounded-full mx-auto mb-6 shadow-lg">
          <Truck className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Fastest Delivery 🚚
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Get your groceries delivered to your doorstep in <span className="font-semibold text-green-600">under 30 minutes</span>.  
          Our delivery network is optimized to ensure speed, safety, and convenience — so you spend less time waiting and more time enjoying freshness.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-8">
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🚀 Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Groceries delivered in 30 minutes or less, guaranteed.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">📦 Safe Packaging</h3>
            <p className="text-gray-600 text-sm">Your items are packed securely to ensure freshness.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🌍 Wide Coverage</h3>
            <p className="text-gray-600 text-sm">Available in multiple cities with expanding reach.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">💳 Easy Payment</h3>
            <p className="text-gray-600 text-sm">Multiple payment options including COD & UPI.</p>
          </div>
        </div>

        {/* Call to Action */}
        <a href='/products' className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition">
          Shop Now
        </a>
      </div>
    </div>
  );
}
