"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Brand = "default" | "farlabs"

const BrandContext = createContext<{
  brand: Brand
  setBrand: (brand: Brand) => void
}>({
  brand: "farlabs",
  setBrand: () => {},
})

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrand] = useState<Brand>("farlabs")

  useEffect(() => {
    document.documentElement.dataset.theme = brand
  }, [brand])

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      {children}
    </BrandContext.Provider>
  )
}

export const useBrand = () => useContext(BrandContext)
