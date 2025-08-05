"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("Trade2X_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (username, password) => {
    // Mock login - in real app, this would call your API
    if (username && password) {
      const mockUser = {
        id: "1",
        username,
        email: `${username}@example.com`,
        wallet: 100,
      }
      setUser(mockUser)
      localStorage.setItem("Trade2X_user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const signup = async (username, password) => {
    // Mock signup - in real app, this would call your API
    if (username && password) {
      const mockUser = {
        id: Date.now().toString(),
        username,
        email: `${username}@example.com`,
        wallet: 100,
      }
      setUser(mockUser)
      localStorage.setItem("Trade2X_user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("Trade2X_user")
  }

  const updateUser = (updates) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem("Trade2X_user", JSON.stringify(updatedUser))
    }
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, updateUser }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
