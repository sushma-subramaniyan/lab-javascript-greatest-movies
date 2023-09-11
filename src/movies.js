// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
    const allDirectors=moviesArray.map((currentValue) =>{
        return currentValue.director;

    });
     return  allDirectors;

    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielDrama = moviesArray
    .filter((oneMovie)=>{ 
        if(oneMovie.genre.includes('Drama') && oneMovie.director === 'Steven Spielberg')
         return oneMovie;
    });
      return spielDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }else{
        const scores=moviesArray.reduce((accumulator,currentValue)=> {
           if(typeof currentValue.score === "number"){
            return accumulator+ currentValue.score;
           }else{
            return accumulator;
           }
            
        },0);
        let avg=scores/moviesArray.length;
        return parseFloat(avg.toFixed(2));
    }
    
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama=moviesArray.filter((movies)=>{
        if(movies.genre.includes('Drama')){
            return movies.score;
        }else{
            return 0;
        }
    });
    let dramaMovies=drama.length;
    if(drama.length ===0)
    {
        return 0;
    }
    const totalDramaMovies=drama.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue.score;
    },0);
    const avgDrama=totalDramaMovies / dramaMovies;
    return parseFloat(avgDrama.toFixed(2));  



    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   
    const ascending=moviesArray.toSorted((a,b)=>{
     
     if(a.year < b.year){
         //sort in alphabetical order
         
         return -1;
 
     }else if(a.year > b.year){
         return 1;
     }else if(a.year = b.year){
        const alphabetical=a.title.localeCompare(b.title);
        return alphabetical;
     }
    //if(ascending.year )
    });  
    return ascending;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const newSortedArray = moviesArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
     });
 
  const arr =newSortedArray.slice(0,20);
 return arr;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
