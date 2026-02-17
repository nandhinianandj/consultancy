import Link from 'next/link';

export default function AIDataConsultingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
      
      <h1 className="text-4xl font-bold mb-4">AI / ML & Data Consulting</h1>
      <p className="text-2xl text-gray-600 mb-12">Designing systems teams can trust, question, and use</p>

      <div className="space-y-6 text-lg">
        <p>Most organizations don’t need “more AI.” They need data and ML systems that fit how decisions are actually made, can be explained and challenged, and don’t collapse when conditions change.</p>
        <p className="font-medium bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">This work treats AI and data as decision infrastructure, not standalone products.</p>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">The Core Idea</h2>
        <p className="text-lg">If a system can’t be explained, monitored, or overridden, it’s not production-ready.</p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8">Focus Areas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-700 mb-3">Data Systems & Architecture</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>End-to-end pipelines tied to decision use</li>
              <li>Clear ownership, validation, and observability</li>
              <li>Data modeled around decisions, not tables</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-700 mb-3">Machine Learning Design</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Models chosen for context and risk</li>
              <li>Assumptions and limits made explicit</li>
              <li>Evaluation beyond accuracy alone</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-700 mb-3">Production & Governance</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Monitoring for drift and failure modes</li>
              <li>Rollback paths and escalation logic</li>
              <li>Governance that scales with use</li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-700 mb-3">Workflow Integration</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Embedding outputs into real processes</li>
              <li>Human-in-the-loop checkpoints</li>
              <li>Clear guidance on when to trust or question outputs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Case Vignette</h2>
        <h3 className="text-xl font-medium text-gray-800 mb-4">“We had dashboards everywhere — and clarity nowhere”</h3>
        <div className="space-y-3 text-lg">
          <p><strong>Situation:</strong> Multiple teams produced analytics, but decisions stalled.</p>
          <p><strong>What changed:</strong> We redesigned how data entered one recurring decision and clarified ownership.</p>
          <p><strong>Result:</strong> Meetings shortened. Decisions sped up. Dashboards finally mattered.</p>
        </div>
      </section>
    </div>
  );
}
