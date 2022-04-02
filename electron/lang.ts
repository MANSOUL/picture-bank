/*
 * @Author: kuanggf
 * @Date: 2022-03-15 13:42:39
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-15 15:47:26
 * @Description: file content
 */
import { fork } from 'child_process'

export default function createLangHost() {
  const langHost = fork('./lang/host.js')
  return langHost
}
