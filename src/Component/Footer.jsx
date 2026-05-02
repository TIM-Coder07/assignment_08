import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#63483a] text-[#edd0b9] mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Tile Gallery</h2>
          <p className="text-sm text-[#edd0b9]/80">
            Premium tiles and flooring solutions for modern homes and commercial spaces.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/service" className="hover:text-white transition">Service</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-[#edd0b9]/80">
            Email: support@tilegallery.com
          </p>
          <p className="text-sm text-[#edd0b9]/80">
            Phone: +880 1234 567 890
          </p>
          <p className="text-sm text-[#edd0b9]/80">
            Location: Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-[#edd0b9]/70">
        © {new Date().getFullYear()} Tile Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;