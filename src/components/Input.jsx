import { useState } from "react"



function InputExample() {
	const [value, setValue] = useState("")
	function handleInput(e) {
		setValue(e.target.value)
	}
	return (
		<>
		<div>{value}</div>
		<input value={value} onChange={handleInput} type="text" />
		</>
	)
}

export default InputExample