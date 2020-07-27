// create db with dummy data
db_s = db.getSiblingDB("sitedb");
db_s.article.drop();

db_s.article.save( {
    title : "this is my title" , 
    author : "bob" , 
    posted : new Date(1079895594000) , 
    pageViews : 5 , 
    tags : [ "fun" , "good" , "fun" ] ,
    comments : [ 
        { author :"joe" , text : "this is cool" } , 
        { author :"sam" , text : "this is bad" } 
    ],
    other : { foo : 5 }
});

// create a user for sitedb
db_s.createUser(
    {
        user : "devuser",
        pwd : "pass",
        roles : [
            {
                role : "readWrite",
                db : "sitedb"
            }
        ]
    }
);