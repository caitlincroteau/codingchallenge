const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Perform the database reset (e.g., drop and recreate tables)
  resetDatabase(connection);
});

// Function to reset the database
function resetDatabase(connection) {
  // Example: Drop all tables
  connection.query('DROP TABLE IF EXISTS table1, table2, table3', (err, results) => {
    if (err) {
      console.error('Error dropping tables:', err);
      return;
    }
    console.log('Tables dropped successfully');
    
    // Add your logic here to recreate tables, insert initial data, etc.
    
    // Close the database connection
    connection.end();
  });
}
