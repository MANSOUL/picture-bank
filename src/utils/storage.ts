const storage = {
  get(key: string) {
    const value = localStorage.getItem(key)
    if (value) return JSON.parse(value)
    return null
  },
  set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

export default storage
