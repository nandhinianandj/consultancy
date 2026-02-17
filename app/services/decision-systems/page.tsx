import Link from 'next/link';

export default function DecisionSystemsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/" className="text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
      
      <h1 className="text-4xl font-bold mb-4">Decision Systems & Org Design</h1>
      <p className="text-2xl text-gray-600 mb-12">Making decision-making visible and improvable</p>

      <div className="space-y-6 text-lg">
        <p>Most organizations rely on implicit decision rules: who decides, what counts as evidence, and how trade-offs are handled. When those rules stay implicit, decisions stall or repeat.</p>
        <p className="font-medium bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">This work makes them explicit.</p>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">The Core Idea</h2>
        <p className="text-lg">Most decision problems aren’t disagreements about goals — they’re disagreements about process.</p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8">What This Involves</h2>
        <ul className="list-disc list-inside space-y-4 text-lg bg-white p-6 rounded-lg shadow-sm border">
          <li>Mapping how key decisions are actually made</li>
          <li>Identifying breakdowns in information, authority, or incentives</li>
          <li>Redesigning decision rights and escalation paths</li>
          <li>Aligning metrics with real priorities</li>
        </ul>
        <p className="mt-6 text-lg">This work combines analysis with structured conversations.</p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8">Outcomes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-800">Clearer Ownership</h3>
            <p className="mt-2 text-gray-700">Everyone knows who holds the decision.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-800">Faster Alignment</h3>
            <p className="mt-2 text-gray-700">Fewer stalled discussions and "meeting after the meeting."</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-800">Execution</h3>
            <p className="mt-2 text-gray-700">Decisions that survive contact with reality.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t pt-12">
        <h2 className="text-3xl font-semibold mb-6">Engagement Models</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Project-Based</h3>
            <p className="text-gray-600 mb-4">Focused intervention on a specific stalled decision or broken process.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Diagnostic & Mapping</li>
              <li>Process Redesign</li>
              <li>Implementation Support</li>
            </ul>
          </div>
          <div className="border p-6 rounded-lg bg-white shadow-sm border-blue-200 bg-blue-50">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Retainer / Advisory</h3>
            <p className="text-blue-800 mb-4">Ongoing guidance for leadership teams navigating complex shifts.</p>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Real-time sounding board for critical choices</li>
              <li>Reviewing decision architecture before launch</li>
              <li>"Shadow" support for Chief Data/AI Officers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t pt-12">
        <h2 className="text-3xl font-semibold mb-6">Pricing & Commitment (Retainer)</h2>
        <div className="bg-gray-50 border rounded-xl p-8 space-y-8">
          <div>
            <p className="text-lg text-gray-700">
              This work is offered on a retainer basis, reflecting that its value lies in <strong>availability, continuity, and trust</strong>, rather than in deliverables or hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Individual Containment</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">$1,500 – $3,000 <span className="text-base text-gray-500 font-normal">/ month</span></div>
              <p className="text-sm text-gray-600">Depending on frequency and depth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Small Group / Leadership Circle</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">$3,000 – $6,000 <span className="text-base text-gray-500 font-normal">/ month</span></div>
              <p className="text-sm text-gray-600">Depending on group size and scope.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-900">What engagements typically involve:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>2–4 conversations per month (individual or small-group settings)</li>
              <li>Focus on pre-decision and sensemaking moments only</li>
              <li>Very few concurrent engagements are taken to protect quality</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-blue-900 text-sm">
            <p className="font-medium mb-2">A Note on Mutual Commitment</p>
            <p className="mb-2">
              Pricing is discussed openly during an initial conversation and adjusted based on the nature of the questions being held and the level of ongoing involvement.
            </p>
            <p>
              If the terms don’t feel sustainable or aligned on either side, we don’t proceed. This is a mutual commitment to protect a shared thinking space.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Case Vignette</h2>
        <h3 className="text-xl font-medium text-gray-800 mb-4">“Everyone agreed — and nothing changed”</h3>
        <div className="space-y-3 text-lg">
          <p><strong>Situation:</strong> A leadership team left meetings aligned, but execution didn’t improve.</p>
          <p><strong>What we found:</strong> Decision ownership was never explicit.</p>
          <p><strong>What changed:</strong> We redesigned the decision process around one critical choice.</p>
          <p><strong>Result:</strong> Follow-through improved without adding oversight.</p>
        </div>
      </section>

      <section className="mt-16 mb-8">
        <h3 className="text-2xl font-semibold">How to start</h3>
        <blockquote className="mt-6 border-l-4 border-blue-500 pl-6 italic text-xl text-gray-700 bg-gray-50 py-4 pr-4 rounded-r-lg">
          “Which decision keeps coming back — without improving?”
        </blockquote>
      </section>
    </div>
  );
}
