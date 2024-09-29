document.write('test?')



let namep = "Jane";

const year = 2018;

const isok = true;

const emptyv = null;

document.write(namep);

// create an object
let people = {
    grade: 'graduate',
    height: '5.3'
};

document.write(people.grade);

//create array
let seasons = ['spring', 'winter'
]
document.write(seasons[0])

//create array using functions
let seasons02 = new Array('autumn', 'summer');
document.write(seasons[0])


//create a function
function greet(){
    document.write('well done')
}

greet();


//function for the paragraph
function getmsg(){
    return 'print message for paragraph';
}

document.getElementById('msg').innerHTML = getmsg()