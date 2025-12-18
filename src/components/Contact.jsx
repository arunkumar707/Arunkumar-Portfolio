import React, { useState } from 'react';
import { sendContactMessage } from '../services/api';
import SuccessModal from './SuccessModal';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await sendContactMessage(formData);
            // Show success modal instead of just text status
            setShowModal(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly via email.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Get In Touch</h2>

                <div className="max-w-5xl mx-auto">
                    <p className="text-center text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                        Let's build something great together. I'm always open to discussing new projects,
                        creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="card p-6">
                                <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>

                                <div className="space-y-4">
                                    <a href="mailto:arunkumar.a.n707@gmail.com" className="flex items-center gap-4 text-slate-300 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-purple-500/10">
                                            <span className="text-cyan-400 group-hover:text-purple-400 text-xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                                                <FaEnvelope />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 transition-colors">Email</p>
                                            <p className="font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">arunkumar.a.n707@gmail.com</p>
                                        </div>
                                    </a>

                                    <a href="tel:+919632796199" className="flex items-center gap-4 text-slate-300 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-purple-500/10">
                                            <span className="text-cyan-400 group-hover:text-purple-400 text-xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                                                <FaPhone />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 transition-colors">Phone</p>
                                            <p className="font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">+91 96327 96199</p>
                                        </div>
                                    </a>

                                    <a href="https://www.linkedin.com/in/arun-kumar-a-n-2a89192b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-purple-500/10">
                                            <span className="text-cyan-400 group-hover:text-purple-400 text-xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                                                <FaLinkedin />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 transition-colors">LinkedIn</p>
                                            <p className="font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">linkedin.com/in/arun-kumar-a-n</p>
                                        </div>
                                    </a>

                                    <a href="https://github.com/arunkumar707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-purple-500/10">
                                            <span className="text-cyan-400 group-hover:text-purple-400 text-xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                                                <FaGithub />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 transition-colors">GitHub</p>
                                            <p className="font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">github.com/arunkumar707</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card p-6">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/25"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default Contact;
