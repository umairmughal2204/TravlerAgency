export default function Packages() {
  const packages = [
    {
      title: "Romantic Paris Getaway",
      description: "5 nights in Paris with guided tours and luxury accommodation.",
      price: "$1,499",
    },
    {
      title: "Maldives Beach Escape",
      description: "7 days all-inclusive at a 5-star resort in Maldives.",
      price: "$2,299",
    },
    {
      title: "Tokyo Adventure",
      description: "Explore Tokyo’s culture, food, and nightlife for 6 days.",
      price: "$1,899",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Featured Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.title} className="bg-green-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{pkg.title}</h3>
              <p className="mb-4 text-green-800">{pkg.description}</p>
              <span className="text-green-600 font-bold">{pkg.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
