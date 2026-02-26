import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio | Mentat Sietch',
  description: 'Selected projects showcasing AI architecture, bias analysis, and agent-based economic simulations.',
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero / Intro */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Portfolio
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated look at systems I&apos;ve built — from multi-agent news bias
            pipelines to evolutionary economic simulations. Each project reflects
            the same principle: <span className="text-white font-semibold">build for transparency, design for humans.</span>
          </p>
        </div>
      </section>

      {/* ── GroundNewsOps Section ── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12 border-b border-gray-200 pb-4">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
              Media Bias Analysis
            </div>
            <h2 className="text-3xl font-bold text-gray-900">GroundNewsOps</h2>
            <p className="mt-2 text-gray-500 italic text-lg">
              AI assists, Human decides.
            </p>
          </div>

          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            A 5-agent swarm pipeline that ingests hundreds of news articles daily,
            scores each source on a political-compass grid, detects over a dozen
            cognitive and rhetorical biases per article, and surfaces the results
            in an interactive dashboard — so the human reader can decide what to
            trust.
          </p>

          {/* Screenshots grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Compass Visualization */}
            <div className="group rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all">
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src="/dashboard_compass_2026-02-25.png"
                  alt="GroundNewsOps Compass Visualization — political leaning mapped across sources"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900">Source Compass</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Each news source plotted on a political-compass grid based on
                  aggregate article scoring across economic and social axes.
                </p>
              </div>
            </div>

            {/* Article Bias Breakdown */}
            <div className="group rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all">
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src="/bias_first_card_2026-02-25.png"
                  alt="Article-level bias breakdown — detected biases with severity and evidence"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900">Article Bias Breakdown</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Per-article analysis surfacing detected biases, severity ratings,
                  and supporting evidence — AI assists, Human decides.
                </p>
              </div>
            </div>
          </div>

          {/* Tech tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['Python', 'Ollama / LLaMA 3.1', 'Multi-Agent Swarm', 'Plotly', 'FastAPI', 'SQLite'].map((tag) => (
              <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Axelrod Economy Section ── */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12 border-b border-gray-200 pb-4">
            <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">
              Agent-Based Economic Simulation
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Axelrod Economy</h2>
            <p className="mt-2 text-gray-500 italic text-lg">
              Randomness vs Rent Seekers — (Others are just meat)
            </p>
          </div>

          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            An evolutionary agent-based model exploring how cooperation, defection,
            and rent-seeking strategies compete in a simulated economy. Agents with
            distinct personality traits interact across networks, accumulate wealth,
            drift in strategy, and form emergent social cliques — all visualised
            through animated simulations.
          </p>

          {/* Video embed */}
          <div className="rounded-xl overflow-hidden border shadow-lg bg-black mb-10">
            <video
              className="w-full aspect-video"
              controls
              preload="metadata"
              poster="/long_term_evolution.png"
            >
              <source src="/economy_latest.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-900">Economy Evolution</h3>
              <p className="text-sm text-gray-500 mt-1">
                Watch agents compete, cooperate, and evolve across generations.
                Hit play to see rent-seekers meet their match.
              </p>
            </div>
          </div>

          {/* Static visualisation gallery */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: '/long_term_evolution.png',
                title: 'Long-Term Evolution',
                desc: 'Strategy population dynamics over thousands of rounds.',
              },
              {
                src: '/pumpelsdrop_economy.png',
                title: 'Pumpelsdrop Economy',
                desc: 'Wealth distribution and economic topology snapshot.',
              },
              {
                src: '/tournament_results.png',
                title: 'Tournament Results',
                desc: 'Head-to-head strategy performance across tournaments.',
              },
            ].map((item) => (
              <div key={item.src} className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all">
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['Python', 'Axelrod Library', 'NetworkX', 'Matplotlib', 'Agent-Based Modeling', 'Game Theory'].map((tag) => (
              <span key={tag} className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Interested in working together?</h2>
          <p className="text-gray-400">
            I build production AI systems that are transparent, auditable, and
            designed for real human decision-making.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://calendly.com/nandhini-anand/15min"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Book a Call
            </Link>
            <Link
              href="/contact"
              className="bg-gray-700 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
