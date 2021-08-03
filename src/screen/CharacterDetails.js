import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const CharacterDetails = () => {
	const { id } = useParams()
	const [character, setCharacter] = useState([])
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		const getData = async () => {
			const results = await axios.get(
				`https://harrypotterapi20.herokuapp.com/characters/${id}`
			)
			console.log("poulet", results.data)
			setCharacter(results.data)
			setLoader(false)
		}
		getData()
	}, [])

	return (
		<div>
			{loader ? (
				<div>Loading...</div>
			) : (
				character.map((info) => (
					<div>
						<img className="cardImg" src={info.image} alt={info.name} />
						{info.name}
					</div>
				))
			)}
		</div>
	)
}

export default CharacterDetails
