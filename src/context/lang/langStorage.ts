/*
 * @Author: kuanggf
 * @Date: 2022-04-04 10:45:53
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-04 10:54:41
 * @Description: file content
 */
import storage from '../../utils/storage'

const KEY_LANG_CURRENT = 'LANG_CURRENT'
const KEY_LANG_CURRENT_DATA = 'LANG_CURRENT_DATA'

export default {
  setLangCurrent(data: any) {
    storage.set(KEY_LANG_CURRENT, data)
  },
  getLangCurrent() {
    return storage.get(KEY_LANG_CURRENT)
  },
  setLangCurrentData(data: any) {
    storage.set(KEY_LANG_CURRENT_DATA, data)
  },
  getLangCurrentData() {
    return storage.get(KEY_LANG_CURRENT_DATA)
  }
}