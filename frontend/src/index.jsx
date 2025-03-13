import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home.jsx'
import Survey from './pages/Survey.jsx'
import Header from './components/Header.jsx'
import Error from './components/Error.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Results from './pages/Results.jsx'
import Freelances from './pages/Freelances.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider, SurveyProvider } from './utils/Context.jsx'
import GlobalStyle from './utils/styles/GlobalStyle.jsx'

ReactDOM.render(
	<StrictMode>
		<Router>
			<ThemeProvider>
				<SurveyProvider>
					<GlobalStyle/>
					<Header/>
					<Routes>
						<Route path='/' element={<Home/>}/>
						<Route path='/survey/:questionNb' element={<Survey/>}/>
						<Route path='/results' element={<Results/>}/>
						<Route path='/freelances' element={<Freelances/>}/>
						<Route path='*' element={<Error/>}/>
					</Routes>
					<Footer/>
				</SurveyProvider>
			</ThemeProvider>
		</Router>
	</StrictMode>,
	document.getElementById("root")
)

// {
//   "name": "shiny-agency",
//   "version": "0.1.0",
//   "private": true,
//   "type": "module",
//   "dependencies": {
//     "@testing-library/dom": "^10.4.0",
//     "@testing-library/jest-dom": "^6.6.3",
//     "@testing-library/react": "^12.1.5",
//     "@testing-library/user-event": "^13.5.0",
//     "msw": "^2.7.3",
//     "prop-types": "^15.8.1",
//     "react": "^17.0.2",
//     "react-dom": "^17.0.2",
//     "react-router-dom": "^6.10.0",
//     "react-scripts": "^5.0.1",
//     "styled-components": "^6.1.15",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "devDependencies": {
//     "prettier": "^3.5.3"
//   }
// }