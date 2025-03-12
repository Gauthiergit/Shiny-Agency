/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../components/Card";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../utils/Context";

describe('Card', () => {
	it('should use the good title and image', async () => {
		render(
			<MemoryRouter>
				<ThemeProvider>
					<Card
						label='Le Seigneur des Anneaux'
						title='Le Retour du Roi'
						picture='/mon_precieux.png'
					/>
				</ThemeProvider>
			</MemoryRouter>
		)
		const myPicture = screen.getByRole('img')
		expect(myPicture.src).toBe('http://localhost/mon_precieux.png')
		const myTitle = screen.getByTestId('card_title')
		expect(myTitle.textContent).toBe(' Le Retour du Roi ')
	})

	it('should add stars on click', async () => {
		render(
			<MemoryRouter>
				<ThemeProvider>
					<Card
						label='Le Seigneur des Anneaux'
						title='Le Retour du Roi'
						picture='/mon_precieux.png'
					/>
				</ThemeProvider>
			</MemoryRouter>
		)
		const myTitle = screen.getByTestId('card_title')
		const parentElement = myTitle.closest("div")
		fireEvent.click(parentElement)
		expect(myTitle.textContent).toBe('⭐ Le Retour du Roi ⭐')
	})
})