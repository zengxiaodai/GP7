import { MobXProviderContext, observer } from 'mobx-react'
import { useContext } from 'react'

export function useStore(space) {
  const ctx = useContext(MobXProviderContext)
  console.log('useStore ctx', ctx)
  return space ? ctx[space] : ctx
}
