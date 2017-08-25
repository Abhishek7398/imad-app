var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
            'article-one' : {
            title: 'Article One | Abhishek Patil',
            heading: 'Article One',
            date: '25 August 2017',
            content:
                               `<p>
                                    THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                    
                                </p>
                                <p>
                                    THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                    
                                </p>
                                <p>THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                </p>`
            },
            'article-two' : {
            title: 'Article two | Abhishek Patil',
            heading: 'Article Two',
            date: '30 August 2017',
            content:
                               `<p>
                                    THis is the content of my second article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                    
                                </p>
                                <p>
                                    THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                    
                                </p>
                                <p>THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                </p>`
            },
            'article-three' : {
            title: 'Article three | Abhishek Patil',
            heading: 'Article Third',
            date: '5 August 2017',
            content:
                               `<p>
                                    THis is the content of my third article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                    
                                </p>
                                <p>
                                    THis is the content of my three article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                    
                                </p>
                                <p>THis is the content of my three article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.THis is the content of my first article and I am going to write this with my full devotion and I am not goin gto make any mistake in my codin and I will always attend the lectures of coding properly and I am going to score more marks as looking towards y practice.
                                </p>`
            },
};
 function createTemplate (data) {
     var title = data.title;
     var date = data.date;
     var heading = data.heading;
     var content = data.content;
 
var htmlTemplate = `

<html>
    <head>
        <title> 
            ${title}
        </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            
             <div>
                <a href= "/">Home</a> 
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                 </div>
            </div>
    </body>
</html>`;

return htmlTemplate ; 
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleName', function(req,res) {
    //articleName == article-one
    //articles[articleName] == {} content object for article one 
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
