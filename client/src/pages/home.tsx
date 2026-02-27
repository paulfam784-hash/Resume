import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, GraduationCap, Briefcase, ChevronDown,
  Mail, Phone, Download, Users,
  Sparkles, ShieldCheck,
  ClipboardList, Award, Menu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const resumeFile = "/Paul_Fam_Resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const navSections = ["about", "skills", "experience", "education", "contact"];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <span className="font-serif text-xl font-bold tracking-tight" data-testid="text-logo">
          P<span className="text-primary">.</span>F
        </span>

        <div className="hidden md:flex items-center gap-1 flex-wrap">
          {navSections.map((section) => (
            <Button
              key={section}
              variant="ghost"
              size="sm"
              onClick={() => scrollTo(section)}
              data-testid={`link-nav-${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" asChild data-testid="button-download-resume">
            <a href={resumeFile} download="Paul_Fam_Resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Resume</span>
              <span className="sm:hidden">PDF</span>
            </a>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="font-serif text-lg mb-6">
                P<span className="text-primary">.</span>F
              </SheetTitle>
              <nav className="flex flex-col gap-1">
                {navSections.map((section) => (
                  <Button
                    key={section}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => scrollTo(section)}
                    data-testid={`link-mobile-nav-${section}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-16 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[-8rem] w-[28rem] h-[28rem] bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-8rem] w-[24rem] h-[24rem] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium" data-testid="badge-status">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to Opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          data-testid="text-hero-name"
        >
          Paul <span className="text-primary">Fam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-base sm:text-lg font-medium text-foreground/80 mb-6"
          data-testid="text-hero-title"
        >
          Food Service Professional
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-tagline"
        >
          Dependable and detail-oriented professional with a strong track record in dining room
          management, sanitation, and customer hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-10 flex-wrap"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary" />
            <span data-testid="text-location">Broken Arrow, OK</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:9188143054" className="hover:underline" data-testid="text-phone">(918) 814-3054</a>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:paulfam784@gmail.com" className="hover:underline" data-testid="text-email">paulfam784@gmail.com</a>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} data-testid="button-get-in-touch">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-view-experience"
          >
            View Experience
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Introduction</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-2" data-testid="text-about-heading">Professional Summary</h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-6" data-testid="text-about-description">
            Dependable and detail-oriented Food Service professional with a strong track record in
            dining room management, sanitation, and customer hospitality. Committed to maintaining
            high cleanliness standards and providing a welcoming environment for guests.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-about-objective">
            Proven ability to work efficiently in fast-paced settings while ensuring customer
            satisfaction. Seeking a position that will expand my knowledge and independence while
            contributing strong hospitality and teamwork skills.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "3", label: "Companies" },
            { value: "100%", label: "Reliable" },
            { value: "2023", label: "HS Graduate" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-4" data-testid={`stat-${i}`}>
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const skillCategories = [
  {
    title: "Hospitality",
    icon: Sparkles,
    items: ["Guest Greeting", "Table Service", "Customer Assistance", "Conflict Resolution"],
  },
  {
    title: "Operations",
    icon: ClipboardList,
    items: ["Inventory Restocking", "Dining Room Sanitation", "Waste Management", "Safety Compliance"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: ["Professional Communication", "Team Collaboration", "Punctuality", "Independence"],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What I Bring</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold" data-testid="text-skills-heading">Key Skills</h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-2 mb-10" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} variants={fadeUp} custom={i + 1}>
              <Card className="h-full" data-testid={`card-skill-${i}`}>
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-4" data-testid={`text-skill-title-${i}`}>{cat.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const experiences = [
  {
    company: "Chick-fil-A",
    role: "Lobby Attendant",
    location: "Broken Arrow, OK",
    period: "Jan 2025 - Sep 2025",
    bullets: [
      "Upheld strict brand standards for cleanliness and hospitality in a high-volume environment.",
      "Maintained a pristine dining area by sanitizing tables, organizing chairs, and managing waste disposal efficiently.",
      "Proactively replenished condiment stations and supplies to ensure constant availability for guests.",
      "Greeted arriving customers and provided friendly assistance to ensure a positive dining experience.",
    ],
    tags: ["Brand Standards", "Guest Experience", "High Volume"],
  },
  {
    company: "McDonald's",
    role: "Lobby Attendant",
    location: "Broken Arrow, OK",
    period: "Mar 2023 - May 2024",
    bullets: [
      "Ensured the dining room remained clean and welcoming by consistently sanitizing surfaces and clearing trays.",
      "Monitored and restocked lobby supplies, including napkins, straws, and condiments.",
      "Assisted customers with immediate needs while strictly adhering to health and safety regulations.",
    ],
    tags: ["Health & Safety", "Sanitation", "Customer Support"],
  },
  {
    company: "Golden Corral",
    role: "Beverage Server & Busser",
    location: "Broken Arrow, OK",
    period: "Jan 2022 - Jan 2023",
    bullets: [
      "Provided efficient beverage service to guests, ensuring refills were offered promptly.",
      "Managed beverage stations, keeping them fully stocked, clean, and organized.",
      "Rapidly cleared and wiped down tables to maximize seating availability during peak hours.",
    ],
    tags: ["Beverage Service", "Table Management", "Peak Hours"],
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Career Path</p>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold" data-testid="text-experience-heading">Experience</h2>
          </div>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company} variants={fadeUp} custom={i + 1} className="relative sm:pl-12">
                <div className="absolute left-2.5 top-7 w-3 h-3 rounded-full bg-primary border-2 border-background hidden sm:block" />
                <Card data-testid={`card-experience-${i}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="text-xl font-bold" data-testid={`text-company-${i}`}>{exp.company}</h3>
                        <p className="font-medium text-muted-foreground" data-testid={`text-role-${i}`}>{exp.role}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <Badge variant="secondary" className="no-default-active-elevate mb-1" data-testid={`badge-period-${i}`}>
                          {exp.period}
                        </Badge>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 mt-5 flex-wrap">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs no-default-active-elevate" data-testid={`badge-tag-${tag}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Learning</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold" data-testid="text-education-heading">Education & Training</h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-2 mb-10" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5"
        >
          <motion.div variants={fadeUp} custom={1}>
            <Card data-testid="card-training">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold" data-testid="text-training-name">The Bridges Foundation</h3>
                      <Badge variant="secondary" className="w-fit no-default-active-elevate" data-testid="badge-training-date">
                        January 2026
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Job Club Training</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                      <MapPin className="w-3 h-3" /> Jenks, OK
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Completed comprehensive training focused on professional job-finding methods,
                      application procedures, and interview skills. Developed strategies for workplace
                      success and independence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <Card data-testid="card-education">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold" data-testid="text-school">Broken Arrow High School</h3>
                      <Badge variant="secondary" className="w-fit no-default-active-elevate" data-testid="badge-graduation">
                        Class of 2023
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">High School Diploma</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Broken Arrow, OK
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-center"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Reach Out</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-2" data-testid="text-contact-heading">Let's Connect</h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6 mx-auto" />
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed" data-testid="text-contact-description">
            I'm actively looking for new opportunities where I can grow and contribute.
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          <motion.div variants={fadeUp} custom={1}>
            <Card className="h-full" data-testid="card-contact-email">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:paulfam784@gmail.com"
                  className="text-sm font-medium hover:underline break-all"
                  data-testid="link-contact-email"
                >
                  paulfam784@gmail.com
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <Card className="h-full" data-testid="card-contact-phone">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:9188143054"
                  className="text-sm font-medium hover:underline"
                  data-testid="link-contact-phone"
                >
                  (918) 814-3054
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} custom={3}>
            <Card className="h-full" data-testid="card-contact-location">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-sm font-medium">Broken Arrow, OK 74011</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={4}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <Button size="lg" asChild data-testid="button-email-paul">
            <a href="mailto:paulfam784@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send an Email
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild data-testid="button-download-resume-bottom">
            <a href={resumeFile} download="Paul_Fam_Resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="font-serif font-bold" data-testid="text-footer-name">Paul Fam</span>
          <Separator orientation="vertical" className="h-4 hidden sm:block" />
          <span className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap justify-center">
          <a href="mailto:paulfam784@gmail.com" className="hover:underline inline-flex items-center gap-1" data-testid="link-footer-email">
            <Mail className="w-3.5 h-3.5" /> paulfam784@gmail.com
          </a>
          <a href="tel:9188143054" className="hover:underline inline-flex items-center gap-1" data-testid="link-footer-phone">
            <Phone className="w-3.5 h-3.5" /> (918) 814-3054
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
