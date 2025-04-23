export default function Subscribe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-green-500 font-semibold text-sm mb-2">SUBSCRIBE</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Subscribe To Get The Latest <br /> News About Us
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Please Drop Your Email Below To Get Daily Update About What We Do
        </p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email Adress"
            className="text-black w-full md:w-96 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md shadow"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
