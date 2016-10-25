/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var firstCar = 'Doge';  // A variable can't start with a number
var variable = 'variable';   // A Key word cannot be an identifier
var first name = 'Jerry'; // White spaces are not allowed in identifier
var sch00lName = 'MEST'; // Variables that contain more than one word should be in camel case
var totalNumber = 100;  // Variables that contain more than one word should be in camel case

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It\'s nice to me you today!'; // single quote within a string literal in single quote need to be escaped
var response = "Ashwin said, \"Yes Sir!\""; // double quote  a s double quote need to be escaped


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */

    // The expression checks whether the sum of 0.3 and 0.1 is equal  to 0.4, if true it print, prints true .

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

    var obj1 = new Object();
    obj1.firstName = 'jason'
    obj1.married = false


    var Person = {
        firstName: 'Jason',
        married: false
    };
    console.log(Person.firstName)


    function Human(age, eye) {
        this.age = age;
        this.eye = eye;
    }

    var kentucky = new Human(20,1);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

    function Animal(leg, head) {
        this.leg = leg;
        this.head = head;
    }

    var cat = new Animal(4, 1);
    var cock = new Animal(2, 1)

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
    var choice = prompt("Enter your choice: ");
    if (choice === 'dance') {
        console.log('Start dancing..');
    } else if(choice == 'sing') {
        console.log('Start singing');
    } else {
        console.log('We have only two options left: sing or dance')
    }

    switch(choice) {
        case 'dance':
            console.log('Start dancing');
            break;

        case 'sing':
            console.log('Start singing');
            break;

        default:
            console.log('We have only two options left: sing or dance');
    }
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
    var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
    for (i = 0; i < studentScores.length; i++ ) {
        if (studentScores[i] < 90) {
            console.log(studentScores[i]);
        }
    }

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

    var studentScore = [50, 67, 80, 90, 100, 30, 88, 68];

    studentScore.forEach(function(item){
        if (item < 90) {
            console.log(item)
        }
    });