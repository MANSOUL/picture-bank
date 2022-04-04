/*
 * @Author: kuanggf
 * @Date: 2022-04-04 10:40:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-04 11:29:27
 * @Description: file content
 */
function createSettings(langs: SettingObjectOption[], langKey: string): SettingObjectSelect[] {
  return [
    {
      key: 'lang',
      displayName: '语言',
      value: langKey,
      placeholder: '请选择语言',
      required: false,
      type: 'select',
      options: langs
    }
  ]
}

export default createSettings
