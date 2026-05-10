import React, { useState } from "react";
import "./allen-landing.css";

const goals = ["Class 6-10", "JEE Main + Adv.", "NEET"];

const courses = [
  {
    title: "LIVE Nurture Online Course - NEET",
    target: "Target 2028",
    description: "800+ hours of live classes with top faculty and guided tests.",
    price: "Rs. 85,000 + Taxes",
  },
  {
    title: "LIVE Nurture Online Course - JEE",
    target: "Target 2028",
    description: "600+ hours of live classes, 24/7 doubt support, and mentorship.",
    price: "Rs. 93,500 + Taxes",
  },
  {
    title: "Foundation JEE + NEET Online Course",
    target: "Class 6-10",
    description: "Strong Physics, Chemistry, Biology, and Maths foundation.",
    price: "Rs. 54,999 + Taxes",
  },
];

const benefits = [
  {
    title: "Up to 90% scholarship",
    description: "A strong practice clone of the original offer-focused landing page.",
  },
  {
    title: "Live classes from top faculty",
    description: "Highlight how students get structured learning and regular tests.",
  },
  {
    title: "24/7 doubt support",
    description: "Show practical value with mentorship, app access, and guidance.",
  },
  {
    title: "Online from anywhere",
    description: "Students can prepare from home with mobile, tab, or desktop access.",
  },
];

const steps = [
  "Fill the form and choose your goal.",
  "Complete registration and get scholarship test details.",
  "Attempt the test online and check your result.",
  "Use the scholarship to join your preferred course.",
];

const faqs = [
  {
    question: "What is the syllabus for ASAT?",
    answer:
      "The syllabus depends on the selected goal and class. It usually matches the academic level and exam target chosen in the form.",
  },
  {
    question: "Who is eligible for the test?",
    answer:
      "Students from Class 6-10 as well as JEE and NEET aspirants can register based on the available course options.",
  },
  {
    question: "Can I take the test online?",
    answer:
      "Yes. This small landing page clone is designed around the online-course registration flow.",
  },
  {
    question: "How is the result used?",
    answer:
      "The result helps determine the scholarship amount and supports course enrollment decisions.",
  },
];

function AllenLandingPage() {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    className: "",
    pincode: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <div className="allen-page">
      <header className="allen-header">
        <div className="allen-brand">
          <div className="allen-logo">ALLEN</div>
          <span>ASAT Online Courses</span>
        </div>
        <div className="allen-header-actions">
          <span className="allen-support">Support: 1800-000-2026</span>
          <button type="button">Register Now</button>
        </div>
      </header>

      <section className="allen-hero">
        <div className="allen-hero-copy">
          <span className="allen-badge">Scholarship Test Practice Clone</span>
          <h1>Win up to 90% scholarship on ALLEN online courses</h1>
          <p>
            A small React landing page inspired by the ALLEN ASAT course page,
            built for practice with simple components, arrays, and state.
          </p>

          <div className="allen-hero-points">
            <div>
              <strong>FREE ASAT access</strong>
              <span>Simple promotional hero section with strong CTA structure</span>
            </div>
            <div>
              <strong>Live + mentorship</strong>
              <span>Online course positioning with coaching-style value points</span>
            </div>
            <div>
              <strong>Revision support</strong>
              <span>Highlights app access, tests, and guided preparation</span>
            </div>
          </div>
        </div>

        <form className="allen-form-card">
          <h2>Register for ASAT</h2>
          <p>Fill the form to explore scholarship-backed online courses.</p>

          <input
            name="name"
            onChange={handleChange}
            placeholder="Student's full name"
            type="text"
            value={form.name}
          />
          <input
            name="mobile"
            onChange={handleChange}
            placeholder="Mobile number"
            type="tel"
            value={form.mobile}
          />

          <div className="allen-goals">
            {goals.map((goal) => (
              <button
                className={selectedGoal === goal ? "active" : ""}
                key={goal}
                onClick={() => setSelectedGoal(goal)}
                type="button"
              >
                {goal}
              </button>
            ))}
          </div>

          <input
            name="className"
            onChange={handleChange}
            placeholder="Looking for admission in class"
            type="text"
            value={form.className}
          />
          <input
            name="pincode"
            onChange={handleChange}
            placeholder="Current pincode"
            type="text"
            value={form.pincode}
          />

          <button className="allen-primary-button" type="button">
            Register at Rs. 99
          </button>
          <small>By registering you accept the terms & conditions.</small>
        </form>
      </section>

      <section className="allen-stats">
        <div>
          <strong>90%</strong>
          <span>Maximum scholarship</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Main course paths</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Doubt support</span>
        </div>
        <div>
          <strong>Online</strong>
          <span>Study from anywhere</span>
        </div>
      </section>

      <section className="allen-section">
        <div className="allen-section-head">
          <span>Why this page works</span>
          <h2>Benefits-focused design for student conversion</h2>
        </div>

        <div className="allen-benefit-grid">
          {benefits.map((benefit) => (
            <article className="allen-benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="allen-section">
        <div className="allen-section-head">
          <span>Recommended courses</span>
          <h2>Popular online courses students can choose after the test</h2>
        </div>

        <div className="allen-course-grid">
          {courses.map((course) => (
            <article className="allen-course-card" key={course.title}>
              <span className="allen-course-tag">{course.target}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="allen-course-footer">
                <strong>{course.price}</strong>
                <button type="button">Know More</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="allen-section allen-process-section">
        <div className="allen-section-head">
          <span>Test process</span>
          <h2>Simple registration flow</h2>
        </div>

        <div className="allen-steps">
          {steps.map((step, index) => (
            <div className="allen-step-card" key={step}>
              <div className="allen-step-number">0{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="allen-section">
        <div className="allen-section-head">
          <span>Frequently asked questions</span>
          <h2>Simple interactive FAQ with React state</h2>
        </div>

        <div className="allen-faq-list">
          {faqs.map((faq, index) => (
            <article className="allen-faq-item" key={faq.question}>
              <button
                className="allen-faq-question"
                onClick={() => setOpenFaq(index)}
                type="button"
              >
                <span>{faq.question}</span>
                <span>{openFaq === index ? "-" : "+"}</span>
              </button>
              {openFaq === index ? <p>{faq.answer}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllenLandingPage;
