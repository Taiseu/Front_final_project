import { useContext } from 'react'
import CardContext from './cardContextValue'

export function useCard() {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('useCard must be used inside CardProvider')
  }

  return context
}
