import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, schema, image, type = 'website' }) => {
  const location = useLocation();
  const baseUrl = 'https://vtconsulting.in';
  const currentUrl = `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/favicon.svg`;
  const seoImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : defaultImage;

  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
      
      // OG Title
      updateMetaTag('property', 'og:title', title);
      updateMetaTag('name', 'twitter:title', title);
    }
    
    // 2. Description
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('name', 'twitter:description', description);
    }

    // 3. URL
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('name', 'twitter:url', currentUrl);

    // 4. Image
    updateMetaTag('property', 'og:image', seoImage);
    updateMetaTag('name', 'twitter:image', seoImage);

    // 5. Type
    updateMetaTag('property', 'og:type', type);

    // 6. Structured Data
    if (schema) {
      const scriptId = 'structured-data-page';
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

  }, [title, description, schema, seoImage, currentUrl, type]);

  const updateMetaTag = (attr, value, content) => {
    let element = document.querySelector(`meta[${attr}="${value}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attr, value);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  return null;
};

export default SEO;
