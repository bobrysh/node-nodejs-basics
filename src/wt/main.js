import {Worker, BroadcastChannel} from 'worker_threads';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let resultArray = [];
  let count = 0;
  let pathToWorker = join(__dirname, 'worker.js');
  let broadcastChannel = new BroadcastChannel('fibonacci');
  broadcastChannel.onerror = () => {
    resultArray.push({ status: 'error', data: null });
  };
  broadcastChannel.onmessage = (event) => {
    resultArray.push(event.data);
    if (++count === 4) {
      broadcastChannel.close();
      setTimeout(() => console.log(resultArray), 0);
    }
  };
  for (let n = 0; n < 4; n++) {
    new Worker(pathToWorker, { workerData: n + 10 });
  }
};

performCalculations();