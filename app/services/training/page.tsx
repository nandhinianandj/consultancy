import Link from 'next/link';

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
      
      <h1 className="text-4xl font-bold mb-4">Training & Capability Building</h1>
      <p className="text-2xl text-gray-600 mb-12">Helping teams make progress when they’re under pressure to act</p>

      <div className="space-y-6 text-lg">
        <p>Most organizations don’t fail because they lack skill, data, or tools. They fail because decisions are made without shared understanding, goals are pursued before the problem is clear, and teams move fast without learning.</p>
        <p className="font-medium bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">This training improves how teams think, decide, and learn together.</p>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Core Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-700 mb-3">Process vs Goal</h3>
            <p className="text-gray-700">Goals matter, but rushing hides uncertainty. We train teams to slow down at the right moments, make reasoning visible, and build processes that survive shifting goals.</p>
          </div>
          <div className="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl text-blue-700 mb-3">Data vs Story</h3>
            <p className="text-gray-700">Data without story stalls action; story without data drifts. We train teams to move deliberately between the two, using data to test narratives and narratives to select data.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8">Training Streams</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="text-2xl font-bold text-gray-900">Decision & Data Practice</h3>
            <p className="italic text-gray-600 mt-1">Reasoning with evidence, uncertainty, and trade-offs</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Asking better questions of data/models</li>
              <li>Distinguishing signal from noise</li>
              <li>Explaining decisions clearly</li>
              <li>Revising conclusions when evidence changes</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-2">
            <h3 className="text-2xl font-bold text-gray-900">Collaboration & Sense-Making</h3>
            <p className="italic text-gray-600 mt-1">Deciding together under pressure</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Making decisions with incomplete info</li>
              <li>Negotiating trade-offs without forced consensus</li>
              <li>Clarifying decision ownership</li>
              <li>Reflecting on decision quality</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t pt-12">
        <h2 className="text-3xl font-semibold mb-6">New: 1-Week Intensive</h2>
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Re-Orienting to the World of Agents & Data</h3>
          <p className="text-lg text-blue-800 mb-6">
            A high-impact, in-person deep dive for leadership teams who need to reset their relationship with automated systems.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-xl text-blue-900 mb-2">What we cover</h4>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>Reality check: What AI agents actually do (vs marketing hype)</li>
                <li>Decision mapping for automated systems</li>
                <li>Hands-on simulation: Managing a "human + agent" workflow</li>
                <li>Governance that enables speed rather than blocking it</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-blue-900 mb-2">Why in-person?</h4>
              <p className="text-blue-800">
                Shift happens faster when you can't tab away. We use the physical environment to map out invisible digital flows, making abstract problems concrete and solvable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Case Vignette</h2>
        <h3 className="text-xl font-medium text-gray-800 mb-4">“We had the data — and still couldn’t decide”</h3>
        <div className="space-y-3 text-lg">
          <p><strong>Situation:</strong> A mid-sized organization had dashboards across teams, but meetings stalled.</p>
          <p><strong>Resolution:</strong> Through structured practice, the team learned to separate "what the data says" from "what we believe it means," enabling faster alignment.</p>
        </div>
      </section>
    </div>
  );
}
