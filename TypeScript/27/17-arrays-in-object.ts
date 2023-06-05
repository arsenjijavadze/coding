let prod: {
    name: string,
    colors: string[]
};

prod = {
    name: 'notebook',
    colors: ['red', 'black', 'gray']
}

interface Product {
    name: string,
    colors: string[]
};

let prod1: Product = {
    name: 'notebook',
    colors: ['red', 'black', 'gray']
}

//

interface State {
    name: string,
    cities: string[],
    population?: number
}

let portugal: State = {
    name: 'Portugal',
    cities: ['Porto', 'Lisboa', 'Brage'],
}