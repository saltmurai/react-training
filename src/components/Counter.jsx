import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function Counter({start}) {
	const [count, setCount] = useState(start)
	function hanldeClick() {
		setCount(count + 1)
	}
	useEffect(() => {
		console.log(count)
	}, [])
	return (
		<div>
			<h2>{count}</h2>
			<button onClick={hanldeClick}>Increase</button>
		</div>
	)
}


export default Counter