

// // Contact.jsx
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function Contact() {
//   return (
//     <div id="contacts" className="bg-green-50 min-h-screen flex flex-col items-center px-6 py-12">
      
//       {/* Title */}
//       <div className="text-center max-w-2xl mb-10">
//         <h1 className="text-4xl font-bold text-green-700 mb-4">Contact Us 📩</h1>
//         <p className="text-lg text-gray-700">
//           Have questions or feedback? We’d love to hear from you.  
//           Reach out to us anytime and we’ll get back to you as soon as possible.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl w-full">
        
//         {/* Contact Form */}
//         <div className="bg-white shadow-md rounded-xl p-6">
//           <h2 className="text-2xl font-semibold text-green-600 mb-4">Send a Message</h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//             />
//              <input
//               type="phone"
//               placeholder="Your Contact Number"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//             />
//             <textarea
//               rows="5"
//               placeholder="Your Message"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-col justify-center space-y-6">
//           <div className="flex items-center space-x-4">
//             <Phone className="w-6 h-6 text-green-600" />
//             <p className="text-gray-700">+91 9693265659</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Mail className="w-6 h-6 text-green-600" />
//             <p className="text-gray-700">support@greencart.com</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <MapPin className="w-6 h-6 text-green-600" />
//             <p className="text-gray-700">123 Green Street, Jaipur, India</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


////////////////////////////////////////


// Contact.jsx
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs
      .sendForm(
        "service_7l83mqj",      // 🔹 Replace with your Service ID
        "template_4kpd33a",     // 🔹 Replace with your Template ID
        form.current,
        "iNLhWOhsb2oFVq0cK"       // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, try again later.");
        }
      );
  };

  return (
    <div id="contacts" className="bg-green-50 min-h-screen flex flex-col items-center px-6 py-12">
      
      {/* Title */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Contact Us 📩</h1>
        <p className="text-lg text-gray-700">
          Have questions or feedback? We’d love to hear from you.  
          Reach out to us anytime and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl w-full">
        
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name" // 🔹 Must match EmailJS template field
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="email"
              name="user_email" // 🔹 Must match EmailJS template field
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="tel"
              name="user_phone" // 🔹 Optional field
              placeholder="Your Contact Number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <textarea
              name="message" // 🔹 Must match EmailJS template field
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-green-600" />
            <p className="text-gray-700">+91 9693265659</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-green-600" />
            <p className="text-gray-700">support@greencart.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-green-600" />
            <p className="text-gray-700">123 Green Street, Jaipur, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}


