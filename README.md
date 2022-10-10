# lmc2700_assignment-3
 This is an exercise to develop your skills in working with Javascript functions.  The goal is to create a set of functions to handle an array of data about movies.

In the attached file (script.js), you will see the skeletons for 5 functions,  which together can create and manipulate the array of movies. Each movie is represented by an object, which consists of a title, a rating for how good the movie is from 1-5, and a boolean indicating whether you have watched the movie. Your assignment is to write the code for each function so that it will store and process the data, and generate the stated output. The code requires conditionals, loops, functions, and objects to complete the project. The functions are:

function Movie(title, rating, havewatched) {}  
      This function is the object constructor that creates each movie object.

function addMovie (movie) {}  
     This function adds a movie object to the array of all movie objects.

function printMovies () {}  
      This function does the following:
            Iterate through all elements of the array
            Print out to console in a correct format
            Print out the total number of movies

function highRatings (rating) {}  
     This function does the following:
           Print out to console ONLY the movies having a rating higher than a specified value (passed as an argument)
           Print out the total number of matches

function changeWatched (title) {}
      This function toggles the 'haveWatched' property of the specified movie (from true to false or vice versa).

Here are the three files you need:

index.html: the html page calls the javascript file
script.js: the skeleton javascript file where you add the code.
expected_result.txt: the results that should appear in the console if your code executes correctly. 

You can also find these files in a zipped folder in the Module for Week 7. Your assignment is to add code to the script.js . You do not need to change the index.html file; do not change expected_result.txt either.

NOTE:
*Do not delete the test code in the skeleton.js file
*Do not hard-code the results. This will lead to deduction of points
*Try to make your console.log as close as to the Expected Result files as possible (but don't worry about extra blank spaces). 
*Do not copy code from other students.
 
SUBMISSION FORMAT
Post both index.html and script.js to Github and submit the url to the landing page (not to the repo).
