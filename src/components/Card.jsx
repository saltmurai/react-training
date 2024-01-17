/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Card.css"


function Card({url, title, description}){
	const [counter, setCounter] = useState(0)
	function handleClick() {
		setCounter(counter + 1)
	}
	return (
		<div className="">
			<img className="w-20" src={url} />
			<div className="text-red-500 font-medium text-xl">{title}</div>
			<p>{description}</p>
			<p>{counter}</p>
			<button onClick={handleClick}>UP</button>
		</div>
	)

}


export default Card