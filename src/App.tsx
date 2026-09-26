import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowRight,
  ChevronRight,
  CircleCheck,
  Cpu,
  Crosshair,
  Globe2,
  Menu,
  Radio,
  ScanLine,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((node) => observerRef.current?.observe(node));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const openRegister = () => {
    setRegisterOpen(true);
    setRegistered(false);
  };

  const submitRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegistered(true);
  };

  const navItems = [
    ['signal', 'Signal'],
    ['arenas', 'Arenas'],
    ['protocol', 'Protocol'],
    ['timeline', 'Schedule'],
  ];

  return (
    <main className="tf-page">
      <div className="topline">
        <span className="pulse" /> <strong>LIVE SYSTEM</strong>&nbsp;&nbsp; / &nbsp;&nbsp;TECHFEST 2026 INITIALISING&nbsp;&nbsp; / &nbsp;&nbsp; IIT BOMBAY
      </div>
      <header className="nav">
        <div className="shell nav-inner">
          <button className="brand" onClick={() => scrollTo('top')} data-testid="button-brand-home">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-copy"><b>TECHFEST</b><span>IIT BOMBAY / 2026</span></span>
          </button>
          <nav className={`nav-links${mobileOpen ? ' mobile-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([id, label]) => (
              <button className="nav-link" key={id} onClick={() => scrollTo(id)} data-testid={`link-nav-${id}`}>{label}</button>
            ))}
            <button className="nav-cta" onClick={openRegister} data-testid="button-nav-register">Register now</button>
          </nav>
          <button className="mobile-toggle" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation" data-testid="button-mobile-menu">
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" /><div className="hero-slope" /><div className="hero-slope two" />
        <div className="shell hero-layout">
          <div>
            <div className="eyebrow hero-kicker">The human signal / 01</div>
            <h1><span className="outline">TECH</span><br /><span className="acid">FEST</span></h1>
            <p className="hero-intro">Where improbable questions become working prototypes. IIT Bombay’s flagship technology festival returns for a new generation of builders, researchers and restless minds.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={openRegister} data-testid="button-hero-register">Enter the network <ArrowRight size={15} /></button>
              <button className="btn-ghost" onClick={() => scrollTo('arenas')} data-testid="button-hero-explore">Explore arenas <ArrowDownRight size={15} /></button>
            </div>
            <div className="hero-meta">
              <div><span>Coordinates</span><strong>Powai, Mumbai</strong></div>
              <div><span>Transmission</span><strong>16 — 18 Oct 2026</strong></div>
            </div>
          </div>
          <div className="orbital" aria-label="Techfest orbital system graphic">
            <div className="orbital-graphic">
              <div className="orbit" /><div className="orbit" /><div className="orbit" />
              <div className="crosshair" /><div className="core" />
              <span className="orbital-label one">NODE / 19.13° N</span>
              <span className="orbital-label two">SIGNAL LOCKED</span>
              <span className="orbital-label three">72H / OPEN LOOP</span>
            </div>
            <div className="orbital-tag mono">EVENT_STATE: ONLINE</div>
          </div>
        </div>
        <div className="scroll-cue">Scroll to interface</div>
      </section>

      <section className="signal-strip" id="signal">
        <div className="shell signal-row">
          <div className="signal reveal"><div className="signal-number">30K+</div><div className="signal-label">Minds in orbit</div></div>
          <div className="signal reveal"><div className="signal-number">100+</div><div className="signal-label">Live challenges</div></div>
          <div className="signal reveal"><div className="signal-number">72H</div><div className="signal-label">No off switch</div></div>
          <div className="signal signal-feature reveal"><p>One campus. Every frontier.<br />The system is only as good as its people.</p><Zap size={23} /></div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="shell manifesto-layout">
          <div className="section-head reveal">
            <div><div className="eyebrow">A different kind of festival</div><h2>Built for the<br />unreasonable.</h2></div>
          </div>
          <div className="manifesto-aside reveal">
            <p className="mono">/ MANIFESTO_2026</p>
            <div className="manifesto-copy">Technology is not a finished thing. It is a question with <em>voltage.</em> Bring the idea you cannot stop thinking about. Find the people who make it real.</div>
            <div className="node-lines">Human ingenuity / machine precision / shared frequency</div>
          </div>
        </div>
      </section>

      <section className="section arenas" id="arenas">
        <div className="shell">
          <div className="section-head reveal">
            <div><div className="eyebrow">Choose your interface</div><h2>Enter a new<br />operating system.</h2></div>
            <p>Five ways in. One shared obsession: making the future less theoretical.</p>
          </div>
          <div className="arena-grid">
            <article className="arena-card reveal">
              <div><div className="arena-top"><span className="arena-index">01 / CHALLENGE</span><Cpu size={17} /></div><div className="arena-icon"><Cpu size={25} /></div><h3>Build mode</h3><p>Hackathons, hardware sprints and impossible briefs from the people shaping tomorrow.</p></div>
              <div className="arena-link">Deploy an idea <ChevronRight size={15} /></div>
            </article>
            <article className="arena-card featured reveal">
              <div><div className="arena-top"><span className="arena-index">02 / CONVERGENCE</span><Globe2 size={17} /></div><div className="arena-icon"><Globe2 size={25} /></div><h3>Frontier forum</h3><p>Researchers, founders and deep-tech minds in one room. Sharp questions encouraged. Safe answers discouraged.</p></div>
              <div className="arena-link">Meet the signal <ChevronRight size={15} /></div>
            </article>
            <article className="arena-card reveal">
              <div><div className="arena-top"><span className="arena-index">03 / DISCOVERY</span><ScanLine size={17} /></div><div className="arena-icon"><ScanLine size={25} /></div><h3>Open circuit</h3><p>Installations, demos and experiments that reward a closer look. Curiosity is your access pass.</p></div>
              <div className="arena-link">Find your frequency <ChevronRight size={15} /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section protocol" id="protocol">
        <div className="shell protocol-layout">
          <div className="protocol-intro reveal">
            <div className="eyebrow">The participation protocol</div>
            <h2>Show up.<br />Plug in.<br />Make noise.</h2>
            <p>There is no spectator mode. Choose a route, bring your curiosity, and leave with something that did not exist before.</p>
          </div>
          <div className="protocol-steps">
            <div className="step reveal"><span className="step-num">01 / ARRIVE</span><div><h3>Register your signal</h3><p>Tell us what you are building, exploring or trying to understand.</p></div><Radio size={18} /></div>
            <div className="step reveal"><span className="step-num">02 / CONNECT</span><div><h3>Find your people</h3><p>Teams form fast when the problems are worth solving.</p></div><Crosshair size={18} /></div>
            <div className="step reveal"><span className="step-num">03 / TRANSMIT</span><div><h3>Put it into the world</h3><p>Demo the rough thing. Ask the hard question. Keep going.</p></div><Terminal size={18} /></div>
            <div className="step reveal"><span className="step-num">04 / RETURN</span><div><h3>Take the signal home</h3><p>New collaborators, sharper instincts, and a reason to build again.</p></div><ShieldCheck size={18} /></div>
          </div>
        </div>
      </section>

      <section className="section timeline" id="timeline">
        <div className="shell">
          <div className="section-head reveal">
            <div><div className="eyebrow">Transmission schedule</div><h2>Three days.<br />No dead air.</h2></div>
            <p>Keep your calendar open. The most important collision is probably not on the schedule yet.</p>
          </div>
          <div className="timeline-grid">
            <div className="time-card active reveal"><div className="time-date">16 OCT / DAY 01</div><h3>Ignition</h3><p>Campus opens. Challenges drop. The first teams take shape under a sky full of new ideas.</p><span className="time-state">Entry window open</span></div>
            <div className="time-card reveal"><div className="time-date">17 OCT / DAY 02</div><h3>Acceleration</h3><p>Build rooms run hot. Talks go deep. Every shortcut gets tested in public.</p><span className="time-state">Full signal</span></div>
            <div className="time-card reveal"><div className="time-date">18 OCT / DAY 03</div><h3>Transmission</h3><p>Prototypes surface, ideas collide, and the next version of the future gets a stage.</p><span className="time-state">Final broadcast</span></div>
          </div>
        </div>
      </section>

      <section className="register-section" id="register">
        <div className="shell register-inner">
          <div className="reveal"><div className="eyebrow">Your access point is ready</div><h2>Be there.<span>Make it real.</span></h2></div>
          <div className="register-action reveal"><p>Registration opens soon. Leave your coordinates and we will transmit the moment the gates go live.</p><button className="btn-dark" onClick={openRegister} data-testid="button-register-final">Join the waitlist <ArrowRight size={16} /></button></div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-row">
          <span className="footer-brand">TECHFEST / IIT BOMBAY / 2026</span>
          <span>Built by students. Open to the world.</span>
          <div className="footer-right"><a href="#top" data-testid="link-footer-top">Back to top</a><a href="mailto:techfest@iitb.ac.in" data-testid="link-footer-contact">Contact node</a></div>
        </div>
      </footer>

      {registerOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setRegisterOpen(false); }}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="register-title">
            {registered ? (
              <div>
                <div className="success-mark"><CircleCheck size={27} /></div>
                <h2 id="register-title">Signal received.</h2>
                <p>Your coordinates are in the system. Watch your inbox for the next transmission from Techfest 2026.</p>
                <button className="btn-primary" onClick={() => setRegisterOpen(false)} data-testid="button-close-success">Return to interface</button>
              </div>
            ) : (
              <>
                <div className="modal-top"><div><div className="eyebrow">Access request / 2026</div><h2 id="register-title">Join the waitlist.</h2></div><button className="modal-close" onClick={() => setRegisterOpen(false)} aria-label="Close registration" data-testid="button-close-register"><X size={20} /></button></div>
                <p>Be first to know when registrations go live for IIT Bombay Techfest 2026.</p>
                <form className="modal-form" onSubmit={submitRegistration}>
                  <label>Full name<input required name="name" placeholder="Your name" data-testid="input-register-name" /></label>
                  <label>Email address<input required type="email" name="email" placeholder="you@domain.com" data-testid="input-register-email" /></label>
                  <button className="btn-primary" type="submit" data-testid="button-submit-register">Transmit my details <ArrowRight size={15} /></button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
