import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
      
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-xl text-gray-600 mb-8">
        We help organizations bridge the gap between technical capability and decision-making reality.
      </p>
      
      <div className="prose prose-lg text-gray-800">
        <p>
          Founded on the principle that technology should serve human judgment, not replace it.
          Most AI failures aren't technical—they're organizational. They happen when tools are built without understanding the decisions they support.
        </p>
        <p className="mt-4">
          Our work focuses on making decision processes explicit, designing data systems that reflect reality, and training teams to navigate uncertainty together.
        </p>
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Why "Mentat"?</h2>
        <p className="text-blue-800 italic">
          "It is by will alone I set my mind in motion."
        </p>
        <p className="mt-4 text-blue-900">
          In fiction, Mentats are human computers, trained to analyze data and make decisions without relying on thinking machines. 
          In reality, we believe the best systems are those that amplify human cognition rather than automate it away.
        </p>
      </div>
    </div>
  );
}
