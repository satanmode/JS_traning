let numberOfFilms = +prompt('Сколько фильмов ты посмотрел?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false

};

let questionMovie = prompt('Назови один из последних просмотренных фильмов', ''),
    questionRating = prompt('Насколько оценишь на .. из 10?', ''),
    questionMovie2 = prompt('Назови один из последних просмотренных фильмов', ''),
    questionRating2 = prompt('Насколько оценишь на .. из 10?', '');

personalMovieDB.movies[questionMovie] = questionRating;
personalMovieDB.movies[questionMovie2] = questionRating2;

console.log(personalMovieDB);