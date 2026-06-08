export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Technical Recruiters & Hiring Managers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Score Developer Portfolios{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste a GitHub profile or personal website URL and get an instant AI-powered hiring score — covering technical skills, project quality, and overall potential.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Scoring for $18/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { title: "GitHub Analysis", desc: "Repos, stars, commit history, language diversity" },
          { title: "Site Scraping", desc: "Personal sites, blogs, and project showcases" },
          { title: "AI Scoring", desc: "Structured hiring scores with actionable insights" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-wide text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited portfolio analyses",
              "GitHub + website scraping",
              "AI hiring score & breakdown",
              "Recruiter dashboard",
              "Export reports as PDF",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What does the portfolio scorer analyze?",
              a: "It analyzes GitHub profiles (repositories, stars, commit frequency, languages) and personal websites or portfolio sites, then uses AI to generate a structured hiring score with detailed breakdowns."
            },
            {
              q: "How accurate are the hiring scores?",
              a: "Scores are based on objective signals like code quality indicators, project complexity, and activity patterns. They're designed to supplement — not replace — human judgment, giving recruiters a fast first-pass filter."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal. You'll retain access until the end of your current billing period with no additional charges."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} Candidate Portfolio Scorer. All rights reserved.
      </footer>
    </main>
  );
}
