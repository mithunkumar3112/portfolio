import { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Globe, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';


export default function Contact() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_8h4dwkg',
      'template_unzvphc',
      {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      },
      'gPz-pn6wfsy2yjCoD'
    );

    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};



  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8148733855',
      href: 'tel:+918148733855',
      color: 'blue',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'itsmithunkumar31@gmail.com.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=itsmithunkumar31@gmail.com.com',
      color: 'cyan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect ',
      href: 'https://www.linkedin.com/in/mithunkumar3112/',
      color: 'teal',
    },
    {
      icon: Globe,
      label: 'Github',
      value: 'My work',
      href: 'https://github.com/mithunkumar3112',
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-slate-900 to-slate-700',
      cyan: 'from-slate-900 to-slate-700',
      teal: 'from-slate-900 to-slate-700',
      green: 'from-slate-900 to-slate-700',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="section-rhythm">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="section-title-line"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's connect and collaborate on exciting ideas, projects, and opportunities.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal direction="left" className="space-y-6">
            <div className="shine magnetic-card brand-surface relative overflow-hidden rounded-2xl p-8 shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: `url('${asset('other/cc.jpg')}')` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/40 dark:bg-black/50" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  const gradient = getColorClasses(item.color);

                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-300/10 hover:shadow-2xl hover:shadow-cyan-400/20 hover:ring-2 hover:ring-cyan-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 mb-1 transition-colors">
                          {item.label}
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-slate-950 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
                </div>
              </div>
            </div>

            <div className="shine magnetic-card bg-gradient-to-br from-cyan-950 via-slate-950 to-emerald-950 rounded-2xl p-8 text-white shadow-2xl shadow-cyan-950/20">
              <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-white" size={20} />
                  <span>User-centered design approach</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Clean, maintainable code</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Responsive & accessible designs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Strong communication skills</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" className="shine magnetic-card brand-surface relative overflow-hidden rounded-2xl p-8 shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{ backgroundImage: `url('${asset('other/cc.jpg')}')` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/40 dark:bg-black/50" aria-hidden="true" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-3 rounded-lg border-2 border-cyan-100 dark:border-cyan-300/20 bg-white/90 dark:bg-slate-950/80 text-gray-900 dark:text-white focus:border-cyan-400 dark:focus:border-cyan-300 focus:ring-0 transition-colors"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 pointer-events-none" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 px-4 py-3 rounded-lg border-2 border-cyan-100 dark:border-cyan-300/20 bg-white/90 dark:bg-slate-950/80 text-gray-900 dark:text-white focus:border-cyan-400 dark:focus:border-cyan-300 focus:ring-0 transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-cyan-100 dark:border-cyan-300/20 bg-white/90 dark:bg-slate-950/80 text-gray-900 dark:text-white focus:border-cyan-400 dark:focus:border-cyan-300 focus:ring-0 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-cyan-100 dark:border-cyan-300/20 bg-white/90 dark:bg-slate-950/80 text-gray-900 dark:text-white focus:border-cyan-400 dark:focus:border-cyan-300 focus:ring-0 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shine w-full px-8 py-4 bg-white/90 dark:bg-slate-950/80 text-slate-950 dark:text-white rounded-full font-semibold shadow-lg shadow-cyan-950/10 hover:bg-cyan-50 dark:hover:bg-cyan-300 hover:text-slate-950 hover:shadow-2xl hover:shadow-cyan-400/30 hover:ring-2 hover:ring-cyan-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-cyan-100 dark:border-cyan-300/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
