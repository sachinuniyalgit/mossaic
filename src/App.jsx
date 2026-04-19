import React, { useEffect, useRef, useState } from 'react';

const heroImage = '/hero-mountains.jpg';

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Partners', target: 'partners' },
  { label: 'Policy', target: 'policy' },
];

const glanceItems = [
  {
    title: 'Who We Are',
    description:
      'A transdisciplinary team of scientists, researchers, and local practitioners dedicated to the Integrated Development of mountain regions. We believe the most effective solutions for the Himalayas are those co-developed with the people who call them home.',
  },
  {
    title: 'What We Do',
    description:
      'We transform place-based research into actionable policy and resilient infrastructure. Our work focuses on the intersection of ecological health, water security, and disaster risk reduction.',
  },
  {
    title: 'Our Vision',
    description:
      'A future where mountain regions are ecologically secure, socially inclusive, and economically resilient — supported by informed policies, empowered communities, and the sustainable use of land, water, energy, and indigenous knowledge systems.',
  },
  {
    title: 'Where We Work',
    description:
      'We operate across the fragile landscapes of the Indian Himalayan Region, focusing on hotspots of vulnerability where environmental degradation and social migration intersect.',
  },
];

const pillarItems = [
  {
    title: 'Integrated Knowledge Hub',
    description:
      "We don't just study mountains — we synthesise ecological, social, and economic data to support integrated development strategies that actually work.",
    icon: KnowledgeIcon,
  },
  {
    title: 'Community-Led Stewardship',
    description:
      'Resilience is built from the ground up. We strengthen local institutions by valuing traditional knowledge systems alongside scientific data.',
    icon: StewardshipIcon,
  },
  {
    title: 'Climate & Biodiversity Advocacy',
    description:
      'We serve as a global voice for mountain regions, ensuring that critical issues — from glacier retreat to forest health — are placed at the heart of international climate policy.',
    icon: AdvocacyIcon,
  },
  {
    title: 'Evidence-Based Action',
    description:
      'Every project we undertake is a living laboratory, providing the data needed to scale practical solutions across the entire Himalayan range.',
    icon: EvidenceIcon,
  },
];

const impactItems = [
  {
    title: 'Ecological Security',
    description: 'Protecting biodiversity and forest health across fragile mountain ecosystems.',
    icon: LeafIcon,
  },
  {
    title: 'Water & Energy Resilience',
    description: 'Safeguarding glacial watersheds and sustainable energy access for highland communities.',
    icon: WaterIcon,
  },
  {
    title: 'Disaster Risk Reduction',
    description: 'Building early warning systems and adaptive infrastructure in high-risk zones.',
    icon: RiskIcon,
  },
  {
    title: 'Inclusive Governance',
    description: 'Centering marginalized voices in environmental policy and resource allocation.',
    icon: GovernanceIcon,
  },
];

const policyItems = [
  {
    title: 'Advocacy Frameworks',
    description:
      'Structured approaches to amplify mountain voices within national and international policy arenas — from COP negotiations to regional development plans.',
    icon: FrameworkIcon,
  },
  {
    title: 'Policy Briefs',
    description:
      'Concise, evidence-backed documents that translate complex mountain research into actionable guidance for decision-makers.',
    icon: BriefIcon,
  },
  {
    title: 'Inclusive Governance',
    description:
      'Models that embed local participation, gender equity, and indigenous knowledge into the governance of mountain landscapes and resources.',
    icon: GovernanceIcon,
  },
];

const teamGroups = [
  {
    label: 'Founders',
    description: "Leading MOSSAIC's vision and operations across the Himalayan region.",
    members: ['Aditi Mishra', 'Sachin Uniyal'],
  },
  {
    label: 'Board',
    description: 'Providing strategic governance and institutional oversight.',
    members: ['Kanika'],
  },
  {
    label: 'Scientific Advisory Committee',
    description: 'Guiding research integrity and interdisciplinary collaboration.',
    members: [],
  },
];

const partnerTypes = [
  'Research Institutions & Universities',
  'Non-Governmental Organisations (NGOs)',
  'Government & Public Agencies',
  'Private Sector & Corporate Partners',
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const items = document.querySelectorAll('.fade-in-up');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsPopoverOpen(false);
  };

  return (
    <div className="page-shell">
      <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className={`brand ${isScrolled ? 'brand--dark' : ''}`} href="#top">
            MOSSAIC
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className={`nav-link ${isScrolled ? 'nav-link--dark' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.target);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="contact-popover" ref={popoverRef}>
              <button
                type="button"
                className={`contact-button ${isScrolled ? 'contact-button--dark' : ''}`}
                onClick={() => setIsPopoverOpen((value) => !value)}
              >
                Contact
              </button>
              {isPopoverOpen && (
                <div className="popover-card">
                  <MailIcon />
                  <a href="mailto:admin@mossaic.org.in">admin@mossaic.org.in</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section id="top" className="hero grain-overlay">
        <div className="hero-media">
          <img src={heroImage} alt="Misty Himalayan mountains at dawn" width="1920" height="1080" />
          <div className="hero-scrim" />
        </div>
        <div className="container hero-content">
          <p className="eyebrow hero-eyebrow">
            Mountain Society for Sustainable Action in Integrated Climate Science
          </p>
          <h1>Working towards resilient, inclusive, and sustainable mountain futures.</h1>
          <p className="hero-copy">
            MOSSAIC integrates community-led initiatives with evidence-based policy to tackle
            critical challenges in the mountains.
          </p>
          <div className="hero-actions">
            <a
              className="button button--light"
              href="#impact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('impact');
              }}
            >
              Our Impact
            </a>
            <a
              className="button button--ghost"
              href="#about"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('about');
              }}
            >
              Who We Are
            </a>
          </div>
        </div>
        <div className="hero-scroll-indicator" aria-hidden="true" />
      </section>

      <section className="intro section section--muted">
        <div className="container intro-inner">
          <div className="fade-in-up intro-block">
            <p className="eyebrow">Who We Are</p>
            <p className="intro-statement">
              A policy-action-research startup founded by a team of young researchers, deeply
              rooted in the mountain landscapes they study.
            </p>
          </div>
          <div className="fade-in-up intro-block intro-block--copy">
            <p>
              We work to strengthen local capacities, inform evidence-based policy, and foster
              sustainable, just, and resilient development across fragile mountain ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="fade-in-up section-heading">
            <p className="eyebrow">Overview</p>
            <h2>At a Glance</h2>
          </div>
          <div className="glance-grid">
            {glanceItems.map((item, index) => (
              <article className="fade-in-up glance-card" key={item.title} style={delay(index)}>
                <span className="card-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest grain-overlay">
        <div className="container section-layer">
          <div className="fade-in-up section-heading section-heading--light">
            <p className="eyebrow">Why It Matters</p>
            <h2>Strategic Pillars</h2>
          </div>
          <div className="pillar-grid">
            {pillarItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="fade-in-up feature-card feature-card--dark" key={item.title} style={delay(index)}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="feature-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="impact" className="section">
        <div className="container">
          <div className="fade-in-up section-heading">
            <p className="eyebrow">Focus</p>
            <h2>Impact Areas</h2>
          </div>
          <div className="impact-grid">
            {impactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="fade-in-up impact-card" key={item.title} style={delay(index)}>
                  <Icon />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="policy" className="section section--sand">
        <div className="container">
          <div className="fade-in-up section-heading">
            <p className="eyebrow">Influence &amp; Impact</p>
            <h2>Policy &amp; Governance</h2>
          </div>
          <div className="policy-grid">
            {policyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="fade-in-up feature-card" key={item.title} style={delay(index)}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="feature-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="section section--muted">
        <div className="container">
          <div className="fade-in-up section-heading">
            <p className="eyebrow">People</p>
            <h2>Our Team</h2>
          </div>
          <div className="team-grid">
            {teamGroups.map((group, index) => (
              <article className="fade-in-up team-card" key={group.label} style={delay(index, 120)}>
                <p className="team-label">{group.label}</p>
                <p className="team-description">{group.description}</p>
                {group.members.length > 0 ? (
                  <div className="team-list">
                    {group.members.map((member) => (
                      <div className="team-member" key={member}>
                        <div className="avatar-shell">
                          <PersonIcon />
                        </div>
                        <div>
                          <p className="member-name">{member}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="coming-soon">Coming soon</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="section section--cream">
        <div className="container partner-grid">
          <div className="fade-in-up">
            <p className="eyebrow">Collaborate</p>
            <h2>Partner with Us</h2>
            <p className="partner-copy">
              Lasting change in mountain regions demands collective action — across disciplines,
              borders, and sectors. We invite organisations that share our commitment to
              evidence-based, community-centred development.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '150ms' }}>
            <ul className="partner-list">
              {partnerTypes.map((item) => (
                <li key={item}>
                  <span className="partner-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a className="button button--outline-dark" href="mailto:info@mossaicfoundation.org">
              Start a Conversation
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-mark">MOSSAIC</p>
          <p className="footer-copy">
            Working towards resilient, inclusive, and sustainable mountain futures.
          </p>
          <div className="footer-rule" />
          <p className="footer-meta">© {new Date().getFullYear()} MOSSAIC Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function delay(index, amount = 100) {
  return { transitionDelay: `${index * amount}ms` };
}

function iconShell(children) {
  return (
    <span className="icon-shell" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

function KnowledgeIcon() {
  return iconShell(
    <>
      <path d="M4 6h16" />
      <path d="M4 12h10" />
      <path d="M4 18h7" />
      <circle cx="17" cy="14" r="3" />
    </>,
  );
}

function StewardshipIcon() {
  return iconShell(
    <>
      <path d="M12 20v-8" />
      <path d="M8 10c0-3 2-5 4-6 2 1 4 3 4 6" />
      <path d="M6 20c0-3 2.5-5 6-5s6 2 6 5" />
    </>,
  );
}

function AdvocacyIcon() {
  return iconShell(
    <>
      <path d="M4 15l8-10 8 10" />
      <path d="M8 15h8" />
      <path d="M12 15v5" />
    </>,
  );
}

function EvidenceIcon() {
  return iconShell(
    <>
      <path d="M5 18l5-5 3 3 6-8" />
      <path d="M18 8h1v1" />
      <path d="M5 5v14h14" />
    </>,
  );
}

function LeafIcon() {
  return iconShell(
    <>
      <path d="M6 13c0-5 4-8 12-9 0 8-3 12-9 12" />
      <path d="M7 17c2-3 5-5 10-7" />
    </>,
  );
}

function WaterIcon() {
  return iconShell(
    <>
      <path d="M12 3c4 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2-6 6-11Z" />
      <path d="M9 15c.5 1 1.5 1.5 3 1.5" />
    </>,
  );
}

function RiskIcon() {
  return iconShell(
    <>
      <path d="M12 4 3 19h18L12 4Z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </>,
  );
}

function GovernanceIcon() {
  return iconShell(
    <>
      <path d="M4 10 12 5l8 5" />
      <path d="M6 10v8" />
      <path d="M12 10v8" />
      <path d="M18 10v8" />
      <path d="M3 20h18" />
    </>,
  );
}

function FrameworkIcon() {
  return iconShell(
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
      <path d="M15 13h1" />
    </>,
  );
}

function BriefIcon() {
  return iconShell(
    <>
      <path d="M7 4h7l4 4v12H7z" />
      <path d="M14 4v4h4" />
      <path d="M10 13h5" />
      <path d="M10 17h5" />
    </>,
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16v10H4z" />
      <path d="m5 8 7 6 7-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default App;