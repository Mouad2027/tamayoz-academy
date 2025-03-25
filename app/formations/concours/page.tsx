"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  GraduationCap,
  ArrowLeft,
  CheckCircle,
  Clock,
  Book,
  Stethoscope,
  Building2,
  Leaf,
  Heart,
  LineChart,
  Pencil,
  Trophy,
  Users,
  Monitor,
} from "lucide-react"

export default function ConcoursPage() {
  const [selectedConcours, setSelectedConcours] = useState("medecine")

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const concoursList = [
    {
      id: "medecine",
      name: "Médecine",
      icon: Stethoscope,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      presentiel: {
        price: "1800 DH",
        location: "Marrakech",
      },
      distanciel: {
        price: "1400 DH",
      },
      duration: "68H",
      subjects: [
        { name: "Mathématiques", hours: 22 },
        { name: "Physique/Chimie", hours: 22 },
        { name: "SVT", hours: 22 },
      ],
      features: [
        "Préparation intensive au concours",
        "Exercices types corrigés",
        "Simulations d'examens",
        "Support de cours complet",
      ],
    },
    {
      id: "ensa",
      name: "ENSA/ENSAM",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      presentiel: {
        price: "1500 DH",
        location: "Marrakech",
      },
      distanciel: {
        price: "1200 DH",
      },
      duration: "40H",
      subjects: [
        { name: "Mathématiques", hours: 20 },
        { name: "Physique/Chimie", hours: 20 },
      ],
      features: [
        "Préparation spécifique ENSA/ENSAM",
        "QCM d'entraînement",
        "Méthodologie de résolution",
        "Techniques de rapidité",
      ],
    },
    {
      id: "iav",
      name: "IAV/APESA",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      presentiel: {
        price: "1200 DH",
        location: "Marrakech",
      },
      distanciel: {
        price: "1000 DH",
      },
      duration: "24H",
      subjects: [
        { name: "Mathématiques", hours: 6 },
        { name: "Physique/Chimie", hours: 6 },
        { name: "SVT", hours: 12 },
      ],
      features: [
        "Programme adapté IAV/APESA",
        "Focus sur les points clés",
        "Exercices spécifiques",
        "Préparation complète",
      ],
    },
    {
      id: "ispits",
      name: "ISPITS",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      presentiel: {
        price: "800 DH",
        location: "Marrakech",
      },
      distanciel: {
        price: "600 DH",
      },
      duration: "15H",
      subjects: [
        { name: "Physique/Chimie", hours: 6 },
        { name: "SVT", hours: 6 },
        { name: "Français", hours: 3 },
      ],
      features: ["Préparation ciblée ISPITS", "Révision intensive", "Tests blancs", "Accompagnement personnalisé"],
    },
    {
      id: "encg",
      name: "ENCG/ISCAE",
      icon: LineChart,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      presentiel: {
        price: "1400 DH",
        location: "Marrakech",
      },
      distanciel: {
        price: "1100 DH",
      },
      duration: "24H",
      subjects: [
        { name: "Mémorisation", hours: 8 },
        { name: "Résolution de problèmes", hours: 8 },
        { name: "Culture générale", hours: 4 },
        { name: "Linguistique", hours: 4 },
      ],
      features: ["Techniques de TAGE MAGE", "Préparation au TAFEM", "Entraînement intensif", "Méthodologie éprouvée"],
    },
    {
      id: "ena",
      name: "ENA",
      icon: Pencil,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      presentiel: {
        price: "1400 DH",
        location: "Marrakech",
      },
      duration: "26H",
      subjects: [
        { name: "Dessin", hours: 12 },
        { name: "Expression écrite", hours: 8 },
        { name: "Culture générale", hours: 6 },
      ],
      features: ["Techniques de dessin", "Méthodologie d'expression", "Préparation complète", "Exercices pratiques"],
    },
  ]

  const currentConcours = concoursList.find((c) => c.id === selectedConcours) || concoursList[0]
  const IconComponent = currentConcours.icon

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="flex items-center mb-8">
          <GraduationCap className="h-12 w-12 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900 ml-4">Préparation aux concours</h1>
        </div>

        {/* Concours Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Trophy className="h-6 w-6 mr-2" />
            Choisissez votre concours
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {concoursList.map((concours) => {
              const ConcourIcon = concours.icon
              return (
                <button
                  key={concours.id}
                  onClick={() => setSelectedConcours(concours.id)}
                  className={`p-4 rounded-lg text-center transition-all ${
                    selectedConcours === concours.id
                      ? `${concours.color} ${concours.bgColor} shadow-lg scale-105 border-2 ${concours.borderColor}`
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <ConcourIcon
                    className={`h-8 w-8 mx-auto mb-2 ${
                      selectedConcours === concours.id ? concours.color : "text-gray-600"
                    }`}
                  />
                  <span className="font-medium">{concours.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Concours Content */}
        <div className={`bg-white rounded-xl p-8 shadow-lg mb-12 border-2 ${currentConcours.borderColor}`}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/2 pr-8">
              <div className="flex items-center mb-6">
                <div className={`${currentConcours.bgColor} p-3 rounded-full`}>
                  <IconComponent className={`h-8 w-8 ${currentConcours.color}`} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Concours {currentConcours.name}</h2>
              </div>

              {/* Volume Horaire */}
              <div
                className={`flex items-center mb-6 ${currentConcours.color} bg-${currentConcours.id}-50/20 p-3 rounded-lg inline-block`}
              >
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-lg font-semibold">Volume horaire: {currentConcours.duration}</span>
              </div>

              {/* Subjects */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Book className="h-5 w-5 mr-2" />
                  Programme détaillé
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentConcours.subjects.map((subject, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${currentConcours.bgColor} p-4 rounded-lg shadow-sm hover:shadow transition-shadow`}
                    >
                      <CheckCircle className={`h-5 w-5 ${currentConcours.color} mr-2`} />
                      <span className="font-medium">{subject.name}</span>
                      <span className={`ml-auto ${currentConcours.color} font-bold text-lg`}>{subject.hours}H</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Points forts de la formation</h3>
                <ul className="space-y-3 grid grid-cols-2 gap-4">
                  {currentConcours.features.map((feature, index) => (
                    <li key={index} className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                      <CheckCircle className={`h-5 w-5 ${currentConcours.color} mr-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Options */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div
                className={`grid md:grid-cols-2 gap-6 ${currentConcours.id === "ena" ? "md:grid-cols-1 max-w-md mx-auto" : ""}`}
              >
                {/* Présentiel Option */}
                <div
                  className={`bg-gradient-to-br from-${currentConcours.id}-50 to-white rounded-xl p-6 flex flex-col relative overflow-hidden border-2 ${currentConcours.borderColor} shadow-lg`}
                >
                  <div className="flex items-center mb-4">
                    <Users className={`h-6 w-6 ${currentConcours.color}`} />
                    <h3 className="text-xl font-semibold ml-2">Format Présentiel</h3>
                  </div>
                  <div className={`text-3xl font-bold ${currentConcours.color} mb-2`}>
                    {currentConcours.presentiel.price}
                  </div>
                  <p className="text-gray-600 mb-4">à {currentConcours.presentiel.location}</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Cours en présentiel</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Support de cours</span>
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

                {/* Format à distance Option - Only show if available */}
                {currentConcours.distanciel && (
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 flex flex-col relative overflow-hidden border-2 border-indigo-200 shadow-lg">
                    <div className="flex items-center mb-4">
                      <Monitor className="h-6 w-6 text-indigo-600" />
                      <h3 className="text-xl font-semibold ml-2">Format à distance</h3>
                    </div>
                    <div className={`text-3xl font-bold ${currentConcours.color} mb-2`}>
                      {currentConcours.distanciel.price}
                    </div>
                    <p className="text-gray-600 mb-4">en ligne</p>
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
                        <span>Accès aux enregistrements</span>
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
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pourquoi nous choisir pour votre préparation ?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Expertise reconnue</h4>
              <p className="text-gray-600">
                Des années d'expérience dans la préparation aux concours avec des taux de réussite exceptionnels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Méthode éprouvée</h4>
              <p className="text-gray-600">
                Une approche pédagogique structurée et des supports de cours optimisés pour chaque concours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Double format</h4>
              <p className="text-gray-600">
                Choisissez entre les cours en présentiel ou à distance selon vos préférences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

