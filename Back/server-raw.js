import http from 'http'

const server = http.createServer((request, response) => {
  if(request.url === '/api/products' && request.method === 'GET') {
    response.writeHead(200, { 'Content-type': 'application/json' })
    response.end(JSON.stringify({
      id: 1,
      name: "Iphone",
      color: "Black"
    }))
  } else {
    response.writeHead(404, { 'Content-type': 'application/json' })
    response.end(JSON.stringify({
      message: 'Route not found, please use api/products endpoint'
    }))
  }
})

const PORT = process.env.PORT || 5002

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
