import { useState } from "react"

export default (initialValue: boolean | undefined = false): [boolean, { toggle: () => void }] => {
    const [value, setValue] = useState(initialValue)
    const setShow = {
        toggle: () => 
            setValue(v => !v)        
    }
    return [value, setShow]
}