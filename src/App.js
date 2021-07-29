import { Switch, Route } from "react-router-dom"

import Characters from "./screen/Characters"
import Home from "./screen/Home"
import Header from "./components/Header"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header name="ChickenLord" age="35" />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/characters">
					<Characters />
				</Route>
			</Switch>
		</div>
	)
}

export default App
