import React from "react";

const Footer = () => {
  return (
    <footer
    id="footer"
      className="relative text-white min-h-[70vh] flex flex-col justify-between"  
      style={{
        backgroundImage: `url(https://tse4.mm.bing.net/th/id/OIP.48wWZrvggDeOYsIJ_0DjqQHaEo?pid=Api&P=0&h=180)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-16 px-8 py-20">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
            QUICK LINKS
          </h2>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-400">Policy & Rules</a></li>
            <li><a href="#" className="hover:text-green-400">Complain</a></li>
            <li><a href="#" className="hover:text-green-400">RTI</a></li>
            <li><a href="#" className="hover:text-green-400">Tender</a></li>
            <li><a href="#" className="hover:text-green-400">FAQ</a></li>
            <li><a href="#" className="hover:text-green-400">Downloads</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
            GET IN TOUCH
          </h2>
          <p className="text-sm mb-4">Mon–Sat (10:00 – 18:00 hrs)</p>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-green-300">Directorate of Tourism</h3>
              <p>MDI Building, 3rd Floor, Dhurwa, Ranchi-834004</p>
              <p>Email: dirjharkhandtourism@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300">Department of Tourism</h3>
              <p>FFP Building, 2nd Floor, Dhurwa, Ranchi-834004</p>
              <p>Email: govjharkhandtourism@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Online Booking & Support */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
            ONLINE BOOKING & SUPPORT
          </h2>
          <div className="space-y-5 text-sm">
            <p>Email: jtdcltd@gmail.com</p>
            <p>Phones: 0651-2331828, 2331643</p>
            <div>
              <h3 className="font-semibold text-green-300">
                Jharkhand Tourism Development Corporation Ltd
              </h3>
              <p>6th Floor, JUPMI Campus, Plant Plaza Road, Dhurwa, Ranchi-834004</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/30 text-center text-sm py-5 bg-black/40">
        © {new Date().getFullYear()} Jharkhand Tourism | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;