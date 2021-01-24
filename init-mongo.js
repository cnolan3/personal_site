db.createUser(
    {
        user: "devuser",
        pwd: "pass",
        roles: [
            {
                role: "readWrite",
                db: "sitedb"
            }
        ]
    }
)