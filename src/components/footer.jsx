 // src/components/Footer.jsx
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
  } from "lucide-react";
  
  export function Footer() {
    const socials = [
      { icon: Facebook, href: "https://www.facebook.com/thesportory", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Youtube, href: "#", label: "YouTube" },
    ];
  
    return (
      <footer className="border-t mt-16 py-8 justify-between flex flex-col md:flex-row">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-end justify-start  gap-4 md:order-2">
            <a href="/" className="text-sm text-gray-500 underline hover:text-gray-900 transition">
            Home Page
            </a>

        </div>

        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-end gap-4 md:order-1 ">
          <p className="text-sm text-gray-500">
            Get in touch
          </p>
          
  
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="w-5 h-5 text-gray-500 hover:text-gray-900 transition" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  
 
  