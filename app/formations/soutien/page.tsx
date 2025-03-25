"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  BookOpen,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  Book,
  Users,
  Monitor,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export default function SoutienPage() {
  const [selectedLevel, setSelectedLevel] = useState("2bac")
  const [showSubjects, setShowSubjects] = useState(false)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const levels = [
    {
      id: "2bac",
      name: "2ème année Bac",
      subjects: [
        { name: "Mathématiques", price: 350, distancePrice: 100 },
        { name: "Physique-Chimie", price: 350, distancePrice: 100 },
        { name: "SVT", price: 300, distancePrice: 100 },
        { name: "Anglais", price: 300, distancePrice: 100 },
        { name: "Philosophie", price: 250, distancePrice: 100 },
      ],
      features: [
        "Préparation aux examens nationaux",
        "Exercices types du bac",
        "Séances de révision intensive",
        "Suivi personnalisé",
      ],
      packPrice: 1250,
    },
    {
      id: "1bac",
      name: "1ère année Bac",
      subjects: [
        { name: "Mathématiques", price: 300, distancePrice: 100 },
        { name: "Physique-Chimie", price: 300, distancePrice: 100 },
        { name: "Français", price: 300, distancePrice: 100 },
        { name: "Histoire-Géographie", price: 250, distancePrice: 100 },
        { name: "Éducation Islamique", price: 250, distancePrice: 100 },
        { name: "Arabe", price: 250, distancePrice: 100 },
      ],
      features: ["Renforcement des bases", "Préparation à la 2ème année", "Exercices pratiques", "Suivi continu"],
      packPrice: 1300,
    },
    {
      id: "tc",
      name: "Tronc Commun",
      subjects: [
        { name: "Mathématiques", price: 250, distancePrice: 100 },
        { name: "Physique-Chimie", price: 250, distancePrice: 100 },
        { name: "SVT", price: 250, distancePrice: 100 },
        { name: "Français", price: 250, distancePrice: 100 },
        { name: "Anglais", price: 250, distancePrice: 100 },
      ],
      features: ["Adaptation au lycée", "Méthodologie de travail", "Exercices fondamentaux", "Accompagnement régulier"],
    },
    {
      id: "3college",
      name: "3ème année Collège",
      subjects: [
        { name: "Mathématiques", price: 250, distancePrice: 100 },
        { name: "Physique-Chimie", price: 250, distancePrice: 100 },
        { name: "SVT", price: 250, distancePrice: 100 },
        { name: "Français", price: 250, distancePrice: 100 },
        { name: "Anglais", price: 250, distancePrice: 100 },
      ],
      features: ["Préparation au brevet", "Exercices ciblés", "Soutien adapté", "Suivi hebdomadaire"],
    },
  ]

  const currentLevel = levels.find((level) => level.id === selectedLevel) || levels[0]

  // Use fixed pack price if available, otherwise calculate
  const totalPresentielPrice =
    currentLevel.packPrice || currentLevel.subjects.reduce((total, subject) => total + subject.price, 0)
  const totalDistancePrice = currentLevel.subjects.reduce((total, subject) => total + subject.distancePrice, 0)

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="flex items-center mb-8">
          <BookOpen className="h-12 w-12 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900 ml-4">Soutien scolaire</h1>
        </div>

        {/* Level Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2" />
            Choisissez votre niveau
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`p-4 rounded-lg text-center transition-all ${
                  selectedLevel === level.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                <span className="font-medium">{level.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Level Content */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="md:w-2/3 pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentLevel.name}</h2>

              {/* Subjects with Pricing */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    Matières et tarifs
                  </h3>
                  <button
                    onClick={() => setShowSubjects(!showSubjects)}
                    className="text-blue-600 flex items-center text-sm font-medium"
                  >
                    {showSubjects ? (
                      <>
                        Masquer les détails <ChevronUp className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Voir les détails <ChevronDown className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                {showSubjects ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentLevel.subjects.map((subject, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                              <span className="font-semibold text-blue-900">{subject.name}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mt-3">
                            <div className="flex flex-col items-center justify-center bg-white p-3 rounded-lg border border-blue-200">
                              <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">Présentiel</span>
                              <span className="font-bold text-blue-600 text-lg">{subject.price} DH</span>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-white p-3 rounded-lg border border-blue-200">
                              <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">À distance</span>
                              <span className="font-bold text-blue-600 text-lg">{subject.distancePrice} DH</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-gray-700">
                        * Les prix indiqués sont par matière et par mois. Vous pouvez choisir une ou plusieurs matières
                        selon vos besoins.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {currentLevel.subjects.map((subject, index) => (
                      <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        <span>{subject.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Programme spécifique</h3>
                <ul className="space-y-3">
                  {currentLevel.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Options */}
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="grid gap-6">
                {/* Présentiel Option */}
                <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-xl p-6 flex flex-col relative overflow-hidden border border-blue-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold ml-2">Format Présentiel</h3>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">À partir de</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">250 DH</div>
                  <p className="text-gray-600 mb-4">par matière / mois</p>
                  <div className="bg-white p-4 rounded-lg mb-4 shadow-inner">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Pack complet</span>
                      <span className="text-blue-600 font-bold text-xl">{totalPresentielPrice} DH</span>
                    </div>
                    <div className="text-xs text-gray-500">Toutes les matières</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>2 séances par semaine</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Support pédagogique</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Suivi personnalisé</span>
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/212684958750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    S'inscrire via WhatsApp
                  </a>
                </div>

                {/* Format à distance Option */}
                <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 rounded-xl p-6 flex flex-col relative overflow-hidden border border-slate-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Monitor className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-semibold ml-2">Format à distance</h3>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">À partir de</div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    {currentLevel.subjects[0].distancePrice} DH
                  </div>
                  <p className="text-gray-600 mb-4">par matière / mois</p>
                  <div className="bg-white p-4 rounded-lg mb-4 shadow-inner">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Pack complet</span>
                      <span className="text-indigo-600 font-bold text-xl">{totalDistancePrice} DH</span>
                    </div>
                    <div className="text-xs text-gray-500">Toutes les matières</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Cours en direct en ligne</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Support numérique</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Accès Discord</span>
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/212684958750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full bg-indigo-500 text-white text-center py-3 rounded-lg hover:bg-indigo-600 transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    S'inscrire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pourquoi choisir notre soutien scolaire ?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Enseignants qualifiés</h4>
              <p className="text-gray-600">
                Des professeurs expérimentés qui connaissent parfaitement le programme scolaire marocain.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Suivi personnalisé</h4>
              <p className="text-gray-600">
                Un accompagnement adapté au rythme et aux besoins spécifiques de chaque élève.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Résultats prouvés</h4>
              <p className="text-gray-600">
                Une amélioration significative des notes et de la confiance en soi de nos élèves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

