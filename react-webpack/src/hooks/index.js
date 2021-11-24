import React from 'react'
import { useLocation } from 'react-router-dom'

function useQuery() {
  const { search } = useLocation()
  return React.useMemo(() => {
    let result = {}
    search.replace('?', '').split('&').forEach(ele=>{
      const arr = ele.split('=')
      result[arr[0]] = arr[1]
    })
    return result
  }, [search])
}

export {
  useQuery
}
