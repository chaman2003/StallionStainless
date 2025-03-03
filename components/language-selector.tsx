"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
}

export default function LanguageSelector(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English")

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" }
  ]

  const handleLanguageSelect = (language: Language): void => {
    setSelectedLanguage(language.name)
    setIsOpen(false)
  }

  const toggleDropdown = (): void => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="relative">
      <button 
        type="button"
        className="flex items-center gap-1 text-sm" 
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="inline-block w-5 h-5">
          {languages.find(lang => lang.name === selectedLanguage)?.flag}
        </span>
        <span>{selectedLanguage}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div 
          role="listbox" 
          className="absolute top-full right-0 mt-1 bg-white text-black shadow-md rounded-md py-1 z-10 w-32"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              className="flex items-center gap-2 w-full px-3 py-1 hover:bg-gray-100 text-left"
              onClick={() => handleLanguageSelect(lang)}
              aria-selected={selectedLanguage === lang.name}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
