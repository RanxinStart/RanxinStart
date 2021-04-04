(function() { //1.自执行函数
	const {
		PENDING,
		RESOLVED,
		REJECTED,
	} = {
		PENDING: 'pending',
		RESOLVED: 'resolved',
		REJECTED: 'rejected',
	};

	function Promise(excutor /* 2.执行器 */ ) {
		//6.初始化Promise
		const self = this;
		self.status = PENDING;
		self.data = undefined;
		self.callbacks = [];

		//5.创建对应的函数执行
		function resolve(value) {
			// 7	不允许status状态为PENDING
			if (self.status != PENDING) {
				return;
			}
			// 7.0	写入resolve方法 其中包括
			// 7.1	status状态改为 resolved
			self.status = RESOLVED;
			// 7.2	将value数据写入data中
			self.data = value;
			// 7.3  执行callbacks函数(如果有).. 放异步他函数排在.then后面
			setTimeout(() => {
				//7.4根据callbacks 执行其中的方法
				self.callbacks.length && self.callbacks.forEach((callbackObj) => {
					callbackObj.onResolved(value);
				});
			});

		};
		//5.创建对应的函数执行
		function reject(reason) {
			// 7	不允许status状态为PENDING  只有第一次执行才能进
			if (self.status != PENDING) {
				return;
			}
			// 7.0	写入resolve方法 其中包括
			// 7.1	status状态改为 resolved
			self.status = REJECTED;
			// 7.2	将value数据写入data中
			self.data = reason;
			// 7.3  执行callbacks函数(如果有).. 放异步他函数排在.then后面
			setTimeout(() => {
				//7.4根据callbacks 执行其中的方法
				self.callbacks.length && self.callbacks.forEach((callbackObj) => {
					callbackObj.onRejected(reason);
				});
			});
		}


		//3.马上调用执行器 以及传递的两个方法
		//这里 只要newPromise 传递了方法就会执行..
		try {
			excutor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	Promise.prototype = {
		//8.定义then
		then: function(onResolved, onRejected) {
			onResolved = typeof onResolved == 'function' ? onResolved : value => value;
			onRejected = typeof onRejected == 'function' ? onRejected : reason => {
				throw reason;
			};
			const self = this;
			//8.1 返回一个Promise对象 (为了可以无限.then)
			return new Promise((resolve, reject) => {
				//9.1 	判断三种status状态
				// 		PINDING  : 进行第一次初始化
				// 		RESOLVED : 执行传入函数 并判断 进行下一步执行
				// 		REJECTED : 执行传入函数 并判断 进行下一步执行

				//10.0	判断传入函数执行后的三种情况(给下一个.then选路) 写成方法复用
				function handle(callback) {
					try {
						const result = callback(self.data); //10.0
						// comsole.log(result, Promise, result instanceof Promise);
						if (result instanceof Promise) {
							//其一	执行后返回值是Promise对象   : 下一个.then 要进行下一步判断
							result.then(resolve, reject);
							/*  这一个的过程...
							 *	result = new Promise; Promise.status = pending;
							 * 	执行callback的函数准备就绪 陪在同步的最后面++++++++++++++++
							 * 	result.then = .then 返回一个新的对象Promise;				 
							 * 	.then 进行判断执行pending的初始化函数;						
							 * 	然后执行自己这个handle 判断自己的数据类型(无限解包程序)
							 * 	把解包过程中的fun 逐个进行 
							 */
						} else {
							//其二	执行后返回值不是Promise对象 : 下一个.then为RESOLVED
							resolve(self.data);
						}
					} catch (error) {
						//其三	执行后返回值抛出异常 	   : 下一个.then为REJECTED	
						reject(error);
					}
				}

				//10.2	下一步判断内容: 让返回值进行单独一次.then 第一个传RESOLVED 第二个传REJECTED

				if (self.status == RESOLVED) {
					//状态RESOLVED
					setTimeout(() => {
						handle(onResolved);
					})
				} else if (self.status == REJECTED) {
					//状态REJECTED
					setTimeout(() => {
						handle(onRejected);
					})
				} else {
					//状态PINDENG
					// self.callbacks.push({});

					self.callbacks.push({
						onResolved(value) {
							handle(onResolved);
						},
						onRejected(reason) {
							handle(onRejected);
						}
					});
				}

			});
			//↓这里才是结束了then
		},
		catch: function(reason) {
			return this.then(undefined, reason);
		},
	}

	Promise.resolve = function(value) {
		return new Promise((resolve, reject) => {
			if (value instanceof Promise) {
				value.then(resolve, reject);
			} else {
				resolve(value);
			}
		});
	}
	Promise.reject = function(reason) {
		return new Promise((resolve, reject) => {
			reject(reason);
		})
	}


	window.Promise = Promise;
})(window);
