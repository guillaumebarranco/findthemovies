let moviesClasses = [
  {
    key: 'movie_first_a',
    success: false
  },
  {
    key: 'movie_first_e',
    success: false
  },
  {
    key: 'movie_second_a',
    success: false
  },
  {
    key: 'movie_first_t',
    success: false
  },
  {
    key: 'movie_first_x',
    success: false
  },
  {
    key: 'movie_first_p',
    success: false
  },
  {
    key: 'movie_second_e',
    success: false
  },
  {
    key: 'movie_third_e',
    success: false
  },
  {
    key: 'movie_first_i',
    success: false
  },
  {
    key: 'movie_first_n',
    success: false
  },
  {
    key: 'movie_first_r',
    success: false
  },
  {
    key: 'movie_second_r',
    success: false
  },
  {
    key: 'movie_third_r',
    success: false
  },
  {
    key: 'movie_fourth_e',
    success: false
  },
  {
    key: 'movie_first_u',
    success: false
  },
  {
    key: 'movie_second_u',
    success: false
  },
  {
    key: 'movie_second_t',
    success: false
  },
  {
    key: 'movie_first_v',
    success: false
  },
  {
    key: 'movie_first_l',
    success: false
  },
];

addEventListener("input", (event) => {
  const value = event.target.value;
  const parentClass = event.target.parentElement.className;
  const parentClassSplit = parentClass.split('_');

  if(value.toLowerCase() === parentClassSplit[2].toLowerCase()) {
    const moviePicture = document.querySelector(`.movie_${parentClassSplit[1]}_${parentClassSplit[2]} img`);
    moviePicture.style.filter = 'grayscale(1)';


    moviesClasses = moviesClasses.map(movie => {
      if(movie.key === `movie_${parentClassSplit[1]}_${parentClassSplit[2]}`) {
        return {
          key: movie.key,
          success: true
        }
      } else {
        return movie;
      }
    })

  } else {
    const moviePicture = document.querySelector(`.movie_${parentClassSplit[1]}_${parentClassSplit[2]} img`);
    moviePicture.style.filter = 'grayscale(0)';


    moviesClasses = moviesClasses.map(movie => {
      if(movie.key === `movie_${parentClassSplit[1]}_${parentClassSplit[2]}`) {
        return {
          key: movie.key,
          success: false
        }
      } else {
        return movie;
      }
    })
  }

  if(moviesClasses.every(movie => !!movie.success)) {
    document.querySelector(".letters").classList.add('moved-letters');
  }
});
