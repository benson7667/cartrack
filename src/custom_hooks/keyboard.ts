import { useEffect, useState } from 'react'

export function useKeyPress() {
  const [pressedKey, setPressKey] = useState('')

  function handleKeyDown(event: any) {
    setPressKey(event.code)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return { pressedKey }
}
