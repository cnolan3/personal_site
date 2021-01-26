dbname = process.env.DB_NAME;
dbuser = process.env.DB_USERNAME;
dbpass = process.env.DB_PASSWORD;
dbip = process.env.DB_IP;

module.exports = {
    dbname,
    dbuser,
    dbpass,
    dbip,
    url: 'mongodb://' + dbip + '/' + dbname
};