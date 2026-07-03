import Navbar from '@/components/Navbar';
import { properties } from '@/data/properties';
import { MapPin, BedDouble, Bath, Square, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Real Estate"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter font-heading">
            PLOTNEST <span className="text-accent">AFRICA REALTY</span>
          </h1>
          <p className="text-xl md:text-2xl italic mb-10 font-medium">
            "In <span className="font-bold border-b-2 border-accent">PAR</span> with your <span className="text-accent font-bold">Investment Dreams.</span>"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#properties" className="bg-accent text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-accent2 transition-all">
              View Properties
            </a>
            <a href="#contact" className="bg-white text-primary px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
              Contact an Agent
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-background-warm py-8 border-y-2 border-primary/20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-text-muted uppercase text-sm font-semibold">Properties Sold</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">1000+</p>
            <p className="text-text-muted uppercase text-sm font-semibold">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-text-muted uppercase text-sm font-semibold">Awards Won</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">10+</p>
            <p className="text-text-muted uppercase text-sm font-semibold">Years Exp.</p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Featured Listings</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-sm text-sm font-bold">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{property.title}</h3>
                  <div className="flex items-center text-text-muted mb-4 gap-1 text-sm">
                    <MapPin size={16} className="text-accent" />
                    {property.location}
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-xl font-extrabold text-secondary">{property.price}</span>
                    <div className="flex gap-4 text-text-muted">
                      {property.beds && (
                        <span className="flex items-center gap-1 text-xs">
                          <BedDouble size={14} /> {property.beds}
                        </span>
                      )}
                      {property.sqft && (
                        <span className="flex items-center gap-1 text-xs">
                          <Square size={14} /> {property.sqft}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Plotnest Africa Realty</h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                Plotnest Africa Realty Ltd is a premier real estate firm dedicated to helping you secure your future through strategic land and property investments. We specialize in identifying high-potential areas and providing transparent, seamless acquisition processes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-primary">Our Vision</h4>
                  <p className="text-sm text-text-muted">To be Africa's most trusted partner in real estate and investment dreams.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-primary">Our Mission</h4>
                  <p className="text-sm text-text-muted">Providing affordable, genuine, and value-added real estate solutions to all.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-background-light p-6 rounded-xl text-center border border-primary/10">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-primary/20 italic font-bold">Photo</div>
                <h4 className="font-bold text-primary">Prof. Brian Oenga</h4>
                <p className="text-xs text-secondary font-semibold uppercase mb-2">Chairman</p>
                <p className="text-sm text-text-muted">EBN (Entaero Business Network)</p>
              </div>
              <div className="bg-background-light p-6 rounded-xl text-center border border-primary/10">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-primary/20 italic font-bold">Photo</div>
                <h4 className="font-bold text-primary">Joseph Mochorwa</h4>
                <p className="text-xs text-secondary font-semibold uppercase mb-2">Managing Director</p>
                <p className="text-sm text-text-muted">PArealty Executive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 opacity-90">Ready to invest in your dream plot or home? Our team of experts is here to guide you every step of the way.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Call Us</p>
                    <p className="font-bold">+254 720 346973</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Email Us</p>
                    <p className="font-bold">PArealtyMD@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Visit Us</p>
                    <p className="font-bold text-sm">3rd Floor KomaHill Plaza, Along Nairobi-Kangundo Road, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-background-light p-12">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-primary mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="I am interested in..."></textarea>
                </div>
                <button className="w-full bg-secondary text-white font-bold py-4 rounded-md hover:bg-secondary/90 transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3318] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="bg-white p-2 rounded-sm inline-block mb-6">
                <Image src="/logos/logo-primary.png" alt="Plotnest Africa Realty" width={150} height={40} />
              </div>
              <p className="text-sm opacity-70 leading-relaxed italic">
                "In PAR with your Investment Dreams."
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li><a href="#" className="hover:text-accent">Home</a></li>
                <li><a href="#properties" className="hover:text-accent">Properties</a></li>
                <li><a href="#about" className="hover:text-accent">About Us</a></li>
                <li><a href="#contact" className="hover:text-accent">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-accent">Legal</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-accent">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm opacity-50">
            <p>&copy; 2026 Plotnest Africa Realty Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
