// this is a dynamic route handler file (users api which takes id as param and returns specific record)
import { users } from "../route";

export async function GET(request: Request, {params}:{params: {id:string}}) {
    const {id} =  await params
    const user = users.find(val=>val.id == parseInt(id))
    return Response.json(user)
}