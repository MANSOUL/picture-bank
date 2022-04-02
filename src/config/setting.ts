function createSettings(langs: string[]): SettingObjectSelect[] {
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
