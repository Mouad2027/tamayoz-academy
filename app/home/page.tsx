"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Users,
  CheckCircle,
  ArrowRight,
  DiscIcon as Discord,
  GraduationCap,
  Stethoscope,
  Building2,
  LineChart,
  Phone,
  LinkIcon,
  Mail,
  MapPin,
  Menu,
  X,
  Award,
  BookMarked,
  Star,
  Medal,
  TrendingUp,
  Zap,
  ChevronUp,
  MessageCircle,
  Target,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FormationsSection from "@/components/formations-section"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

function HomePage() {
  const { t, language, isRTL } = useLanguage()
  const whatsappLink = "https://wa.me/212684958750"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const statistics = [
    { name: "Médecine", percentage: 32, color: "bg-primary", icon: Stethoscope },
    { name: "ENSA", percentage: 88, color: "bg-primary", icon: Building2 },
    { name: "ENCG", percentage: 34, color: "bg-primary", icon: LineChart },
  ]

  const testimonials = [
    {
      name: language === "fr" ? "Sara Alaoui" : "سارة العلوي",
      role: language === "fr" ? "Admise en Médecine" : "قبلت في كلية الطب",
      initials: "SA",
      content:
        language === "fr"
          ? "Grâce à Tamayoz Academy, j'ai pu intégrer la faculté de médecine. Les cours étaient structurés et les enseignants très compétents."
          : "بفضل أكاديمية تميز، تمكنت من الالتحاق بكلية الطب. كانت الدروس منظمة والمعلمون أكفاء للغاية.",
      rating: 5,
    },
    {
      name: language === "fr" ? "Youssef Benani" : "يوسف بناني",
      role: language === "fr" ? "Admis à l'ENSA" : "قبل في المدرسة الوطنية للعلوم التطبيقية",
      initials: "YB",
      content:
        language === "fr"
          ? "Les méthodes pédagogiques de Tamayoz m'ont permis de comprendre rapidement des concepts complexes. Je recommande vivement !"
          : "سمحت لي الأساليب التعليمية في تميز بفهم المفاهيم المعقدة بسرعة. أوصي بشدة!",
      rating: 5,
    },
    {
      name: language === "fr" ? "Leila Mansouri" : "ليلى منصوري",
      role: language === "fr" ? "Élève en 2ème Bac" : "طالبة في السنة الثانية باكالوريا",
      initials: "LM",
      content:
        language === "fr"
          ? "Le soutien scolaire m'a aidée à améliorer considérablement mes notes. L'environnement est motivant et les professeurs sont à l'écoute."
          : "ساعدني الدعم المدرسي على تحسين درجاتي بشكل كبير. البيئة محفزة والمدرسون متجاوبون.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "Quels sont les modes d'enseignement proposés ?",
      answer:
        "Nous proposons des cours en présentiel à Marrakech ainsi que des cours en ligne via Discord. Les deux formats offrent un suivi personnalisé et des supports pédagogiques adaptés.",
    },
    {
      question: "Comment se déroulent les cours en ligne ?",
      answer:
        "Les cours en ligne sont dispensés via Discord avec des sessions interactives en direct, des supports numériques, et un accès aux enregistrements. Vous bénéficiez du même niveau d'attention qu'en présentiel.",
    },
    {
      question: "Quels sont les tarifs des formations ?",
      answer:
        "Nos tarifs varient selon le type de formation et le mode d'enseignement choisi. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins.",
    },
    {
      question: "Comment s'inscrire aux formations ?",
      answer:
        "L'inscription peut se faire directement via WhatsApp ou en remplissant le formulaire de contact sur notre site. Notre équipe vous recontactera rapidement pour finaliser votre inscription.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Floating WhatsApp button component
  const FloatingWhatsApp = () => (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  )

  // Scroll to top button
  const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      window.addEventListener("scroll", toggleVisibility)
      return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white academic-pattern" dir={isRTL ? "rtl" : "ltr"}>
      {/* Enhanced Navigation */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center space-x-8 justify-center">
            <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
  <div className="relative">
    {/* Remplacez l'icône GraduationCap par l'image du logo */}
    <img src="/logo-tamayoz2025.png" alt="Tamayoz Academy Logo" className="h-20 w-20 transition-transform group-hover:scale-110" />
    <motion.span
      className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  </div>

</Link>

            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-8">
              <a
                href="#services"
                className="text-slate-700 hover:text-primary transition-colors relative group py-2 font-medium"
              >
                <span>{t("services")}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a
                href="#formations"
                className="text-slate-700 hover:text-primary transition-colors relative group py-2 font-medium"
              >
                <span>{t("formations")}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a
                href="#testimonials"
                className="text-slate-700 hover:text-primary transition-colors relative group py-2 font-medium"
              >
                <span>{t("testimonials")}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-primary transition-colors relative group py-2 font-medium"
              >
                <span>{t("contact")}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <LanguageSwitcher />
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform btn-premium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("register")}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg py-4"
              >
                <div className="container mx-auto px-6 space-y-4">
                  <a
                    href="#services"
                    className="block text-slate-700 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("services")}
                  </a>
                  <a
                    href="#formations"
                    className="block text-slate-700 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("formations")}
                  </a>
                  <a
                    href="#testimonials"
                    className="block text-slate-700 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("testimonials")}
                  </a>
                  <a
                    href="#contact"
                    className="block text-slate-700 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("contact")}
                  </a>
                  <div className="py-2">
                    <LanguageSwitcher />
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-primary text-white px-6 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("register")}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Add margin to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24 relative" ref={heroRef}>
          <motion.div
            style={{ opacity, scale }}
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTI4NEIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NHgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"
          ></motion.div>
          <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto relative z-10">
            <div className="md:w-1/2 md:pr-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 inline-block"
              >
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                  {t("academicExcellence")}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight font-playfair academic-heading shadow-text"
              >
                {t("yourPathToExcellence")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-slate-600 mb-8 max-w-xl"
              >
                {t("discoverDescription")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {["ACCOMPAGNEMENT", "EXCELLENCE", "ORIENTATION"].map((value, index) => (
                  <div
                    key={value}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-lg shadow-sm"
                  >
                    <span className="text-primary font-bold tracking-wider text-sm">{value}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <motion.a
                  href="#contact"
                  className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition flex items-center justify-center shadow-md btn-premium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("startNow")}
                  <ArrowRight className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} h-5 w-5`} />
                </motion.a>
                <motion.a
                  href="#formations"
                  className="border-2 border-secondary text-slate-800 px-8 py-3 rounded-md hover:bg-secondary/10 transition flex items-center justify-center elegant-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("ourFormations")}
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 flex items-center space-x-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-bold text-primary">{t("studentsCount")}</span> {t("trustUs")}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            >
              <div className="w-full max-w-md overflow-hidden rounded-lg shadow-xl relative shine-effect">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-multiply"></div>
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Educational environment"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                  <p className="text-white font-medium">
                    {language === "fr" ? "Construisez votre avenir avec nous" : "ابنِ مستقبلك معنا"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating stats */}
          <div className="max-w-7xl mx-auto mt-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-100 flex items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Medal className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">98%</h3>
                  <p className="text-slate-600">Taux de satisfaction</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-100 flex items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">+45%</h3>
                  <p className="text-slate-600">Amélioration des notes</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-100 flex items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">12+</h3>
                  <p className="text-slate-600">Années d'expérience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
              >
                {t("whyChooseUs")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-slate-900 mt-4 mb-4 font-playfair inline-block academic-heading ornament"
              >
                {t("ourApproach")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-600 max-w-2xl mx-auto mt-6"
              >
                {t("approachDescription")}
              </motion.p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: t("excellence"),
                  description: t("excellenceDesc"),
                },
                {
                  icon: BookMarked,
                  title: t("expertise"),
                  description: t("expertiseDesc"),
                },
                {
                  icon: Target,
                  title: t("method"),
                  description: t("methodDesc"),
                },
                {
                  icon: Sparkles,
                  title: t("innovation"),
                  description: t("innovationDesc"),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="premium-card p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-playfair">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="statistics" className="py-16 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
              >
                {t("provenResults")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-slate-900 mt-4 mb-4 font-playfair inline-block academic-heading ornament"
              >
                {t("ourSuccessRates")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-600 max-w-2xl mx-auto mt-6"
              >
                {t("successRatesDesc")}
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {statistics.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="premium-card p-8 hover:shadow-xl transition"
                  >
                    <div className="flex flex-col items-center">
                      <div className="p-4 rounded-full bg-primary/10 mb-4">
                        <IconComponent className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 font-playfair">{stat.name}</h3>
                      <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${stat.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                      <motion.p
                        className="text-3xl font-bold mt-4 text-primary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        {stat.percentage}%
                      </motion.p>
                      <p className="text-slate-600">Taux de réussite</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full"></div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
              >
                {t("ourOffers")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-slate-900 mt-4 mb-4 font-playfair inline-block academic-heading ornament"
              >
                {t("ourServices")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-600 max-w-2xl mx-auto mt-6"
              >
                {t("servicesDesc")}
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Online Service */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="premium-card p-8 hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Discord className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold ml-3 font-playfair">{t("onlineCourses")}</h3>
                </div>
                <p className="text-slate-600 mb-6">{t("onlineCoursesDesc")}</p>
                <ul className="space-y-3 mb-6">
                  {[
                    t("scheduleFlexibility"),
                    t("interactiveSupport"),
                    t("digitalResources"),
                    t("personalizedTracking"),
                  ].map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      <span className="text-slate-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-secondary text-slate-900 text-center px-6 py-3 rounded-md hover:bg-secondary/90 transition font-medium btn-premium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("applyNow")}
                </motion.a>
              </motion.div>

              {/* In-person Service */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="premium-card p-8 hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold ml-3 font-playfair">{t("inPersonCourses")}</h3>
                </div>
                <p className="text-slate-600 mb-6">{t("inPersonCoursesDesc")}</p>
                <ul className="space-y-3 mb-6">
                  {[
                    t("directInteraction"),
                    t("individualAttention"),
                    t("studiousEnvironment"),
                    t("practicalExercises"),
                  ].map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      <span className="text-slate-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-secondary text-slate-900 text-center px-6 py-3 rounded-md hover:bg-secondary/90 transition font-medium btn-premium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("applyNow")}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Formations Section */}
        <FormationsSection />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
              >
                {t("testimonials")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-slate-900 mt-4 mb-4 font-playfair inline-block academic-heading ornament"
              >
                {t("whatOurStudentsSay")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-600 max-w-2xl mx-auto mt-6"
              >
                {t("discoverStudentExperiences")}
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeTestimonial === index ? 1 : 0,
                      x: activeTestimonial === index ? 0 : activeTestimonial > index ? -100 : 100,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`${activeTestimonial === index ? "block" : "hidden"} premium-card p-8 text-center`}
                  >
                    <div className="mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="inline-block h-5 w-5 text-secondary" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg text-slate-700 italic mb-8">"{testimonial.content}"</p>
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                        {testimonial.initials}
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        activeTestimonial === index ? "bg-primary" : "bg-slate-300"
                      }`}
                      aria-label={`Témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary/5 transition-colors pointer-events-auto"
                    aria-label="Témoignage précédent"
                  >
                    <ArrowRight className={`h-5 w-5 ${isRTL ? "" : "rotate-180"}`} />
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary/5 transition-colors pointer-events-auto"
                    aria-label="Témoignage suivant"
                  >
                    <ArrowRight className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
              >
                {t("frequentlyAskedQuestions")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-slate-900 mt-4 mb-4 font-playfair inline-block academic-heading ornament"
              >
                {t("faq")}
              </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
              >
                {t("contact")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-slate-900 mt-4 mb-4 font-playfair inline-block academic-heading ornament"
              >
                {t("contactUsSection")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-600 max-w-2xl mx-auto mt-6"
              >
                {t("contactUsDesc")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg mx-auto premium-card p-8"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-700 mb-2 font-medium" htmlFor="name">
                    {t("fullName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder={t("yourName")}
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-2 font-medium" htmlFor="email">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder={t("yourEmail")}
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-2 font-medium" htmlFor="message">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder={t("yourMessage")}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition font-medium btn-premium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("send")}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Brand and Description */}
              <div className="space-y-6">
              <div className="flex items-center space-x-3">
  {/* Remplacer l'icône GraduationCap par votre logo */}
  <img
    src="/logo-tamayoz2025.png"  // Chemin vers votre logo dans le dossier public
    alt="Tamayoz Academy Logo"
    className="h-32 w-32 transition-transform group-hover:scale-110"  // Ajustez la taille et les effets ici
  />
  <span className="text-2xl font-bold font-playfair bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
    Tamayoz Academy
  </span>
</div>

                <p className="text-slate-400 leading-relaxed">{t("footerDesc")}</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-secondary font-playfair">{t("contact")}</h3>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-slate-300 hover:text-secondary transition-colors">
                      <Phone className="h-5 w-5" />
                      <span>06 84 95 87 50</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-300 hover:text-secondary transition-colors">
                      <Phone className="h-5 w-5" />
                      <span>06 69 08 17 13</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-300 hover:text-secondary transition-colors">
                      <Phone className="h-5 w-5" />
                      <span>06 69 08 17 14</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-secondary transition-colors">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:contact@tamayoz.academy">contact@tamayoz.academy</a>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MapPin className="h-5 w-5" />
                    <span>Avenue 18 Novembre, Marrakech, Maroc</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-secondary font-playfair">{t("quickLinks")}</h3>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://linktr.ee/tamayoz.academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-300 hover:text-secondary transition-colors group"
                  >
                    <LinkIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    <span>Linktree</span>
                  </a>
                  <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                    {t("legalNotice")}
                  </a>
                  <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                    {t("privacyPolicy")}
                  </a>
                </div>
              </div>
            </div>

            {/* Academic Divider */}
            <div className="academic-divider my-8"></div>

            {/* Copyright Bar */}
            <div className="pt-8 mt-8 border-t border-slate-800">
              <p className="text-center text-slate-500">
                © {new Date().getFullYear()} Tamayoz Academy. {t("allRightsReserved")}
              </p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  )
}

export default HomePage

