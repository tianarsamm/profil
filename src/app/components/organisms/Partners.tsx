export default function Partners() {
  const partners = [
    { 
      name: "Instagram", 
      src: "/logos/1.svg",
      href: "https://www.instagram.com/tianarsamm/"
    },
    { 
      name: "Github", 
      src: "/logos/2.svg",
      href: "https://github.com/tianarsamm"
    },
    { 
      name: "Linkedin", 
      src: "/logos/3.svg",
      href: "https://www.linkedin.com/in/tian-arsam-41037431b/"
    },
    { 
      name: "gmail", 
      src: "/logos/4.svg",
      href: "https://tianarsam18@gmail.com"
    },
    { 
      name: "Facebook", 
      src: "/logos/5.svg",
      href: "https://www.facebook.com/tian.arsam?locale=id_ID"
    },
  ];

  return (
    <section className="w-full py-5 mb-2 bg-[#68c7c1]">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {partners.map((partner, i) => (
          <a 
            key={i}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={partner.src}
              alt={partner.name}
              className="h-12 md:h-16 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
