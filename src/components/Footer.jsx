export default function Footer() {
  return (
    <footer className="bg-green-600/15 text-green-900 pt-4 pb-2 px-4 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        {/* Company Info */}
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl font-extrabold">M.Mohsin International</span>
          </div>
          <p className="font-semibold">Travel Management</p>
          <p className="mt-2 text-green-800 text-sm">
            Hajj and Umrah Services<br />
            International & Domestic Flight Tickets<br />
            Holidays Packages & Hotels<br />
            Worldwide Tourism Services<br />
            Passports & Visa Processing
          </p>
        </div>
        {/* Contact Info */}
        <div className="text-sm">
          <p className="font-bold mb-1">Contact</p>
          <div className="mb-1">
            <span className="font-semibold">Mohsin Raza</span> (Chief Executive)<br />
            <span className="text-green-800">📞 0302-7553524</span>
          </div>
          <div className="mb-1">
            <span className="font-semibold">Hassan Raza</span> (Manager)<br />
            <span className="text-green-800">📞 0300-0180347, 0300-0180348</span>
          </div>
          <div className="mb-1">
            <span className="font-semibold">Landline:</span> <span className="text-green-800">0542-450487</span>
          </div>
          <div className="mb-1">
            <span className="font-semibold">Email:</span>
            <br />
            <a href="mailto:mmohsintravel@gmail.com" className="underline text-green-900">mmohsintravel@gmail.com</a>
            <br />
            <a href="mailto:mmohsintravel@hotmail.com" className="underline text-green-900">mmohsintravel@hotmail.com</a>
          </div>
          <div>
            <span className="font-semibold">Address:</span>
            <br />
            <span className="text-green-800">
              Near Govt. Muslim Model High School<br />
              Darman Road, Shakargarh, Narowal.
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-green-300 pt-2 text-center text-green-800 text-xs">
        &copy; 2025 M.Mohsin International Travel Management. All rights reserved.
      </div>
    </footer>
  );
}
