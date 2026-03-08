import { useState } from 'react';
import './Pages.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: '' });
                setFormData({ name: '', email: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus(prev => ({ ...prev, success: false }));
                }, 5000);
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: error.message });
        }
    };

    return (
        <main className="page-container">
            <div className="page-header">
                <h1>Get In <span className="text-gradient">Touch</span></h1>
                <p className="subtitle">Let's build something amazing together.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info glass">
                    <h3>Contact Information</h3>
                    <p>I am currently available for freelance work and full-time opportunities. If you have a project that needs some creative injection, send me a message.</p>

                    <div className="info-item">
                        <i className="fa-solid fa-phone"></i>
                        <span>+91 9714915485</span>
                    </div>
                    <div className="info-item">
                        <i className="fa-solid fa-envelope"></i>
                        <span>mahekpatel613@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>India</span>
                    </div>
                </div>

                <form className="contact-form glass" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            required
                            placeholder="yourName@gmail.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>  
                        <textarea
                            required
                            rows="5"
                            placeholder="How can I help you?"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    {status.success && <div style={{ color: 'var(--accent-cyan)', marginBottom: '10px' }}>✅ Message sent successfully!</div>}
                    {status.error && <div style={{ color: 'var(--accent-pink)', marginBottom: '10px' }}>❌ {status.error}</div>}
                    <button type="submit" className="btn btn-primary submit-btn" disabled={status.loading}>
                        {status.loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
