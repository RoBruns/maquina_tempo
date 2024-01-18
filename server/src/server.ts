import fastify from 'fastify';

const app = fastify()

app.get('/hello', () => {
    return 'world'
})

app.listen({
    port: 3333,
}
).then(() => {
    console.log('🚀 HTTP Server is running on port http://localhost:3333');
});