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

class Animal {
    constructor(type, gender, color, voiceText) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.voiceText = voiceText;

    }
    voice (){
        console.log(this.voiceText)
    }

}

class Bear extends Animal {
    constructor(type, gender, color, voiceText, height, weight) {
        super(type,gender,color,voiceText);
        this.height = height;
        this.weight = weight;


    }
    purpose () {
        console.log(`Bear height: ${this.height}\n Bear weight: ${this.weight}`)
    }
}

const Mishka = new Bear(
    'pet',
    'male',
    'grey',
    'asaaaaaaaa',
    1,
    300
)
//
// Mishka.purpose()
// Mishka.voice()
// console.log(Mishka)








class Rabit extends Animal {
    constructor(type, gender, color, voiceText, height, weight, earLength, speed) {
        super(type, gender, color, voiceText);
        this.height = height;
        this.weight = weight;
        this.earLength = earLength;
        this.speed = speed

    }
    Speed (){
        console.log(`Rabit speed ${this.speed}` )
    }



}

const Billy = new Rabit(
    'herbivore',
    'male',
    'while',
    'asjlfjlsj',
    34,
    4,
    15,
    36
)
Billy.Speed;
Billy.voice();
console.log(Billy);


class building {
    constructor(door, window, table, wall, floor) {
        this.door = door;
        this.window = window;
        this.table = table;
        this.wall = wall;
        this.floor = floor;
    }


}