"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  School,
  Users,
  Monitor,
  ArrowRight,
  Stethoscope,
  Building2,
  LineChart,
  Target,
  Clock,
  CheckCircle,
} from "lucide-react"

const formations = [
  {
    id: "concours",
    title: "Préparation aux Concours",
    description: "Préparez-vous efficacement aux concours d'entrée des grandes écoles",
    icon: GraduationCap,
    color: "primary",
    link: "/formations/concours",
    features: [
      "Médecine et Pharmacie",
      "ENSA/ENSAM",
      "ENCG/ISCAE",
      "Exercices spécifiques",
      "Examens blancs",
      "Suivi personnalisé",
    ],
    stats: [
      {
        icon: Stethoscope,
        value: "92%",
        label: "Réussite Médecine",
      },
      {
        icon: Building2,
        value: "88%",
        label: "Réussite ENSA",
      },
      {
        icon: LineChart,
        value: "85%",
        label: "Réussite ENCG",
      },
    ],
  },
  {
    id: "bac",
    title: "Cours Accéléré BAC",
    description: "Programme intensif pour réussir votre baccalauréat avec excellence",
    icon: School,
    color: "secondary",
    link: "/formations/bac",
    features: [
      "1ère et 2ème année BAC",
      "Toutes les matières principales",
      "Préparation intensive",
      "Exercices ciblés",
      "Examens blancs réguliers",
      "Suivi continu",
    ],
    stats: [
      {
        icon: Target,
        value: "94%",
        label: "Taux de réussite",
      },
      {
        icon: Clock,
        value: "+45%",
        label: "Progression moyenne",
      },
      {
        icon: Users,
        value: "98%",
        label: "Satisfaction",
      },
    ],
  },
  {
    id: "soutien",
    title: "Soutien Scolaire",
    description: "Accompagnement personnalisé pour améliorer vos performances scolaires",
    icon: BookOpen,
    color: "accent",
    link: "/formations/soutien",
    features: [
      "Collège et Lycée",
      "Rattrapage scolaire",
      "Renforcement",
      "Méthodologie",
      "Aide aux devoirs",
      "Évaluation régulière",
    ],
    stats: [
      {
        icon: Target,
        value: "87%",
        label: "Amélioration",
      },
      {
        icon: Users,
        value: "95%",
        label: "Satisfaction",
      },
      {
        icon: Clock,
        value: "12+",
        label: "Années d'exp.",
      },
    ],
  },
]

export default function FormationsSection() {
  return (
    <section id="formations" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
          >
            Nos programmes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-slate-900 mt-4 mb-4 font-playfair inline-block academic-heading ornament"
          >
            Nos Formations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Découvrez nos programmes d'excellence conçus pour votre réussite académique
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group"
            >
              <div className="premium-card bg-white p-8 rounded-xl h-full flex flex-col relative overflow-hidden">
                {/* Formation Header */}
                <div className="mb-6">
                  <div className={`p-3 rounded-xl bg-${formation.color}/10 inline-block mb-4`}>
                    <formation.icon className={`h-8 w-8 text-${formation.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{formation.title}</h3>
                  <p className="text-slate-600">{formation.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {formation.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className={`p-2 rounded-lg bg-${formation.color}/10 mb-2 mx-auto w-12 h-12 flex items-center justify-center`}
                      >
                        <stat.icon className={`h-6 w-6 text-${formation.color}`} />
                      </div>
                      <div className={`text-lg font-bold text-${formation.color}`}>{stat.value}</div>
                      <div className="text-xs text-slate-600 line-clamp-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {formation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className={`h-4 w-4 text-${formation.color} mr-2 flex-shrink-0`} />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50">
                    <Users className="h-5 w-5 text-slate-600" />
                    <span className="text-sm text-slate-600">Présentiel</span>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50">
                    <Monitor className="h-5 w-5 text-slate-600" />
                    <span className="text-sm text-slate-600">En ligne</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={formation.link}
                  className={`mt-auto inline-flex items-center justify-center w-full px-6 py-3 text-white bg-${formation.color} rounded-lg hover:bg-${formation.color}/90 transition-colors group-hover:shadow-lg`}
                >
                  <span>Découvrir</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">
            Tous nos programmes sont disponibles en présentiel à Marrakech et en ligne via Discord
          </p>
          <a
            href="https://wa.me/212684958750"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Contactez-nous pour plus d'informations
          </a>
        </motion.div>
      </div>
    </section>
  )
}

