// AffordablePrices.jsx
import { Tag } from "lucide-react";

export default function AffordablePrices() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center px-6 py-8 mt-14">
      
      {/* Icon + Title */}
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 flex items-center justify-center bg-green-500 rounded-full mx-auto mb-6 shadow-lg">
          <Tag className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Affordable Prices 💰
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Get the best groceries at <span className="font-semibold text-green-600">unbeatable prices</span>.  
          We make healthy living easy and affordable for every family by cutting down extra costs and offering fair deals every day.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-8">
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🏷️ Daily Discounts</h3>
            <p className="text-gray-600 text-sm">Special deals and offers available every single day.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🛒 Bulk Savings</h3>
            <p className="text-gray-600 text-sm">Save more when you shop more with bulk purchase discounts.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">💳 Loyalty Rewards</h3>
            <p className="text-gray-600 text-sm">Earn points on every order and redeem them for future purchases.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">📦 Price Match</h3>
            <p className="text-gray-600 text-sm">Found a lower price? We’ll match it to give you the best deal.</p>
          </div>
        </div>

        {/* Call to Action */}
        <a href="/products" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition">
          Shop Smart Now
        </a>
      </div>
    </div>
  );
}
