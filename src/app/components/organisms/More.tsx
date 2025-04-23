// components/More.tsx

const stats = [
  {
    icon: "/icons/project-plan.png",
    title: "Completed Projects",
    value: "100 +",
  },
  {
    icon: "/icons/rating (1).png",
    title: "Customer Satisfaction",
    value: "20 %",
  },
  {
    icon: "/icons/raise.png",
    title: "Raised by Clients",
    value: "$10M",
  },
  {
    icon: "/icons/timeline 2.png",
    title: "Years in Business",
    value: "2 yrs",
  },
];

export default function More() {
  return (
    <section className="bg-[#f6fbf9] py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center px-6">
        {stats.map((item, index) => (
          <div key={index} className="space-y-4">
            <img
              src={item.icon}
              alt={item.title}
              className="w-11 h-12 mx-auto"
            />
            <p className="text-sm text-gray-700">{item.title}</p>
            <h3 className="text-xl font-bold text-green-600">{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
