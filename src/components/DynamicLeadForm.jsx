import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Send, Sparkles, ShieldCheck, Mail, Phone, User, Landmark } from 'lucide-react';

const DynamicLeadForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '', // B2C_Tax, B2B_GST, IT_Cloud
    scale: '', // Salaried / Proprietorship / Private Limited
    turnover: 'under_20_lakh',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleServiceSelect = (val) => {
    setFormData(prev => ({ ...prev, serviceType: val }));
  };

  const handleScaleSelect = (val) => {
    setFormData(prev => ({ ...prev, scale: val }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setError('');

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please fill all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API webhook submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Compile preloaded WhatsApp query link based on user selection to trigger high conversion
  const getWhatsAppURL = () => {
    const baseNumber = "918925063980";
    let message = `Hello VT Business Support, I would like to get a quote!\n\n`;
    message += `*Service:* ${formData.serviceType === 'B2C_Tax' ? 'Individual ITR / Filing' : formData.serviceType === 'B2B_GST' ? 'Business GST & Accounting' : 'IT Support / Web Solutions'}\n`;
    message += `*Entity Scale:* ${formData.scale}\n`;
    message += `*Estimated Scale/Turnover:* ${formData.turnover.replace(/_/g, ' ')}\n`;
    message += `*My Name:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    if (formData.notes) {
      message += `*Requirements:* ${formData.notes}`;
    }
    return `https://api.whatsapp.com/send?phone=${baseNumber}&text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="form-step-container">
      {/* Dynamic top progress bar */}
      <div className="form-progress-bar">
        <div 
          className="form-progress-fill" 
          style={{ width: `${isSubmitted ? 100 : ((step - 1) / 3) * 100}%` }}
        />
      </div>
       {error && (
          <div
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.18)',
              color: '#dc2626',
              padding: '0.9rem 1rem',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}
          >
            {error}
          </div>
        )}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Step 1: Core Division Selector */}
          {step === 1 && (
            <div className="fade-in">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '0.5rem', fontWeight: 800 }}>
                What service do you need?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Select a division below to customize your consultation path.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div 
                  className={`form-card-option ${formData.serviceType === 'B2C_Tax' ? 'active' : ''}`}
                  onClick={() => handleServiceSelect('B2C_Tax')}
                  style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: '1.25rem', gap: '1.25rem' }}
                >
                  <div style={{
                    backgroundColor: 'rgba(74, 63, 224, 0.1)',
                    color: 'var(--primary)',
                    width: '46px', height: '46px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <User size={22} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, color: 'var(--dark)' }}>Individual Income Tax / ITR</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Filing starting at just ₹499. Salaried, capital gains & returns.</div>
                  </div>
                </div>

                <div 
                  className={`form-card-option ${formData.serviceType === 'B2B_GST' ? 'active' : ''}`}
                  onClick={() => handleServiceSelect('B2B_GST')}
                  style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: '1.25rem', gap: '1.25rem' }}
                >
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--secondary)',
                    width: '46px', height: '46px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Landmark size={22} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, color: 'var(--dark)' }}>Business GST & Accounting</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Monthly book-keeping, audit support & corporate registrations.</div>
                  </div>
                </div>

                <div 
                  className={`form-card-option ${formData.serviceType === 'IT_Cloud' ? 'active' : ''}`}
                  onClick={() => handleServiceSelect('IT_Cloud')}
                  style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: '1.25rem', gap: '1.25rem' }}
                >
                  <div style={{
                    backgroundColor: 'rgba(8, 16, 40, 0.1)',
                    color: 'var(--dark)',
                    width: '46px', height: '46px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Sparkles size={22} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, color: 'var(--dark)' }}>IT Infrastructure & Web Setup</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Network setup, laptop setup, website coding & cloud server setups.</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!formData.serviceType}
                  onClick={() => setStep(2)}
                  style={{ width: '100%' }}
                >
                  Continue
                </button>
              </div>
            </div>

          )}

          {/* Step 2: Scale and Turnover Qualification */}
          {step === 2 && (
            <div className="fade-in">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Select Your Business Type
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                This helps us assign the right tax advisor or tech expert to your case.
              </p>

              <div className="form-grid-select" style={{ marginBottom: '2rem' }}>
                <div 
                  className={`form-card-option ${formData.scale === 'Individual / Salaried' ? 'active' : ''}`}
                  onClick={() => handleScaleSelect('Individual / Salaried')}
                >
                  <span style={{ fontSize: '1.75rem' }}>💼</span>
                  <span>Salaried / Freelancer</span>
                </div>
                <div 
                  className={`form-card-option ${formData.scale === 'Proprietorship / Partner' ? 'active' : ''}`}
                  onClick={() => handleScaleSelect('Proprietorship / Partner')}
                >
                  <span style={{ fontSize: '1.75rem' }}>🏪</span>
                  <span>Small Retail / Trade</span>
                </div>
                <div 
                  className={`form-card-option ${formData.scale === 'Corporate / LLC' ? 'active' : ''}`}
                  onClick={() => handleScaleSelect('Corporate / LLC')}
                >
                  <span style={{ fontSize: '1.75rem' }}>🏢</span>
                  <span>SME / Startup / LLC</span>
                </div>
              </div>

              {/* Show turnover selector only if it's B2B */}
              {formData.serviceType !== 'B2C_Tax' && (
                <div className="form-group fade-in">
                  <label className="form-label">Estimated Annual Turnover / Project Scale</label>
                  <select 
                    name="turnover"
                    value={formData.turnover}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="under_20_lakh">Under ₹20 Lakhs</option>
                    <option value="20_to_40_lakh">₹20 Lakhs - ₹40 Lakhs</option>
                    <option value="40_lakh_to_1_crore">₹40 Lakhs - ₹1 Crore</option>
                    <option value="above_1_crore">Above ₹1 Crore</option>
                  </select>
                </div>
              )}

              <div
                className="dynamic-form-actions"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginTop: '1.5rem'
                }}
              >
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="btn" 
                  style={{ backgroundColor: 'var(--bg-soft)', color: 'var(--dark)', width: 'auto', padding: '0 1.25rem' }}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!formData.scale}
                  onClick={() => setStep(3)}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Direct User Profile Contact Fields */}
          {step === 3 && (
            <div className="fade-in">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Let's book your consultation
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Enter your contact info. Our team will contact you shortly on WhatsApp or phone.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Your Name *</label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-muted)' }} />
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ paddingLeft: '2.5rem' }}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">WhatsApp Number *</label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-muted)' }} />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="10-digit phone number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ paddingLeft: '2.5rem' }}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-muted)' }} />
                    <input 
                      type="email" 
                      name="email"
                      
                      placeholder="name@company.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ paddingLeft: '2.5rem' }}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Tell us about your specific need (Optional)</label>
                  <textarea 
                    name="notes"
                    placeholder="e.g. Need monthly filing for proprietary retail firm in Chennai, or AWS Linux setup..." 
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="form-input"
                    style={{ height: '80px', padding: '0.75rem 1rem', resize: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="btn" 
                  style={{ backgroundColor: 'var(--bg-soft)', color: 'var(--dark)', width: 'auto', padding: '0 1.25rem' }}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: 'auto', padding: '0 2rem' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : <>Request Free Quote <Send size={16} /></>}
                </button>
              </div>
            </div>
          )}

        </form>
      ) : (
        /* Step 4: Super premium success confirmation panel */
        <div className="fade-in" style={{ textAlign: 'center', padding: '1rem 0' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            color: 'var(--secondary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 0 0 10px rgba(16, 185, 129, 0.05)',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <Check size={32} strokeWidth={3} />
          </div>
          
          <h3 style={{ fontSize: '1.6rem', color: 'var(--dark)', marginBottom: '0.75rem', fontWeight: 800 }}>
            Consultation Request Received!
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
            Thanks, <strong>{formData.name}</strong>. An advisor has been assigned to your request and will call you shortly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            {/* Direct Instant Booking Conversion Button */}
            <a 
              href={getWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', maxWidth: '350px', height: '50px', borderRadius: '12px', fontSize: '1rem' }}
            >
              <span>Instant Chat on WhatsApp</span>
              <ArrowRight size={18} />
            </a>
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                marginTop: '0.5rem'
              }}
            >
              Prefer direct call? +91 89250 63980
            </p>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '0.8rem', 
              color: 'var(--text-muted)', 
              fontWeight: 600,
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1.25rem',
              width: '100%',
              justifyContent: 'center'
            }}>
              <ShieldCheck size={16} style={{ color: 'var(--secondary)' }} />
              <span>Your details are kept private and used only for support communication.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicLeadForm;
