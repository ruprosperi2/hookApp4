import {describe, expect, test} from "vitest"
import {renderHook, act} from "@testing-library/react-hooks"
import useFetch from "../../components/hooks/useFetch";
import useForm from "../../components/hooks/useForm";

describe("Test in useForm", () => {

    test("should return defect values", () => {
        const {result} = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1
`))
        const {data, loading, error} = result.current

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(true)

    })

    test("should return asycn", async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1
`))
        await waitForNextUpdate({timeout: 3000}); //timeout debido a la lentitud de la respuesta

        const {data, loading, error} = result.current

        expect(data.length).toBe(1)
        expect(loading).toBe(false)
        expect(error).toBe(false)

    })


    test("should return an errir ", async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch(`https://reqres.in/apid/users?page=2
`))
        await waitForNextUpdate({timeout: 4000}); //timeout debido a la lentitud de la respuesta

        const {data, loading, error} = result.current

        expect(data).toBe(null)
        expect(loading).toBe(false)
        expect(error).toBe(true)
    })


})