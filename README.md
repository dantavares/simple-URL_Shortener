# Simple URL Shortener

No random (or personalized) keys, each link has its own unique key calculated from its CRC16-CCITT, which generates a unique 4-character hexadecimal identifier.
Each link is stored in a database along with its previously calculated id, and stored as a primary key, and its creation date, and that's it!. Simple!

## Installation Guide:
1. Clone the repository into the public access folder of your http server
2. Rename the folder to something shorter (isn't that the idea?) like "ln"
3. Create a database on your mysql or mariadb server, along with your username and password
4. Import the "database.sql" file into the database you just created
5. Edit the "db_config.json" file with your database data.

Now just open the folder in your browser and start using it. If you have an IQ > 80 you won't need any further instructions.

If you prefer English, fork your own repository and translate.
