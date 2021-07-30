exports.render = function (req, res) {
    //saves the session information
    var session = req.session;
    //checks if username is entered by the user
    if (session.username) {
        
        res.render('commentsform', { title: 'Comment Form', prefilleduname: session.username });
    }
    else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }

};
