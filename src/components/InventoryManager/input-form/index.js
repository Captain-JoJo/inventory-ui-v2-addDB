import React, {useState} from 'react'

function InputForm({addNewItem}) {
    const [name, handleChange, resetNameField] = useInputState("")

    function useInputState(initialValue) {
        const [newValue, setValue] = useState(initialValue)
        const handleChange = (event) => setValue(event.target.value)
        const reset = () => setValue("")
        console.log(newValue);
        return [newValue, handleChange, reset]
    }

    return(
        <form
            className="InputForm"
            onSubmit={(e) => {
                e.preventDefault()
                addNewItem(name)
                console.log('name value', name);
                resetNameField()
            }}
        >
            <input
                type="text"
                value={name}
                placeholder="Add New Item"
                onChange={handleChange}
                label="Add New Item"
            />
            <button type="submit">Add New Item</button>
        </form>
    )
}

export default InputForm