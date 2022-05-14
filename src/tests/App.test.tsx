import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import App from "../App"

// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;


describe("Testing <App/>", () => {
  test("it should show correctly <App/> component", () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

})
