"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { isCurrency, type Currency } from "@/lib/currency"

const STORAGE_KEY = "auren-currency"

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // KGS is the base currency of the catalog, so it is the default everywhere.
  const [currency, setCurrencyState] = useState<Currency>("KGS")

  // Restore the saved choice after mount so SSR markup stays consistent.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isCurrency(saved)) {
      setCurrencyState(saved)
    }
  }, [])

  const setCurrency = (next: Currency) => {
    setCurrencyState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
