const projects = [
  {
    image: "/showcase/project1.png",
    title: "Digital Marketing Agency Website",
    description:
      "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand",
  },
  {
    image: "/showcase/project2.png",
    title: "Digital Marketing Agency Website",
    description:
      "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand",
  },
  {
    image: "/showcase/project3.png",
    title: "Digital Marketing Agency Website",
    description:
      "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand",
  },
  {
    image: "/showcase/project4.png",
    title: "Digital Marketing Agency Website",
    description:
      "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand",
  },
];

export default function Showcase() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-green-500 font-semibold text-2xl mb-2">OUR PORTFOLIO</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          We provide the Perfect Solution <br /> to your business growth
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
