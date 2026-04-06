import React, { useEffect } from 'react';

const SEO = ({ title, description, schema }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
      
      // Update OG description
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }

    if (title) {
        // Update OG title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', title);
        }
    }

    // Handle Schema
    if (schema) {
      const scriptId = 'structured-data';
      let script = document.getElementById(scriptId);
      if (script) {
        script.textContent = JSON.stringify(schema);
      } else {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }

    return () => {
      // Cleanup schema on unmount if it's page-specific
      // Usually, LocalBusiness is global, so we might not want to remove it,
      // but let's keep it clean for different schemas.
    };
  }, [title, description, schema]);

  return null;
};

export default SEO;
