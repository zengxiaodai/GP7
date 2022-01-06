import { useRoute } from 'vue-router'

function useLocation() {
  const route = useRoute()

  console.log('route', route.fullPath)
  const pathname = route.fullPath
  
  return {
    pathname
  }
}

export {
  useLocation
}
