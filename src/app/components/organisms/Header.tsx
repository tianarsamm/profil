import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 pt-10 pb-0 ">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Hello, I am Tian
        </h1>
        <h2 className="text-3xl font-bold text-[#dc5341] mb-2">Primakara Univeristy</h2>
        <p className="text-black mb-6 text-ms">
          IT student at Primakara University with a focus on web design. <br/> Passionate about creating digital experiences <br /> and growing as a junior web designer. <br/> Based in Bali and love spending free time gaming.
        </p>
        {/* <a href="#about me" className="font-bold bg-[#dc5341] text-white px-5 py-4 rounded-xl text-sm shadow-md hover:bg-white hover:text-[#dc5341] transition duration-300 ease-in-out">About Me</a> */}
      </div>
      <Image
        src="/images/tian.svg"
        alt="Hero"
        className="w-full md:w-1/2 mt-0"
      />
    </header>
  );
}
