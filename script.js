// const week = {
//     1: 'monday',
//     2: 'tuesday',
//     3: 'wednesday',
//     4: 'thurthday',
//     5: 'friday',
//     6: 'saturday',
//     7: 'sunday'
// };

// console.log(week[2]);

// const user = {
//     name: 'Maria',
//     surname: 'Kostroma',
//     age: 18
// };
// user.patronymic = prompt('Введите Ваше отчество');
// console.log(user.name, ' -', user.surname, ' -', user.age, ' -', user.patronymic);
// console.log(user);
// delete user.surname;
// console.log(user);

// const week = {};
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr1.length; i++) {
//     week[arr2[i]] = arr1[i];
// }
// console.log(week);

// const obj = { x: 1, y: 2, z: 3 };
// for (let key in obj) {
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);

// Object.values(obj).map(item => item ** 2);
// console.log(obj);

// const riddles = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'елка',
//     hints: ['Зеленая такая', 'Новогоднее дерево'],

//     askQuestion() {
//         let string = prompt(this.question).toLowerCase();
//         if (string === this.answer) {
//             alert('Вы правы');
//         }
//         else {
//             alert(this.hints[0]);
//             string = prompt(this.question).toLowerCase();
//             if (string === this.answer) {
//                 alert('Вы правы');
//             }
//             else {
//                 alert(this.hints[1]);
//                 string = prompt(this.question).toLowerCase();
//                 if (string === this.answer) {
//                     alert('Вы правы');
//                 }
//                 else {
//                     alert('Вы проигали');
//                 }
//             }
//         }
//     }
// }
// riddles.askQuestion();

//     const riddles = {
//         question: 'Зимой и летом одним цветом',
//         answer: 'елка',
//     hints: {
//         1: 'Зеленая такая',
//         2: 'Новогоднее дерево',
//     },
//     score: 0,
//     askQuestion() {
//         while (true) {
//             let userAnswer = prompt(this.question, 'answer').toLowerCase();
//             if (userAnswer === this.answer) {
//                 alert('Вы правы');
//                 break;
//             } else if (this.score === 0) {
//                 alert(this.hints[1]);
//                 this.score += 1;
//             } else if (this.score === 1) {
//                 alert(this.hints[2]);
//                 this.score += 1;
//             } else {
//                 alert('Вы проигали');
//                 break;
//             }

//         }

//     },
// };
// riddles.askQuestion();

// 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

Object.values(numbers).forEach((element) => element >= 3 ? console.log(element) : null);

// 2
// Необходимо из объекта, который лежит в константе post вывести значения, к
// которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author, post.comments[0].rating.dislikes, post.comments[1].userId, post.comments[1].text);

// 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
// метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

const array = products.map(product => product.price = product.price * 0.85);
console.log(array);


// 4
// Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

let includePhotos = products1.filter(item => "photos" in item && item.photos.length !== 0);
console.log(includePhotos);

let sortedProducts = products1.sort((a, b) => a.price - b.price);
console.log(sortedProducts);

// 5
// Дано 2 массива

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const week = {};
for (let i = 0; i < en.length; i++) {
    week[en[i]] = ru[i];
}
console.log(week);