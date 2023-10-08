import express from "express"
import routes from "./routes"
import cors from "cors"
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())
    app.use(cors())
	app.use(routes)

	return app.listen(3000)
})