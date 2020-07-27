#!/bin/bash
set -e

mongo <<EOF
sitedb = "${SITE_DB_NAME}"
devuser = "${DEV_USERNAME}"
devpass = "${DEV_PASSWORD}"

use $SITE_DB_NAME

# create db using dummy data
db.article.save({
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
})

# create a user for sitedb
db.createUser(
    {
        user : devuser,
        pwd : devpass,
        roles : [
            {
                role : "readWrite",
                db : sitedb
            }
        ]
    }
)
EOF