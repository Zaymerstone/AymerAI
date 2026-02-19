import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Search, BookOpen, Shield, ArrowRight, CheckCircle } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border/50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">AymerAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {["features", "pricing", "about"].map((id) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-foreground transition-colors capitalize"
              >
                {id}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            AI-Powered Legal Research
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Legal research,
            <br />
            <span className="text-primary">structured & precise.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            AymerAI reads legal documents and delivers structured, citation-backed answers to your legal questions. Built for professionals who demand precision.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/register">
                Start Researching
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/50 bg-card/50 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Capabilities</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Research with confidence
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Structured Analysis",
                desc: "Receive responses formatted as legal memos — Issue, Applicable Law, Cases, Analysis, and Conclusion.",
              },
              {
                icon: FileText,
                title: "Document Intelligence",
                desc: "Upload legal documents and let AymerAI extract relevant insights and cross-reference with your queries.",
              },
              {
                icon: BookOpen,
                title: "Research History",
                desc: "Every session is saved and organized. Revisit past analyses and build upon previous research.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border/50 bg-card p-8 transition-colors hover:border-border"
              >
                <feature.icon className="h-5 w-5 text-muted-foreground" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border/50 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Plans</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Simple, transparent pricing
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Free */}
            <div className="rounded-lg border border-border/50 bg-card p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Free</p>
              <p className="mt-4 font-serif text-4xl font-bold text-foreground">$0</p>
              <p className="mt-1 text-sm text-muted-foreground">per month</p>
              <ul className="mt-8 space-y-3">
                {["10 research queries / month", "3 document uploads", "Standard AI responses", "Basic research history"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
            {/* Pro */}
            <div className="rounded-lg border border-primary/30 bg-card p-8 ring-1 ring-primary/10">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Pro</p>
              <p className="mt-4 font-serif text-4xl font-bold text-foreground">$49</p>
              <p className="mt-1 text-sm text-muted-foreground">per month</p>
              <ul className="mt-8 space-y-3">
                {["Unlimited research queries", "Unlimited document uploads", "Priority AI processing", "Advanced structured responses", "Full research history", "Citation validation"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" asChild>
                <Link to="/register">Upgrade to Pro</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About / Footer */}
      <footer id="about" className="border-t border-border/50 py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-muted-foreground" />
            <span className="font-serif text-sm text-muted-foreground">AymerAI</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Shield className="h-3 w-3" />
            <span>Enterprise-grade security. Your data stays yours.</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 AymerAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
