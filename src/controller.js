import icons from 'url:../img/sprite.svg';
import view from './view.js';
import mostView from './mostView.js';
import * as model from './model.js';
import popular from './popular.js';

if (module.hot) {
  module.hot.accept();
}

console.log('asdasdasd');

const controlPopMovies = async function () {
  try {
    await model.getPopularData();

    popular.render(model.state.movies.popular);
  } catch (error) {
    console.error(error);
  }
};

controlPopMovies();

const controlVisMovies = async function () {
  try {
    await model.inTheatre();
    mostView.render(model.state.movies.mostWatched);
  } catch (error) {
    console.log(error);
  }
};

controlVisMovies();

const cont = document.querySelector('.content');
const header = document.querySelector('.header');
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.style.backgroundColor = 'black';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
  console.log(entry.target);
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.8,
  // rootMargin: '1rem',
});

headerObserver.observe(cont);

// console.log(xxx[0].childNodes);

// const movies = document.querySelectorAll('.movies');
// const movie = document.querySelectorAll('.movie');
// const prevBut = document.querySelectorAll('.row__icon-1');
// const nextBut = document.querySelectorAll('.row__icon-2');
// const image = document.querySelectorAll('.movie__img');

// console.log(image);
// console.log(image.length);
// console.log(nextBut);
// console.log(slides.length);

// // slides.forEach((s, i) => (s.style.left = `${i * 20}%`));

// let curSlide = 0;
// const maxSlide = movie.length / (5 * movies.length);

// // const goSlide = function (slide, i) {};

// nextBut.forEach((but, i) =>
//   but.addEventListener('click', function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     movies[i].style.transform = `translateX(${-(curSlide * 90)}rem) `;
//     movies[i].style.zIndex = '1';
//   })
// );
// prevBut.forEach((but, i) =>
//   but.addEventListener('click', function () {
//     if (curSlide < 1) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     movies[i].style.transform = `translateX(${-(curSlide * 90)}rem) `;
//     movies[i].style.zIndex = '1';
//     console.log('asdasdasd');
//   })
// );
