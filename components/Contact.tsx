import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert('Thank you for your message! We will get back to you shortly. (This is a demo)');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-neutral-dark to-neutral-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-secondary-light via-primary-DEFAULT to-accent-light animate-gradient-x bg-[200%_auto]">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-DEFAULT max-w-xl mx-auto leading-relaxed">
            Have a project in mind, need a consultation, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-neutral-dark p-8 md:p-12 rounded-xl shadow-2xl border border-neutral-medium/30">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-DEFAULT mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                aria-required="true"
                className="w-full px-5 py-3 bg-neutral-darker border border-neutral-medium/50 rounded-lg text-neutral-lightest focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors placeholder-neutral-medium"
                placeholder="e.g., Ada Lovelace"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-DEFAULT mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                aria-required="true"
                className="w-full px-5 py-3 bg-neutral-darker border border-neutral-medium/50 rounded-lg text-neutral-lightest focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors placeholder-neutral-medium"
                placeholder="you@example.ai"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-DEFAULT mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                aria-required="true"
                className="w-full px-5 py-3 bg-neutral-darker border border-neutral-medium/50 rounded-lg text-neutral-lightest focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors resize-none placeholder-neutral-medium"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT hover:from-primary-dark hover:to-secondary-dark text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;