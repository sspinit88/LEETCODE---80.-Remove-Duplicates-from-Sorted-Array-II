/*
80. Remove Duplicates from Sorted Array II

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

    1 <= nums.length <= 3 * 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    // Если длина массива меньше или равна 2, возвращаем длину массива
    // If the length of the array is less than or equal to 2, return the length of the array
    if (nums.length <= 2) return nums.length;

    // Инициализируем указатель i и счетчик дубликатов
    // Initialize pointer i and duplicate counter
    let i = 2;

    // Проходим по массиву с помощью указателя j
    // Iterate over the array using pointer j
    for (let j = 2; j < nums.length; j++) {
        // Если nums[i - 2] не равно nums[j], копируем значение nums[j] в nums[i] и увеличиваем i
        // If nums[i - 2] is not equal to nums[j], copy the value of nums[j] to nums[i] and increment i
        if (nums[i - 2] != nums[j]) {
            nums[i++] = nums[j];
        }
    }

    // Возвращаем количество уникальных элементов
    // Return the number of unique elements
    return i;
}

/*
The function `removeDuplicates` takes an array `nums` as input and modifies it in-place to remove duplicates, 
ensuring that each unique element appears at most twice. 
It also returns the number of unique elements in the array.

The function uses two pointers, `i` and `j`. `i` is the slow-runner while `j` is the fast-runner. 
As long as `nums[i] == nums[j]` and the count of duplicates is less than 2, we increment `j` to skip the duplicate. 
When we encounter `nums[j] != nums[i]` or the count of duplicates is equal to 2, 
the duplicate run has ended so we must copy its value to `nums[i + 1]`. 
`i` is then incremented and we repeat the same process again until `j` reaches the end of array.

This function satisfies all the constraints and requirements of the problem. 
It modifies the input array in-place and returns the number of unique elements. 
The relative order of the elements is preserved.
*/

/*

Функция removeDuplicates принимает массив nums в качестве входных данных и изменяет его на месте, чтобы удалить дубликаты,
обеспечивая, чтобы каждый уникальный элемент появлялся не более двух раз.
Она также возвращает количество уникальных элементов в массиве.

Функция использует два указателя, i и j. i - это медленный указатель, а j - быстрый указатель.
Пока nums[i] == nums[j] и количество дубликатов меньше 2, мы увеличиваем j, чтобы пропустить дубликат.
Когда мы сталкиваемся с nums[j] != nums[i] или количество дубликатов равно 2,
серия дубликатов заканчивается, поэтому мы должны скопировать его значение в nums[i + 1].
Затем i увеличивается, и мы повторяем тот же процесс до тех пор, пока j не достигнет конца массива.

Эта функция удовлетворяет всем ограничениям и требованиям задачи.
Она изменяет входной массив на месте и возвращает количество уникальных элементов.
Относительный порядок элементов сохраняется.

*/