import {workerData, BroadcastChannel} from 'worker_threads';
const broadcast = new BroadcastChannel('fibonacci');

export const nthFibonacci = (num) =>{
    if(num < 2){
        return num
    }else{
        return nthFibonacci(num - 1) + nthFibonacci(num - 2);
    }
}
  
export const sendResult = () => {
  broadcast.postMessage({ status: 'resolved', data: nthFibonacci(workerData) });
  broadcast.close();
};

sendResult();