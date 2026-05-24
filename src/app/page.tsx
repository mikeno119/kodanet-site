"use client";

import { useState } from "react";

/* ─── NAV ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Solutions", "Insights", "About", "Contact"];
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-blue-400">Koda</span>Net
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-block px-5 py-2 text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-500 transition-colors">
          Get Started
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-blue-400 transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-center px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-medium">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1e1b4b]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_60%)]" />
      {/* grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wider uppercase">
          AI &amp; Data Consulting
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Accelerating Business
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Through AI &amp; Data</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          We partner with enterprises to unlock the power of artificial intelligence, advanced analytics, and modern data infrastructure — driving measurable transformation at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/25">
            Explore Our Solutions
          </a>
          <a href="#about" className="px-8 py-3.5 rounded-full border border-white/20 text-gray-300 hover:border-blue-400 hover:text-blue-400 font-semibold transition-all">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
const services = [
  { icon: "🧠", title: "AI & Machine Learning", desc: "Custom ML models, NLP pipelines, computer vision, and intelligent automation tailored to your business objectives." },
  { icon: "📊", title: "Data Analytics & Engineering", desc: "End-to-end data platforms, real-time pipelines, warehousing, and actionable business intelligence dashboards." },
  { icon: "☁️", title: "Cloud & Infrastructure", desc: "Cloud-native architecture, migration strategies, and scalable infrastructure on AWS, Azure, and GCP." },
  { icon: "🔒", title: "Cybersecurity Solutions", desc: "Threat detection, zero-trust architecture, compliance frameworks, and security operations center design." },
  { icon: "⚡", title: "Digital Transformation", desc: "Strategic roadmaps, process optimization, and technology modernization for competitive advantage." },
  { icon: "💻", title: "Custom Software Development", desc: "Full-stack engineering, API design, microservices, and enterprise application development." },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive technology solutions designed to solve complex challenges and drive sustainable growth.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1">
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "$2B+", label: "Value Created" },
  { value: "50+", label: "Industries Served" },
];

function Stats() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">{s.value}</div>
              <div className="text-blue-200 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INSIGHTS ─── */
const insights = [
  { tag: "AI Strategy", title: "The Future of Generative AI in Enterprise Operations", snippet: "How leading organizations are moving beyond pilots to deploy generative AI at scale, transforming workflows and unlocking new revenue streams.", date: "May 2026" },
  { tag: "Data Engineering", title: "Building a Modern Data Stack: Lessons from the Field", snippet: "Key architectural patterns and best practices for constructing resilient, cost-effective data platforms that deliver real-time insights.", date: "April 2026" },
  { tag: "Cybersecurity", title: "Zero Trust in the Age of AI: A New Security Paradigm", snippet: "Why traditional perimeter-based security models are failing and how AI-powered zero-trust frameworks provide stronger protection.", date: "March 2026" },
];

function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Knowledge</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Thought leadership and perspectives from our team of experts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((ins) => (
            <div key={ins.title} className="group rounded-2xl overflow-hidden bg-[#111827] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-900/60 to-indigo-900/60 flex items-center justify-center">
                <span className="text-5xl opacity-30">📄</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">{ins.tag}</span>
                  <span className="text-xs text-gray-500">{ins.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors leading-snug">{ins.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{ins.snippet}</p>
                <span className="text-blue-400 text-sm font-medium group-hover:underline cursor-pointer">Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">About KodaNet</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Intelligent Solutions.<br />Real Results.</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              KodaNet is a technology consulting firm built at the intersection of artificial intelligence, data engineering, and enterprise strategy. We help organizations navigate complexity, harness emerging technologies, and deliver measurable business outcomes.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team combines deep technical expertise with industry knowledge to build solutions that scale. From Fortune 500 enterprises to high-growth startups, we partner with leaders who are serious about leveraging technology as a competitive advantage.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-4 rounded-xl bg-[#111827] border border-white/5">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-xs text-gray-500 mt-1">Years Experience</div>
              </div>
              <div className="px-6 py-4 rounded-xl bg-[#111827] border border-white/5">
                <div className="text-2xl font-bold text-blue-400">200+</div>
                <div className="text-xs text-gray-500 mt-1">Team Members</div>
              </div>
              <div className="px-6 py-4 rounded-xl bg-[#111827] border border-white/5">
                <div className="text-2xl font-bold text-blue-400">12</div>
                <div className="text-xs text-gray-500 mt-1">Global Offices</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏗️</div>
                <p className="text-gray-500 text-sm">Building the future,<br />one solution at a time.</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── LEADERSHIP ─── */
const founders = [
  {
    name: "Michael No",
    role: "Co-Founder & CEO",
    bio: "15+ years in network engineering and technology leadership. Passionate about leveraging AI and data to build scalable solutions that drive real business outcomes.",
    image: null,
    linkedin: "#",
  },
  {
    name: "Jeremy Franzen",
    role: "Co-Founder & CTO",
    bio: "20+ years as a Technology and Operations Executive. Former VP of Technical Operations at InterVenn Biosciences. US Marine veteran with global experience spanning enterprise infrastructure, cloud architecture, and international technology operations.",
    image: "/jeremy-franzen.jpg",
    linkedin: "https://www.linkedin.com/in/jeremy-franzen-8111111",
  },
  {
    name: "Daniel Kim",
    role: "Chief Financial Officer",
    bio: "Financial strategist with deep expertise in corporate finance, capital markets, and operational scaling for technology companies.",
    image: null,
    linkedin: "#",
  },
  {
    name: "Shawn Lim",
    role: "Executive Team",
    bio: "Strategic leader driving operational excellence and business growth across technology initiatives.",
    image: null,
    linkedin: "#",
  },
  {
    name: "Matthew No",
    role: "Executive Team",
    bio: "Technology professional focused on delivering innovative solutions and scaling enterprise operations.",
    image: null,
    linkedin: "#",
  },
  {
    name: "Blane Wong",
    role: "Investor",
    bio: "Results-driven executive bringing strategic vision and operational leadership to drive business growth.",
    image: "/blane-wong.jpg",
    linkedin: "#",
  },
  {
    name: "Garland Huie",
    role: "Executive Team",
    bio: "Seasoned technology leader with expertise in enterprise strategy and cross-functional team management.",
    image: null,
    linkedin: "#",
  },
];

function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Seasoned technology leaders with decades of combined experience building and scaling enterprise solutions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {founders.map((f) => (
            <div key={f.name} className="group text-center p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
              <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border-2 border-blue-500/20 flex items-center justify-center">
                {f.image ? (
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl">👤</span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{f.name}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{f.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{f.bio}</p>
              <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform<br />Your Business?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Let&apos;s discuss how KodaNet can help you harness the power of AI and data to drive real, measurable results.</p>
        <a href="#contact" className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-black/20 text-lg">
          Contact Us Today
        </a>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0f1e]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start the Conversation</h2>
        <p className="text-gray-400 mb-10">Reach out to discuss your next project or learn more about our capabilities.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "📧", label: "Email", value: "hello@kodanet.io" },
            { icon: "📞", label: "Phone", value: "+1 (888) 562-3638" },
            { icon: "📍", label: "Location", value: "Los Angeles, CA" },
          ].map((c) => (
            <div key={c.label} className="p-6 rounded-xl bg-[#111827] border border-white/5">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="text-xs text-gray-500 mb-1">{c.label}</div>
              <div className="text-sm font-medium">{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="py-12 bg-[#070b16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tight">
              <span className="text-blue-400">Koda</span>Net
            </a>
            <p className="text-gray-500 text-sm mt-3 max-w-sm leading-relaxed">
              Intelligent solutions for enterprises ready to lead with AI and data. Transforming complexity into competitive advantage.
            </p>
            <div className="flex gap-4 mt-5">
              {["LinkedIn", "Twitter", "GitHub"].map((s) => (
                <span key={s} className="text-xs text-gray-600 hover:text-blue-400 cursor-pointer transition-colors">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <div className="space-y-2">
              {["About", "Careers", "Press", "Partners"].map((l) => (
                <a key={l} href="#" className="block text-sm text-gray-500 hover:text-blue-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <div className="space-y-2">
              {["Blog", "Case Studies", "Documentation", "Contact"].map((l) => (
                <a key={l} href="#" className="block text-sm text-gray-500 hover:text-blue-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2026 KodaNet. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Insights />
      <About />
      <Leadership />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
