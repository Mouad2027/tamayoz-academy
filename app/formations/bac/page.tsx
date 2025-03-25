"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  School,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  Book,
  Users,
  Monitor,
  Clock,
  Calendar,
  AlertCircle,
  BookOpen,
  Star,
  TrendingUp,
} from "lucide-react"

export default function BacPage() {
  const [selectedLevel, setSelectedLevel] = useState("2bac")
  const [selectedType, setSelectedType] = useState("ete")

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const levels = [
    {
      id: "2bac",
      name: "2ème année Bac",
      types: [
        {
          id: "ete",
          name: "Cours d'été",
          price: "600 DH",
          distancePrice: "300 DH",
          subjects: ["Mathématiques", "Physique-Chimie"],
          features: [
            "Cours intensifs tous les jours",
            "2 heures par jour pendant 1 mois",
            "Renforcement des bases",
            "Préparation à la rentrée",
          ],
          specialNote: "Inscriptions ouvertes dès maintenant pour la session d'été 2025",
          duration: "1 mois",
          schedule: "Tous les jours, 2h par jour",
        },
        {
          id: "examen",
          name: "Préparation aux examens",
          price: "700 DH",
          distancePrice: "350 DH",
          subjects: ["Mathématiques", "Physique-Chimie", "SVT"],
          features: [
            "Préparation intensive aux examens nationaux",
            "Exercices types du bac",
            "Séances de révision intensive",
            "Suivi personnalisé",
          ],
          duration: "1 mois",
          schedule: "Tous les jours, 2h par jour",
        },
      ],
    },
    {
      id: "1bac",
      name: "1ère année Bac",
      types: [
        {
          id: "ete",
          name: "Cours d'été",
          price: "500 DH",
          distancePrice: "200 DH",
          subjects: ["Mathématiques", "Physique-Chimie"],
          features: [
            "Cours intensifs tous les jours",
            "2 heures par jour pendant 1 mois",
            "Début des cours le 5 juillet 2025",
            "Spécial Bac Sciences et Bac Mathématiques",
          ],
          specialNote: "Inscriptions ouvertes dès maintenant pour la session d'été 2025",
          duration: "1 mois",
          schedule: "Tous les jours, 2h par jour",
        },
      ],
    },
  ]

  const currentLevel = levels.find((level) => level.id === selectedLevel) || levels[0]
  const currentType = currentLevel.types.find((type) => type.id === selectedType) || currentLevel.types[0]

  // Reset selected type when changing level if the type doesn't exist in the new level
  useEffect(() => {
    if (!currentLevel.types.some((type) => type.id === selectedType)) {
      setSelectedType(currentLevel.types[0].id)
    }
  }, [selectedLevel, currentLevel.types, selectedType])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>

        {/* Academic patterns */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23003366' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-10 w-6 h-6 border-4 border-blue-300 opacity-30 rotate-45"></div>
        <div className="absolute top-2/3 right-10 w-8 h-8 border-4 border-indigo-300 opacity-30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-10 h-10 border-4 border-purple-300 opacity-30 transform -rotate-12"></div>
      </div>

      <div className="relative py-16 z-10">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center mb-12"
          >
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <School className="h-10 w-10 text-white" />
            </div>
            <div className="ml-5">
              <h1 className="text-4xl font-bold text-gray-900 mb-1 font-playfair">Cours Accéléré</h1>
              <p className="text-blue-600">Excellence académique et réussite garantie</p>
            </div>
          </motion.div>

          {/* Level Selection */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              <span>Choisissez votre niveau</span>
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {levels.map((level, index) => (
                <motion.button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`p-8 rounded-xl text-center transition-all relative overflow-hidden ${
                    selectedLevel === level.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
                      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {selectedLevel === level.id && (
                    <div className="absolute inset-0 bg-blue-500 opacity-10 animate-pulse"></div>
                  )}
                  <div className="flex flex-col items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        selectedLevel === level.id ? "bg-white/20" : "bg-blue-100"
                      }`}
                    >
                      <GraduationCap
                        className={`h-8 w-8 ${selectedLevel === level.id ? "text-white" : "text-blue-600"}`}
                      />
                    </div>
                    <span className="font-bold text-xl relative z-10">{level.name}</span>
                  </div>
                  {selectedLevel === level.id && (
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Type Selection - Only show if there are multiple types */}
          {currentLevel.types.length > 1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-indigo-600" />
                <span>Choisissez votre programme</span>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {currentLevel.types.map((type, index) => (
                  <motion.button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-8 rounded-xl text-center transition-all relative overflow-hidden ${
                      selectedType === type.id
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl"
                        : "bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 shadow-md hover:shadow-lg"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {selectedType === type.id && (
                      <div className="absolute inset-0 bg-indigo-500 opacity-10 animate-pulse"></div>
                    )}
                    <div className="flex flex-col items-center justify-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                          selectedType === type.id ? "bg-white/20" : "bg-indigo-100"
                        }`}
                      >
                        {type.id === "ete" ? (
                          <Calendar
                            className={`h-8 w-8 ${selectedType === type.id ? "text-white" : "text-indigo-600"}`}
                          />
                        ) : (
                          <BookOpen
                            className={`h-8 w-8 ${selectedType === type.id ? "text-white" : "text-indigo-600"}`}
                          />
                        )}
                      </div>
                      <span className="font-bold text-xl relative z-10">{type.name}</span>
                    </div>
                    {selectedType === type.id && (
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"></div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Selected Level Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-blue-100 relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 rounded-bl-full"></div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between relative">
              <div className="md:w-2/3 pr-8">
                <div className="flex items-center mb-8">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                    <School className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-1 font-playfair">{currentLevel.name}</h2>
                    <p className="text-blue-600 font-medium">{currentType.name}</p>
                  </div>
                </div>

                {currentType.specialNote && (
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg shadow-sm">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-amber-800 font-medium">{currentType.specialNote}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Subjects */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                    <Book className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Matières enseignées</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentType.subjects.map((subject, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl shadow-sm hover:shadow transition-shadow border border-blue-200"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                          <CheckCircle className="h-5 w-5 text-blue-700" />
                        </div>
                        <span className="font-medium text-blue-900">{subject}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Programme spécifique</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentType.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl shadow-sm border border-gray-200"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Calendrier des cours</span>
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-200">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-blue-900 font-medium">{currentType.schedule}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-blue-900 font-medium">Durée: {currentType.duration}</span>
                      </li>
                      {currentLevel.id === "1bac" && (
                        <li className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-blue-900 font-medium">Début des cours: 5 juillet 2025</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Pricing Options */}
              <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="grid gap-8">
                  {/* Présentiel Option */}
                  <motion.div
                    className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-xl p-6 flex flex-col relative overflow-hidden border border-blue-200 shadow-xl hover:shadow-2xl transition-shadow"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-bold ml-3 text-blue-900">Format Présentiel</h3>
                    </div>
                    <div className="text-3xl font-bold text-blue-700 mb-2">{currentType.price}</div>
                    <p className="text-blue-600 mb-4 font-medium">pour le programme complet</p>
                    <div className="bg-white p-4 rounded-lg mb-6 shadow-inner border border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500 uppercase tracking-wide">Engagement</span>
                          <div className="font-medium text-gray-800">1 mois</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Cours quotidiens</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Support pédagogique</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Suivi personnalisé</span>
                      </li>
                    </ul>
                    <motion.a
                      href="https://wa.me/212684958750"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      S'inscrire via WhatsApp
                    </motion.a>
                  </motion.div>

                  {/* Format à distance Option */}
                  <motion.div
                    className="bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 rounded-xl p-6 flex flex-col relative overflow-hidden border border-indigo-200 shadow-xl hover:shadow-2xl transition-shadow"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center">
                        <Monitor className="h-6 w-6 text-indigo-700" />
                      </div>
                      <h3 className="text-xl font-bold ml-3 text-indigo-900">Format à distance</h3>
                    </div>
                    <div className="text-3xl font-bold text-indigo-700 mb-2">{currentType.distancePrice}</div>
                    <p className="text-indigo-600 mb-4 font-medium">pour le programme complet</p>
                    <div className="bg-white p-4 rounded-lg mb-6 shadow-inner border border-indigo-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500 uppercase tracking-wide">Engagement</span>
                          <div className="font-medium text-gray-800">1 mois</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-indigo-600" />
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Cours en direct en ligne</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Support numérique</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Accès Discord</span>
                      </li>
                    </ul>
                    <motion.a
                      href="https://wa.me/212684958750"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl font-medium"
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
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-playfair">
              Pourquoi choisir notre programme accéléré ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Programme intensif",
                  description: "Un rythme soutenu pour une préparation optimale aux examens nationaux.",
                  icon: Clock,
                  color: "blue",
                },
                {
                  title: "Suivi personnalisé",
                  description: "Un accompagnement adapté au rythme et aux besoins spécifiques de chaque élève.",
                  icon: Users,
                  color: "indigo",
                },
                {
                  title: "Résultats prouvés",
                  description: "Une amélioration significative des notes et de la confiance en soi de nos élèves.",
                  icon: TrendingUp,
                  color: "purple",
                },
              ].map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-${feature.color}-100`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  >
                    <div
                      className={`w-14 h-14 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-4`}
                    >
                      <FeatureIcon className={`h-7 w-7 text-${feature.color}-600`} />
                    </div>
                    <h4 className={`font-semibold text-lg mb-2 text-${feature.color}-700`}>{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add keyframes for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

