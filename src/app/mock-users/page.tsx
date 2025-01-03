import { revalidatePath } from "next/cache";

type MockUser = {
    id: number;
    name: string;
}

export default async function MockUsers() {
    const res = await fetch('https://677458779222224148192eb0.mockapi.io/users');
    const users = await res.json();

    //Server Action
    //FormData is built in browser api
    async function addUser(formdata: FormData) {
        "use server" //tells next js that this would be executed at server level, server action
        const name = formdata.get('name')
        const res = await fetch('https://677458779222224148192eb0.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //we can add bearer token here, and it is secure since this code runs on server not client
            },
            body: JSON.stringify({ name })
        })
        const newUser  =  await res.json()
        console.log(newUser);
        revalidatePath('/mock-users')// refresh the path
    }

    return (
        <div className="py-10 px-5">
            <form action={addUser} className="mb-4">
                <input type="text" name='name' placeholder="Name" required className="border p-2 mr-2" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
            </form>

            <div className="grid grid-cols-4 gap-4 py-10">
                {users.map((user: MockUser) => {
                    return (
                        <div
                            key={user.id}
                            className="p-4 bg-white shadow-md rounded-lg text-grey-700"
                        >
                            {user.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}