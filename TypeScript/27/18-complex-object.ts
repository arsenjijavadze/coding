interface NewUser {
    name: string,
    age: number,
    parents: {
        mother: string,
        father: string,
    }
}

let userQwerty: NewUser = {
    name: 'John',
    age: 30,
    parents: {
        mother: 'Jane',
        father: 'Eric'
    }
}

//* Ex1 / 18
interface NewEvent {
    name: string,
    time: {
        start: string,
        finish: string,
    }
}

let eventX: NewEvent = {
    name: 'my new event',
    time: {
        start: '2025-11-01',
        finish: '2025-12-31',
    }
}

