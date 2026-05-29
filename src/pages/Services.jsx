import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Calculator,
  Briefcase,
  ShieldCheck,
  ClipboardList,
  Monitor,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

const gstTaxServices = [
  {
    title: 'GST Filing',
    desc: 'GST registration, monthly filing, reconciliation, and compliance support.',
    icon: <FileText size={22} />,
    path: '/services/gst-filing'
  },
  {
    title: 'Income Tax Filing',
    desc: 'ITR filing support for salaried employees, freelancers, and businesses.',
    icon: <Calculator size={22} />,
    path: '/services/income-tax'
  },
  {
    title: 'Accounting & Bookkeeping',
    desc: 'Monthly bookkeeping, accounting reports, and financial management.',
    icon: <Briefcase size={22} />,
    path: '/services/accounting-bookkeeping'
  },
  {
    title: 'ROC Compliance',
    desc: 'ROC filing, MCA compliance, DIN KYC, and annual return support.',
    icon: <ShieldCheck size={22} />,
    path: '/services/roc-compliance'
  },
  {
    title: 'TDS Filing',
    desc: 'Quarterly TDS filing, corrections, and Form 16 support.',
    icon: <ClipboardList size={22} />,
    path: '/services/tds-filing'
  }
];

const itServices = [
  {
    title: 'IT Support Services',
    desc: 'Office systems, Linux, networking, and business technical support.',
    icon: <Monitor size={22} />,
    path: '/services/it-support'
  },

  {
    title: 'AWS & Linux Support',
    desc: 'AWS cloud setup, Linux server administration, VPS hosting, and infrastructure support.',
    icon: <ShieldCheck size={22} />,
    path: '/services/aws-linux-support'
  },

  {
    title: 'Website Development',
    desc: 'Professional business websites, landing pages, responsive UI, and hosting setup.',
    icon: <Briefcase size={22} />,
    path: '/services/website-development'
  },

  {
    title: 'Business Email Setup',
    desc: 'Google Workspace, Microsoft 365, domain email configuration, and communication setup.',
    icon: <FileText size={22} />,
    path: '/services/business-email-setup'
  },

  {
    title: 'Cloud Infrastructure',
    desc: 'Cloud server deployment, SSL setup, monitoring, backups, and infrastructure maintenance.',
    icon: <Calculator size={22} />,
    path: '/services/cloud-server-setup'
  },

  {
    title: 'Technical Consulting',
    desc: 'Business-focused technical consulting for infrastructure, systems, websites, and operations.',
    icon: <ClipboardList size={22} />,
    path: '/services/technical-consulting'
  }
];

const ServiceCard = ({ item }) => (
  <Link
    to={item.path}
    className="card-premium"
    style={{
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      transition: 'var(--transition)',
      minHeight: '250px'
    }}
  >
    <div
      style={{
        width: '54px',
        height: '54px',
        borderRadius: '14px',
        background: 'rgba(74,63,224,0.08)',
        color: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {item.icon}
    </div>

    <div>
      <h3
        style={{
          fontSize: '1.1rem',
          marginBottom: '0.75rem',
          color: 'var(--dark)',
          fontWeight: 700
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.92rem',
          lineHeight: 1.7
        }}
      >
        {item.desc}
      </p>
    </div>

    <div
      style={{
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '0.45rem',
        color: 'var(--primary)',
        fontWeight: 700,
        fontSize: '0.9rem'
      }}
    >
      View Details
      <ArrowRight size={16} />
    </div>
  </Link>
);

const Services = () => {
  return (
    <div>

      <SEO
        title="Professional Business Services | VT Business Support"
        description="GST filing, income tax, ROC compliance, accounting, TDS filing, and IT support services across Tamil Nadu & Bengaluru."
      />

      {/* HERO */}

      <section
        className="section"
        style={{
          paddingTop: '120px',
          paddingBottom: '70px',
          background: `
            linear-gradient(
              135deg,
              #081028 0%,
              #091530 45%,
              #0A1635 100%
            )
          `,
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div className="container">

          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto'
            }}
          >

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              Professional Business Support
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.7rem, 5vw, 4.6rem)',
                lineHeight: '1.02',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                marginBottom: '1.5rem',
                color: '#FFFFFF'
              }}
            >
              Professional
              <br />

              <span style={{ color: '#5B4DFF' }}>
                Services
              </span>
            </h1>

            <p
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: '1.05rem',
                lineHeight: '1.8'
              }}
            >
              GST, tax, accounting, ROC compliance,
              and IT support services for startups,
              freelancers, and growing businesses.
            </p>

          </div>

        </div>
      </section>

      {/* GST & TAX SERVICES */}

      <section className="section">
        <div className="container">

          <div className="section-title">
            <h2>GST & Tax Services</h2>
            <p>
              Complete compliance and accounting solutions
              for businesses and professionals.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {gstTaxServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>

        </div>
      </section>

      {/* IT SERVICES */}

      <section
        className="section"
        style={{
          background: 'var(--light-bg)'
        }}
      >
        <div className="container">

          <div className="section-title">
            <h2>IT & Digital Services</h2>
            <p>
              Technical infrastructure and digital support
              for modern businesses.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {itServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="section">
        <div className="container">

          <div
            className="card-premium"
            style={{
              textAlign: 'center',
              padding: '3rem'
            }}
          >

            <h2
              style={{
                marginBottom: '1rem'
              }}
            >
              Need Professional Support?
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                maxWidth: '680px',
                margin: '0 auto 2rem',
                lineHeight: 1.8
              }}
            >
              Contact us for GST filing, accounting,
              ROC compliance, taxation, or IT support services.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary"
              style={{
                height: '50px',
                padding: '0 2rem'
              }}
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;