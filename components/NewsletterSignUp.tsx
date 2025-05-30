import React, { useState } from 'react';

const NewsletterSignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Signed up with email:', email);
    setMessage(`Thank you for signing up, ${email}! (Note: This is a demo. For a real application, this would integrate with a backend.)`);
    setEmail('');

    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <section id="signup" className="py-24 bg-gradient-to-br from-neutral-darker via-primary-dark/20 to-neutral-darker">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-secondary-light via-primary-DEFAULT to-accent-light animate-gradient-x bg-[200%_auto]">
            Stay Updated with Mind Your AI
          </h2>
          <p className="text-lg text-neutral-DEFAULT mb-10 max-w-xl mx-auto leading-relaxed">
            Get the latest AI trends, product updates, and exclusive insights directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              className="flex-grow px-5 py-4 bg-neutral-dark border border-neutral-medium/50 rounded-lg text-neutral-lightest focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors placeholder-neutral-medium text-lg"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT hover:from-primary-dark hover:to-accent-dark text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p className="mt-6 text-secondary-light bg-secondary-dark/30 p-3 rounded-md border border-secondary-dark/50">{message}</p>
          )}
           <p className="text-sm text-neutral-medium mt-8">
            We respect your privacy. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignUp;