import { useState, useEffect } from "react";
import logoImg from "@/imports/logo.png";
import aboutBackground from "@/imports/aboutBackground.png";
import herovideoBackground from "@/imports/hero-video.mp4";
import Reveal from "./components/Reveal";
import { motion } from "motion/react";
import WhatsAppButton from "./components/WhatsAppButton";
import {
  Anchor,
  Scale,
  Shield,
  FileText,
  Users,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Gavel,
  Ship,
  Building2,
  MessageSquare,
} from "lucide-react";
import PortalLogin from "./PortalLogin";

// ─── Editable site data ───────────────────────────────────────────────────────

// 1. Update data TEAM_MEMBERS dengan data asli dari gambar
const TEAM_MEMBERS = [
  {
    category: "Managing Partner",
    members: [
      { name: "Laksda TNI (Purn) Anwar Saadi S.H., M.H.", role: "Managing Partner" },
      { name: "Laksda TNI (Purn) Kresno Buntoro, S.H., LL.M., Ph.D.", role: "Managing Partner" },
    ],
  },
  {
    category: "Office Manager",
    members: [
      { name: "Kolonel (Purn) Esti Chasanah. S.H.", role: "Office Manager" },
    ],
  },
  {
    category: "Senior Associate",
    members: [
      { name: "Laksma TNI (Purn) Leonard Marpaung S.H., M.H.", role: "Senior Associate" },
      { name: "Laksma TNI (Purn) Dr. Sinoeng Harjanti S.H., M.H.", role: "Senior Associate" },
    ],
  },
  {
    category: "Strategic Partner",
    members: [
      { name: "Laksma TNI (Purn) Joko Sulistyanto S.H., M.H.", role: "Strategic Partner" },
      { name: "(beserta 20 orang Rekan Perwira Hukum Aktif)", role: "Mitra Strategis Aktif" },
    ],
  },
  {
    category: "Divisi Litigasi",
    members: [
      { name: "Laksma TNI (Purn) Estu Rahardjo, S.H., M.H.", role: "Tim Litigasi" },
      { name: "Kolonel (Purn) Komang Suciawan S.H., M.H.", role: "Tim Litigasi" },
      { name: "Kolonel (Purn) Eko Priyanto, S.H.", role: "Tim Litigasi" },
      { name: "Kolonel (Purn) Merpati Supiarso, S.H., M.M., CFrA.", role: "Tim Litigasi" },
    ],
  },
  {
    category: "Divisi Non Litigasi",
    members: [
      { name: "Laksma TNI (Purn) Damayanti, S.H.", role: "Tim Non Litigasi" },
      { name: "Kolonel (Purn) Suharsono S.H., M.H.", role: "Tim Non Litigasi" },
      { name: "Kolonel (Purn) Ida Kade Sadnyana, S.H., M.H.", role: "Tim Non Litigasi" },
      { name: "Kolonel (Purn) ETM Nainggolan, S.H., M.H.", role: "Tim Non Litigasi" },
      { name: "Kolnel (Purn) Wahyu Nugraha, S.H.", role: "Tim Non Litigasi" },
    ],
  },
  {
    category: "Associate Lawyer / Tim Pelaksana Teknis",
    members: [
      { name: "Kolonel (Purn) Dr. Mangisi Simanjutak S.H., M.H.", role: "Associate Lawyer" },
      { name: "Kolonel (Purn) Lasman Nahampun, S.H., M.H.", role: "Associate Lawyer" },
      { name: "Kolonel (Purn) Abdul Gani, S.H., M.H.", role: "Associate Lawyer" },
    ],
  },
  {
    category: "Paralegal dan Staf Administrasi",
    members: [
      { name: "Mayor (Purn) Edy Kuspangat, S.H.", role: "Staf Admin & Paralegal" },
      { name: "Mayor (Purn) Najiyulloh, S.H.", role: "Staf Admin & Paralegal" },
      { name: "Kapten (Purn) Kasmani Gatot, S.H.", role: "Staf Admin & Paralegal" },
    ],
  },
];

// 2. Komponen Tampilan yang disesuaikan
function TeamListSection() {
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-[#dce6f5]" style={{ fontFamily: "Playfair Display, serif" }}>
          Susunan Pengurus dan Pelaksana
        </h3>
        <p className="text-[#dce6f5]/60 text-xs md:text-sm mt-1">
          Kantor Hukum Jalasena Bhiksa & Partners
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAM_MEMBERS.map((group, idx) => (
          /* Bungkus setiap kartu dengan Reveal dan berikan delay bertingkat */
          <Reveal key={idx} delay={0.1 * idx}>
            <div className="border border-[#c9a227]/30 bg-[#0c1630]/80 p-6 rounded-lg h-full">
              <h4
                className="text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-4 border-b border-[#c9a227]/20 pb-2"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {group.category}
              </h4>
              <div className="space-y-3">
                {group.members.map((person, pIdx) => (
                  <div key={pIdx} className="flex flex-col text-xs md:text-sm border-b border-white/5 pb-2 last:border-0">
                    <span className={`font-semibold ${person.name.startsWith("(") ? "text-[#c9a227]/80 italic" : "text-[#dce6f5]"}`}>
                      {person.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}





const SITE = {
  name: "KANTOR HUKUM PPAL",
  subtitle: "JALASENA BHIKSA & PARTNERS",
  tagline: "JALASENA BHIKSA & PARTNERS",
  hero: {
    headline: ["INTEGRITAS.", "KEHORMATAN.", "PROFESIONALISME."],
    subtext:
      "Memberikan layanan hukum terpercaya di bidang maritim dan niaga dengan standar profesionalisme tertinggi.",
    stats: [
      { value: "5+", label: "Bidang Layanan" },
      { value: "360°", label: "Pendekatan Hukum" },
      { value: "100%", label: "Komitmen Klien" },
    ],
  },
  nav: [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Struktur Organisasi", href: "#org" },
    { label: "Galeri", href: "#gallery" },
    { label: "Artikel", href: "#articles" },
    { label: "Kontak", href: "#contact" },
  ],
  contact: {
    phone: "0812-8999-9553 ",
    email: "sekretariat.lbnh@gmail.com",
    address: "Jalan Tabah Raya Nomor 1  Kompleks TNI AL Kelapa Gading Barat – Jakarta Utara 14401",
  },
  services: [
    {
      icon: "ship",
      title: "Hukum Maritim",
      desc: "Pendampingan hukum di bidang pelayaran, kepelabuhanan, perdagangan internasional, serta penyelesaian sengketa maritim dan asuransi kelautan.",
    },
    {
      icon: "scale",
      title: "Hukum Korporasi",
      desc: "Layanan hukum bagi perusahaan meliputi legalitas usaha, penyusunan kontrak, merger & akuisisi, kepatuhan hukum, dan tata kelola perusahaan.",
    },
    {
      icon: "building",
      title: "Hukum Niaga",
      desc: "Pendampingan hukum dalam sengketa bisnis, kepailitan, PKPU, HKI, arbitrase perdagangan, serta kepatuhan perdagangan.",
    },
    {
      icon: "filetext",
      title: "Hukum Asuransi",
      desc: "Memberikan layanan terkait penyusunan polis, analisis risiko, legal opinion, serta penyelesaian sengketa klaim asuransi.",
    },
    {
      icon: "shield",
      title: "Arbitrase",
      desc: "Pendampingan penyelesaian sengketa melalui arbitrase, mulai dari penyusunan strategi dan proses persidangan arbitrase hingga pelaksanaan putusan.",
    },
  ],

  org: {
    managingPartner: {
      level: "Managing Partner",
      name: "Purnawirawan TNI AL",
      rank: "Pimpinan dan Pelaksana Utama",
    },
    row2: [
      {
        level: "Office Manager",
        name: "-",
        rank: "",
        sub: [{ name: "Finance" }, { name: "HRD" }, { name: "Tata Usaha" }],
      },
      {
        level: "Senior Associate",
        name: "-",
        rank: "",
      },
      {
        level: "Strategic Partner",
        name: "Perwira TNI AL Aktif dan Klien",
        rank: "",
      },
    ],
    divisions: [
      {
        level: "Kepala Divisi Litigasi",
        name: "Sengketa dan Pengadilan",
        groups: ["Kelompok Pidana", "Kelompok Perdata", "Kelompok Niaga"],
      },
      {
        level: "Kepala Divisi Non-Litigasi",
        name: "-",
        groups: [
          "Kelompok Korporasi",
          "Kelompok Asuransi",
          "Kelompok AHU (Administrasi Hukum Umum)",
        ],
      },
    ],

    
    bottom: [
      {
        level: "ASSOCIATE LAWYER",
        name: "Tim Advokat Pelaksana / Tim Teknis",
      },
      {
        level: "PARALEGAL & STAF ADMIN",
        name: "(e-court & berkas)",
      },
    ],
  },

  caseFlow: [
    {
      step: "01",
      title: "Konsultasi Awal",
      desc: "Klien menyampaikan permasalahan hukum. Tim kami melakukan asesmen awal secara rahasia.",
    },
    {
      step: "02",
      title: "Analisis Perkara",
      desc: "Pengkajian mendalam terhadap fakta, bukti, dan landasan hukum yang relevan.",
    },
    {
      step: "03",
      title: "Strategi Hukum",
      desc: "Perumusan strategi penanganan yang optimal berdasarkan analisis komprehensif.",
    },
    {
      step: "04",
      title: "Pelaksanaan",
      desc: "Pendampingan penuh dalam proses persidangan, mediasi, atau negosiasi.",
    },
    {
      step: "05",
      title: "Pelaporan",
      desc: "Laporan berkala kepada klien mengenai perkembangan perkara secara transparan.",
    },
  ],
  maritime: [
    {
      title: "Sengketa Pelayaran",
      img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
      alt: "Kapal pelayaran di lautan",
    },
    {
      title: "Kontrak Niaga",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      alt: "Penandatanganan kontrak bisnis",
    },
    {
      title: "Kepabeanan",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
      alt: "Pelabuhan dan kontainer",
    },
    {
      title: "Asuransi Maritim",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&auto=format",
      alt: "Asuransi maritim",
    },
    {
      title: "Hukum Lingkungan",
      img: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=400&h=300&fit=crop&auto=format",
      alt: "Lingkungan laut",
    },
    {
      title: "Arbitrase Internasional",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&auto=format",
      alt: "Arbitrase internasional",
    },
  ],
  about: {
    title: "Integritas, Pengalaman, dan Strategi dalam Setiap Pendampingan Hukum.",
    body: "Kantor Hukum PPAL \"Jalasena Bhiksa & Partners\" didirikan dengan visi menghadirkan layanan hukum yang profesional, berintegritas, dan berorientasi pada solusi. Berlandaskan pengalaman kepemimpinan para Purnawirawan TNI Angkatan Laut serta didukung oleh advokat dan praktisi hukum yang kompeten, kami menggabungkan disiplin, strategi, dan keahlian hukum untuk memberikan pendampingan yang tepat bagi individu maupun korporasi. Kami memiliki fokus pada bidang Hukum Maritim, Hukum Korporasi, Hukum Niaga, Asuransi, serta layanan Litigasi dan Non-Litigasi guna memberikan solusi hukum yang komprehensif sesuai kebutuhan setiap klien.",
    img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&h=700&fit=crop&auto=format",
    imgAlt: "Perwira hukum TNI AL dalam seragam resmi",
  },
  articles: [
    {
      date: "15 Juli 2026",
      title: "Reformasi Hukum Maritim Indonesia 2026",
      excerpt:
        "Perkembangan terbaru regulasi pelayaran nasional dan implikasinya terhadap sengketa niaga.",
    },
    {
      date: "02 Juli 2026",
      title: "Peran PPAL dalam Penegakan Disiplin TNI",
      excerpt:
        "Tinjauan komprehensif mengenai kewenangan dan prosedur peradilan militer di Indonesia.",
    },
    {
      date: "20 Juni 2026",
      title: "Arbitrase Maritim Internasional: Tren 2026",
      excerpt:
        "Analisis tren terkini dalam penyelesaian sengketa maritim di forum arbitrase internasional.",
    },
  ],
};

// ─── Icon resolver ────────────────────────────────────────────────────────────

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const cls = className ?? "w-8 h-8";
  switch (name) {
    case "scale": return <Scale className={cls} />;
    case "ship": return <Ship className={cls} />;
    case "building": return <Building2 className={cls} />;
    case "filetext": return <FileText className={cls} />;
    case "shield": return <Shield className={cls} />;
    case "users": return <Users className={cls} />;
    default: return <Gavel className={cls} />;
  }
}

// ─── Components ───────────────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a227]" />
      <Anchor className="w-4 h-4 text-[#c9a227]" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a227]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#c9a227] text-xs font-semibold tracking-[0.25em] uppercase mb-2" style={{ fontFamily: "Cinzel, serif" }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-bold text-[#d0dff7] mb-4"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {children}
    </h2>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

type NavbarProps = {
  activeSection: string;
  setPage: React.Dispatch<
    React.SetStateAction<"home" | "portal" | "dashboard">
  >;
};

function Navbar({ activeSection, setPage }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#060d1f]/95 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center h-16 md:h-20 gap-6">

          {/* LEFT — Logo + name */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <img
              src={logoImg}
              alt="Logo Kantor Hukum PPAL Lantamal"
              className="w-10 h-10 md:w-11 md:h-11 object-contain"
            />
            <div className="text-left hidden sm:block leading-tight">
              <p className="text-[#c9a227] text-[11px] font-bold tracking-[0.18em] leading-none" style={{ fontFamily: "Cinzel, serif" }}>
                {SITE.name}
              </p>
              <p className="text-[#dce6f5]/55 text-[9px] tracking-[0.22em] mt-0.5" style={{ fontFamily: "Cinzel, serif" }}>
                {SITE.subtitle}
              </p>
            </div>
          </button>

          {/* CENTER — Nav links (flex-1 + flex justify-center) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
            {SITE.nav.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`relative px-3 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors cursor-pointer group ${
                  activeSection === item.href.slice(1)
                    ? "text-[#c9a227]"
                    : "text-[#dce6f5]/65 hover:text-[#dce6f5]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-3 right-3 h-px bg-[#c9a227] transition-transform origin-left ${activeSection === item.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>
            ))}
          </nav>

          {/* Client Portal button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => setPage("portal")}
              className="flex items-center gap-2 border-2 border-[#c9a227] text-[#eef0f4] px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Portal Klien
            </button>
          </div>

          {/* RIGHT — CTA button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#e0b42e] text-[#060d1f] px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Konsultasi Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <button
              className="text-[#dce6f5] p-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#060d1f]/98 border-t border-[#c9a227]/20 px-4 py-4 flex flex-col gap-1">
          {SITE.nav.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-left px-3 py-2.5 text-sm text-[#dce6f5]/80 hover:text-[#c9a227] tracking-wider uppercase transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-2 bg-[#c9a227] text-[#060d1f] px-4 py-3 text-xs font-bold tracking-wider uppercase cursor-pointer"
          >
            Konsultasi Sekarang
          </button>

          <button
            onClick={() => setPage("portal")}
            className="mt-2 border-2 border-[#c9a227] text-[#eef0f4] px-4 py-3 text-xs font-bold tracking-wider uppercase cursor-pointer"
          >
            Portal Klien
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={herovideoBackground} type="video/mp4" />
        </video>
        {/* Deep navy overlay: top for nav legibility, left, strong bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f] via-[#060d1f]/10 to-[#060d1f]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1f]/85 via-[#0a1428]/40 to-transparent" />
      </div>

      {/* Gold corner ornaments */}
      <div className="absolute top-20 right-10 w-40 h-40 border-r border-t border-[#c9a227]/25 pointer-events-none" />

      {/* Top-left tagline — sits just below nav */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full pt-28 md:pt-32">
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
          <div className="h-px w-5 bg-[#c9a227]" />
          <p className="text-[#c9a227]/80 text-[10px] tracking-[0.35em] uppercase font-semibold" style={{ fontFamily: "Cinzel, serif" }}>
            {SITE.tagline}
          </p>
          <div className="h-px w-5 bg-[#c9a227]" />
        </motion.div>
        {/* Subtext right below tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-4 text-[#dce6f5]/60 text-sm leading-relaxed max-w-sm">
          {SITE.hero.subtext}
        </motion.p>
      </div>

      {/* Spacer — pushes bottom content down */}
      <div className="flex-1" />

      {/* BOTTOM BAR — headline left, stats right */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* LEFT — large headline */}
          <div className="max-w-xl">
            <motion.h1
                className="text-4xl md:text-6xl lg:text-[3.5rem] font-black leading-[1.0] text-[#dce6f5]"
                style={{ fontFamily: "Playfair Display, serif" }}
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.25,
                      delayChildren: 0.6,
                    },
                  },
                }}
              >
              {SITE.hero.headline.map((line, i) => (
                <motion.span
                    key={i}
                    className="block"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  >
                  {i === 0
                    ? <span className="text-[#c9a227]">{line}</span>
                    : line}
                </motion.span>
              ))}
            </motion.h1>

            {/* CTA buttons below headline */}
            <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                  }}
                  className="flex flex-wrap gap-3 mt-7"
                >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 bg-[#c9a227] hover:bg-[#e0b42e] text-[#060d1f] px-6 py-3 font-bold text-xs tracking-[0.15em] uppercase transition-colors cursor-pointer"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Konsultasi Sekarang <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 border border-[#dce6f5]/30 hover:border-[#c9a227] text-[#dce6f5]/80 hover:text-[#dce6f5] px-6 py-3 font-medium text-xs tracking-[0.15em] uppercase transition-colors cursor-pointer"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Lihat Layanan
              </button>
            </motion.div>
          </div>

          {/* RIGHT — stats stacked vertically, right-aligned */}
          <div className="flex flex-row flex-wrap md:flex-col gap-6 md:gap-5 md:items-end md:text-right">
            {SITE.hero.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2 + i * 0.2,
                  }}>
                {/* Left accent bar on mobile, right on desktop */}
                <p
                  className="text-4xl md:text-5xl font-black text-[#c9a227] leading-none"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {s.value}
                </p>
                <p className="text-[#dce6f5]/55 text-[10px] tracking-[0.18em] uppercase mt-1 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom hairline */}
        <div className="mt-10 h-px bg-gradient-to-r from-[#c9a227]/50 via-[#c9a227]/20 to-transparent" />
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <Reveal delay={0.3}>
    <section id="about" className="py-20 bg-[#060d1f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative">
              <div className="bg-[#0c1630] aspect-[4/4] max-w-md overflow-hidden">
                <img
                  src={aboutBackground}
                  alt={SITE.about.imgAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f]/60 to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c9a227]/60" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c9a227]/60" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute bottom-8 -right-4 md:-right-10 bg-[#c9a227] px-6 py-4 text-[#060d1f]">
              <p className="text-3xl font-black" style={{ fontFamily: "Playfair Display, serif" }}>360°</p>
              <p className="text-xs font-bold tracking-wider uppercase" style={{ fontFamily: "Inter, sans-serif" }}>Pendekatan<br />Hukum</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionLabel>Tentang Kami</SectionLabel>
            <SectionHeading>{SITE.about.title}</SectionHeading>
            <GoldDivider />

            {SITE.about.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#dce6f5]/65 leading-relaxed mb-4 text-sm text-justify" style={{ fontFamily: "Inter, sans-serif" }}>
                {para}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <CheckCircle className="w-5 h-5" />, text: "Berlandaskan Nilai Disiplin & Integritas " },
                { icon: <CheckCircle className="w-5 h-5" />, text: "Pendekatan Litigasi & Non Litigasi" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#dce6f5]/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="text-[#c9a227]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
              {[
                { icon: <CheckCircle className="w-5 h-5" />, text: "Fokus: • Maritim • Korporasi • Niaga • Asuransi • Arbitrase" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#dce6f5]/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="text-[#c9a227]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-[#0c1630]" style={{ background: "linear-gradient(180deg, #0c1630 0%, #0a1840 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <Reveal delay={0.2}>
          <div className="text-center mb-14">
            <SectionLabel>Layanan Kami</SectionLabel>
            <SectionHeading>Layanan Hukum Terspesialisasi</SectionHeading>
            <GoldDivider />
            <p className="text-[#dce6f5]/60 max-w-7xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Jalasena Bhiksa & Partners memberikan layanan hukum melalui pendekatan litigasi dan non-litigasi, dengan strategi yang disesuaikan dengan karakteristik dan kepentingan setiap klien. Kami berkomitmen menghadirkan solusi hukum yang tepat, profesional, dan berorientasi pada kepentingan klien.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <SectionLabel>Bidang Layanan</SectionLabel>
          <br className="mb-6" />
        </Reveal>

        {/* Grid Bidang Layanan (3 Kolom di Baris 1, 2 Kolom di Baris 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {SITE.services.map((svc, i) => (
            <Reveal
              key={i}
              delay={0.1 * i}
              className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "lg:col-start-4" : ""}`}
            >
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative p-8 border cursor-pointer transition-all duration-300 group h-full flex flex-col justify-between
                  ${
                    hovered === i
                      ? "border-[#c9a227] bg-[#0c1630]"
                      : "border-[#c9a227]/15 bg-[#0c1630]/50 hover:border-[#c9a227]/50"
                  }`}
              >
                <div>
                  {/* Corner ornament */}
                  <div
                    className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-colors duration-300 ${
                      hovered === i ? "border-[#c9a227]" : "border-[#c9a227]/30"
                    }`}
                  />

                  <div
                    className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-colors duration-300 ${
                      hovered === i ? "border-[#c9a227]" : "border-[#c9a227]/30"
                    }`}
                  />

                  <div
                    className={`mb-5 text-[#c9a227] transition-transform duration-300 ${
                      hovered === i ? "scale-110" : ""
                    }`}
                  >
                    <ServiceIcon name={svc.icon} className="w-9 h-9" />
                  </div>

                  <h3
                    className="text-lg font-bold text-[#dce6f5] mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {svc.title}
                  </h3>

                  <p
                    className="text-[#dce6f5]/55 text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {svc.desc}
                  </p>
                </div>

                <div
                  className={`mt-5 flex items-center gap-2 text-[#c9a227] text-xs font-semibold tracking-wider uppercase transition-opacity duration-300 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Selengkapnya
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Org Structure ────────────────────────────────────────────────────────────

function OrgStructure() {
  return (
    <Reveal delay={0.3}>
      <section id="org" className="py-20 bg-[#060d1f]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Kepemimpinan</SectionLabel>
            <SectionHeading>Struktur Organisasi</SectionHeading>
            <GoldDivider />
          </div>

          <div className="org-diagram flex flex-col items-center max-w-5xl mx-auto overflow-x-auto pb-6">
            {/* Level 1: Managing Partner */}
            <OrgCard item={SITE.org.managingPartner} accent />

            {/* Line down to Row 2 */}
            <div className="w-px h-8 bg-[#c9a227]/40" />

            {/* Level 2: Office Manager, Senior Associate, Strategic Partner */}
            <div className="relative flex justify-center gap-4 md:gap-12 w-full border-t border-[#c9a227]/40 pt-8">
              {SITE.org.row2.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 max-w-[240px]">
                  <OrgCard item={item} />
                  
                  {/* Sub-items for Office Manager */}
                  {item.sub && (
                    <div className="flex flex-col items-center w-full mt-4">
                      <div className="w-px h-6 bg-[#c9a227]/40" />
                      <div className="grid grid-cols-3 gap-2 w-full border-t border-[#c9a227]/40 pt-4">
                        {item.sub.map((subItem, sIdx) => (
                          <div
                            key={sIdx}
                            className="border border-[#c9a227]/20 bg-[#060d1f]/60 p-2 text-center text-[10px] md:text-xs text-[#dce6f5]"
                          >
                            {subItem.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Line down from Senior Associate to Divisions */}
            <div className="w-px h-10 bg-[#c9a227]/40" />

            {/* Level 3: Divisions */}
            <div className="relative flex justify-center gap-8 md:gap-20 w-full border-t border-[#c9a227]/40 pt-8">
              {SITE.org.divisions.map((div, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 max-w-[360px]">
                  <OrgCard item={div} />
                  
                  {/* Groups under division */}
                  <div className="w-px h-6 bg-[#c9a227]/40" />
                  <div className="grid grid-cols-3 gap-2 w-full border-t border-[#c9a227]/40 pt-4">
                    {div.groups.map((grp, gIdx) => (
                      <div
                        key={gIdx}
                        className="flex flex-col items-center border border-[#c9a227]/20 bg-[#060d1f]/60 p-2 text-center text-[9px] md:text-xs text-[#dce6f5]"
                      >
                        {grp}
                        <div className="w-px h-4 bg-[#c9a227]/40 mt-2 -mb-2" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Line down to Associate Lawyer */}
            <div className="w-full max-w-[650px] border-t border-[#c9a227]/40 pt-6 mt-2">
              <div className="w-px h-4 bg-[#c9a227]/40 mx-auto -mt-6" />
              {/* Level 4: Associate Lawyer */}
              <div className="border border-[#c9a227] bg-gradient-to-b from-[#071535] to-[#0c1630] p-4 text-center rounded-lg w-full">
                <p className="text-[#c9a227] font-bold text-sm md:text-base tracking-wider uppercase">
                  {SITE.org.bottom[0].level}
                </p>
                <p className="text-[#dce6f5] text-xs md:text-sm mt-1">
                  {SITE.org.bottom[0].name}
                </p>
              </div>
            </div>

            {/* Line down to Paralegal */}
            <div className="w-px h-8 bg-[#c9a227]/40" />

            {/* Level 5: Paralegal & Staf Admin */}
            <div className="border border-[#c9a227]/40 bg-[#0c1630] p-4 text-center w-full max-w-[450px]">
              <p className="text-[#dce6f5] font-bold text-xs md:text-sm uppercase">
                {SITE.org.bottom[1].level}
              </p>
              <p className="text-[#dce6f5]/60 text-[10px] md:text-xs mt-1">
                {SITE.org.bottom[1].name}
              </p>
            </div>
          </div>
          <TeamListSection />
        </div>
      </section>
    </Reveal>
  );
}


function OrgCard({
  item,
  accent,
  small,
}: {
  item: { level: string; name?: string; rank?: string };
  accent?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`relative border text-center transition-all duration-200 hover:border-[#c9a227] cursor-pointer group w-full ${
        accent
          ? "border-[#c9a227] bg-gradient-to-b from-[#071535] to-[#0c1630] px-4 md:px-8 py-4 md:py-6 max-w-xs"
          : small
          ? "border-[#c9a227]/20 bg-[#060d1f]/60 px-2 md:px-4 py-2 md:py-4"
          : "border-[#c9a227]/40 bg-[#0c1630] px-3 md:px-6 py-3 md:py-5"
      }`}
    >
      <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t border-l border-[#c9a227]/40 group-hover:border-[#c9a227] transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b border-r border-[#c9a227]/40 group-hover:border-[#c9a227] transition-colors" />

      <p
        className="text-[#c9a227] text-[9px] md:text-[11px] font-semibold tracking-[0.15em] uppercase mb-1"
        style={{ fontFamily: "Cinzel, serif" }}
      >
        {item.level}
      </p>
      {item.name && item.name !== "-" && (
        <p
          className="text-[#dce6f5] font-bold leading-snug text-[11px] md:text-sm"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {item.name}
        </p>
      )}
      {item.rank && (
        <p
          className="text-[#dce6f5]/50 text-[8px] md:text-[10px] mt-1 tracking-wider"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {item.rank}
        </p>
      )}
    </div>
  );
}

// ─── Case Flow ────────────────────────────────────────────────────────────────

function CaseFlow() {
  const [active, setActive] = useState(0);

  return (
    <Reveal delay={0.3}>
    <section id="case-flow" className="py-20 bg-[#060d1f]" style={{ background: "linear-gradient(180deg, #0c1630 0%, #0a1840 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Proses</SectionLabel>
          <SectionHeading>Alur Penanganan Perkara</SectionHeading>
          <GoldDivider />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Steps list */}
          <div className="flex-1 space-y-3">
            {SITE.caseFlow.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-start gap-5 p-5 border transition-all duration-200 cursor-pointer group ${
                  active === i
                    ? "border-[#c9a227] bg-[#0c1630]"
                    : "border-[#c9a227]/15 bg-transparent hover:border-[#c9a227]/40"
                }`}
              >
                <span
                  className={`text-3xl font-black shrink-0 transition-colors ${active === i ? "text-[#c9a227]" : "text-[#c9a227]/30 group-hover:text-[#c9a227]/60"}`}
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {step.step}
                </span>
                <div>
                  <p className={`font-bold text-sm mb-1 transition-colors ${active === i ? "text-[#dce6f5]" : "text-[#dce6f5]/60"}`} style={{ fontFamily: "Playfair Display, serif" }}>
                    {step.title}
                  </p>
                  <p className={`text-xs leading-relaxed transition-colors ${active === i ? "text-[#dce6f5]/70" : "text-[#dce6f5]/35"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Visual panel */}
          <div className="flex-1 lg:sticky lg:top-28">
            <div className="relative border border-[#c9a227]/30 bg-[#0c1630] p-10 min-h-64 flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c9a227]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c9a227]" />
              <p className="text-[#c9a227]/20 text-8xl font-black mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                {SITE.caseFlow[active].step}
              </p>
              <h3 className="text-2xl font-bold text-[#dce6f5] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                {SITE.caseFlow[active].title}
              </h3>
              <p className="text-[#dce6f5]/65 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {SITE.caseFlow[active].desc}
              </p>

              {/* Progress indicator */}
              <div className="flex gap-2 mt-8">
                {SITE.caseFlow.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 transition-all duration-300 cursor-pointer ${active === i ? "bg-[#c9a227] w-8" : "bg-[#c9a227]/20 w-4 hover:bg-[#c9a227]/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}

// ─── Maritime specializations ─────────────────────────────────────────────────

function Maritime() {
  return (
    <Reveal delay={0.3}>
    <section id="gallery" className="py-20" style={{ background: "linear-gradient(180deg, #0c1630 0%, #0a1840 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Galeri Kegiatan</SectionLabel>
          <SectionHeading>Dokumentasi berbagai aktivitas profesional</SectionHeading>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SITE.maritime.map((item, i) => (
            <div key={i} className="relative group overflow-hidden cursor-pointer">
              <div className="bg-[#0e1c3d] aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[#dce6f5] font-bold text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                  {item.title}
                </p>
              </div>
              <div className="absolute inset-0 border border-[#c9a227]/0 group-hover:border-[#c9a227]/60 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}

// ─── Partners & Klien ─────────────────────────────────────────────────
function Partners() {
  const logos = [
  "https://cdn.simpleicons.org/google",
  "https://cdn.simpleicons.org/apple",
  "https://cdn.simpleicons.org/meta",
  "https://cdn.simpleicons.org/google",
  "https://cdn.simpleicons.org/apple",
  "https://cdn.simpleicons.org/meta",
  "https://cdn.simpleicons.org/google",
  "https://cdn.simpleicons.org/apple",
  "https://cdn.simpleicons.org/meta",
];

  return (
    <Reveal delay={0.3}>
    <section
      id="partners"
      className="py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#060d1f 0%, #0b1430 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 text-center">
        <SectionLabel>Kepercayaan Klien</SectionLabel>

        <SectionHeading>
          Dipercaya oleh Berbagai Instansi & Mitra Strategis
        </SectionHeading>

        <p
          className="text-[#dce6f5]/55 mt-4 max-w-2xl mx-auto text-sm"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Logo berikut hanya merupakan ilustrasi untuk prototype dan akan
          disesuaikan dengan daftar klien maupun partner resmi.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-16 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
               
                key={i}
                className="flex items-center justify-center
                px-8 shrink-0"
            >
              <img
                src={logo}
                alt="Partner"
                className="
                  h-10
                  w-auto
                  object-contain
                  opacity-40
                  hover:opacity-100
                  transition-all
                  duration-300
                  brightness-0
                  invert
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Reveal>
  );
}



// ─── Articles ─────────────────────────────────────────────────────────────────

function Articles() {
  
  return (
    <Reveal delay={0.3}>
    <section id="articles" className="py-20" style={{ background: "linear-gradient(180deg, #0c1630 0%, #0a1840 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <SectionLabel>Wawasan Hukum</SectionLabel>
            <SectionHeading>Artikel Terkini</SectionHeading>
          </div>
          <button className="text-[#c9a227] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all cursor-pointer" style={{ fontFamily: "Inter, sans-serif" }}>
            Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE.articles.map((art, i) => (
            <div
              key={i}
              className="border border-[#c9a227]/15 bg-[#060d1f]/60 p-6 hover:border-[#c9a227]/50 transition-all duration-200 cursor-pointer group"
            >
              <p className="text-[#c9a227]/70 text-xs tracking-wider mb-3 flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <BookOpen className="w-3.5 h-3.5" />
                {art.date}
              </p>
              <h3 className="text-[#dce6f5] font-bold text-base mb-3 group-hover:text-[#c9a227] transition-colors leading-snug" style={{ fontFamily: "Playfair Display, serif" }}>
                {art.title}
              </h3>
              <p className="text-[#dce6f5]/50 text-xs leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                {art.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[#c9a227] text-xs font-semibold tracking-wider uppercase group-hover:gap-3 transition-all" style={{ fontFamily: "Inter, sans-serif" }}>
                Baca Selengkapnya <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  
  return (
    <Reveal delay={0.3}>
    <section className="py-16 bg-gradient-to-r from-[#c9a227] to-[#e0b42e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-[#060d1f] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Konsultasi Perkara Anda dengan Mudah
          </h2>
          <p className="text-[#060d1f]/70 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Tim ahli kami siap membantu. Hubungi kami untuk konsultasi pertama secara gratis.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 bg-[#060d1f] text-[#c9a227] px-6 py-3 font-bold text-sm tracking-wider uppercase hover:bg-[#0a1428] transition-colors cursor-pointer"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <MessageSquare className="w-4 h-4" />
            Hubungi Kami
          </button>
          <a
            href={`tel:${SITE.contact.phone}`}
            className="flex items-center gap-2 border-2 border-[#060d1f] text-[#060d1f] px-6 py-3 font-bold text-sm tracking-wider uppercase hover:bg-[#060d1f]/15 transition-colors cursor-pointer"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Phone className="w-4 h-4" />
            Telepon
          </a>
        </div>
      </div>
    </section>
  </Reveal>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Reveal delay={0.3}>
    <section id="contact" className="py-20 bg-[#060d1f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Hubungi Kami</SectionLabel>
          <SectionHeading>Konsultasi Hukum Anda</SectionHeading>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            {/* Maps */}
            <div className="mb-2">
              <div className="overflow-hidden border border-[#c9a227]/20 h-60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9166.122965308332!2d106.8862314895067!3d-6.156553870911029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f53efe8ba3b5%3A0xb690148ea0d91224!2sKompleks%20TNI%20-%20AL%2C%20Jl.%20Pulau%20Putri%20Jl.%20Kodamar%20No.1%2C%20RT.2%2FRW.9%2C%20Klp.%20Gading%20Bar.%2C%20Kec.%20Klp.%20Gading%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014240!5e0!3m2!1sid!2sid!4v1787712708497!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <p
                className="text-[#dce6f5] font-bold mb-1 text-lg"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Informasi Kontak
              </p>

              {[
                {
                  icon:<Phone className="w-4 h-4"/>,
                  label:"Telepon",
                  value:SITE.contact.phone
                },
                {
                  icon:<Mail className="w-4 h-4"/>,
                  label:"Email",
                  value:SITE.contact.email
                },
                {
                  icon:<MapPin className="w-4 h-4"/>,
                  label:"Alamat",
                  value:SITE.contact.address
                }
              ].map((item,i)=>(
                <div
                  key={i}
                  className="flex items-start gap-4 py-2 border-b border-[#c9a227]/10"
                >
                  <span className="text-[#c9a227] mt-1">
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227]">
                      {item.label}
                    </p>

                    <p className="text-[#dce6f5]/80 mt-1 leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 space-y-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-[#0c1630] border border-[#c9a227]/20 text-[#dce6f5] placeholder-[#dce6f5]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <input
                type="email"
                placeholder="Alamat Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-[#0c1630] border border-[#c9a227]/20 text-[#dce6f5] placeholder-[#dce6f5]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Nomor Telepon"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-[#0c1630] border border-[#c9a227]/20 text-[#dce6f5] placeholder-[#dce6f5]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <input
                type="text"
                placeholder="Subjek Perkara"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="bg-[#0c1630] border border-[#c9a227]/20 text-[#dce6f5] placeholder-[#dce6f5]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <textarea
              placeholder="Uraikan permasalahan hukum Anda secara singkat..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-[#0c1630] border border-[#c9a227]/20 text-[#dce6f5] placeholder-[#dce6f5]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a227] transition-colors resize-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              type="submit"
              className="w-full bg-[#c9a227] hover:bg-[#e0b42e] text-[#060d1f] py-4 font-bold text-sm tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Pesan Terkirim!
                </>
              ) : (
                <>
                  Kirim Pesan
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
    </Reveal>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-[#c9a227]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logoImg}
                alt="Logo PPAL Lantamal"
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="text-[#c9a227] font-bold" style={{ fontFamily: "Cinzel, serif" }}>{SITE.name}</p>
                <p className="text-[#dce6f5]/50 text-sm" style={{ fontFamily: "Cinzel, serif" }}>{SITE.subtitle}</p>
              </div>
            </div>
            <p className="text-[#dce6f5]/45 text-xs leading-relaxed max-w-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              Memberikan layanan hukum terpercaya di bidang maritim dan niaga dengan standar profesionalisme tertinggi.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#c9a227] text-xs font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: "Cinzel, serif" }}>Navigasi</p>
            <ul className="space-y-2">
              {SITE.nav.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[#dce6f5]/50 hover:text-[#c9a227] text-xs tracking-wide transition-colors cursor-pointer"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#c9a227] text-xs font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: "Cinzel, serif" }}>Kontak</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-[#dce6f5]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                <Phone className="w-3.5 h-3.5 text-[#c9a227] mt-0.5 shrink-0" />
                {SITE.contact.phone}
              </li>
              <li className="flex items-start gap-2 text-xs text-[#dce6f5]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                <Mail className="w-3.5 h-3.5 text-[#c9a227] mt-0.5 shrink-0" />
                {SITE.contact.email}
              </li>
              <li className="flex items-start gap-2 text-xs text-[#dce6f5]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                <MapPin className="w-3.5 h-3.5 text-[#c9a227] mt-0.5 shrink-0" />
                {SITE.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c9a227]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#dce6f5]/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2026 {SITE.name} {SITE.subtitle}. Hak Cipta Dilindungi.
          </p>
          <p className="text-[#dce6f5]/20 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [page, setPage] = useState<"home" | "portal" | "dashboard">("home");

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (page === "portal") {
    return (
      <PortalLogin
        onLogin={() => setPage("dashboard")}
      />
    );
  }

  

  return (
    <div className="min-h-screen" style={{ background: "#060d1f", scrollBehavior: "smooth" }}>
      <Navbar activeSection={activeSection} setPage={setPage} />
      <Hero />
      <About />
      <Services />
      <OrgStructure />
      <CaseFlow />
      <Maritime />
      <Articles />
      <CTABanner />
      <Partners />
      <Contact />
      <Footer />
      {/* Floating WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="6281342267377" 
        message="Halo Kantor Hukum Jalasena Bhiksa & Partners, saya ingin mendiskusikan penanganan perkara." 
      />
    </div>
  );
}
