// Problem 4
import { Student, Athlete } from "../types";

// Function that converts all students into athletes with a default sport
export function allAthletes(students: (Student | Athlete)[], defaultSport: string): Athlete[] {
    const out: Athlete[] = students.map((x) => {
        if ("sport" in x) {
            return x
        }
        else {
            const y: Athlete = {name: x.name, age: x.age, sport: defaultSport}
            return y
        }

    })
    return out
}
export default allAthletes