import { describe, expect, test } from "vitest"
import { renderHook, act } from "@testing-library/react-hooks"
import useForm from "../../components/hooks/useForm";

describe("Test in useForm", () => {
    test("should return defect values", () => {
        const initialForm = {
            name: 'Ruben',
            email: 'ruprosperi@gmail.com'
        }

        const { result } = renderHook(() => useForm(initialForm))

        const [formValues, handleInputChange, handleSubmit] = result.current

        expect(formValues).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof handleSubmit).toBe('function')
    })

    test("should change the value in the form", () => {
        const initialForm = {
            name: 'Ruben',
            email: 'ruprosperi@gmail.com'
        }

        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange] = result.current

        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'José'
                }
            })
        })

        const [formValues] = result.current



        expect(formValues).toEqual({
            ...initialForm,
            name: 'José'
        })
    })
})
