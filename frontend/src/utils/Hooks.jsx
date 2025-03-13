import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './Context'

export function useFetch(url) {

	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	 
	useEffect(() => {

		if (!url)
			return

		setLoading(true)
		setError(false)
		// const controller = new AbortController()
		// const  signal = controller.signal

		async function fetchData() {
			try {
				const response = await fetch(url)
				// if (!response.ok) throw new Error("Network response was not ok")
				const data = await response.json()
				console.log("Données reçues :", data)
				setData(data)
			} catch (error) {
				if (error.name !== 'AbortError')
					setError(true)
			}
			finally {
				setLoading(false)
			}
		}

		fetchData()

		// return () => {
		// 	controller.abort()
		// }
	}, [url])

	return { isLoading, data, error }
}

export function useTheme() {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return { theme, toggleTheme }
}