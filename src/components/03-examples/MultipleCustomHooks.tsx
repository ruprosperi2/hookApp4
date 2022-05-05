import useFetch from "../hooks/useFetch"
import useCounter from "../hooks/useCounter"


const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1)

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

  const { author, quote } = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      {
        loading

          ? (<div className="alert alert-info text-center">
            Loading...
          </div>)

          : (<blockquote className="blockquote text-right">
              <p className="mb-4">{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          )
      }

      <button
        onClick={increment}
        type="button"
      >
        Next
      </button>

    </>
  )
}

export default MultipleCustomHooks