/*
 * @Author: kuanggf
 * @Date: 2022-04-04 10:40:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-04 11:33:21
 * @Description: file content
 */
import { createContext, useContext } from "react"
import defaultLang from './zh.json'

const context = createContext({
  lang: defaultLang,
  langKey: 'zh',
  setLang: (data: typeof defaultLang) => {},
  setLangKey: (key: string) => {}
})

export function useLang() {
  return useContext(context)
}

export const defaultLangData = defaultLang

export default context