// // oop
//
// class dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//
//     }
// }
//
// const rex = new dog (
//     20,
//     40,
//     "grey"
// )
//
// const bobik = new dog (
//     30,
//     10,
//     'black'
// )
//
// console.log(bobik, rex)


// Абстрактный класс
//
// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//
//     }
//     voice (){
//         console.log(this.voiceText)
//     }
//
// }
//
// class Bear extends Animal {
//     constructor(type, gender, color, voiceText, height, weight) {
//         super(type,gender,color,voiceText);
//         this.height = height;
//         this.weight = weight;
//
//
//     }
//     purpose () {
//         console.log(`Bear height: ${this.height}\n Bear weight: ${this.weight}`)
//     }
// }
//
// const Mishka = new Bear(
//     'pet',
//     'male',
//     'grey',
//     'asaaaaaaaa',
//     1,
//     300
// )
// //
// // Mishka.purpose()
// // Mishka.voice()
// // console.log(Mishka)
//
//
//
//
//
//
//
//
// class Rabit extends Animal {
//     constructor(type, gender, color, voiceText, height, weight, earLength, speed) {
//         super(type, gender, color, voiceText);
//         this.height = height;
//         this.weight = weight;
//         this.earLength = earLength;
//         this.speed = speed
//
//     }
//     Speed (){
//         console.log(`Rabit speed ${this.speed}` )
//     }
//
//
//
// }
//
// const Billy = new Rabit(
//     'herbivore',
//     'male',
//     'while',
//     'asjlfjlsj',
//     34,
//     4,
//     15,
//     36
// )
// Billy.Speed;
// Billy.voice();
// console.log(Billy);


class Building {
    constructor(door, window, table, wall, floor) {
        this.door = door;
        this.window = window;
        this.table = table;
        this.wall = wall;
        this.floor = floor;
    }

}

class Home extends Building {
    constructor(door, window, table, wall, floor, rug, armchair, lamp, sofa, color, tevelision, plant, mantel, fireplace, bookcase) {
        super(door, window, table, wall, floor);
        this.rug = rug;
        this.armchair = armchair;
        this.lamp = lamp;
        this.sofa = sofa;
        this.color = color;
        this.telelision = tevelision;
        this.plant = plant;
        this.mantel = mantel;
        this.fireplace = fireplace;
        this.bookcase = bookcase;
    }
}

const Home1 = new Home(
    8,
    3,
    5,
    12,
    1,
    3,
    5,
    4,
    2,
    'while',
    2,
    16,
    2,
    1,
    3


)
console.log(Home1)

class Shool extends Building {
    constructor(door, window, table, wall, floor, board, sofa, mac, notebook, seats, type, teachers,students,conferenceHall,kitchen) {
        super(door, window, table, wall, floor);
        this.board = board;
        this.sofa = sofa;
        this.mac = mac;
        this.notebook = notebook;
        this.seats = seats;
        this.type = type;
        this.teachers = teachers;
        this.students = students;
        this.conferenceHall = conferenceHall;
        this.kitchen = kitchen;
    }
}

const Shool1 = new Shool (
    1,
    5,
    10,
    6,
    6,
    3,
    1,
    3,
    12,
    2,
    'bulding',
    7,
    69,
    7,
    1
)

console.log(Shool1)