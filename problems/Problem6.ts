// Problem 6
import { User } from "../types";

// Function that verifies if a user has all required attributes
export function verifyUser(user: User | null | undefined): User | string[] {
    // TODO: Implement logic to check for missing properties and return either the user object or an array of missing properties
    const out: string[]=[]
    const exist: boolean[] = [!user, !user?.id, !user?.name, !user?.address, !user?.address?.street, !user?.address?.city]
    const needed: string[]=["userData","id","name","address","street","city"]
    for (var i=0; i<6;i++) {
        if (exist[i]) {
            out.push(needed[i])
        } 
    }
    return (out.length==0) ? user : out
}

export default verifyUser

