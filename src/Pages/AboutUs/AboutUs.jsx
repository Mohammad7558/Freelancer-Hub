import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content text-center py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-primary">About Freelancer Hub</h1>
            <p className="py-6 text-xl text-primary">
              Bridging the gap between talented freelancers and businesses worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-primary">Our Mission</span> and Vision
            </h2>
            <p className="mb-4 text-lg">
              At Freelancer Hub, we're revolutionizing the way freelancers and clients connect. Our platform is built on the principles of transparency, fairness, and efficiency.
            </p>
            <p className="mb-4 text-lg">
              We empower freelancers to showcase their skills and find meaningful work while helping businesses access top-tier talent for their projects.
            </p>
            <div className="stats shadow bg-base-200">
              <div className="stat">
                <div className="stat-title">Freelancers</div>
                <div className="stat-value text-primary">10,000+</div>
                <div className="stat-desc">Skilled professionals</div>
              </div>
              <div className="stat">
                <div className="stat-title">Projects</div>
                <div className="stat-value text-secondary">25,000+</div>
                <div className="stat-desc">Successfully completed</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://i.ibb.co/F4W1pRyP/img-1.jpg" 
              alt="Team collaborating" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">Freelancer Hub</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-10 pt-10">
                <div className="rounded-full bg-primary/10 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Smart Matching</h3>
                <p>Our AI-powered system connects you with the perfect freelancers or projects based on your skills and needs.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-10 pt-10">
                <div className="rounded-full bg-secondary/10 p-4 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Secure Payments</h3>
                <p>Escrow payment system ensures freelancers get paid and clients get quality work delivered.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-10 pt-10">
                <div className="rounded-full bg-accent/10 p-4 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Quality Assurance</h3>
                <p>Rigorous verification process for freelancers and project reviews to maintain high standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our <span className="text-primary">Team</span></h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/QhQ6c1c/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash.jpg" alt="Team member" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Sarah Johnson</h3>
              <p className="text-sm opacity-75">CEO & Founder</p>
              <p>With 10+ years in the gig economy, Sarah built this platform to empower freelancers.</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/MkTsJsms/cheerful-man-looking-camera.jpg" alt="Team member" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Michael Chen</h3>
              <p className="text-sm opacity-75">CTO</p>
              <p>Technology expert ensuring our platform is fast, secure, and easy to use.</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/cXw50F8b/serious-young-man-standing-outdoors-with-his-arms-crossed.jpg" alt="Team member" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Emma Rodriguez</h3>
              <p className="text-sm opacity-75">Community Manager</p>
              <p>Dedicated to creating the best experience for both freelancers and clients.</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/YFrD9TBr/smiling-man-sitting-office.jpg" alt="Team member" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">David Kim</h3>
              <p className="text-sm opacity-75">Product Designer</p>
              <p>Making sure our platform is intuitive and beautiful for all users.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and businesses already growing with Freelancer Hub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-secondary btn-lg">Find Freelancers</button>
            <button className="btn btn-accent btn-lg">Find Work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;