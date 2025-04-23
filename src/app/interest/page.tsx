export default function Interest() {
  const interests = [
    {
      title: "Web Development",
      description: "Passionate about creating responsive and user-friendly web applications.",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "Interested in creating beautiful and intuitive user interfaces.",
      icon: "🎨"
    },
    {
      title: "Gaming",
      description: "Enjoy playing video games in my free time, especially Mobile Legends and E-Football.",
      icon: "🎮"
    },
    {
      title: "Technology",
      description: "Always excited to learn about new technologies and programming frameworks.",
      icon: "💻"
    }
  ];

  return (
    <div className="bg-[#68c7c1] container mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#dc5341] text-center">MY INTERESTS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">{interest.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{interest.title}</h2>
            <p className="text-gray-600">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}