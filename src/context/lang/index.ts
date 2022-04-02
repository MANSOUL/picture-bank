import { createContext, useContext } from "react"
import defaultLang from './zh.json'

const context = createContext({
  lang: defaultLang
})

export function useLang() {
  return useContext(context)
}

export const defaultLangData = defaultLang

export default context