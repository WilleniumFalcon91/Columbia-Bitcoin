const educationResources = [
  { icon: "❓", label: "Bitcoin FAQs", site: "bitcoin-resources.com/faq", href: "https://bitcoin-resources.com/faq/" },
  { icon: "📚", label: "Bitcoin Books", site: "bitcoin-resources.com/books", href: "https://bitcoin-resources.com/books/" },
  { icon: "📄", label: "Bitcoin Articles", site: "bitcoin-resources.com/articles", href: "https://bitcoin-resources.com/articles/" },
  { icon: "🎙️", label: "Bitcoin Podcasts", site: "bitcoin-resources.com/podcasts", href: "https://bitcoin-resources.com/podcasts/" },
  { icon: "🎬", label: "Bitcoin Videos", site: "bitcoin-resources.com/videos", href: "https://bitcoin-resources.com/videos/" },
  { icon: "📰", label: "Bitcoin News", site: "nobsbitcoin.com", href: "https://www.nobsbitcoin.com/" },
  { icon: "🔗", label: "Bitcoin Resources", site: "bitcoin-resources.com", href: "https://bitcoin-resources.com/" },
  { icon: "₿", label: "Bitcoin Only", site: "bitcoin-only.com", href: "https://bitcoin-only.com/" },
  { icon: null, imgSrc: "https://raw.githubusercontent.com/mbarulli/nostr-logo/refs/heads/main/PNG/nostr-icon-purple-transparent-256x256.png", label: "nostr", site: "nostr.com", href: "https://nostr.com/" },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Level Up
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated resources for every level — from newcomers to seasoned bitcoiners — plus slides from past meetups.
          </p>
        </div>

        {/* Bitcoin Education */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">Bitcoin Education</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationResources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-150 group"
              >
                {r.imgSrc ? (
                  <img src={r.imgSrc} alt={r.label} className="w-8 h-8 flex-shrink-0 object-contain" />
                ) : (
                  <span className="text-2xl flex-shrink-0">{r.icon}</span>
                )}
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors truncate">
                    {r.label}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{r.site}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
