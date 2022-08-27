const message = 'hello world'
console.warn(message.toUpperCase())

const user = {
  name: 'Daniel',
  age: 26,
}

function greet(person: string, date: Date): void {
  console.warn(`Hello ${person}, today is ${date}!`)
}

// calling Date() in JavaScript returns a string
greet('bandon', new Date())

const obj = { x: 0 }

if (user.name === 'Daniel')
  obj.x = 1

function handleRequest(url: string, method: 'GET' | 'POST'): void {
  console.warn(url, method)
}

const req = { url: 'http://example.com', method: 'GET' as const }
handleRequest(req.url, req.method)

