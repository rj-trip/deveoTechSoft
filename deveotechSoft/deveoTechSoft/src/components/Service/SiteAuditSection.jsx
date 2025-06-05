import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SiteAuditSection = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-50 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Get a{" "}
          <span className="text-blue-600 font-bold">
            Complimentary Site Audit
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Discover your website’s potential with our free audit! Gain insights
          into SEO performance, content strategy, and technical improvements to
          enhance your digital presence.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Request Free Audit
          </a>
          <a
            href="https://web.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-green-700 transition"
          >
            <FaWhatsapp size={18} /> WhatsApp Web
          </a>
        </div>
      </div>
    </section>
  );
};

export default SiteAuditSection;
