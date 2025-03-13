import { setupServer } from 'msw/node'
import { rest } from 'msw'

export const server = setupServer(
	rest.get('http://localhost:8000/test', (req, res, ctx) => {
		console.log("✅ MSW a intercepté la requête !")
		return res(ctx.json({ message: "OK" }))
	})
)
