import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#68c7c1] text-black py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo dan Sosial Media */}
        <div>
        <div className="text-2xl font-bold text-white">
          Tian<span className="text-[#dc5341]">ARSAM</span>
        </div>
          <p className="text-sm mb-6">
          This is just a simple website as a junior developer.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/tian.arsam?locale=id_ID" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/tian-arsam-41037431b/" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/tianarsamm/" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:+6281338858678" className="hover:text-white">
                ☎️ 081338858678
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li> */}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-4">Address</h3>
          <p className="text-sm">
            South Denpasar, Denpasar City
            <br />
            Bali, Indonesia
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        Support by @tianarsamm
      </div>
    </footer>
  );
}