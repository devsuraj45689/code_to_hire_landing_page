import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="hero">
        <div className="orb one"></div>
        <div className="orb two"></div>
        <div className="container hero-inner">
          <div>
            <div className="badge">
              🚀 Live Event • High-Intensity Coding Session
            </div>
            <h1 className="h1" style="margin: 14px 0 10px">
              From Zero to React Developer —{" "}
              <span style="color: var(--primary)">Free 90‑Minute Webinar</span>
            </h1>
            <p className="muted" style="max-width: 740px">
              Stop juggling random tutorials. In one focused session, we’ll
              build and deploy a real React app, map your job‑ready roadmap, and
              unlock resources you can use the same day.
            </p>

            <ul className="hero-list">
              <li>
                <span className="check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0b1220"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                Hands‑on build: Real‑time Task Manager with React + Tailwind
              </li>
              <li>
                <span className="check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0b1220"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                Free React Starter Kit, Cheatsheets, and Replay Access
              </li>
              <li>
                <span className="check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0b1220"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                Career Roadmap: Skills, Projects, and Interview Plan
              </li>
            </ul>

            <div className="panel" style="margin: 14px 0 10px">
              <strong>🗓 Date:</strong>{" "}
              <span id="webinar-date">Sept 14, 2025</span> &nbsp;•&nbsp;{" "}
              <strong>⏰ Time:</strong> 7:00 PM IST &nbsp;•&nbsp;
              <strong>🎟 Seats:</strong> Limited to 250
              <div
                className="countdown"
                id="countdown"
                aria-label="Countdown timer"
              ></div>
            </div>

            <div className="hero-cta">
              <a href="#register" className="btn btn-accent">
                Reserve My Free Seat
              </a>
              <a href="#whatsapp" className="btn btn-primary">
                Join WhatsApp Group
              </a>
            </div>
          </div>

          <div className="card">
            <div className="h3">Quick Registration</div>
            <p className="muted" style="margin-top: 6px">
              Secure your spot in under 30 seconds. We’ll email/WhatsApp the
              joining link and resources.
            </p>
            <form id="register" className="grid" style="margin-top: 10px">
              <input
                required
                placeholder="Full Name"
                aria-label="Full Name"
                className="card"
                style="padding: 14px"
              />
              <input
                type="email"
                required
                placeholder="Email"
                aria-label="Email"
                className="card"
                style="padding: 14px"
              />
              <input
                required
                placeholder="WhatsApp Number"
                aria-label="WhatsApp Number"
                className="card"
                style="padding: 14px"
              />
              <button
                type="submit"
                className="btn btn-success"
                style="justify-content: center"
              >
                Reserve Seat (Free)
              </button>
              <small className="muted">
                By registering you agree to our Terms & Privacy.
              </small>
            </form>
          </div>
        </div>
      </header>

      <main>
        {/* <!-- Problem Section --> */}
        <section className="container reveal">
          <div className="section-head">
            <div>
              <div className="sub">Why most learners stay stuck</div>
              <h2 className="h2">
                The harsh truth: Learning React the random way rarely works
              </h2>
            </div>
          </div>
          <div className="grid problems">
            <div className="card list">
              <div className="item">
                <span className="dot"></span>
                <div>
                  Jumping between unrelated YouTube videos with no structure or
                  feedback.
                </div>
              </div>
              <div className="item">
                <span className="dot"></span>
                <div>
                  Copy‑pasting code that breaks under real‑world constraints.
                </div>
              </div>
              <div className="item">
                <span className="dot"></span>
                <div>
                  Zero portfolio signal: recruiters can’t see impact or depth.
                </div>
              </div>
              <div className="item">
                <span className="dot"></span>
                <div>
                  Analysis paralysis: which stack, which project, which roadmap?
                </div>
              </div>
              <div className="item">
                <span className="dot"></span>
                <div>
                  Interview anxiety with no mock practice or code reviews.
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="h3">This webinar flips the script</h3>
              <ul className="hero-list">
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Single, guided 90‑minute build — end to end.
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Deploy live during the session (instant portfolio win).
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Clear next‑steps roadmap and a practice plan.
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Community support to get unstuck fast.
                </li>
              </ul>
              <a href="#register" className="btn btn-accent">
                Claim my seat
              </a>
            </div>
          </div>
        </section>

        {/* <!-- Tangible Build --> */}
        <section className="container reveal">
          <div className="section-head">
            <div>
              <div className="sub">What we will build</div>
              <h2 className="h2">
                Real‑time Task Manager — built together, deployed together
              </h2>
            </div>
          </div>
          <div className="grid features">
            <div className="card">
              <div className="h3">Modern stack</div>
              <p className="muted">
                React 18, Vite, Tailwind, Hooks, localStorage — fast, clean,
                job‑ready.
              </p>
            </div>
            <div className="card">
              <div className="h3">Feature set</div>
              <p className="muted">
                Add/edit tasks, priorities, filters, persistence, keyboard
                shortcuts.
              </p>
            </div>
            <div className="card">
              <div className="h3">Best practices</div>
              <p className="muted">
                Folder structure, reusable components, accessibility,
                performance.
              </p>
            </div>
            <div className="card">
              <div className="h3">Deploy live</div>
              <p className="muted">
                Push to GitHub + deploy on Vercel in minutes — show it on your
                resume.
              </p>
            </div>
          </div>
          <div style="margin-top: 16px">
            <a href="#register" className="btn btn-primary">
              I’m in — save my seat
            </a>
          </div>
        </section>

        {/* <!-- Agenda --> */}
        <section className="container reveal">
          <div className="section-head">
            <div>
              <div className="sub">Tight schedule, big outcomes</div>
              <h2 className="h2">90 minutes, step by step</h2>
            </div>
          </div>
          <div className="grid agenda">
            <div className="card slot">
              <strong>00–10</strong>
              <div className="h3">Setup + context</div>
              <p className="muted">
                Tools, repo, mental model of React and how we’ll work.
              </p>
            </div>
            <div className="card slot">
              <strong>10–50</strong>
              <div className="h3">Live build</div>
              <p className="muted">
                Components, state, events, data flow — ship core features.
              </p>
            </div>
            <div className="card slot">
              <strong>50–70</strong>
              <div className="h3">Polish + ship</div>
              <p className="muted">
                UX touches, accessibility checks, deploy to production.
              </p>
            </div>
            <div className="card slot">
              <strong>70–90</strong>
              <div className="h3">Roadmap + Q&A</div>
              <p className="muted">
                Your 4‑week plan to go from beginner to job‑ready.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Bonuses --> */}
        <section className="container reveal">
          <div className="section-head">
            <div>
              <div className="sub">Register to unlock</div>
              <h2 className="h2">
                Exclusive bonuses (₹3,500 value) — free for attendees
              </h2>
            </div>
          </div>
          <div className="grid bonuses">
            <div className="card">
              <div className="h3">React Starter Kit</div>
              <p className="muted">
                Prebuilt components, hooks, and patterns to move faster.
              </p>
            </div>
            <div className="card">
              <div className="h3">Replay Access</div>
              <p className="muted">
                Watch again for 7 days to reinforce learning.
              </p>
            </div>
            <div className="card">
              <div className="h3">Placement Checklist</div>
              <p className="muted">
                Skills, projects, and artifacts recruiters look for.
              </p>
            </div>
            <div className="card">
              <div className="h3">Community Access</div>
              <p className="muted">
                Peer help, accountability, and weekly challenges.
              </p>
            </div>
          </div>
          <div style="margin-top: 16px">
            <a href="#register" className="btn btn-accent">
              Save my free seat + bonuses
            </a>
          </div>
        </section>

        {/* <!-- Mentor --> */}
        <section className="container reveal">
          <div className="section-head">
            <div>
              <div className="sub">Your mentor</div>
              <h2 className="h2">Suraj Sharma — Front‑End Engineer & Coach</h2>
            </div>
          </div>
          <div className="grid features">
            <div className="card">
              <div className="h3">4+ years, production apps</div>
              <p className="muted">
                React, Next.js, real‑time systems — building for thousands of
                users.
              </p>
            </div>
            <div className="card">
              <div className="h3">Outcome‑driven teaching</div>
              <p className="muted">
                Projects over theory, interviews over trivia, portfolios over
                notes.
              </p>
            </div>
            <div className="card">
              <div className="h3">Students placed</div>
              <p className="muted">
                Mentored learners who landed internships and junior roles.
              </p>
            </div>
            <div className="card">
              <div className="h3">CodeToHire</div>
              <p className="muted">
                Focused on skills → projects → placement — no fluff.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section className="container reveal">
          <div className="section-head">
            <div>
              <div className="sub">Real stories</div>
              <h2 className="h2">What past attendees say</h2>
            </div>
          </div>
          <div className="grid testimonials">
            <div className="card">
              <div className="quote">
                “I built my first React app in the session and deployed it the
                same night.”
              </div>
              <div className="muted" style="margin-top: 8px">
                — Rohit, Front‑End Intern
              </div>
            </div>
            <div className="card">
              <div className="quote">
                “The 4‑week plan after the webinar finally gave me structure. I
                stopped guessing.”
              </div>
              <div className="muted" style="margin-top: 8px">
                — Aisha, CS Undergrad
              </div>
            </div>
            <div className="card">
              <div className="quote">
                “Joined the 1‑month course after — the mock interviews were a
                game changer.”
              </div>
              <div className="muted" style="margin-top: 8px">
                — Kunal, Placed at a startup
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Pricing Teaser for 1‑Month Course (Post‑Webinar Offer) --> */}
        <section className="container reveal" id="offer">
          <div className="section-head">
            <div>
              <div className="sub">After the webinar</div>
              <h2 className="h2">
                Go deeper with the 1‑Month Intensive (Optional, limited seats)
              </h2>
            </div>
          </div>
          <div className="pricing">
            <div className="card">
              <div className="h3">What you’ll master in 4 weeks</div>
              <ul className="hero-list" style="margin-top: 8px">
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Advanced React patterns, Forms, and Routing
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  State Management with Redux Toolkit / RTK Query
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  API integration, error handling, and auth flows
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Performance, accessibility, and production deployment
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Weekly mock interviews + portfolio reviews
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="h3">Launch offer for attendees</div>
              <p className="muted">
                Only for those who attend the webinar live.
              </p>
              <div style="margin: 10px 0 16px">
                <span className="price-tag">₹12,000</span>
                <span className="strike">₹18,000</span>
              </div>
              <ul className="hero-list">
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  4 weeks • 3 live classes/week • capstone project
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Placement assistance + resume & LinkedIn overhaul
                </li>
                <li>
                  <span className="check">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0b1220"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  48‑hour bonus window with extra templates
                </li>
              </ul>
              <a
                href="#register"
                className="btn btn-success"
                style="margin-top: 10px"
              >
                I’ll decide after the webinar → Save my seat
              </a>
            </div>
          </div>
        </section>

        {/* <!-- FAQ --> */}
        <section className="container reveal">
          <div className="section-head">
            <div>
              <div className="sub">Questions, answered</div>
              <h2 className="h2">FAQ</h2>
            </div>
          </div>
          <div
            className="grid"
            style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))"
          >
            <details className="reveal" open>
              <summary>Is it really free?</summary>
              <p className="muted">
                Yes. The webinar is 100% free. At the end, you’ll have the
                option to join the 1‑month intensive. No pressure.
              </p>
            </details>
            <details className="reveal">
              <summary>Do I need prior experience?</summary>
              <p className="muted">
                Basic HTML/CSS/JS is helpful, but we’ll set everything up
                together. Ideal for beginners and self‑taught devs.
              </p>
            </details>
            <details className="reveal">
              <summary>Will I get the recording?</summary>
              <p className="muted">
                Yes, registrants get 7‑day replay access, plus the Starter Kit
                and slides.
              </p>
            </details>
            <details className="reveal">
              <summary>How do I join the session?</summary>
              <p className="muted">
                After registering, you’ll receive the Zoom/Meet link on email
                and WhatsApp. We’ll also send reminders.
              </p>
            </details>
            <details className="reveal">
              <summary>What if I can’t attend live?</summary>
              <p className="muted">
                Register anyway to get the replay and resources. Live Q&amp;A is
                exclusive to attendees.
              </p>
            </details>
            <details className="reveal">
              <summary>When does the 1‑month course start?</summary>
              <p className="muted">
                Cohorts start the week after the webinar. Attendees get priority
                and a limited‑time discount.
              </p>
            </details>
          </div>
        </section>

        {/* <!-- Final CTA --> */}
        <section className="container reveal" style="text-align: center">
          <div className="card" style="padding: 30px">
            <h2 className="h2" style="margin: 0 0 8px">
              Make this the day you start shipping.
            </h2>
            <p className="muted" style="margin: 0 0 18px">
              Join the live session, build a real app, and leave with a plan you
              can trust.
            </p>
            <div className="hero-cta" style="justify-content: center">
              <a href="#register" className="btn btn-accent">
                Reserve My Free Seat
              </a>
              <a id="whatsapp" href="#" className="btn btn-primary">
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div
          className="container"
          style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px"
        >
          <div>
            © <span id="year"></span> CodeToHire • All rights reserved
          </div>
          <div className="muted" style="display: flex; gap: 14px">
            <a href="#">Privacy</a>
            <span>•</span>
            <a href="#">Terms</a>
            <span>•</span>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
