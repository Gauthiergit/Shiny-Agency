// /* eslint-disable testing-library/no-wait-for-multiple-assertions */
// /* eslint-disable testing-library/no-unnecessary-act */
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'

import Freelances from '../pages/Freelances'
import { render } from '../utils/Tests'; 

// const freelancersMockedData = [
// 	{
// 		name: 'Harry Potter',
// 		job: 'Magicien frontend',
// 		picture: '',
// 	},
// 	{
// 		name: 'Hermione Granger',
// 		job: 'Magicienne fullstack',
// 		picture: '',
// 	},
// ]

// const server = setupServer(
// 	// On précise ici l'url qu'il faudra "intercepter"
// 	rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
// 		// Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
// 		console.log("API mockée appelée")
// 		return res(ctx.json({ freelancersList: freelancersMockedData}))
// 	})
// )
 
// // Active la simulation d'API avant les tests depuis server
// beforeAll(() => {
// 	server.listen()
// 	console.log("MSW est activé pour les tests")
// })
// // Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
// afterEach(() => server.resetHandlers())
// // Ferme la simulation d'API une fois que les tests sont finis
// afterAll(() => server.close())

it('should render without crash', async () => {
	render(<Freelances />)
});
// 	// expect(screen.getByTestId('loader')).toBeTruthy()
// 	await waitFor(() => {
// 		expect(screen.getByText('Harry Potter')).toBeTruthy()
// 		// expect(screen.getByText('Hermione Granger')).toBeTruthy()
// 	});
// })


// import { rest } from 'msw'
// import { setupServer } from 'msw/node'

// const server = setupServer(
//     rest.get('http://localhost:8000/test', (req, res, ctx) => {
//         console.log("✅ MSW a intercepté la requête !")
// 		return res(ctx.json({ message: "OK" }))
//     })
// )

// beforeAll(() => {
// 	server.listen()
// 	console.log("✅ MSW est activé pour les tests!")
// });
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('MSW intercepte bien la requête', async () => {
// 	console.log("📢 Début du test")
//     const response = await fetch('http://localhost:8000/test')
//     const data = await response.json()
    
//     console.log("Réponse reçue :", data) // Devrait afficher { message: "OK" }

//     expect(data.message).toBe("OK")
// })
