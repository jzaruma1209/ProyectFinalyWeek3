const Directors = require("./Directors");
const Movies = require("./Movies");
const Actors = require("./actors");
const Genres = require("./genres");

// Movies ↔️ Actors
// Actors ↔️ Movies
Movies.belongsToMany(Actors, { through: "moviesActors" });
Actors.belongsToMany(Movies, { through: "moviesActors" });

// Movies ↔️ Directors
// Directors ↔️ Movies
Movies.belongsToMany(Directors, { through: "moviesDirectors" });
Directors.belongsToMany(Movies, { through: "moviesDirectors" });

// Movies ↔️ Genres
// Genres ↔️ Movies
Movies.belongsToMany(Genres, { through: "moviesGenres" });
Genres.belongsToMany(Movies, { through: "moviesGenres" });
