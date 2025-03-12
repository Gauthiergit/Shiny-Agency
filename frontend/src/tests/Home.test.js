import { render, screen } from '@testing-library/react'
import Home from '../pages/Home';
import { ThemeProvider } from '../utils/Context';
import { MemoryRouter } from 'react-router-dom';
 
describe('Home', () => {
	it('should render without crash', async () => {
		render(
			<MemoryRouter>
				<ThemeProvider>
					<Home/>
				</ThemeProvider>
			</MemoryRouter>
		)
	})

	it('should render title', () => {
		render(
			<MemoryRouter>
				<ThemeProvider>
					<Home/>
				</ThemeProvider>
			</MemoryRouter>
		)
		expect(
			screen.getByRole(
				'heading',
				{
					level: 2,
					text: "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
				}
			)
		).toBeTruthy()
	})
})