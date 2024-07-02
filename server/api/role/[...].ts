import { rolesInHr } from "~/server/api/role/schema";
import { db } from "~/server/util/drizzle"

const router = createRouter()

router.get('/getAll',defineEventHandler(async (e) =>{
  const data = await db.select().from(rolesInHr);
  return data;
}))