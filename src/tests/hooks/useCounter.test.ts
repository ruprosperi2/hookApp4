import { describe, expect, test } from "vitest"
import { renderHook, act } from "@testing-library/react-hooks"
import useCounter from "../../components/hooks/useCounter"

describe("Test in useCounter", () => {
  test("should return defect values", () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.state).toBe(10)
    expect(typeof result.current.increment).toBe("function")
    expect(typeof result.current.decrement).toBe("function")
    expect(typeof result.current.reset).toBe("function")
  })

  test("should return a state with value 100", () => {
    const { result } = renderHook(() => useCounter(100))

    expect(result.current.state).toBe(100)
  })

  test("should return a state with value 101 increment", () => {
    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    act(() => {
      increment()
    })
    expect(result.current.state).toBe(101)
  })

  test("should return a state with value 99 increment", () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => {
      decrement()
    })
    expect(result.current.state).toBe(99)
  })

  test("should return a state reset", () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement, reset } = result.current

    act(() => {
      decrement()
      reset()
    })
    expect(result.current.state).toBe(100)
  })
})
