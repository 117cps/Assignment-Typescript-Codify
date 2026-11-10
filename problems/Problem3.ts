// Problem 3
import { Professor, Class, Student } from "../types";

// Function that returns the names of all students a professor teaches in increasing order by age
export function studentsTaughtByProf(professor: Professor): string[] {
    // TODO: Implement logic to collect and sort students by age
    const stl: Student[]=[];
    for (const cla of professor.classes) {
        for (const student of cla.students) {
            stl.push(student)
        }
    }
    stl.sort((a,b) => a.age - b.age)
    const out: string[]=[]
    for (const student of stl) {
        out.push(student.name)
    }
    return out
}
export default studentsTaughtByProf
