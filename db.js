const con = require('./dbConnect');

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("INSERT INTO User (email, firstname, lastname, password) VALUES ('test@hotmail.com', 'Anna', 'Andersson', 'lösen')", function (err, result) {
    if (err) throw err;
    console.log('Result:', result);
  });
});
