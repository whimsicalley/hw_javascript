var iceCream = ['Banana', 'Cookie dough', 'Peanut butter',
                'Sherbert'];

var presidents = [
    {firstName: 'Barack', lastName: 'Obama', termLength: '2 terms', party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George', lastName: 'Bush, Jr.', termLength: '2 terms', party: 'Republican', yearsOfPresidency: 8},
    {firstName: 'Bill', lastName: 'Clinton', termLength: '2 terms', party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George', lastName: 'Bush, Sr.', termLength: '1 term', party: 'Republican', yearsOfPresidency: 4},
    {firstName: 'Ronald', lastName: 'Reagan', termLength: '2 terms', party: 'Republican', yearsOfPresidency: 8}
];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

function howdy() {
    console.log('Alley Manalio says hello!');
}

howdy();

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    } else {
        console.log('I\'m sorry, but that\'s too many to count.');
    }
};

numba('7');
numba('seventy');
numba('university');

function write(favMovie) {
    console.log(favMovie + ' is a fantastic movie.');
}

function inception(display, favMovie) {
    display(favMovie);
}

inception(write, 'The Lion King');
