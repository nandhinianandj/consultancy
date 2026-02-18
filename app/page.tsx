import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white text-gray-900 py-24 px-6 md:px-12 text-center lg:text-left border-b">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 leading-tight">
            Production AI that <span className="text-blue-600">Actually Works.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
            I'm a Senior AI Architect & Engineer who turns experimental models into reliable infrastructure.
            From running "Garbage AI" on Raspberry Pis to scaling conversational agents to <span className="font-semibold text-gray-900">2 million users</span>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link 
              href="https://calendly.com/nandhini-anand/15min" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Book a System Audit
            </Link>
            <Link 
              href="#work" 
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
            >
              View Selected Work
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-gray-900">Selected Work</h2>
            <p className="text-gray-500 mt-2 md:mt-0">Real systems, real scale.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Chatimity */}
            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">Scaling</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chatimity & The Taboo Bot</h3>
              <p className="text-gray-600 mb-4">
                Scaled a conversational platform to <span className="font-semibold">2,000,000+ users</span>. 
                Built a real-time multiplayer Taboo game bot that handled massive concurrent traffic without melting the servers.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mt-auto">
                <li>• Real-time NLP</li>
                <li>• High-concurrency Architecture</li>
                <li>• Gamified AI Interactions</li>
              </ul>
            </div>

            {/* Card 2: Garbage AI */}
            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-xs font-bold text-green-600 mb-2 uppercase tracking-wide">Edge Compute</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">"Garbage AI" & IoT</h3>
              <p className="text-gray-600 mb-4">
                Running SOTA models on $35 potato-tier hardware (Raspberry Pi/Jetson). 
                Proving that constraints are just suggestions if you optimize hard enough.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mt-auto">
                <li>• Rust & C++ Optimization</li>
                <li>• Edge Inference</li>
                <li>• Computer Vision</li>
              </ul>
            </div>

            {/* Card 3: PDF Chat */}
            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wide">RAG Pioneer</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The OG "Chat with PDF"</h3>
              <p className="text-gray-600 mb-4">
                Built a Retrieval-Augmented Generation (RAG) system in 2020 before it was cool. 
                Allowed users to query massive documents with vector search at scale.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mt-auto">
                <li>• Vector Databases</li>
                <li>• Semantic Search</li>
                <li>• Early LLM Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Keeping the structure but sharpening the copy) */}
      <section id="offerings" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How I Help</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-50 p-8 rounded-xl border hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">System Architecture</h3>
              <p className="text-gray-600 mb-4">
                Designing systems that fit how decisions are actually made. Explained, monitored, and production-ready.
                No black boxes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 p-8 rounded-xl border hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">"Fix My Pipeline"</h3>
              <p className="text-gray-600 mb-4">
                Your model works in a notebook but crashes in prod? I fix the plumbing. 
                Redesigning ownership, evidence, and trade-offs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 p-8 rounded-xl border hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Training & Capability</h3>
              <p className="text-gray-600 mb-4">
                Improving how teams think, decide, and learn together under pressure. 
                Teaching engineers to fish (and build better nets).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy Snippet */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Philosophy</h2>
          <blockquote className="text-2xl font-medium text-gray-300 italic">
            "Most decision problems aren’t disagreements about goals — they’re disagreements about process."
          </blockquote>
          <p className="mt-8 text-lg text-gray-400">
            I don't just build models or dashboards. I build the social and technical infrastructure that allows teams to use them effectively.
          </p>
          <Link href="/about" className="inline-block mt-8 text-blue-400 font-medium hover:text-blue-300 hover:underline text-lg">
            Read more about my approach →
          </Link>
        </div>
      </section>

    </div>
  );
}
