const Movies = require("./Movies");
const Actors = require("./actors");

/*Películas y Actores: Una película puede tener muchos actores,
 y un actor puede participar en muchas películas. Relación: Muchos a Muchos.
 - Tablas: Movies y Actors.
 - Tabla intermedia: Movies_Actors.*/
Movies.belongsToMany(Actors, { through: "moviesActors" });
Actors.belongsToMany(Movies, { through: "moviesActors" });
