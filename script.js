let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    console.log("A new movie is added");
    allMovies.length++;
    allMovies[allMovies.length - 1] = movie;
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    let result = "Printing all movies...\n"
    let counter = 0;

    for(let i = 0; i < allMovies.length; i++) {
        let j = allMovies[i];
        counter++;
        result += (j.title + ", rating of " + j.rating + ", haveWatched: " + j.haveWatched + "\n");
    }
    result += ("\nYou have " + counter + " movies in total");
    console.log(result);

}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    let outcome = "Printing movies that have a rating higher than " + rating + "\n";
    let counter = 0;

    for (let i = 0; i < allMovies.length; i++) {
        let j = allMovies[i];
        if (j.rating > rating) {
            counter++;
            outcome += (j.title + " has a rating of " + j.rating + "\n");
        }
    }
    outcome += ("\nIn total, there are " + counter + " matches");
    console.log(outcome);

}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("Changing the status of the movie...");
    for(let i = 0; i < allMovies.length; i++) {
        let j = allMovies[i];
        if (j.title == title) {
            j.haveWatched = !j.haveWatched;
        }
    }
}


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);