import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-sm">
            <Image
              src="/logos/logo-primary.png"
              alt="Plotnest Africa Realty"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/#properties" className="hover:text-accent transition-colors">Properties</Link>
          <Link href="/#about" className="hover:text-accent transition-colors">About Us</Link>
          <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-sm">
          <a href="tel:+254720346973" className="flex items-center gap-1 hover:text-accent">
            <Phone size={16} /> +254 720 346973
          </a>
          <a href="mailto:PArealtyMD@gmail.com" className="bg-accent px-4 py-2 rounded-md font-semibold text-white hover:bg-accent2 transition-colors">
            Inquire Now
          </a>
        </div>

        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
