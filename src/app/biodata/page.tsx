export default function Biodata() {
  return (
    <div className="bg-[#dbfce7] container mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-orange-600 text-center">MY BIODATA</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
            <div className="space-y-3 text-gray-600">
              <p><span className="font-medium">Full Name:</span> Syrillus Christiano P Arsam</p>
              <p><span className="font-medium">Date of Birth:</span> March 18, 2005</p>
              <p><span className="font-medium">Location:</span> East Nusa Tenggara, Indonesia</p>
              <p><span className="font-medium">Email:</span> tianarsam18@gmail.com</p>
            </div>
          </div>
          
          <div className="text-gray-600">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Education</h2>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Primakara University</p>
                <p>IT Major</p>
                <p>2023 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}