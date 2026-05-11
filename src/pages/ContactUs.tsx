import React, { useState } from 'react'

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactUs = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setIsLoading(false);
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="py-20">
                <h1 className="heading1">GET IN TOUCH</h1>
                <p className="paragraph1 text-(--caption) max-w-2xl inline-[400px]">
                    Have a question or ready to book a consultation? We'd love to hear from you. 
                    Reach out and let's create something beautiful together.
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="px-4 md:px-8 py-20 md:py-32">
                <div className="max-w-3xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <p className="caption1 mb-2">ADDRESS</p>
                                <p className="paragraph1 text-(--body1)">
                                    123 Flower Street<br />
                                    Portland, Oregon 97200<br />
                                    United States
                                </p>
                            </div>

                            <div>
                                <p className="caption1 mb-2">PHONE</p>
                                <a href="tel:+15035551234" className="paragraph1 text-(--body1) hover:text-(--accent) transition-colors">
                                    (503) 555-1234
                                </a>
                            </div>

                            <div>
                                <p className="caption1 mb-2">EMAIL</p>
                                <a href="mailto:hello@blooms.com" className="paragraph1 text-(--body1) hover:text-(--accent) transition-colors">
                                    hello@blooms.com
                                </a>
                            </div>

                            <div>
                                <p className="caption1 mb-2">HOURS</p>
                                <p className="paragraph1 text-(--body1)">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 5:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            {submitted && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                                    <p className="text-green-800 paragraph1">
                                        ✓ Thank you! We've received your message and will get back to you soon.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                {/* Name Field */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="heading4 text-(--body1)">
                                        Full Name <span className="text-(--accent)">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="px-4 py-3 border border-(--divider) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all paragraph1"
                                        style={{ borderColor: 'var(--divider)' }}
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="heading4 text-(--body1)">
                                        Email <span className="text-(--accent)">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="px-4 py-3 border border-(--divider) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all paragraph1"
                                        style={{ borderColor: 'var(--divider)' }}
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="heading4 text-(--body1)">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(555) 000-0000"
                                        className="px-4 py-3 border border-(--divider) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all paragraph1"
                                        style={{ borderColor: 'var(--divider)' }}
                                    />
                                </div>

                                {/* Subject Field */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="heading4 text-(--body1)">
                                        Subject <span className="text-(--accent)">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help?"
                                        className="px-4 py-3 border border-(--divider) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all paragraph1"
                                        style={{ borderColor: 'var(--divider)' }}
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="heading4 text-(--body1)">
                                        Message <span className="text-(--accent)">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us more..."
                                        rows={5}
                                        className="px-4 py-3 border border-(--divider) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all paragraph1 resize-none"
                                        style={{ borderColor: 'var(--divider)' }}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="mt-4 px-8 py-4 bg-(--accent) text-(--headline) rounded-lg font-bold caption1 hover:opacity-90 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                                    style={{ backgroundColor: 'var(--accent)', color: 'var(--headline)' }}
                                >
                                    {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
