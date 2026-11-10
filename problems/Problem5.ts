// Problem 5

// Function that counts occurrences of a specific item in an array using generics

function countOccurrences<T>(arr: T[], item: T): number {
    // TODO: Implement logic to count occurrences of item in arr
    var num: number = 0;
    for (const i of arr) {
        if (i===item) {
            num+=1
        }
    }
    return num
}

export default countOccurrences