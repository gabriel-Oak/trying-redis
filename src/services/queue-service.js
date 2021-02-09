import Queue from "bull";
import * as jobs from "../jobs";

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  }),
  handler: job.handler,
  name: job.key,
}));

const QueueService = {
  queues,
  add(name, data) {
    const queue = this.queues.find((queue) => queue.name === name);
    return queue.bull.add(data);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handler);
      queue.bull.on('failed', (job, err) => {
        console.error('Job failed', job.name, job.data, err);
      });
    });
  },
};

export default QueueService;
