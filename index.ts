import fastify from 'fastify';
import {IHeaders, IReply} from "./src/application/shared/interfaces";

interface IQuerystring {
    username: string;
    password: string;
}

const server = fastify()

server.get('/ping', async () => {
    return 'pong\n'
})

server.get<{
    Querystring: IQuerystring,
    Headers: IHeaders,
    Reply: IReply
}>('/auth', {
    preValidation: (request, reply, done) => {
        const { username, password } = request.query
        done(username !== 'admin' && password !== 'p4ssw0rd' ? new Error('Must be admin') : undefined) // only validate `admin` account
    }
}, async (request, reply) => {
    const customerHeader = request.headers['h-Custom']
    // do something with request data
    if (!customerHeader) {
      reply.code(400).send({ error: "some error message" })
    }
    reply.code(200).send({ success: true })
})



server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        // eslint-disable-next-line
        console.error(err)
        process.exit(1)
    }
    // eslint-disable-next-line
    console.log(`Server listening at ${address}`)
})
