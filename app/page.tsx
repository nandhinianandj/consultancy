import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white text-gray-900 py-24 px-6 md:px-12 text-center lg:text-left border-b">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
            Designing systems teams can <span className="text-blue-600">trust</span>, <span className="text-blue-600">question</span>, and <span className="text-blue-600">use</span>.
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Helping organizations treat data, AI, and decision-making as critical infrastructure — not just products.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Get in Touch
            </Link>
            <Link href="#offerings" className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              View Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section id="offerings" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Help</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/services/ai-data-consulting" className="group bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">AI / ML & Data Consulting</h3>
              <p className="text-gray-600 mb-4">
                Designing systems that fit how decisions are actually made. Explained, monitored, and production-ready.
              </p>
              <span className="text-blue-600 font-medium group-hover:underline">Learn more →</span>
            </Link>

            {/* Card 2 */}
            <Link href="/services/decision-systems" className="group bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Decision Systems & Org Design</h3>
              <p className="text-gray-600 mb-4">
                Making decision rules explicit. Redesigning ownership, evidence, and trade-offs to stop stalling.
              </p>
              <span className="text-blue-600 font-medium group-hover:underline">Learn more →</span>
            </Link>

            {/* Card 3 */}
            <Link href="/services/training" className="group bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Training & Capability</h3>
              <p className="text-gray-600 mb-4">
                Improving how teams think, decide, and learn together under pressure. Data vs Story, Process vs Goal.
              </p>
              <span className="text-blue-600 font-medium group-hover:underline">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Philosophy Snippet */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Philosophy</h2>
          <blockquote className="text-2xl font-medium text-gray-700 italic">
            "Most decision problems aren’t disagreements about goals — they’re disagreements about process."
          </blockquote>
          <p className="mt-8 text-lg text-gray-600">
            We don't just build models or dashboards. We build the social and technical infrastructure that allows teams to use them effectively.
          </p>
          <Link href="/about" className="inline-block mt-8 text-blue-600 font-medium hover:underline text-lg">
            Read more about our approach →
          </Link>
        </div>
      </section>

    </div>
  );
}
