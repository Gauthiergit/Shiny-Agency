import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home.jsx'
import Survey from './pages/Survey.jsx'
import Header from './components/Header.jsx'
import Error from './components/Error.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Results from './pages/Results.jsx'
import Freelances from './pages/Freelances.jsx'

ReactDOM.render(
	<StrictMode>
		<Router>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/survey/:questionNb' element={<Survey/>}/>
				<Route path='/results' element={<Results/>}/>
				<Route path='/freelances' element={<Freelances/>}/>
				<Route path='*' element={<Error/>}/>
			</Routes>
		</Router>
	</StrictMode>,
	document.getElementById("root")
)	