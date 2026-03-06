"use client";

import { AgentActionPanel } from "../components/AgentActionPanel";
import React from "react";
import { generateDocumentation } from "./actions/generateDocumentation";

export default function Home() {
  // Client UI state managed via form+ref
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [output, setOutput] = React.useState<string | null>(null);
  const [copied, setCopied] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onGenerate(formData: FormData) {
    setOutput(null);
    setError(null);
    setPending(true);
    setCopied(false);
    const res = await generateDocumentation(formData);
    if (res.error) setError(res.error);
    if (res.result) setOutput(res.result);
    setPending(false);
  }

  async function handleCopy() {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // ignore copy error
      }
    }
  }

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
                href="#docugenix-features"
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

          <div className="relative overflow-hidden rounded-2xl border border-[#fb7232]/30 bg-white shadow-md flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffe7dd] via-white to-[#ffd9c6] opacity-70" aria-hidden />
            <div className="relative p-6 flex flex-col gap-3">
              <form
                ref={formRef}
                className="space-y-3"
                action={async (formData) => {
                  onGenerate(formData);
                }}
              >
                <label htmlFor="featureDescription" className="block text-sm font-semibold text-[#a9511c]">
                  Try it now: Generate AI docs from any feature description
                </label>
                <textarea
                  id="featureDescription"
                  name="featureDescription"
                  rows={5}
                  placeholder="e.g. Allow users to sign in with Google. System should verify the Google account, create a new user if not present, and redirect to their dashboard."
                  className="block w-full rounded-lg border border-[#fb7232]/30 bg-[#fffaf7] p-3 text-sm text-zinc-800 focus:border-[#fb7232] focus:ring-2 focus:ring-[#fb7232]/40"
                  minLength={10}
                  maxLength={1000}
                  required
                  disabled={pending}
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#fb7232] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md disabled:bg-[#ffe7dd] disabled:text-[#fb7232] disabled:cursor-not-allowed"
                >
                  {pending ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12z"/>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    "Generate Docs"
                  )}
                </button>
              </form>
              {error && (
                <div className="text-xs p-2 mt-1 rounded bg-[#ffe7dd] text-[#a53a0d] border border-[#fb7232]/20">{error}</div>
              )}
              {output && (
                <div className="w-full mt-3 bg-[#fffaf7] border border-[#fb7232]/20 rounded-lg p-4 shadow-xs overflow-x-auto relative">
                  <div className="absolute top-2 right-2">
                    <button
                      className="text-xs rounded px-2 py-1 bg-[#fb7232]/90 text-white font-semibold shadow hover:bg-[#c75829] transition"
                      title="Copy to clipboard"
                      onClick={handleCopy}
                      type="button"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap break-words text-sm text-zinc-800 font-mono">{output}</pre>
                </div>
              )}
            </div>
            <div className="relative mt-5 text-xs text-zinc-700 opacity-70">
              Powered by OpenAI. Feature descriptions sent through the OpenAI API for doc generation. No data stored. Requires <span className="font-semibold">OPENAI_API_KEY</span> in server environment.
            </div>
          </div>
        </section>

        <section
          id="docugenix-features"
          className="rounded-2xl border border-[#fb7232]/25 bg-white px-6 py-12 shadow-lg sm:px-10 mb-2"
          aria-labelledby="docugenix-features-heading"
        >
          <h2
            id="docugenix-features-heading"
            className="mb-6 text-center text-2xl sm:text-3xl font-black tracking-tight text-[#fb7232]"
          >
            AI Document Writer Features
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-zinc-700 text-base">
            Powerful AI tools for instant, reliable product docs—made for modern developer teams and fast-moving startups.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg bg-[#fff7f1] border border-[#fb7232]/15 p-6 shadow-sm flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#3f1b08]">AI-powered product docs</h3>
              <p className="text-sm text-zinc-700">Generate clear docs from any feature, spec, or user story using advanced language models.</p>
            </div>
            <div className="rounded-lg bg-[#fff7f1] border border-[#fb7232]/15 p-6 shadow-sm flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#3f1b08]">Automatic outlines & sections</h3>
              <p className="text-sm text-zinc-700">Get detailed outlines, breakdowns, and separate documentation sections all from a single input.</p>
            </div>
            <div className="rounded-lg bg-[#fff7f1] border border-[#fb7232]/15 p-6 shadow-sm flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#3f1b08]">Smart formatting & markdown</h3>
              <p className="text-sm text-zinc-700">Docs come formatted—headings, bullet points, and markdown ready for developer wikis or repos.</p>
            </div>
            <div className="rounded-lg bg-[#fff7f1] border border-[#fb7232]/15 p-6 shadow-sm flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#3f1b08]">Instant changelogs/usage guides</h3>
              <p className="text-sm text-zinc-700">Quickly create sectioned changelogs and step-by-step usage guides for new releases or features.</p>
            </div>
            <div className="rounded-lg bg-[#fff7f1] border border-[#fb7232]/15 p-6 shadow-sm flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#3f1b08]">Works with any stack</h3>
              <p className="text-sm text-zinc-700">No integrations required—use it for any tech, language, or project type.</p>
            </div>
            <div className="rounded-lg bg-[#fff7f1] border border-[#fb7232]/15 p-6 shadow-sm flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#3f1b08]">One-click copy/export</h3>
              <p className="text-sm text-zinc-700">Copy output instantly or export to markdown for immediate integration into your workflow.</p>
            </div>
            <div className="rounded-lg bg-[#fff7f1] border border-[#fb7232]/15 p-6 shadow-sm flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#3f1b08]">Private by design</h3>
              <p className="text-sm text-zinc-700">No data stored, no accounts needed—your ideas and docs stay confidential by default.</p>
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