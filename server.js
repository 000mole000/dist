var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var VueRouterSitemap=require('vue-router-sitemap');

// const sitemapMiddleware = () => {
//   return (req, res) => {
//     res.set('Content-Type', 'application/xml');

//     const staticSitemap = path.resolve('', 'sitemap.xml');
//     const filterConfig = {
//       isValid: false,
//       rules: [
//         /\/example-page/,
//         /\*/,
//       ],
//     };

//     new VueRouterSitemap(router).filterPaths(filterConfig).build('https://minefile.herokuapp.com').save(staticSitemap);

//     return res.sendFile(staticSitemap);
//   };
// };

app = express()

// app.get('/sitemap.xml', sitemapMiddleware());
app.use(serveStatic(__dirname))
app.get('/sitemap.xml',function(req,res) {

    res.set('Content-Type', 'text/xml');
    res.sendFile(__dirname + '/sitemap.xml');
})
app.get('/sitemap2.xml',function(req,res) {
    res.sendFile(__dirname + '/sitemap2.xml');
})
app.get('/bsiua523hntv2.txt',function(req,res) {
    res.send('')
})
app.get('/google5b2bbde1d25ed754.html',function(req,res) {
    res.sendFile(__dirname + '/google5b2bbde1d25ed754.html');
})
app.get('/gen',function(req,res) {
    res.sendFile(__dirname + '/generate.html');
})
app.get('*', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)