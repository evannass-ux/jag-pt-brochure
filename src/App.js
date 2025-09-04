import React, { useState } from "react";
import { MapPin, Car, Home, Ruler, ChevronLeft, ChevronRight } from "lucide-react";

// List of images from /public
const images = [
  "20120625215501582764000000-o.jpg",
  "20120625215503477372000000-o.jpg",
  "20120625220004759055000000-o.jpg",
  "20120625220006651335000000-o.jpg",
  "20120625221113339228000000-o.jpg",
  "20120625221116656878000000-o.jpg",
  "20120625221120398125000000-o.jpg",
  "20120625221123533548000000-o.jpg",
  "20120626005934314345000000-o.jpg",
  "20120626005937346789000000-o.jpg",
  "20120626005940346181000000-o.jpg",
  "20121213174935215987000000-o.jpg",
  "20140714031922776727000000-o.jpg",
  "20140725012719449243000000-o.jpg",
  "20140725012723911565000000-o.jpg",
  "20140725012727704131000000-o.jpg",
  "20140725012731437111000000-o.jpg",
  "20140725012735127180000000-o.jpg",
  "20140725012743208739000000-o.jpg",
  "20140725012747153255000000-o.jpg",
  "20140725012750412487000000-o.jpg",
  "20140725013757178809000000-o.jpg",
  "20140725013802237873000000-o.jpg",
  "20140725013806903531000000-o.jpg",
  "20140725013813085596000000-o.jpg",
  "20140725013955592025000000-o.jpg",
  "20140725014047900152000000-o.jpg",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 font-sans text-gray-800">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-blue-700">
          🏢 Prime Medical / Office Space Available
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Great office/apt building in a prime location on Sanderson Street, Throop PA — just ½ mile from Scranton.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl shadow p-6 space-y-4 bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-700">Property Highlights</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2"><Ruler size={18}/> 2,450 sq. ft.</li>
            <li className="flex items-center gap-2"><Car size={18}/> 30 Parking Spaces</li>
            <li className="flex items-center gap-2"><Home size={18}/> Handicap Ramp Accessible</li>
            <li>Lot Size: 50’ x 165’ x 100’ x 165’</li>
            <li>3 Units, All Separate Utilities</li>
            <li>Previously an MD’s office (easy PT/healthcare conversion)</li>
            <li>6 Rooms, Sitting/Reception Area (25’ x 17’), Two Bathrooms</li>
            <li>Full Dry Basement for Storage and files</li>
             <li>Remodel budget dependant on lease term</li>
            <li>Central Air, Ceiling Height up to 8’</li>
            <li>Lot on Separate PIN#, Taxes $820/year</li>
            <li>Updated electrical service</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow p-6 space-y-4 bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-700">Why This Location?</h2>
          <p>
            Excellent visibility on the main Sanderson Street in Throop, PA, just ½ mile from Scranton. Surrounded by residential communities, schools, and hospitals, making it ideal for Physical Therapy (JAG PT), healthcare, or professional office tenants.
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={18}/> Main St, Throop, PA
          </div>
        </div>
      </div>

      {/* Slideshow */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700 text-center">Photo Slideshow</h2>
        <div className="relative w-full h-96 bg-gray-200 rounded-2xl shadow overflow-hidden flex items-center justify-center">
          <button
            onClick={prevImage}
            className="absolute left-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:scale-110 transition-transform"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={`/${images[currentIndex]}`}
            alt={`Property ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:scale-110 transition-transform"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots for slideshow */}
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center space-y-2 bg-blue-100 rounded-xl p-6 shadow">
        <p className="text-lg font-semibold text-blue-700">For Leasing Information:</p>
        <p className="text-gray-800">Evan Nass – TLY Holdings, LLC</p>
        <p className="text-gray-800">📧 tlyholdings@gmail.com | 📱 570-290-6966</p>
        <button className="rounded-2xl px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 shadow">
          Request a Tour
        </button>
      </div>
    </div>
  );
}

export default App;
