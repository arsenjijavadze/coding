interface Period {
    date1: Date,
    date2: Date,
};

let period: Period = {
    date1: new Date(2030, 11, 31),
    date2: new Date(2020, 11, 31),
}

//

interface City {
    name: string,
}

interface UserC {
    name: string,
    age: number,
    city: City,
}

let cityN: City = { name: 'London' };
let userM: UserC = { name: 'John', age: 21, city: cityN };

//* Ex1 / 19 
interface empl {
    name: string,
    position: pstion,
    addr: location,
}

interface location {
    country: string,
    city: string,

}

interface pstion {
    name: string,
    salary: number,
}

let positionN: pstion = { name: 'developer', salary: 1000 };
let addres: location = { country: 'Nepal', city: 'Katmandu' }

let employee: empl = {
    name: 'Omar',
    position: positionN,
    addr: addres,
}

//



