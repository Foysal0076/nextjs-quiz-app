export const setLocalStorage = (key: string, value: any): boolean => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || !window.localStorage) {
    return false
  }

  if (!key) {
    console.error('Storage key cannot be empty')
    return false
  }

  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error('Error setting local storage:', error)
    return false
  }
}
