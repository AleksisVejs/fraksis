import en from './en.js'
import lv from './lv.js'

const translations = {
  en,
  lv
}

export function t(key, language = 'en') {
  const keys = key.split('.')
  let value = translations[language] || translations['en']
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Return the key if translation not found
    }
  }
  
  return value || key
}
