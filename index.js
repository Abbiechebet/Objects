/**
Using the constructor method, create an InstagramPost() constructor 
function that takes the properties below as arguments.

Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, 
*/
function InstagramPost(handleOfAuthor, content, imageLink, numberOfViews,
    numberOfLikes){
    this.handleOfAuthor= handleOfAuthor;
    this.content= content;
    this.imageLink= imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

/*
Create 2 Instagram post objects from the constructor function you 
created above
*/
const Chioma = new InstagramPost('Queen_Chioma', 'Skincare Products', 
'Journey to Flawless Skin', 5890, 3000);

const Gichora = new InstagramPost('Gichora_Gift', 'Graphics Designers',
'Creative Graphic Logos and Slogans', 9685, 4050);

 console.log({Chioma});
 console.log({Gichora});

/*
Musa Dawodu is a 19 years old Nigerian male who lives with his parents 
in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the 
following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94
*/
//Using the factory method, implement a createPerson() factory function
 //that takes name, age and location as arguments. 

function createPerson(Name, Age, Location){
    return{
        Name : Name,
        Age : Age,
        Location : Location,
    }
}
//Afterwards, create an object representing Musa from the factory function.
 
const Musa = new createPerson('Musa Dawodu', '19 years old', 
'Lekki, Lagos State');
console.log({Musa});

/*
Also, implement a factory function createJambScores() that takes eng, 
govt, lit, crk as arguments.*/
function createJambScores(eng, govt, lit, crk) {
    return{
        ENG : eng , 
        GOVT : govt, 
        LIT : lit, 
        CRK : crk,  
    }
    }
//Then create an object representing Musa’s JAMB scores.
    const musaJambScores = new createJambScores(70, 85, 82, 94)
console.log({musaJambScores});

/*Add the object as a property to Musa object you created 
above in (a) above*/

//merging objects
Musa.musaJambScores = new createJambScores(70, 85, 82, 94);
console.log({Musa});
/*
What are the different ways you can clone an object? Give examples for 
each of them.
*/

//1. using oject.assign()

const studentOne = {
    name: 'Justina Williams',
    class: 'Form Four Jupiter',
    school: 'Asumbi High School',
}
 const studentTwo = Object.assign({}, studentOne);

console.log({studentOne});
console.log({studentTwo});

studentTwo.name= 'Lorna Josephs';
console.log({studentTwo});

//2. using spread syntax ...
const studentThree = {...studentOne};
studentThree.name = 'Nancy Sakaja';
console.log({studentThree});

//3. using method JSON.parse(JSON.stringify())
const studentFour = JSON.parse(JSON.stringify(studentOne));
//const studentFour = JSON.parse
studentFour.name = 'Prudence Richards';
console.log({studentFour});


/*
As Nigeria goes to the polls, here is an object representing some of the
 Presidential Candidates:
 */
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
/*Using any of the enumeration methods taught in class (for…in  or for..of),
 log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
 */
    //for...in loops - traversing   
    for (const key in presidentialCandidates) {
        console.log(presidentialCandidates[key] + ' is the presidential candidate of '
        + [key]);
      }