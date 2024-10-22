import mysql2 from 'mysql2/promise';

const connection = mysql2.createPool({
host:"localhost",
database: "TMDB",
user:"TMDBUser",
password:"TMDBUser@1234"
});

export default connection;
