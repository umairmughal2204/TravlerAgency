export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Contact Us</h2>
        <form className="bg-green-50 p-8 rounded-lg shadow">
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-green-700">Name</label>
            <input type="text" className="w-full p-3 rounded border" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-green-700">Email</label>
            <input type="email" className="w-full p-3 rounded border" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-green-700">Message</label>
            <textarea className="w-full p-3 rounded border" rows={4} placeholder="Your Message" required />
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}
