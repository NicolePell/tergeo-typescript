import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from 'fastify-cors';

export class App {
  private fastifyInstance: FastifyInstance;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.fastifyInstance = fastify({ logger: true });
    this.fastifyInstance.register(fastifyCors, {
      origin: true,
      credentials: true,
    });

    this.fastifyInstance.get('/ping', {}, (_request, reply) => {
      console.log(reply.res);
      reply.code(200).send({ pong: `I'm listening` });
    });
  }

  async start() {
    const url = await this.fastifyInstance.listen(this.port);
    console.log(`App listening on ${url}`);
  }
}
