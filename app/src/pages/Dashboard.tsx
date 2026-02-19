import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Scale,
  Plus,
  FileText,
  Clock,
  Settings,
  CreditCard,
  Upload,
  Search,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const mockHistory = [
  { id: "1", title: "Contract liability under UCC Article 2", date: "Feb 18, 2026" },
  { id: "2", title: "Employment discrimination burden of proof", date: "Feb 17, 2026" },
  { id: "3", title: "GDPR data processing obligations", date: "Feb 15, 2026" },
];

const mockDocuments = [
  { id: "1", name: "Employment_Agreement_2026.pdf", size: "2.4 MB" },
  { id: "2", name: "NDA_Template.pdf", size: "1.1 MB" },
];

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleAnalyze = () => {
    if (query.trim()) {
      setShowResult(true);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="flex w-72 shrink-0 flex-col border-r border-border bg-card">
          <div className="flex h-14 items-center justify-between border-b border-border px-4">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-foreground" />
              <span className="font-serif text-base font-semibold text-foreground">AymerAI</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-3">
            <Button className="w-full justify-start gap-2" size="sm" onClick={() => { setQuery(""); setShowResult(false); }}>
              <Plus className="h-4 w-4" />
              New Research
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto px-3">
            {/* History */}
            <div className="mb-6">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <Clock className="h-3 w-3" /> History
              </p>
              <div className="space-y-1">
                {mockHistory.map((item) => (
                  <button
                    key={item.id}
                    className="w-full rounded-md px-2.5 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <p className="truncate">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground/60">{item.date}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="mb-6">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <FileText className="h-3 w-3" /> Documents
              </p>
              <div className="space-y-1">
                {mockDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between rounded-md px-2.5 py-2 text-sm text-muted-foreground hover:bg-accent"
                  >
                    <span className="truncate">{doc.name}</span>
                    <span className="ml-2 shrink-0 text-xs text-muted-foreground/50">{doc.size}</span>
                  </div>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="mt-2 w-full justify-start gap-2 text-muted-foreground">
                <Upload className="h-3.5 w-3.5" />
                Upload Document
              </Button>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-border p-3 space-y-1">
            {/* Usage */}
            <div className="rounded-md bg-accent/50 p-3 mb-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Free Plan</span>
                <span>3 / 10 queries</span>
              </div>
              <Progress value={30} className="mt-2 h-1.5" />
              <Button variant="ghost" size="sm" className="mt-2 h-7 w-full justify-start gap-1.5 text-xs text-muted-foreground">
                <CreditCard className="h-3 w-3" />
                Upgrade to Pro
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground">
              <Settings className="h-3.5 w-3.5" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground" asChild>
              <Link to="/">
                <LogOut className="h-3.5 w-3.5" />
                Sign Out
              </Link>
            </Button>
          </div>
        </aside>
      )}

      {/* Main content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex h-14 items-center border-b border-border px-4">
          {!sidebarOpen && (
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="mr-3">
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
          <h2 className="font-serif text-base font-medium text-foreground">Research Workspace</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {!showResult ? (
            /* Query input state */
            <div className="mx-auto max-w-2xl pt-16 md:pt-24">
              <h1 className="text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
                What legal question can I research for you?
              </h1>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Ask a legal research question and receive a structured, citation-backed analysis.
              </p>
              <div className="mt-10">
                <Textarea
                  placeholder="e.g. What are the legal requirements for enforcing a non-compete clause in California?"
                  className="min-h-[120px] resize-none text-sm"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
                    <Upload className="h-3.5 w-3.5" />
                    Attach Document
                  </Button>
                  <Button onClick={handleAnalyze} disabled={!query.trim()} className="gap-2">
                    <Search className="h-4 w-4" />
                    Analyze
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Response state */
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Research Query</p>
                <p className="mt-2 font-serif text-lg text-foreground">{query}</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Issue",
                    content:
                      "Whether non-compete clauses are enforceable under California law, and what exceptions may apply.",
                  },
                  {
                    label: "Applicable Law",
                    content:
                      "California Business and Professions Code § 16600 — \"Except as provided in this chapter, every contract by which anyone is restrained from engaging in a lawful profession, trade, or business of any kind is to that extent void.\"",
                  },
                  {
                    label: "Relevant Cases",
                    content:
                      "Edwards v. Arthur Andersen LLP (2008) 44 Cal.4th 937 — The California Supreme Court confirmed that non-compete agreements are void under § 16600, with narrow statutory exceptions.\n\nThe Retirement Group v. Galante (2009) — Extended the prohibition to former employees.",
                  },
                  {
                    label: "Legal Analysis",
                    content:
                      "California maintains one of the strongest prohibitions against non-compete clauses in the United States. Under § 16600, any agreement that restricts a person's ability to engage in a lawful profession is void, regardless of how narrowly tailored it may be. The Edwards decision clarified that California courts will not apply a \"reasonableness\" standard to non-compete agreements, as some other jurisdictions do.",
                  },
                  {
                    label: "Conclusion",
                    content:
                      "Non-compete clauses are generally unenforceable in California. The only recognized exceptions involve the sale of a business (§ 16601), dissolution of a partnership (§ 16602), or dissolution of an LLC (§ 16602.5). Any non-compete clause outside these narrow exceptions would be deemed void under California law.",
                  },
                  {
                    label: "Sources & Citations",
                    content:
                      "• Cal. Bus. & Prof. Code § 16600\n• Cal. Bus. & Prof. Code §§ 16601–16602.5\n• Edwards v. Arthur Andersen LLP, 44 Cal.4th 937 (2008)\n• The Retirement Group v. Galante, 176 Cal. App. 4th 1226 (2009)",
                  },
                ].map((section) => (
                  <div key={section.label} className="rounded-lg border border-border bg-card p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {section.label}
                    </p>
                    <div className="whitespace-pre-wrap font-serif text-sm leading-relaxed text-foreground/90">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setQuery("");
                    setShowResult(false);
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  New Research
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
