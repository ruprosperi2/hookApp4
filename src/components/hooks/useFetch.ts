import axios from "axios"
import { useEffect, useRef, useState } from "react"

const useFetch = (url: string) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: true
  })

  let isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])


  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: true
    })
    axios.get(url)
      .then(res => {
        if (isMounted.current) {
          setState({
            data: res.data,
            loading: false,
            error: false
          })
        }
      })
  }, [url])

  return state

}

export default useFetch