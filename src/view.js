import icons from 'url:../img/sprite.svg';

export default class View {
  _data;
  _parentElement = document.querySelectorAll('.movies')[0];
  _prevBut = document.querySelectorAll('.row__icon-1');
  _nextBut = document.querySelectorAll('.row__icon-2');

  render(data) {
    this._data = data;
    const markUp = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);

    const movie = this._parentElement.querySelectorAll('.movie');
    const pare = document.querySelectorAll('.movies');
    const image = document.querySelectorAll('.movie__img');
    const row = document.querySelectorAll('.row');

    movie.forEach(img =>
      img.addEventListener('mouseover', function (e) {
        const target = e.target.closest('.movie');

        const targetCoords = target.getBoundingClientRect();
        const position = window.innerWidth - targetCoords.width;

        if (targetCoords.x < 50) {
          target.classList.add('hoverleft');
        }

        if (targetCoords.right > position) {
          target.classList.add('hoverright');
        } else {
          target.classList.add('hover');
        }
        target.style.zIndex = '34';
        img.style.zIndex = '34';
      })
    );

    movie.forEach(img =>
      img.addEventListener('mouseout', function (e) {
        const target = e.target.closest('.movie');
        target.classList.remove('hover');
        target.classList.remove('hoverright');
        target.classList.remove('hoverleft');
        target.style.zIndex = '0';
      })
    );

    let curSlide = 0;
    // const maxSlide = movie.length / (5 * this._parentElement[0].length);
    console.log(movie.length);
    // const goSlide = function (slide, i) {};

    const phone = window.matchMedia('(max-width: 610px)');
    const tabport = window.matchMedia('(max-width: 905px)');
    const tabland = window.matchMedia('(max-width: 1360px)');
    const bigdesktop = window.matchMedia('(max-width: 1810px)');

    this._nextBut.forEach((but, i) =>
      but.addEventListener('click', function () {
        if (bigdesktop.matches && !tabland.matches && !tabport.matches) {
          if (curSlide === 2) {
            curSlide = 0;
          } else {
            curSlide++;
          }
        }

        if (bigdesktop.matches && tabland.matches && !tabport.matches) {
          if (curSlide === 2) {
            curSlide = 0;
          } else {
            curSlide++;
          }
        }

        if (bigdesktop.matches && tabland.matches && tabport.matches) {
          if (curSlide === 3) {
            curSlide = 0;
          } else {
            curSlide++;
          }
        }

        pare[i].style.transform = `translateX(${
          phone.matches
            ? -(curSlide * 75.4)
            : tabport.matches
            ? -(curSlide * 85.5)
            : tabland.matches
            ? -(curSlide * 111)
            : bigdesktop.matches
            ? -(curSlide * 94)
            : -(curSlide * 1)
        }rem) `;
        row[0].style.zIndex = '25';
        row[1].style.zIndex = '24';
      })
    );
    this._prevBut.forEach((but, i) =>
      but.addEventListener('click', function () {
        if (curSlide < 1) {
          curSlide = 2;
        } else {
          curSlide--;
        }

        pare[i].style.transform = `translateX(${
          phone.matches
            ? -(curSlide * 75.4)
            : tabport.matches
            ? -(curSlide * 85.5)
            : tabland.matches
            ? -(curSlide * 111)
            : bigdesktop.matches
            ? -(curSlide * 94)
            : -(curSlide * 1)
        }rem) `;

        row[0].style.zIndex = '25';
        row[1].style.zIndex = '24';
      })
    );
  }

  //   hover() {
  //     this._parentElement.forEach(elem =>
  //       elem.addEventListener('mouseover', function (e) {
  //         //   if(e.target.classList.contains(''))
  //       })
  //     );
  //   }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview);
  }

  _generateMarkupPreview(result) {
    return `
    
    <div class="movie">
              <img src="https://image.tmdb.org/t/p/w185/${result.image}" alt="" class="movie__img" />
              <div class="movie__container">
                <svg class="movie__container--icon--1">
                  <use xlink:href="${icons}#icon-controller-play"></use>
                </svg>
                <svg class="movie__container--icon">
                  <use xlink:href="${icons}#icon-plus"></use>
                </svg>
                <svg class="movie__container--icon">
                  <use xlink:href="${icons}#icon-thumbs-up"></use>
                </svg>
                <svg class="movie__container--icon">
                  <use xlink:href="${icons}#icon-thumbs-down"></use>
                </svg>
                <svg class="movie__container--icon">
                  <use xlink:href="${icons}#icon-chevron-thin-down"></use>
                </svg>
              </div>
            </div> `;
  }
}

// export default new View();
