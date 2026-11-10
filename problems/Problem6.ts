// Problem 6
import { User } from "../types";

// Function that verifies if a user has all required attributes
export function verifyUser(user: User | null | undefined): User | string[] {
    // TODO: Implement logic to check for missing properties and return either the user object or an array of missing properties
    const out: string[]=[]
    if (!user) {
        return ["userData","id","name","address","street","city"]
    }
    if (!user.address) {
        out.push(...["address","street","city"])
    }
    else if (!user.address.street) {
        out.push("street")
    }
    else if (!user.address.city) {
        out.push("city")
    }
    if (!user.id) {
        out.push("id")
    }
    if (!user.name) {
        out.push("name")
    }
    if (out.length>0) {
        return out
    }
    else {
        return user
    }
}
export default verifyUser

