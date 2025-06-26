import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content text-center py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
            <p className="py-6 text-xl text-primary">
              We'd love to hear from you! Reach out for support, partnerships,
              or just to say hello.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        What's this about?
                      </option>
                      <option>General Inquiry</option>
                      <option>Support Request</option>
                      <option>Partnership Opportunity</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label block mb-2">
                      <span className="label-text block">Your Message</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-32 w-full"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-primary">Get in Touch</span> With Us
              </h2>
              <p className="text-lg">
                Have questions about our platform? Need help with your account?
                Our team is here to help you succeed on Freelancer Hub.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Method 1 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-base-content/80">
                    support@freelancerhub.com
                  </p>
                  <p className="text-base-content/80">
                    partners@freelancerhub.com
                  </p>
                </div>
              </div>

              {/* Contact Method 2 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-base-content/80">
                    Support: +1 (555) 123-4567
                  </p>
                  <p className="text-base-content/80">
                    Sales: +1 (555) 987-6543
                  </p>
                </div>
              </div>

              {/* Contact Method 3 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-base-content/80">
                    Freelancer Hub Headquarters
                  </p>
                  <p className="text-base-content/80">
                    123 Business Ave, Suite 500
                  </p>
                  <p className="text-base-content/80">
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our <span className="text-primary">Location</span>
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.665325595929!2d-122.4194155846826!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {/* FAQ Item 1 */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How do I create an account as a freelancer?
            </div>
            <div className="collapse-content">
              <p>
                Click on the "Sign Up" button at the top right corner, select
                "Freelancer" as your account type, fill in your details, and
                complete your profile to start getting matched with projects.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What's the fee structure for clients?
            </div>
            <div className="collapse-content">
              <p>
                Clients can post projects for free. We charge a small service
                fee (10%) only when you award a project to a freelancer. There
                are no hidden costs or subscription fees.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How are payments protected?
            </div>
            <div className="collapse-content">
              <p>
                We use an escrow payment system where client funds are held
                securely until the work is completed and approved. Freelancers
                are paid only after work is delivered and accepted.
              </p>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What if I'm not satisfied with the work delivered?
            </div>
            <div className="collapse-content">
              <p>
                We offer a dispute resolution process where our team will
                mediate between you and the freelancer to find a fair solution.
                Most issues are resolved through our revision process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
