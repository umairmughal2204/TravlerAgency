export default function Destinations() {
  const destinations = [
    { name: "Paris", image: "/images/paris.jpg" },
    { name: "Maldives", image: "/images/maldives.jpg" },
    { name: "Tokyo", image: "/images/tokyo.jpg" },
    { name: "Istanbul", image: "/images/istanbul.jpg" },
  ];
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.name} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={dest.image} alt={dest.name} className="rounded-t-lg h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
