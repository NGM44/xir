import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/app/i18n/settings'

const LanguageSwitcher = () => {
  const pathname = usePathname()
  
  // Function to get the new path with updated locale
  const getPathWithNewLocale = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex gap-4 items-center">
      <span className="text-sm text-gray-500">Select Language:</span>
      <div className="flex gap-2">
        {i18n.locales.map((locale) => {
          const path = getPathWithNewLocale(locale)
          
          return (
            <Link
              key={locale}
              href={path}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                pathname?.startsWith(`/${locale}`)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {locale.toUpperCase()}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageSwitcher