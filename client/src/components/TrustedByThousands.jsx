// TrustedByThousands.jsx
import { Heart } from "lucide-react";

export default function TrustedByThousands() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center px-6 py-8 mt-14">
      
      {/* Icon + Title */}
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 flex items-center justify-center bg-green-500 rounded-full mx-auto mb-6 shadow-lg">
          <Heart className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Trusted by Thousands ❤️
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Over <span className="font-semibold text-green-600">10,000+ happy customers</span> shop with us every day.  
          Your trust is our greatest reward, and we are committed to delivering excellence with every order.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-8">
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">⭐ 5-Star Reviews</h3>
            <p className="text-gray-600 text-sm">Thousands of positive reviews from satisfied customers.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">👨‍👩‍👧‍👦 Community First</h3>
            <p className="text-gray-600 text-sm">We are proud to be a trusted part of your family’s daily life.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">🔒 Reliable Service</h3>
            <p className="text-gray-600 text-sm">Safe, secure, and on-time deliveries you can always count on.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-green-600">💬 Real Support</h3>
            <p className="text-gray-600 text-sm">24/7 customer support that listens and solves quickly.</p>
          </div>
        </div>

        {/* Call to Action */}
        <a href="/products" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition">
          Join Our Happy Customers with shoping
        </a>
      </div>
    </div>
  );
}
