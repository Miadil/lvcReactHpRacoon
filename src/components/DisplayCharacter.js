const DisplayCharacter = ({ id, name, image }) => {
	return (
		<div>
			<img src={image} alt={name} />
			<p>{name}</p>
		</div>
	)
}
export default DisplayCharacter
