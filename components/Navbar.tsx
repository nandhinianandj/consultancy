import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition">
          Mentat Sietch <span className="text-gray-400 font-light">/ Consultancy</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/services/ai-data-consulting" className="text-gray-600 hover:text-blue-600 font-medium text-sm">AI Consulting</Link>
          <Link href="/services/decision-systems" className="text-gray-600 hover:text-blue-600 font-medium text-sm">Decision Systems</Link>
          <Link href="/services/training" className="text-gray-600 hover:text-blue-600 font-medium text-sm">Training</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium text-sm">About</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-blue-700 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
