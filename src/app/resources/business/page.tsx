import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin for Businesses | Resources | Columbia, SC Bitcoin",
  description:
    "A practical guide to helping businesses accept Bitcoin — payment processors, implementation steps, staff training, tax considerations, and success stories from merchants who made it work.",
  alternates: { canonical: "/resources/business" },
  openGraph: {
    title: "Bitcoin for Businesses | Columbia, SC Bitcoin",
    description: "Tips, tools, and a step-by-step guide for businesses ready to accept Bitcoin.",
    url: "/resources/business",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin for Businesses | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin for Businesses | Columbia, SC Bitcoin" }],
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

const whyAccept = [
  {
    icon: "🚫",
    label: "No Chargebacks",
    desc: "Bitcoin transactions are final. Unlike credit cards, there is no chargeback mechanism — merchants cannot lose a sale weeks after it completed to a fraudulent dispute. This alone saves some businesses 1–3% in fraud losses.",
  },
  {
    icon: "🌍",
    label: "Global Customers",
    desc: "Anyone on earth with a Lightning wallet can pay instantly, with no currency conversion friction. International customers don't need a bank account or payment service available in their country.",
  },
  {
    icon: "💸",
    label: "Lower Fees",
    desc: "Credit card processing fees average 1.5–3.5%. Lightning Network fees are fractions of a cent — regardless of transaction size. For small-ticket items, the savings compound quickly.",
  },
  {
    icon: "⚡",
    label: "Instant Settlement",
    desc: "Lightning payments settle in under a second and are immediately spendable. There's no multi-day ACH hold, no 'funds pending' window, and no processor holding your revenue.",
  },
  {
    icon: "🏷️",
    label: "Marketing Differentiation",
    desc: "Accepting Bitcoin is still a differentiator that attracts a growing, loyal customer base actively looking to spend bitcoin. Many Bitcoiners deliberately choose to patronize merchants who accept it.",
  },
  {
    icon: "📦",
    label: "Hold or Convert",
    desc: "Most payment processors offer automatic conversion to USD at the point of sale — you never have to hold bitcoin if you don't want to. Or keep a percentage as a long-term savings strategy.",
  },
];

const successStories = [
  {
    name: "Steak 'n Shake",
    type: "National Fast Food Chain",
    icon: "🍔",
    story: "Became one of the first major American fast-food chains to accept Bitcoin via Lightning at select locations. Partnered with Speed (tryspeed.com) to process Lightning payments at the register, allowing customers to pay with any Lightning wallet. A landmark moment for Bitcoin at the physical point of sale.",
    takeaway: "Speed's Lightning integration enabled Bitcoin acceptance at the point of sale with minimal infrastructure change.",
  },
  {
    name: "Shopify Merchants",
    type: "E-Commerce",
    icon: "🛒",
    story: "Thousands of Shopify stores accept Bitcoin via Strike's Shopify plugin or BTCPay Server's WooCommerce/Shopify integration. Setup takes under 30 minutes. Strike's integration converts to USD instantly, removing volatility risk for the merchant.",
    takeaway: "E-commerce onboarding is the easiest path — plugins handle everything automatically.",
  },
  {
    name: "BTCPay Server Merchants",
    type: "Self-Hosted Worldwide",
    icon: "🏪",
    story: "Over 10,000 merchants globally use BTCPay Server — from pizza shops and coffee roasters to hotels and software companies. Because it's self-hosted and open source, merchants pay zero processor fees. Many report doubling their Bitcoin revenue year over year as the customer base grows.",
    takeaway: "Zero fees and full custody of funds make BTCPay the sovereign merchant choice.",
  },
  {
    name: "Local Coffee Shops & Bars",
    type: "Small Business",
    icon: "☕",
    story: "Hundreds of small businesses — including several in the Carolinas — use simple setups: a Lightning wallet like Phoenix or a tablet running BTCPay Server. Staff show a QR code on a phone or tablet, customer pays, and the sale is done in seconds. No special hardware required.",
    takeaway: "A phone and a Lightning wallet is all you need to start accepting bitcoin today.",
  },
  {
    name: "Columbia / Midlands Business — Coming Soon",
    type: "Local Success Story",
    icon: "📍",
    story: "Know a local Columbia or Midlands business that accepts Bitcoin? We'd love to feature their story here. Real local examples are the most persuasive case for other South Carolina business owners considering Bitcoin.",
    takeaway: "Reach out via the Contact page to share a local merchant story.",
  },
];

const processors = [
  {
    name: "BTCPay Server",
    type: "Self-Hosted",
    typeColor: "bg-primary/10 text-primary",
    fees: "0% — you pay only network fees",
    onchain: true,
    lightning: true,
    custodial: false,
    pros: ["No fees", "Full custody of funds", "Supports on-chain + Lightning", "Open-source, free forever", "Plugins for Shopify, WooCommerce, Wix, and more"],
    cons: ["Requires a server to host (or use a BTCPay host provider)", "More technical setup"],
    link: "https://btcpayserver.org",
    best: "Any serious merchant who wants full control and zero fees",
  },
  {
    name: "Strike for Business",
    type: "Hosted — Lightning focus",
    typeColor: "bg-emerald-500/10 text-emerald-600",
    fees: "0% on Lightning; 1% on-chain conversion",
    onchain: false,
    lightning: true,
    custodial: true,
    pros: ["Free Lightning payments", "Instant USD conversion", "Shopify and WooCommerce plugins", "Simple merchant dashboard", "Excellent mobile POS experience"],
    cons: ["KYC required", "Custodial — Strike holds funds until you cash out", "US-focused"],
    link: "https://strike.me/business",
    best: "US merchants wanting instant Lightning acceptance with USD settlement",
  },
  {
    name: "OpenNode",
    type: "Hosted — Full-featured",
    typeColor: "bg-cyan-400/10 text-cyan-400",
    fees: "1% per transaction",
    onchain: true,
    lightning: true,
    custodial: true,
    pros: ["Supports on-chain + Lightning", "Easy API and plugins", "International support", "Auto-convert available"],
    cons: ["1% fee adds up at volume", "Custodial", "KYC required"],
    link: "https://opennode.com",
    best: "Merchants wanting an easy hosted setup with strong documentation",
  },
  {
    name: "Alby",
    type: "Hosted — Online / API",
    typeColor: "bg-yellow-500/10 text-yellow-600",
    fees: "0% (with own node); small fee on hosted accounts",
    onchain: false,
    lightning: true,
    custodial: false,
    pros: ["Lightning-native with LNURL support", "Easy tip buttons and paywalls", "Great for creators and content sites", "Connect your own node"],
    cons: ["Lightning only — no on-chain", "Less suited for high-volume retail"],
    link: "https://getalby.com",
    best: "Online creators, newsletters, podcasters, and websites accepting tips/donations",
  },
  {
    name: "Square (Seller POS)",
    type: "Integrated POS",
    typeColor: "bg-slate-500/10 text-slate-500",
    fees: "Varies by plan",
    onchain: false,
    lightning: true,
    custodial: true,
    pros: ["Familiar POS hardware businesses already use", "Lightning support built in", "No new equipment needed"],
    cons: ["Tied to Square's ecosystem", "Fees still apply", "Limited Bitcoin-specific features"],
    link: "https://squareup.com",
    best: "Existing Square merchants wanting to add Lightning with zero hardware change",
  },
];

const implementationSteps = [
  {
    title: "Assess the business's needs",
    desc: "In-person only? Online? Both? High volume or occasional transactions? Lightning is best for in-person; BTCPay handles both. Understanding the business model determines which processor fits.",
  },
  {
    title: "Choose a payment processor",
    desc: "For most small businesses starting out: Strike for Business (US, easiest) or BTCPay Server (free, full control). For online stores: BTCPay's Shopify/WooCommerce plugin or Strike's e-commerce integrations.",
  },
  {
    title: "Set up a merchant wallet",
    desc: "If using a self-custody setup, the merchant needs a Lightning wallet to receive payments. Phoenix or Breez for easy self-custody. For BTCPay, connect to a Lightning node (Umbrel makes this easy).",
  },
  {
    title: "Configure USD conversion (optional)",
    desc: "Most processors offer automatic conversion to USD at the point of sale. This removes bitcoin price volatility for the merchant entirely. Alternatively, hold a percentage as a savings strategy.",
  },
  {
    title: "Create a payment point",
    desc: "In-person: a tablet or phone displaying a BTCPay Point of Sale or Strike's merchant app — customers scan a QR code and pay. Online: a payment button or plugin on the website.",
  },
  {
    title: "Train staff",
    desc: "Staff need to know two things: how to open a payment request, and how to confirm it's settled. Lightning payments confirm in under a second — tell staff to look for the green checkmark before handing over the goods.",
  },
  {
    title: "Promote it",
    desc: "Add a 'Bitcoin Accepted Here' sign (print a BTCMap sign or search for Bitcoin merchant stickers online). Submit the business to BTCMap.org so it shows up on Bitcoin Maps globally. Announce it on social media.",
  },
  {
    title: "Handle accounting",
    desc: "Bitcoin received must be recorded at its USD fair market value on the date of receipt. A CPA familiar with crypto is helpful. Most processors provide CSV export reports. Consult a tax professional for your specific situation.",
  },
];

const staffTips = [
  "Keep a test transaction QR code on hand — let curious staff pay each other a few sats to get comfortable",
  "Lightning payments confirm instantly — no need to wait like you would for a card to process",
  "The green checkmark / confirmation sound is the signal — don't release the product before seeing it",
  "If a customer's payment fails, have them try a different wallet app or switch to on-chain as fallback",
  "Post a simple one-page 'How to Pay with Bitcoin' card near the register for curious customers",
  "Remind staff that Bitcoin payments are final — there are no refunds via the payment itself (issue store credit instead)",
];

const resources = [
  { label: "BTCPay Server", href: "https://btcpayserver.org", desc: "Open-source, self-hosted payment processor. Zero fees." },
  { label: "Strike for Business", href: "https://strike.me/business", desc: "Free Lightning merchant account with USD settlement." },
  { label: "OpenNode", href: "https://opennode.com", desc: "Hosted Bitcoin/Lightning payment processor." },
  { label: "BTCMap — Add Your Business", href: "https://btcmap.org/add-location", desc: "Get listed on the global Bitcoin merchant map." },
  { label: "Lopp.net — Bitcoin Merchant Guide", href: "https://www.lopp.net/bitcoin-information/merchant-adoption.html", desc: "Jameson Lopp's curated list of merchant tools and resources." },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Accept Bitcoin at Your Business",
  description:
    "A step-by-step guide for businesses to start accepting Bitcoin and Lightning Network payments.",
  step: implementationSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.desc,
  })),
};

export default function BusinessPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin for Businesses — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <Link
              href="/resources/learn"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              All Learn Topics
            </Link>

            <div className="mb-14">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 mb-4">
                Commerce
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Bitcoin for Businesses
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A practical guide to helping businesses in your community accept Bitcoin — from the first conversation to the first sale.
              </p>
            </div>

            <div className="space-y-16">

              {/* Why Accept */}
              <section>
                <SectionLabel>The Case</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Businesses Should Accept Bitcoin</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whyAccept.map((r) => (
                    <div key={r.label} className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/20 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl leading-none">{r.icon}</span>
                        <h4 className="font-semibold text-foreground text-sm">{r.label}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Success Stories */}
              <section>
                <SectionLabel>Proof It Works</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Success Stories</h3>
                <div className="space-y-4">
                  {successStories.map((s) => (
                    <div key={s.name} className="bg-card border border-border rounded-xl p-6 shadow-card">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl leading-none flex-shrink-0">{s.icon}</span>
                        <div>
                          <h4 className="font-semibold text-foreground">{s.name}</h4>
                          <p className="text-xs text-muted-foreground">{s.type}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.story}</p>
                      <div className="bg-primary/5 border border-primary/10 rounded-lg px-4 py-2">
                        <p className="text-xs text-foreground">
                          <span className="font-semibold text-primary">Key takeaway:</span> {s.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Payment Processors */}
              <section>
                <SectionLabel>Tools</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-4">Choose a Payment Processor</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  The right processor depends on the business&apos;s technical comfort, whether they want self-custody, and their transaction volume. Here&apos;s how the main options compare.
                </p>
                <div className="space-y-4">
                  {processors.map((p) => (
                    <div key={p.name} className="bg-card border border-border rounded-xl p-6 shadow-card">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h4 className="font-semibold text-foreground text-base">{p.name}</h4>
                          <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1 ${p.typeColor}`}>{p.type}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Fees</p>
                          <p className="text-sm font-semibold text-foreground">{p.fees}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mb-4 flex-wrap">
                        {p.onchain && <span className="text-xs px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground">On-chain ✓</span>}
                        {p.lightning && <span className="text-xs px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground">Lightning ⚡</span>}
                        {!p.custodial && <span className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600">Non-custodial</span>}
                        {p.custodial && <span className="text-xs px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-600">Custodial</span>}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mb-4">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Pros</p>
                          <ul className="space-y-1">
                            {p.pros.map((pro) => (
                              <li key={pro} className="flex gap-1.5 text-xs text-muted-foreground">
                                <span className="text-emerald-500 flex-shrink-0">✓</span>{pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Cons</p>
                          <ul className="space-y-1">
                            {p.cons.map((con) => (
                              <li key={con} className="flex gap-1.5 text-xs text-muted-foreground">
                                <span className="text-muted-foreground flex-shrink-0">–</span>{con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                        <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Best for:</span> {p.best}</p>
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium flex-shrink-0 transition-colors">
                          Visit <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Steps */}
              <section>
                <SectionLabel>Step by Step</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Implementation Guide</h3>
                <div className="space-y-3">
                  {implementationSteps.map((s, i) => (
                    <div key={s.title} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{s.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Staff Training */}
              <section>
                <SectionLabel>Operations</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Staff Training Tips</h3>
                <div className="space-y-2">
                  {staffTips.map((tip) => (
                    <div key={tip} className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4 shadow-card">
                      <span className="text-primary flex-shrink-0 mt-0.5">→</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tax & Accounting */}
              <section>
                <SectionLabel>Compliance</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-4">Tax & Accounting Notes</h3>
                <div className="space-y-3">
                  {[
                    { title: "Record the USD value at time of receipt", desc: "Bitcoin received in exchange for goods or services is taxable income at its fair market value (in USD) on the date received. Most processors report this automatically." },
                    { title: "If you hold bitcoin, a disposal event occurs later", desc: "When you eventually convert held bitcoin to USD (or spend it), you may owe capital gains tax on any appreciation since you received it. A CPA familiar with crypto is essential." },
                    { title: "Processors that auto-convert sidestep this complexity", desc: "If your processor (Strike, OpenNode) converts to USD at point of sale, your tax treatment is straightforward: it's just revenue, no different from a credit card sale." },
                    { title: "Consult a professional", desc: "Tax treatment of Bitcoin varies by jurisdiction and situation. This is general information, not tax advice. Speak with a CPA before making decisions about holding vs. converting." },
                  ].map((item) => (
                    <div key={item.title} className="bg-card border border-border rounded-xl p-5 shadow-card">
                      <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* We Can Help */}
              <section>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-7 text-center">
                  <p className="text-xl font-bold text-foreground mb-3">Know a local business interested in Bitcoin?</p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto mb-5">
                    Bring them to our monthly meetup or reach out to us directly. We&apos;ll walk them through a demo, answer questions, and help with setup — no obligation.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-orange text-sm font-semibold">
                    Get in Touch →
                  </Link>
                </div>
              </section>

              {/* Resources */}
              <section>
                <SectionLabel>Go Deeper</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Merchant Resources</h3>
                <div className="space-y-3">
                  {resources.map((r) => (
                    <a
                      key={r.label}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-200 group"
                    >
                      <div>
                        <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{r.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </section>
      </div>

      <RelatedPages current="/resources/business" />
      <Footer />
    </main>
  );
}
