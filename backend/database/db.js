sitedb = process.env.SITE_DB_NAME;
devuser = process.env.DEV_USERNAME;
devpass = process.env.DEV_PASSWORD;

module.exports = {
    db: 'mongodb://' + devuser + ':' + devpass + '@database:27017/' + sitedb
};