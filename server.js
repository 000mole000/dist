var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
app.use(serveStatic(__dirname))
app.get('/bsiua523hntv2.txt',function(req,res) {
    res.send('')
})
app.get('/google5b2bbde1d25ed754.html',function(req,res) {
    res.sendFile(__dirname + '/google5b2bbde1d25ed754.html');
})
app.get('*', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)