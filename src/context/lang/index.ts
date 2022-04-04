/*
 * @Author: kuanggf
 * @Date: 2022-04-04 10:40:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-04 10:55:37
 * @Description: file content
 */
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