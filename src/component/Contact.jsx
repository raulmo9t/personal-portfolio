import { Mail, MapPin, Phone } from "lucide-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = ({ ref }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kmj0shn", "template_kqnmfne", form.current, {
        publicKey: "2-_YIyroez9GP7Mhn",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.success("Sending message failed!");
        }
      );
  };

  return (
    <div ref={ref} className="bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">raulmo9t@gmail.com</span>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">+91 8249766739</span>
                </div> */}

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Cuttack, Odisha, 753002</span>
                </div>
              </div>
            </div>

            {/* here is input */}
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <button className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
