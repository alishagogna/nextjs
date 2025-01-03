export const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

// run this on thunder client to get response 
// http://localhost:3000/users

export async function GET() {
    return Response.json(users)
}

export async function Post() {
    // return Response.json(users)
}