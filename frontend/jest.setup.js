
import 'whatwg-fetch' // Ajoute le polyfill pour `fetch`
import { server } from './src/tests/server'// Assure-toi que ce fichier existe

console.log("✅ Jest setup chargé !")

beforeAll(() => {
    server.listen()
    console.log("✅ MSW est bien démarré !")
}) // Démarre MSW avant tous les tests
afterEach(() => server.resetHandlers()) // Réinitialise les handlers après chaque test
afterAll(() => server.close()) // Ferme MSW après tous les tests