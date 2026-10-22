import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Mail, MapPin, Linkedin, Github, Phone, Download, ArrowRight, Send, User, ImageIcon,
  TrendingUp, Database, Presentation, BarChart3, Sigma, Filter, Code2, FileSpreadsheet,
  Network, LayoutDashboard, Wind, Layers, Container, Cloud, Server, Users, Award, Trophy,
  GraduationCap, BadgeCheck, Languages, Briefcase, Menu, X,
} from "lucide-react";
import healthcareDepartments from "@/assets/healthcare-dashboard-departments.png.asset.json";
import healthcareVisits from "@/assets/healthcare-dashboard-visits.png.asset.json";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omar Mostafa Aldahshoury — Data Engineer & Data Analyst" },
      { name: "description", content: "Data Engineer & Power BI analyst building ETL/ELT pipelines, data warehouses and high-impact dashboards. Based in Zagazig, Egypt." },
      { property: "og:title", content: "Omar Mostafa Aldahshoury — Data Engineer & Data Analyst" },
      { property: "og:description", content: "Transforming complex datasets into high-impact business decisions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "omarmos988@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/omar-el-dahshoury";
const GITHUB = "https://github.com/omarmos988";

const nav = [
  ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Experience", "experience"], ["Education", "education"], ["Contact", "contact"],
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary">// {eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-gradient-primary" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Typing() {
  const words = ["Data Engineer", "Data Analyst", "Power BI Engineer"];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length] ?? "";
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1));
        if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, del ? 45 : 90);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return <span className="caret pr-1 text-gradient">{text}</span>;
}

const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition";
const btnPrimary = `${btn} bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90`;
const btnOutline = `${btn} border border-primary/40 text-foreground hover:bg-primary/10`;

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="font-display text-lg font-bold">Omar<span className="text-primary">.data</span></a>
          <nav className="hidden gap-7 md:flex">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="text-sm text-muted-foreground hover:text-primary">{l}</a>)}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 px-5 pb-4 md:hidden">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-muted-foreground hover:bg-primary/10">{l}</a>)}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="grid-bg relative px-5 pb-20 pt-32 md:pt-40">
        <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3 py-1 text-xs font-medium text-success">
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> Available for Projects
            </span>
            <p className="mt-6 font-mono text-sm text-muted-foreground">Hello, I'm</p>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">Omar Mostafa <br className="hidden sm:block" />Aldahshoury</h1>
            <p className="mt-4 h-9 text-2xl font-semibold md:text-3xl"><Typing /></p>
            <p className="mt-5 max-w-xl text-muted-foreground">
              I transform complex, multi-source datasets into clean pipelines and high-impact dashboards that drive real business decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}>View Projects <ArrowRight className="h-4 w-4" /></a>
              <a href="#contact" className={btnOutline}>Contact Me</a>
              <a href="/cv.pdf" download className={btnOutline}><Download className="h-4 w-4" /> Download CV</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" />{EMAIL}</a>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Zagazig, Egypt</span>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-70 blur-md" />
              <div className="relative flex h-60 w-60 items-center justify-center rounded-full border-4 border-background bg-card md:h-80 md:w-80">
                <User className="h-24 w-24 text-muted-foreground/50" />
                <span className="absolute bottom-6 text-xs text-muted-foreground">Profile photo</span>
              </div>
              <span className="glass absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold text-primary">● Open to work</span>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="about me" title="Turning data into decisions">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I'm a third-year <span className="text-foreground">Computers and Information</span> student at Zagazig University (Expected Graduation 2028),
          sharpened through intensive training with <span className="text-foreground">DEPI, ITI, and NTI</span>. I specialize in scalable data pipelines,
          ETL/ELT workflows, and business intelligence — building the foundations that let teams trust and act on their data.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [TrendingUp, "Business Impact", "Uncovering deep operational and financial insights that move the needle."],
            [Database, "Data Craft", "Building robust ETL/ELT pipelines, data warehouses, and clean analytical models using SQL, Python, dbt, and PostgreSQL."],
            [Presentation, "Teaching & Storytelling", "Translating multi-source data into compelling Power BI and Tableau dashboards."],
          ].map(([Icon, t, d]: any) => (
            <div key={t} className="card-hover rounded-2xl border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="technical skills" title="Tools of the trade">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            [BarChart3, "Power BI"], [Sigma, "DAX"], [Filter, "Power Query"], [Database, "SQL"], [Code2, "Python"],
            [FileSpreadsheet, "Excel"], [Network, "Data Modeling"], [LayoutDashboard, "Dashboard Design"], [Wind, "Apache Airflow"],
            [Layers, "dbt"], [Container, "Docker"], [Cloud, "Databricks"], [Server, "PostgreSQL"],
          ].map(([Icon, n]: any) => (
            <div key={n} className="card-hover flex flex-col items-center gap-3 rounded-2xl border bg-card p-5 text-center">
              <Icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">{n}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="featured projects" title="Selected work">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Car Sales Analysis & Price Prediction",
              desc: "End-to-end EDA, interactive Power BI dashboards, and a Python machine learning price-prediction model served through a Gradio UI.",
              tags: ["Python", "Power BI", "ML", "Gradio"],
            },
            {
              title: "Healthcare Analytics Dashboard",
              desc: "Analyzed 23.8K+ patient visit records and $92.3M+ in treatment costs, tracking 61.36% YoY revenue growth.",
              tags: ["Power BI", "DAX", "Data Modeling"],
              images: [
                {
                  src: healthcareDepartments.url,
                  alt: "Healthcare dashboard: revenue by department, insurance provider mix, satisfaction versus length of stay, and doctor performance",
                },
                {
                  src: healthcareVisits.url,
                  alt: "Healthcare dashboard: monthly visit counts, patient gender split, payment method and visit type breakdowns",
                },
              ],
            },
            {
              title: "Personal Portfolio & E-commerce App",
              desc: "A responsive portfolio and e-commerce web app built with modern frontend tooling.",
              tags: ["React", "Vite", "Bootstrap"],
            },
          ].map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
        <div className="mt-10 text-center">
          <a href={GITHUB} target="_blank" rel="noreferrer" className={btnOutline}><Github className="h-4 w-4" /> View More Projects</a>
        </div>
      </Section>

      <Section id="experience" eyebrow="professional experience" title="Where I've trained & built">
        <ol className="relative ml-3 border-l-2 border-primary/30">
          {[
            ["Data Engineering Trainee", "Digital Egypt Pioneers Initiative (DEPI)", "July 2026 – Present", "Designed scalable data pipelines and data warehouses applying SQL, Python, PostgreSQL, dbt, Airflow, Docker, Databricks, Kafka, and NoSQL."],
            ["Data Analytics & BI Trainee", "Information Technology Institute (ITI)", "June 2026 – September 2026", "Completed 144 intensive training hours developing advanced SQL, data warehouses, BI solutions, Power BI, Tableau, AI Agents, and workflow automation."],
            ["Advanced Data Analytics Trainee", "National Telecommunication Institute (NTI)", "August 2026", "Completed a 120-hour program in SQL, Python, Excel, Machine Learning, and Power BI with an 84.5% score; performed data cleaning and EDA."],
          ].map(([r, o, d, desc]) => (
            <li key={r} className="mb-10 ml-8 last:mb-0">
              <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-primary shadow-glow" />
              <div className="card-hover rounded-2xl border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-lg font-semibold"><Briefcase className="h-4 w-4 text-primary" />{r}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">{d}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{o}</p>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            [Users, "10+", "Clients & Collaborations"], [LayoutDashboard, "15+", "Dashboards Built"],
            [Award, "3+", "Major Bootcamps (DEPI, ITI, NTI)"], [Trophy, "3", "Top National Tech Initiatives"],
          ].map(([Icon, n, l]: any) => (
            <div key={l} className="card-hover rounded-2xl border bg-card p-6 text-center">
              <Icon className="mx-auto h-7 w-7 text-primary" />
              <p className="mt-3 font-display text-4xl font-bold text-gradient">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <Section id="education" eyebrow="education & certifications" title="Learning never stops">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="flex items-center gap-2 font-semibold"><GraduationCap className="h-5 w-5 text-primary" /> Academic Degrees</h3>
            <div className="mt-5 rounded-xl bg-muted p-4">
              <p className="font-medium">Bachelor's Degree in Computers and Information</p>
              <p className="text-sm text-muted-foreground">Zagazig University · Expected Graduation: 2028</p>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="flex items-center gap-2 font-semibold"><BadgeCheck className="h-5 w-5 text-primary" /> Courses & Certifications</h3>
            <ul className="mt-5 space-y-3">
              {["Data Engineering — DEPI (2026)", "Data Analytics & BI — ITI (2026)", "Advanced Data Analytics — NTI (2026)"].map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-xl bg-muted p-3 text-sm"><BadgeCheck className="h-4 w-4 shrink-0 text-accent" />{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border bg-card p-6">
          <h3 className="flex items-center gap-2 font-semibold"><Languages className="h-5 w-5 text-primary" /> Languages</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Arabic: Native", "English: B2 Upper-Intermediate"].map((l) => <span key={l} className="rounded-full border border-primary/40 px-4 py-1.5 text-sm">{l}</span>)}
          </div>
        </div>
      </Section>

      <Section id="contact" eyebrow="let's connect" title="Let's build something with data">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Mail, "Email", EMAIL, `mailto:${EMAIL}`], [Phone, "Phone", "01282270716", "tel:+201282270716"],
                [Linkedin, "LinkedIn", "omar-el-dahshoury", LINKEDIN], [MapPin, "Location", "Zagazig, Egypt", undefined],
              ].map(([Icon, l, v, h]: any) => {
                const inner = (<><Icon className="h-5 w-5 text-primary" /><p className="mt-3 text-xs text-muted-foreground">{l}</p><p className="break-all text-sm font-medium">{v}</p></>);
                return h
                  ? <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-hover rounded-2xl border bg-card p-5">{inner}</a>
                  : <div key={l} className="rounded-2xl border bg-card p-5">{inner}</div>;
              })}
            </div>
            <a href={GITHUB} target="_blank" rel="noreferrer" className={`${btnOutline} mt-6`}><Github className="h-4 w-4" /> View GitHub Profile</a>
          </div>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Omar Mostafa Aldahshoury · Built with data & care
      </footer>
    </div>
  );
}

type Project = {
  title: string;
  desc: string;
  tags: string[];
  images?: { src: string; alt: string }[];
};

function ProjectCard({ p }: { p: Project }) {
  const [active, setActive] = useState(0);
  const images = p.images ?? [];
  const hero = images[active] ?? images[0];

  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-2xl border bg-card">
      <div className="grid-bg relative aspect-video overflow-hidden border-b bg-muted">
        {hero ? (
          <img
            src={hero.src}
            alt={hero.alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground/60">
            <ImageIcon className="h-10 w-10" />
            <span className="text-xs">Dashboard screenshot</span>
          </div>
        )}
        {images.length > 1 && (
          <div className="absolute inset-x-0 bottom-0 flex justify-end gap-2 bg-gradient-to-t from-black/70 to-transparent p-2">
            {images.map((im, i) => (
              <button
                key={im.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show screenshot ${i + 1} of ${p.title}`}
                aria-current={i === active}
                className={cn(
                  "h-10 w-16 shrink-0 overflow-hidden rounded-md border-2 transition",
                  i === active ? "border-primary" : "border-white/50 opacity-70 hover:opacity-100",
                )}
              >
                <img src={im.src} alt="" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((x) => (
            <span key={x} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">{x}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio inquiry from ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
  };
  const input = "w-full rounded-xl border border-input bg-muted px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border bg-card p-6">
      <input name="name" required maxLength={100} placeholder="Your name" className={input} />
      <input name="email" type="email" required maxLength={255} placeholder="Your email" className={input} />
      <textarea name="message" required maxLength={1000} rows={5} placeholder="Your message" className={input} />
      <button type="submit" className={`${btnPrimary} w-full`}><Send className="h-4 w-4" /> Send Message</button>
    </form>
  );
}
