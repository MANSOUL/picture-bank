/*
 * @Author: kuanggf
 * @Date: 2022-04-04 10:40:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-04 10:58:25
 * @Description: file content
 */
function createSettings(langs: SettingObjectOption[]): SettingObjectSelect[] {
  return [
    {
      key: 'lang',
      displayName: '语言',
      value: 'zh',
      placeholder: '请选择语言',
      required: false,
      type: 'select',
      options: langs
    }
  ]
}

export default createSettings
