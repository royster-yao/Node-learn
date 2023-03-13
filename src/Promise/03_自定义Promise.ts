type PromiseCallback<T> = (resolve: (value: T) => void, reject: (reason?: any) => void) => void;

class MyPromise<T> {
  private status: 'pending' | 'fulfilled' | 'rejected' = 'pending';
  private result?: T;
  private reason?: any;
  private onFulfilledCallbacks: Array<(value: T) => any> = [];
  private onRejectedCallbacks: Array<(reason?: any) => any> = [];

  constructor(executor: PromiseCallback<T>) {
    const resolve = (value: T) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.result = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason?: any) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then<TResult1 = T, TResult2 = any>(onFulfilled?: ((value: T) => TResult1 | MyPromise<TResult1>) | null, onRejected?: ((reason?: any) => TResult2 | MyPromise<TResult2>) | null): MyPromise<TResult1 | TResult2> {
    const newPromise = new MyPromise<TResult1 | TResult2>((resolve, reject) => {
      const fulfilledCallback = (value: T) => {
        if (onFulfilled) {
          try {
            const result = onFulfilled(value);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(value as any);
        }
      };

      const rejectedCallback = (reason?: any) => {
        if (onRejected) {
          try {
            const result = onRejected(reason);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(reason);
        }
      };

      switch (this.status) {
        case 'pending':
          this.onFulfilledCallbacks.push(fulfilledCallback);
          this.onRejectedCallbacks.push(rejectedCallback);
          break;
        case 'fulfilled':
          fulfilledCallback(this.result as T);
          break;
        case 'rejected':
          rejectedCallback(this.reason);
          break;
      }
    });

    return newPromise;
  }

  catch<TResult = any>(onRejected?: ((reason?: any) => TResult | MyPromise<TResult>) | null): MyPromise<T | TResult> {
    return this.then(null, onRejected);
  }

  static resolve<T>(value: T): MyPromise<T> {
    return new MyPromise<T>((resolve) => resolve(value));
  }

  static reject<T = any>(reason?: any): MyPromise<T> {
    return new MyPromise<T>((_, reject) => reject(reason));
  }

  static all<T>(promises: Array<MyPromise<T>>): MyPromise<T[]> {
    return new MyPromise<T[]>((resolve, reject) => {
      const results: T[] = [];
      let count = 0;

      for (let i = 0; i < promises.length; i += 1) {
        promises[i].then((result) => {
          results[i] = result;
          count += 1;

          if (count === promises.length) {
            resolve(results);
          }
        }, (reason) => {
          reject(reason);
        });
      }
    });
  }

  static race<T>(promises: Array<MyPromise<T>>): MyPromise<T> {
    return new MyPromise<T>((resolve, reject) => {
      for (let i = 0; i < promises.length; i += 1) {
        promises[i].then((result) => {
          resolve(result);
        }, (reason) => {
          reject(reason);
        });
      }
    });
  }
}

function resolvePromise<T>(newPromise: MyPromise<T>, result: any, resolve: (value: T) => void, reject: (reason?: any) => void) {
  if (newPromise === result) {
    reject(new TypeError('Chaining cycle detected for promise'));
  } else if (result && (typeof result === 'object' || typeof result === 'function')) {
    let then: ((value: any) => any) | undefined;

    try {
      then = result.then;
    } catch (error) {
      reject(error);
    }

    if (typeof then === 'function') {
      try {
        then.call(result, (value: T) => resolvePromise(newPromise, value, resolve, reject));
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(result);
    }
  } else {
    resolve(result);
  }
}

const mp = new MyPromise((reslove)=>{
    reslove('孙悟空')
})

mp.then((res)=>{
    console.log(res);
})