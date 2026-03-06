import { AgentActionPanel } from "../components/AgentActionPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-[#ffe6d8] text-zinc-900">
      <main className="flex min-h-screen w-full flex-col gap-12 px-6 py-12 sm:px-10 lg:px-16 lg:max-w-[1600px] lg:mx-auto">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[#fb7232]/30 bg-white px-5 py-2 shadow-sm">
              <span className="text-2xl font-black tracking-tight text-[#fb7232]">DocuGenix</span>
            </div>
            <p className="text-sm font-medium text-[#c75829] sm:text-base">
              AI Documentation Writer — Minimal Next.js SaaS starter for devs & startups.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end w-full sm:w-auto">
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center rounded-full border border-[#fb7232]/30 bg-white px-4 py-2 text-sm font-semibold text-[#c75829] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              How it works
            </a>
            <a
              href="mailto:hi@chirag.co"
              className="w-full sm:w-auto text-center rounded-full bg-[#fb7232] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md"
            >
              Contact
            </a>
          </div>
        </header>

        <section className="grid min-h-[520px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232] shadow-sm">
              AI-powered Docs for Developers
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#3f1b08] sm:text-5xl">
              Generate product documentation instantly<br className="hidden sm:block" /> from a single feature description.
            </h1>
            <p className="max-w-3xl text-lg leading-7 text-zinc-700">
              DocuGenix uses AI to turn your raw product requirements or feature briefs into ready-to-use documentation sections. Skip the blank page—focus your team on building, not writing docs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4 w-full">
              <a
                href="#features"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[#fb7232] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md"
              >
                Explore features
              </a>
              <a
                href="#how-it-works"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-[#fb7232]/30 bg-white px-5 py-3 text-sm font-semibold text-[#c75829] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#fb7232]/30 bg-white shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffe7dd] via-white to-[#ffd9c6] opacity-70" aria-hidden />
            <div className="relative grid gap-4 p-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#fb7232]/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#fb7232]">AI Docs</p>
                <p className="mt-2 text-base font-semibold text-[#4b1f0a]">Automatic section creation</p>
                <p className="text-sm text-zinc-600">Paste any feature description, let DocuGenix generate your product docs in moments.</p>
              </div>
              <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#fb7232]/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#fb7232]">For Developers</p>
                <p className="mt-2 text-base font-semibold text-[#4b1f0a]">Built for productivity</p>
                <p className="text-sm text-zinc-600">No context switching—just enter, generate, and copy docs. Designed for busy product teams and startups.</p>
              </div>
              <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#fb7232]/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#fb7232]">Zero Setup</p>
                <p className="mt-2 text-base font-semibold text-[#4b1f0a]">Instant SaaS starter</p>
                <p className="text-sm text-zinc-600">Minimal Next.js stack, TypeScript, Docker & dev supervision out of the box.</p>
              </div>
              <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#fb7232]/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#fb7232]">Scalable</p>
                <p className="mt-2 text-base font-semibold text-[#4b1f0a]">Ready to extend</p>
                <p className="text-sm text-zinc-600">Layer in APIs, dashboard, or custom workflows as your product grows—keep your docs in sync.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="rounded-2xl border border-[#fb7232]/20 bg-white/80 px-6 py-8 shadow-sm sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">How DocuGenix Works</p>
              <h3 className="text-xl font-bold text-[#341404]">Your workflow: describe — generate — use 📄</h3>
              <ol className="list-decimal pl-4 text-sm text-[#6a3515] space-y-1">
                <li>Paste or describe your new feature, change, or workflow.</li>
                <li>Click <span className="font-semibold text-[#fb7232]">Generate Docs</span> to run the AI writer.</li>
                <li>Copy your ready-to-use documentation section directly into your codebase, changelog, or wiki.</li>
              </ol>
              <p className="text-xs text-zinc-600 pt-2">No sign-up, setup, or context switching required.</p>
            </div>
            <div className="w-full max-w-xl">
              <AgentActionPanel />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="rounded-2xl border border-[#fb7232]/15 bg-gradient-to-br from-white via-[#fff5ee] to-white px-6 py-12 text-[#33170a] shadow-sm sm:px-12"
        >
          <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Why DocuGenix?</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Instant docs. Zero overhead. Fully extensible.</h2>
              <p className="text-base text-[#6a3515]">
                Plug and play for MVPs and SaaS teams. DocuGenix ships with developer defaults and is designed to grow—activate APIs, dashboards, or full backend integration whenever you’re ready.
              </p>
            </div>

            <div className="grid gap-4 rounded-xl border border-[#fb7232]/20 bg-white/80 p-6 text-sm shadow-sm sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c75829]">Resources</p>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="mailto:hi@chirag.co">
                  Support
                </a>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="https://github.com/">
                  GitHub
                </a>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="https://vercel.com/changelog">
                  Changelog
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c75829]">Product</p>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="#how-it-works">
                  How it works
                </a>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="#features">
                  Features
                </a>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="mailto:hi@chirag.co">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-[#fb7232]/15 pt-6 text-center text-xs text-[#6a3515]">
            <span>
              DocuGenix by Chirag Dodiya (hi@chirag.co) • MIT licensed • Ready to launch
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}