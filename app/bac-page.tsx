"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  School,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  Book,
  Users,
  Monitor,
  Star,
  Shield,
  Clock,
  Target,
  Sparkles,
} from "lucide-react"

export default function BacPage() {
  const [selectedLevel, setSelectedLevel] = useState("2bac")

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const levels = [
    {
      id: "2bac",
      name: "2ème année Bac",
      price: "2000 DH",
      badge: "Premium",
      subjects: ["Mathématiques", "Physique-Chimie", "SVT", "Philosophie", "Anglais", "Français"],
      features: [
        "Préparation aux examens nationaux",
        "Exercices types du bac",
        "Séances de révision intensive",
        "Suivi personnalisé",
        "Examens blancs hebdomadaires",
        "Accès aux ressources premium",
      ],
      stats: [
        { label: "Taux de réussite", value: "94%" },
        { label: "Mentions", value: "76%" },
        { label: "Satisfaction", value: "98%" },
      ],
    },
    {
      id: "1bac",
      name: "1ère année Bac",
      price: "1800 DH",
      badge: "Essentiel",
      subjects: ["Mathématiques", "Physique-Chimie", "SVT", "Français", "Anglais"],
      features: [
        "Renforcement des bases",
        "Préparation à la 2ème année",
        "Exercices pratiques",
        "Suivi continu",
        "Examens blancs mensuels",
        "Accès aux ressources en ligne",
      ],
      stats: [
        { label: "Progression moyenne", value: "+45%" },
        { label: "Validation", value: "92%" },
        { label: "Satisfaction", value: "96%" },
      ],
    },
  ]

  const currentLevel = levels.find((level) => level.id === selectedLevel) || levels[0]

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/90 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour à l'accueil
          </Link>

          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-primary/10">
              <School className="h-12 w-12 text-primary" />
            </div>
            <div className="ml-4">
              <h1 className="text-4xl font-bold text-slate-900">Cours accéléré</h1>
              <p className="text-slate-600 mt-1">Excellence académique et réussite garantie</p>
            </div>
          </div>
        </motion.div>

        {/* Level Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2" />
            Choisissez votre niveau
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {levels.map((level, index) => (
              <motion.button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`p-6 rounded-xl text-center transition-all relative overflow-hidden ${
                  selectedLevel === level.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      level.badge === "Premium" ? "bg-secondary/20 text-secondary" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {level.badge}
                  </span>
                </div>
                <span className="text-lg font-medium block mb-2">{level.name}</span>
                <span className={`text-sm ${selectedLevel === level.id ? "text-white/80" : "text-slate-500"}`}>
                  Programme complet
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Selected Level Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="premium-card bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="md:w-2/3 pr-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-slate-900">{currentLevel.name}</h2>
                  <p className="text-slate-600">Programme d'excellence académique</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {currentLevel.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-slate-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Subjects */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Book className="h-5 w-5 mr-2" />
                  Matières enseignées
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentLevel.subjects.map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center bg-primary/5 p-3 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span className="text-slate-700">{subject}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Programme spécifique</h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentLevel.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </motion.li>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Options */}
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="grid gap-6">
                {/* Présentiel Option */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="premium-card bg-primary/5 rounded-xl p-6 flex flex-col relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold ml-2">Format Présentiel</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{currentLevel.price}</div>
                  <p className="text-slate-600 mb-4">par mois</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-secondary mr-2" />
                      <span>4 séances par semaine</span>
                    </li>
                    <li className="flex items-center">
                      <Book className="h-5 w-5 text-secondary mr-2" />
                      <span>Support pédagogique complet</span>
                    </li>
                    <li className="flex items-center">
                      <Target className="h-5 w-5 text-secondary mr-2" />
                      <span>Suivi personnalisé</span>
                    </li>
                  </ul>
                  <motion.a
                    href="https://wa.me/212684958750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary/90 transition shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    S'inscrire via WhatsApp
                  </motion.a>
                </motion.div>

                {/* Format à distance Option */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="premium-card bg-slate-50 rounded-xl p-6 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold ml-2">Format à distance</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Number.parseInt(currentLevel.price) - 400} DH
                  </div>
                  <p className="text-slate-600 mb-4">par mois</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 text-secondary mr-2" />
                      <span>Cours en direct en ligne</span>
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="h-5 w-5 text-secondary mr-2" />
                      <span>Support numérique premium</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-secondary mr-2" />
                      <span>Accès Discord privilégié</span>
                    </li>
                  </ul>
                  <motion.a
                    href="https://wa.me/212684958750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary/90 transition shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    S'inscrire via WhatsApp
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-primary/5 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Pourquoi choisir notre programme accéléré ?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Programme intensif",
                description: "Un rythme soutenu pour une préparation optimale aux examens nationaux.",
                icon: Clock,
              },
              {
                title: "Suivi personnalisé",
                description: "Un accompagnement adapté au rythme et aux besoins spécifiques de chaque élève.",
                icon: Target,
              },
              {
                title: "Résultats prouvés",
                description: "Une amélioration significative des notes et de la confiance en soi de nos élèves.",
                icon: Star,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="premium-card bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

