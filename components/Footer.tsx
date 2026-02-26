import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12 text-center text-sm text-gray-500">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          <Link href="/" className="hover:text-gray-900 mx-2">Home</Link> | 
          <Link href="/services/ai-data-consulting" className="hover:text-gray-900 mx-2">AI Consulting</Link> | 
          <Link href="/services/decision-systems" className="hover:text-gray-900 mx-2">Decision Systems</Link> | 
          <Link href="/services/training" className="hover:text-gray-900 mx-2">Training</Link>
        </p>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://linkedin.com/in/nandhinianand" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 font-medium">LinkedIn</a>
          <a href="https://github.com/nandhinianandj" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 font-medium">GitHub</a>
          <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 font-medium">Resume</a>
        </div>

        <p>&copy; {new Date().getFullYear()} Mentat Sietch Consultancy. All rights reserved.</p>
        <p className="text-xs text-gray-400 mt-2">Designed with purpose, not just pixels.</p>
      </div>
    </footer>
  );
}
