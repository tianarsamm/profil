export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["HTML", "CSS"]
    },
    {
      category: "Programming Languages",
      items: ["C++", "C", "PHP"]
    },
    {
      category: "Tools & Software",
      items: ["Git", "VS Code", "Figma", "Canva"]
    }
  ];

  return (
    <div className="bg-[#dbfce7] container mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-orange-600 text-center">MY SKILLS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillSet, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{skillSet.category}</h2>
            <div className="space-y-2">
              {skillSet.items.map((skill, i) => (
                <div key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}