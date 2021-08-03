import { useState, useEffect } from "react"
import axios from "axios"

import DisplayCharacter from "../components/DisplayCharacter"

import "./Characters.css"

const Characters = () => {
	const [characters, setCharacters] = useState([])
	useEffect(() => {
		const recupData = () => {
			axios
				.get("https://harrypotterapi20.herokuapp.com/characters")
				.then((res) => console.log(res.data) || setCharacters(res.data))
			// fetch("https://harrypotterapi20.herokuapp.com/characters")
			// 	.then((res) => res.json())
			// 	.then((res) => console.log(res) || setCharacters(res))
		}
		recupData()
	}, [])
	return (
		<div className="globalCharac">
			{characters.map((character) => (
				<DisplayCharacter key={character.id} {...character} />
			))}
		</div>
	)
}
export default Characters
