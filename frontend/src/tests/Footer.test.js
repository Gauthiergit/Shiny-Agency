import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '../components/Footer';
import { ThemeProvider } from '../utils/Context';
 
describe('Footer', () => {
	it('should render without crash', async () => {
		render(
			<ThemeProvider>
				<Footer/>
			</ThemeProvider>
		)
	})

	it('should change theme', () => {
		render(
			<ThemeProvider>
				<Footer/>
			</ThemeProvider>
		)
		const nightModeButton = screen.getByRole('button')
		expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
		fireEvent.click(nightModeButton)
		expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
	})
})