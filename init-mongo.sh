#!/bin/bash
set -e

echo "******************************************************************"

mongo <<EOF
use $DB_NAME

db.article.insert({"test":"test"})

use admin
db.createUser(
    {
        user: '$DB_USERNAME',
        pwd: '$DB_PASSWORD',
        roles: [
            {
                role: "readWrite",
                db: '$DB_NAME'
            }
        ]
    }
)
EOF