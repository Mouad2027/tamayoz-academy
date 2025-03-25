"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the home page component
    router.push("/home")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Tamayoz Academy</h1>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

