(function () {
    const { PENDING, RESOLVED, REJECTED } = { PENDING: 'pending', RESOLVED: 'resolved', REJECTED: 'rejected' }
    function Promise(excutor) {
        const self = this;
        self.data = undefined;
        self.callbacks = [];
        self.status = PENDING;
        function resolve(value) {
            if (self.status !== PENDING) return;
            self.data = value;
            self.status = RESOLVED;
            self.callbacks.length && setTimeout(() => {
                self.callbacks.forEach(obj => {
                    obj.onResolved(value);
                });
            });
        }
        function reject(reason) {
            if (self.status !== PENDING) return;
            self.data = reason;
            self.status = REJECTED;
            self.callbacks.length && setTimeout(() => {
                self.callbacks.forEach(obj => {
                    obj.onRejected(reason);
                });
            });
        }
        try {
            excutor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    Promise.prototype = {
        then(onResolved, onRejected) {
            const self = this;
            onResolved = typeof onResolved == 'function' ? onResolved : value => value;
            onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw reason };
            return new Promise((resolve, reject) => {
                function handel(callback) {
                    try {
                        const result = callback(self.data);
                        if (result instanceof Promise) {
                            result.then(resolve, reject);
                        } else {
                            resolve(result); //这里返回往内的结果
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
                if (self.status === RESOLVED) {
                    setTimeout(() => {
                        handel(onResolved);
                    });
                } else if (self.status === REJECTED) {
                    setTimeout(() => {
                        handel(onRejected);
                    });
                } else {
                    self.callbacks.push({
                        onResolved(value) {
                            handel(onResolved);
                        },
                        onRejected(reason) {
                            handel(onRejected);
                        }
                    })
                }
            })
        },
        catch(reason) {
            return this.then(undefined, reason);
        }
    }

    Promise.resolve = function (value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject);
            } else { resolve(value) }
        });
    }
    Promise.reject = function (reason) {
        return new Promise((resolve, reject) => { reject(reason) });
    }
    Promise.all = function (promise) {
        let resolvedCount = 0; //用于计算成功的次
        const values = new Array(promise.length);
        return new Promise((resolve, reject) => {
            promise.length && promise.forEach((p, index) => {
                console.log(p);
                p.then(
                    value => {
                        resolvedCount++; //成功就 +1
                        values[index] = value;
                        if (resolvedCount === promise.length) resolve(values);
                    },
                    reason => {
                        reject(reason);
                    }
                )
            });
        });
    }
    /*   Promise.all = function (promiseArr) { 
          //我定成败函数 数组循环执行~!
          //全对返回成功的promise对象
          //有失败就返回失败的promise对象
          if(promiseArr.length){
              new Promise((resolv,reject)=>{
                  const p = promiseArr.shift();
                  console.log(p);
                  p.then(
                      value => { Promise.all(p) },
                      reason => { }
                  )
              })
          }else{
              return new Promise((resolve,reject)=>{
                  return reject(promiseArr[0].data);
              });
          }
      } */

    window.Promise = Promise;
})(window);
