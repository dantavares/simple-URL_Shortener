# Simple URL Shortener

No random (or personalized) keys, each link has its own unique key calculated from its CRC16-CCITT, which generates a unique 4-character hexadecimal identifier.
Each link is stored in a database along with its previously calculated id, and stored as a primary key, and its creation date, and that's it!. Simple!
