import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "919498856100"; 
  const message = "Hi I need help with my business";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
        transition: 'var(--transition)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;

