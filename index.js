const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat () {
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat () {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat () {
    cats.shift();
    return cats;
}

function appendCat () {
    const catsOne = [...cats, 'Broom'];
    return catsOne;
}

function prependCat () {
    const catsTwo = ['Arnold', ...cats];
    return catsTwo;
}

function removeLastCat () {
    const catsThree = cats.slice(0, -1);
    return catsThree;
}

function removeFirstCat () {
    const catsFour = cats.slice(1);
    return catsFour;
}