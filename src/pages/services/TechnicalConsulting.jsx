import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
import {
  MonitorCog,
  Cloud,
  Globe,
  Workflow,
  Mail,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import '../../styles/service-hero-system.css';
import '../../styles/technical-consulting.css';

const techConsultingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/technical-consulting#service",
      "name": "Technical Consulting & IT Strategy Services",
      "alternateName": [
        "IT Infrastructure Strategy",
        "Technology Strategy Consulting",
        "Cloud Architecture Planning",
        "Digital Modernization Advisor",
        "Technical Architecture Advisory"
      ],
      "description": "Enterprise-grade technical consulting and IT strategy advisory. We specialize in system audit reporting, cloud cost optimization, server architecture design, and workflow automation strategies across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/technical-consulting",
      "serviceType": "Technical Architecture & Systems Advisory",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://vtconsulting.in#business",
        "name": "VT Business Support",
        "telephone": "+918925063980",
        "email": "vtconsulting.in@gmail.com",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
          { "@type": "AdministrativeArea", "name": "Karnataka" }
        ]
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
        { "@type": "AdministrativeArea", "name": "Karnataka" },
        { "@type": "Country", "name": "India" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technical Consulting Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT System Audits & Security Compliance Advice" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AWS Cloud Migration & Cost Optimization Plans" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Modern Business Technology Stack Selection" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Disaster Recovery & Backup Policy Formulation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Process Automation & CRM Consulting" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "Technical Consulting", "item": "https://vtconsulting.in/services/technical-consulting" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does technical consulting help our business?",
          "acceptedAnswer": { "@type": "Answer", "text": "It helps select modern technologies, optimize monthly server budgets, set up robust security policies, and build automated business workflows." }
        },
        {
          "@type": "Question",
          "name": "Can you review and reduce our monthly AWS bills?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we analyze resource utilization, suggest right-sizing for idle EC2 instances, recommend savings plans, and implement caching setups to save up to 40% on cloud billing." }
        },
        {
          "@type": "Question",
          "name": "Do you design custom business network layouts?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we plan local office networks, firewall configurations, security backup nodes, and multi-location WAN connection models." }
        }
      ]
    }
  ]
};

const consultingServices = [
  {
    icon: <MonitorCog size={24} />,
    title: 'IT Infrastructure Consulting',
    description:
      'Business IT guidance for systems, networking, infrastructure planning, and operational support.',
  },

  {
    icon: <Cloud size={24} />,
    title: 'Cloud & AWS Consulting',
    description:
      'Cloud infrastructure planning, AWS support, hosting architecture, and server optimization.',
  },

  {
    icon: <Globe size={24} />,
    title: 'Website & Digital Solutions',
    description:
      'Business website planning, deployment guidance, hosting support, and digital modernization.',
  },

  {
    icon: <Workflow size={24} />,
    title: 'Business Process Improvement',
    description:
      'Practical technical solutions to improve workflows, reduce downtime, and streamline operations.',
  },

  {
    icon: <Mail size={24} />,
    title: 'Communication Systems',
    description:
      'Professional email systems, collaboration setup, and business communication support.',
  },

  {
    icon: <Lightbulb size={24} />,
    title: 'Technical Guidance & Support',
    description:
      'Reliable consulting support for business technology decisions, upgrades, and implementation.',
  },
];

const processSteps = [
  'Understand Business Requirements',
  'Recommend Technical Solutions',
  'Implement & Support Operations',
];

const TechnicalConsulting = () => {
  return (
    <main className="tech-page">
      <SEO 
        title="Technical Consulting & IT Strategy Tamil Nadu & Bengaluru | VT Business Support"
        description="Expert advice on IT infrastructure layout, AWS cloud migration strategy, tech stack planning, system security audits, and cloud cost control audits."
        keywords="technical consulting, IT strategy, cloud advisor, system auditor, digital modernization, AWS strategy, network architect, tech support Dharmapuri, IT consultant Bengaluru, VT Business Support"
        schema={techConsultingSchema}
        type="website"
      />

      {/* HERO */}
      <section className="shs-hero service-hero-section">
        <div className="container">
          <div className="shs-hero-grid">

            {/* LEFT */}
            <div className="shs-hero-left">
              <div className="shs-blur" />

              <h1 className="shs-title">
                Technical Consulting
                <br />
                <span className="shs-accent--emerald">&amp; IT Strategy</span>
              </h1>

              <p className="shs-desc">
                Make smart technology decisions. We provide expert advice on cloud architecture design,
                infrastructure audits, cost optimization strategy, and process automations.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Consult an Advisor <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ Technology Strategy Plans</span>
                <span>✓ AWS Cloud Audits</span>
                <span>✓ Data Backup &amp; DR Designs</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> TECH STRATEGY &amp; ADVISORY
              </div>
              <HeroVisual
                theme="emerald"
                lightMode={true}
                milestones={["Assessment Complete", "Planning Ready", "Implementation Active", "Business Ready"]}
                cards={[
                  { title: "IT Infrastructure", subtitle: "Audited & Verified" },
                  { title: "Cloud Strategy", subtitle: "Scale-ready Architecture" },
                  { title: "Operations Roadmap", subtitle: "Efficiency Enabled" }
                ]}
              />
            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="tech-section">

        <div className="container">

          <div className="tech-section-head">

            <h2>Technical Consulting Areas</h2>

            <p>
              Business-focused consulting solutions
              for infrastructure, systems, operations,
              and digital transformation.
            </p>

          </div>

          <div className="tech-grid">

            {consultingServices.map((item, index) => (

              <div
                className="tech-card"
                key={index}
              >

                <div className="tech-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CONSULTING ROADMAP GRAPHIC */}
      <section className="tech-section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="tech-section-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(16, 185, 129, 0.08)', color: '#10B981', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>IT STRATEGY</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Strategy & Governance Roadmap</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              We follow a structured consulting process to systematically design, implement, and govern your business infrastructure.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', alignItems: 'stretch' }}>
            <style>{`
              @media (max-width: 960px) {
                .roadmap-arrow {
                  display: none !important;
                }
              }
            `}</style>
            {[
              { phase: "1. Discovery", detail: "Audit current infrastructure, configurations, and technology expenses to identify performance bottlenecks and resource wastes." },
              { phase: "2. Planning", detail: "Formulate a technology selection matrix, budget targets, backup guidelines, and redundancy design maps." },
              { phase: "3. Architecture", detail: "Create structured system topology maps, database schemas, firewall blueprints, and failover designs." },
              { phase: "4. Implementation", detail: "Deploy verified cloud setups, execute migrations, configure monitoring alerts, and run secure backup scripts." },
              { phase: "5. Governance", detail: "Ongoing compliance tracking, monthly cost optimizations, uptime reviews, and operational backup validation audits." }
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ flex: '1', minWidth: '220px', padding: '1.8rem', borderRadius: '16px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 12px rgba(8,16,40,0.01)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#10B981', margin: 0 }}>{step.phase}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{step.detail}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="roadmap-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#cbd5e1', fontWeight: '700' }}>→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="tech-section tech-light-section">

        <div className="container">

          <div className="tech-section-head">

            <h2>
              Why Businesses Need Technical Consulting
            </h2>

            <p>
              Professional technical guidance helps businesses
              improve operations, reduce downtime,
              and modernize systems efficiently.
            </p>

          </div>

          <div className="tech-why-grid">

            {[
              'Reduced Technical Confusion',
              'Improved Business Operations',
              'Reliable Infrastructure Planning',
              'Better System Scalability',
              'Faster Problem Resolution',
              'Long-term Technical Support',
            ].map((item, index) => (

              <div
                className="tech-why-item"
                key={index}
              >

                <CheckCircle size={18} />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="tech-section">

        <div className="container">

          <div className="tech-section-head">

            <h2>Our Consulting Approach</h2>

            <p>
              Structured consulting workflow
              focused on practical business outcomes.
            </p>

          </div>

          <div className="tech-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="tech-process-card"
                key={index}
              >

                <div className="tech-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="tech-cta-section">

        <div className="container">

          <div className="tech-cta-box">

            <h2>
              Need Technical Guidance For Your Business?
            </h2>

            <p>
              Talk with VT Business Support for
              cloud infrastructure, websites,
              IT systems, business communication,
              and operational technology consulting.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn-primary"
            >
              Get Technical Consulting
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TechnicalConsulting;