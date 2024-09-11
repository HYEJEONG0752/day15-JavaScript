//Day 15: JavaScript 객체와 배열 과제

// 1. 객체 리터럴 사용 이름 "홍길동" 나이 25 인 person객체 만들기
const person = { name: "홍길동", age: 25};

// 2. car 객체의 brand 속성에 접근하여 콘솔 출력
const car = { brand: "Toyota", model: "Corolla" };

console.log(car["brand"]);  // Toyota

// 3. 객체 person, 메소드 sayHello "Hello, I am Alice"출력
const person1 = {
    name: "Alice",
    sayHello: function() {
      console.log("Hello, I am " + this.name + ".");
    }
  };

  person1.sayHello();  // Hello, I am Alice.

// 4. 객체 person 메소드 greet 추가 -> "Hi, I'm [name]"출력

const person2 = { name: "Bob",
    greet:function(){
        console.log("Hi,I'm " + this.name + ".");
    }
};

person2.greet();  // Hi,I'm Bob.

// 5. 생성자 함수-이름,나이를 속성으로 가진 person객체 만들기(이름"John",나이 30)
function person3(name, age) {
    this.name = name;
    this.age = age;
}
const john = new person3("John",30)

console.log(john);  // person3 { name: 'John', age: 30 }

// 6. 이름과 나이를 속성으로 가진 객체 배열에서 나이가 18이상인 사람만 필터링
const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 20 },
    { name: "Paul", age: 15 },
    { name: "Mark", age: 25 }
  ];

const adults = people.filter(person=>person.age >= 18);

console.log(adults);  // [ { name: 'Jane', age: 20 }, { name: 'Mark', age: 25 } ]

// 7. "Apple", "Banana", "Orange"를 요소로 가진 배열
const fruits = ["Apple","Banana","Orange"];

// 8. 두번째 요소 출력하기
console.log(fruits[1]);  //Banana

// 9. numbers 배열에 숫자 5 추가
const numbers = [1, 2, 3, 4];
numbers.push(5);

console.log(numbers)  // [ 1, 2, 3, 4, 5 ]

// 10. colors 배열에서 마지막 요소 제거
const colors = ["Red", "Green", "Blue"];
colors.pop();

console.log(colors);  // [ 'Red', 'Green' ]

// 11. days 배열의 첫번째 요소 제거
const days = ["Monday", "Tuesday", "Wednesday"];
days.shift();

console.log(days);  // [ 'Tuesday', 'Wednesday' ]

// 12. names 배열의 맨앞에 "Alice"추가
const names = ["Bob", "Charlie"];
names.unshift("Alice");

console.log(names);  // [ 'Alice', 'Bob', 'Charlie' ]

// 13. numbers 배열의 각 요소를 forEach를 사용하여 출력
const numbers1 = [1, 2, 3];
numbers1.forEach(function(num){
    console.log(num);
});  // 1  2  3

// 14. numbers 배열의 각 요소를 2배로 변환한 새로운 배열 만들기
const numbers2 = [1, 2, 3, 4];
const doubled = numbers2.map(function(num){
    return num * 2; 
});

console.log(doubled);  // [ 2, 4, 6, 8 ]

// 15. age 배열에서 18세 이상인 숫자만 필터링
const ages = [12, 18, 20, 14, 25];
const adults1 = ages.filter(function(ages){
    return ages >=18;
});

console.log(adults1);  // [ 18, 20, 25 ]

// 16. prices 배열의 합계
const prices = [10, 20, 30, 40];
const sum = prices.reduce(function(total,price){
    return total + price;}, 0);

console.log(sum);  // 100

// 17. "Banana"가 포함되어 있는지 확인
const fruits1 = ["Apple", "Orange", "Grapes"];
const hasBanana = fruits1.some(fruit =>fruit === "Banana");

console.log(hasBanana);  // false

// 18. numbers 배열을 오름차순으로 정렬
const numbers3 = [5, 2, 8, 1, 3];
numbers3.sort();

console.log(numbers3);  // [ 1, 2, 3, 5, 8 ]

// 19. letters 배열을 뒤집기
const letters = ["a", "b", "c", "d"];
letters.reverse();

console.log(letters);  // [ 'd', 'c', 'b', 'a' ]

// 20. animals 배열에서 첫번째와 두번째 요소 잘라내어 새로운 배열 만들기 -slice
const animals = ["Cat", "Dog", "Elephant", "Lion"]; 
const newAnimals = animals.slice(0,2);

console.log(newAnimals);  // [ 'Cat', 'Dog' ]

// 21. fruits 배열의 두 번째 위치에 "strawberry" 추가 -splice
const fruits2 = ["Apple", "Banana", "Orange"];
fruits2.splice(1,0,"strawberry");

console.log(fruits2);  // [ 'Apple', 'strawberry', 'Banana', 'Orange' ]

// 22. arr1과 arr2 배열을 합쳐서 새로운 배열 만들기 -concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = arr1.concat(arr2);

console.log(newArray);  // [ 1, 2, 3, 4, 5, 6 ]

// 23. products 배열에서 가격이 100이상인 첫번째 상품 찾기 -find
const products = [
    { name: "Shirt", price: 50 },
    { name: "Shoes", price: 120 },
    { name: "Hat", price: 80 }
];
const firstProduct = products.find(product => product.price >= 100);

console.log(firstProduct);  // { name: 'Shoes', price: 120 }

// 24. numbers 배열의 모든 요소가 짝수인지 확인 -every
const numbers4 = [2, 4, 6, 8];
const allEven = numbers4.every(number=>number%2===0);

console.log(allEven);  // true

// 25. ages 배열의 요소중 하나라도 21세 이상인지 확인 -some
const ages1 = [16, 20, 18, 19];
const hasAdult = ages1.some(age=>age>=21);

console.log(hasAdult);  // false

// 26. 배열에 중복된 값이 있는지 확인하는 코드 작성  -set
const numbers5 = [1, 2, 3, 4, 2, 5];
const hasDuplicates = new Set(numbers5).size !== numbers5.length;

console.log(hasDuplicates);  // true

// 27. 배열을 나이(age)를 기준으로 오름차순 정렬
const people1 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mark", age: 35 }
];
people1.sort((a,b)=>a.age - b.age);

console.log(people1);  // [
                       // { name: 'Jane', age: 25 },
                       // { name: 'John', age: 30 },
                       // { name: 'Mark', age: 35 }
                       // ]

// 28. ages 배열에서 21세 이상의 요소의 인덱스 찾기 -findIndex
const ages2 = [16, 18, 22, 20];
const index = ages2.findIndex(age => age >= 21);

console.log(index);  // 2

// 29. words 배열을 쉼표로 구분된 문자열로 변환 -join
const words = ["Hello", "World", "JavaScript"];
const result = words.join(",");

console.log(result);  // Hello,World,JavaScript

// 30. 중첩된 배열을 평탄화하여 하나의 배열로 만들기 -flat
const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
const flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray);  // [1,2,3,4,5,6,7]