import i18n from 'i18next'

import en from './locale/en'
import it from './locale/it'

const lang = localStorage.getItem('lang') || 'en'

const options = {
  lng: lang,
  resources: { it, en },
  defaultNS: 'default',
  ns: ['default'],
  interpolation: {
    escapeValue: false // not needed for react!!
  }
}

if (process.env.NODE_ENV !== 'production') {
  options.debug = true
  options.saveMissing = true
  options.missingKeyHandler = function(lng, ns, key, fallbackValue) {
    console.error('Missing key!', ns, key, fallbackValue)
  }
}

i18n.init(options)

export default i18n
export function t() {
  return i18n.t.apply(i18n, arguments)
}
export function exists() {
  return i18n.exists.apply(i18n, arguments)
}
