var expressVue = require("express-vue");
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
// app.use(serveStatic(__dirname))
expressVue.use(app).then(() => {
    app.get('/bsiua523hntv2.txt',function(req,res) {
        res.send('')
    })
});
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)