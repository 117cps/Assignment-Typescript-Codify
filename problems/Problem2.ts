//Problem 2
import { Student } from "../types";

// Function that returns an array of students given names and ages
export function arrayOfStudents(names: string[], ages: number[]): Student[] {
    const result: Student[] = [];
    for (let i: number = 0; i<names.length; i++) {
        result.push({name: names[i], age: ages[i]})
    }
    return result
}

export default arrayOfStudents

// Example
// arrayOfStudents(names, ages));
// Expected output:
// [
//     { name: "Joe", age: 50 },
//     { name: "Schmo", age: 60 }
// ]