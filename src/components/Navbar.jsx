import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold tracking-wide">Mohsin Travelers</Link>
        <ul className="flex gap-6 font-semibold">
          <li><Link to="/" className="hover:text-green-200">Home</Link></li>
          <li><Link to="/destinations" className="hover:text-green-200">Destinations</Link></li>
          <li><Link to="/packages" className="hover:text-green-200">Packages</Link></li>
          <li><Link to="/about" className="hover:text-green-200">About</Link></li>
          <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
