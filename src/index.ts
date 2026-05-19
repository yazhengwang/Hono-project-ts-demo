import {Hono} from 'hono';
import {serve} from '@hono/node-server';

const app = new Hono();

app.get('/', (c) => {
  return c.json({
    name: 'Hono',
    version: '0.1.0',
    message: 'Hello from Hono'
  })
});

app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  })
})

const port = 3000
serve({
  fetch: app.fetch,
  port
})

console.log(`Server running on http://localhost:${port}`)