const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseDate = document.querySelector('.userInputReleaseDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseDateInStorage = localStorage.getItem('releaseDate');

if(titleInStorage && imageUrlInStorage && releaseDateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(75, 159, 255, 0.5), rgba(0, 0, 0, 0.5)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieReleaseDateInput = movieReleaseDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseDate', movieReleaseDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(75, 159, 255, 0.5), rgba(0, 0, 0, 0.5)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseDate.value = '';
});
