const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true)
    if (parsedURL.pathname === '/api') {
        res.setHeader('content-type', 'text/plain; charset=utf-8')
        res.end(`Hey ${parsedURL.query.name} ${parsedURL.query.lastname}`)
    } else {
        res.end('Hello world')
    }
})

app.listen(4000)
