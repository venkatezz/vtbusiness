import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FileText,
  Shield,
  Laptop,
  Building2,
  ArrowRight
} from 'lucide-react';

import '../styles/resources.css';

const resourceCategories = [
  {
    title: 'GST & Tax Guides',
    description:
      'GST filing, GSTR returns, reconciliation, notices, and tax compliance resources.',
    icon: <FileText size={26} />,
  },
  {
    title: 'ROC & Compliance',
    description:
      'ROC filing, company compliance, MCA updates, and annual filing support.',
    icon: <Building2 size={26} />,
  },
  {
    title: 'Business IT Support',
    description:
      'Linux, AWS, networking, website setup, and IT infrastructure resources.',
    icon: <Laptop size={26} />,
  },
  {
    title: 'Security & Best Practices',
    description:
      'Business email security, server protection, backups, and safe operations.',
    icon: <Shield size={26} />,
  },
];

const featuredResources = [
  {
    title: 'Difference Between GSTR-1 and GSTR-3B',
    description:
      'Learn how GST return filing works, due dates, and common business filing mistakes.',
  },
  {
    title: 'Monthly GST Filing Checklist for Businesses',
    description:
      'A practical GST checklist for startups, freelancers, and growing companies.',
  },
  {
    title: 'Common ROC Compliance Mistakes',
    description:
      'Avoid penalties and missed ROC filings with proper annual compliance management.',
  },
  {
    title: 'Why Professional Business Email Matters',
    description:
      'Build trust using domain-based email setup for your company operations.',
  },
  {
    title: 'Linux vs Windows Server for Small Business',
    description:
      'Understand server setup choices for websites, hosting, and business applications.',
  },
  {
    title: 'How Input Tax Credit Works in GST',
    description:
      'Simple explanation of ITC claims, reconciliation, and invoice management.',
  },
];

const Resources = () => {
return (
  <>
    <Helmet>
     <title>
        Business Resources & Guides | VT Business Support
     </title>

     <meta
         name="description"
         content="Business resources, GST guides, ROC compliance articles, accounting insights, and IT support knowledge from VT Business Support."
     />
    </Helmet>

    <main className="resources-page">

      {/* HERO */}
      <section className="resources-hero">
        <div className="container">

          <div className="resources-badge">
            Professional Knowledge Hub
          </div>

          <h1 className="resources-title">
            Business Resources &
            <span> Guides</span>
          </h1>

          <p className="resources-subtitle">
            GST, tax, compliance, accounting, and IT support insights
            for startups, freelancers, and growing businesses.
          </p>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="resources-section">
        <div className="container">

          <div className="resources-section-head">
            <h2>Resource Categories</h2>
            <p>Explore professional business support topics.</p>
          </div>

          <div className="resources-grid">
            {resourceCategories.map((item, index) => (
              <div className="resource-card" key={index}>
                <div className="resource-icon">
                  {item.icon}
                </div>
                

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="resources-section">
        <div className="container">

          <div className="resources-section-head">
            <h2>Featured Resources</h2>
            <p>Popular business support topics.</p>
          </div>

          <div className="featured-grid">

            {featuredResources.map((item, index) => (
              <div className="featured-card" key={index}>
                <div className="featured-tag">
                  Business Guide
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link to="/contact" className="featured-link">
                  Get Help
                  <ArrowRight size={16} />
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="resources-cta">
        <div className="container">

          <div className="resources-cta-box">

            <h2>Need Help With GST, Compliance, or IT Support?</h2>

            <p>
              Get direct support from VT Business Support for GST filing, ROC compliance, accounting, cloud setup, and business IT operations.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="resources-cta-btn"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>
      </section>

    </main>
    </>
  );
};

export default Resources;