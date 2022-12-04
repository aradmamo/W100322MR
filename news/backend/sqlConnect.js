import mysql from 'mysql';

export const con = mysql.createConnection({
    host: 'localhost',
    database: 'fullstacklastproject',
    user: 'root',
    password: '',
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("آيوا أليك");
});