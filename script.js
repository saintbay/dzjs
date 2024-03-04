// 1. Создать массив из 10 чисел. Вывести наибольшее и наименьшее значения массивов.
const numbersArray = [4, 8, 2, 10, 5, 7, 1, 9, 3, 6];
const maxNumber = Math.max(...numbersArray);
const minNumber = Math.min(...numbersArray);
console.log("1. Максимальное значение:", maxNumber);
console.log("   Минимальное значение:", minNumber);

// 2. Заполнить массив из 5 чисел при помощи prompt. Вывести массив, сумму значений и среднее значение массива.
const userArray = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
    const userInput = parseFloat(prompt(`2. Введите число ${i + 1}:`));
    userArray.push(userInput);
    sum += userInput;
}
const average = sum / userArray.length;
console.log("2. Введенный массив:", userArray);
console.log("   Сумма значений массива:", sum);
console.log("   Среднее значение массива:", average);

// 3. Создать 2 массива из 7 чисел. Сравнить значения в массиве по очереди и выводить информацию в консоль.
const array1 = [3, 6, 9, 12, 15, 18, 21];
const array2 = [3, 6, 8, 12, 15, 19, 21];
console.log("3. Сравнение двух массивов:");
for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
        console.log(`   Значения по индексу ${i} равны: ${array1[i]}`);
    } else {
        console.log(`   Значения по индексу ${i} не равны. Массив 1: ${array1[i]}, Массив 2: ${array2[i]}`);
    }
}

// 4. Создать массив из 10 чисел. Сохранить во второй массив только те значения первого массива, которые являются четными.
const originalArray = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];
const evenNumbersArray = originalArray.filter(number => number % 2 === 0);
console.log("4. Массив из четных чисел:", evenNumbersArray);
