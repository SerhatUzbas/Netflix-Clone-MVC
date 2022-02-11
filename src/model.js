export const state = {
  movies: {
    popular: [],
    mostWatched: [],
  },
};

export const getPopularData = async function () {
  try {
    const API_KEY = '211db75b256392ca8aebd95022305dda';
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
        API_KEY +
        '&sort_by=popularity.desc'
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}`);

    state.movies.popular = data.results.map(mov => {
      return {
        title: mov.title,
        id: mov.id,
        image: `https://image.tmdb.org/t/p/w780/${mov.poster_path}`,
      };
    });
  } catch (error) {
    throw error;
  }
};

export const inTheatre = async function () {
  try {
    const API_KEY = '211db75b256392ca8aebd95022305dda';
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
        API_KEY +
        '&sort_by=vote_count.desc '
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}`);

    console.log(data);

    state.movies.mostWatched = data.results.map(mov => {
      return {
        title: mov.title,
        id: mov.id,
        image: `https://image.tmdb.org/t/p/w780/${mov.poster_path}`,
      };
    });
  } catch (error) {
    throw error;
  }
};
