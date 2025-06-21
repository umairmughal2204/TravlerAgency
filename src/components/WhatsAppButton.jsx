export default function WhatsAppButton() {
  const phoneNumber = "+923000180346"; // Your WhatsApp number without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6.05L0 24l6.15-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 17.07a9.8 9.8 0 01-5.15-1.44l-.37-.22-3.65.95.97-3.56-.24-.38a9.8 9.8 0 1113.92 0 9.7 9.7 0 01-5.53 3.65zm5.1-6.86c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.62.14-.19.28-.74.9-.91 1.08-.17.19-.33.21-.61.07a8.1 8.1 0 01-2.39-1.48 9.1 9.1 0 01-1.69-2.1c-.18-.3 0-.46.13-.6.14-.14.31-.37.46-.56a.6.6 0 00.1-.56c-.05-.19-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48-.16 0-.35 0-.54 0a1.5 1.5 0 00-1.1.52c-.37.36-1.4 1.37-1.4 3.33 0 1.96 1.43 3.86 1.63 4.13.2.28 2.81 4.28 6.8 6a7.7 7.7 0 003.3.53c1.42 0 2.75-.58 3.74-1.52a6.4 6.4 0 001.9-4.26c0-2.5-2.03-4.55-2.3-4.83z" />
      </svg>
    </a>
  );
}

