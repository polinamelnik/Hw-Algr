function findKthElement(array1, array2, k) {
    let p1 = 0;
    let p2 = 0;
    let count = 0;
    let result = 0;

    while (count < k) {
        if (p1 < array1.length && (p2 >= array2.length || array1[p1] <= array2[p2])) {
            count++;
            result = array1[p1];
            p1++;
        } else {
            count++;
            result = array2[p2];
            p2++;
        }
    }

    return result;
}

const array1 = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

const kthElement = findKthElement(array1, array2, k);
console.log(`The ${k}-th element is: ${kthElement}`);
