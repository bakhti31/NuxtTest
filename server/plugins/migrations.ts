import consola from "consola"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import { useDrizzle } from "../util/drizzle"

export default defineNitroPlugin(async() => {
    if(!import.meta.dev)return

    onHubReady(async () => {
        await migrate(useDrizzle(), {migrationsFolder:'server/database/migrations'})
        .then(() => {
            consola.success('Database migrations done')
        })
        .catch((err)=> {
            consola.error('Database migrations failed',err)
        })
    })
})
