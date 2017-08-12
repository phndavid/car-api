
exports.signin = (req, res, connection) => {
  const email = req.body.email;
  const password =  req.body.password;
  const query = "SELECT email, hashedpassword FROM users WHERE email= ?";
  //The params for the query
  let params = [email];
  connection.query(query, params, (err, rows, fields) => {
    if (!err) {
      if(rows.length > 0) {
        const response = [];
        for (var i = 0; i < rows.length; i++) {
          const result = rows[i];
          response.push(result);
        }
        if(response[0].email == email){
          res.status(200).send("OK");
        }
      }

    } else {      
      res.status(401).send("Invalid email, please try again!");
    }
  });

}

exports.signup =  (req, res, connection) => {

}

exports.forgotPassword =  (req, res, connection) => {

}
