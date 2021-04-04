(function() { //自执行函数

	//定义常用常量
	const PINDING = 'pinding'; //第一个状态
	const RESOLVED = 'resolved'; //第二个状态
	const REJECTED = 'rejected'; //第三个状态


	//重写Promise
	function Promise(excutor) { //传入构建器
		const self = this;
		self.data = undefined; //初始化数据
		self.staus = 'pinding'; //初始化状态
		self.callbacks = []; //存回调函数

		function resolve(value) {
			//状态 pinding 才执行此函数
			if (self.staus !== PINDING) {
				return;
			}
			//改变自身数据
			self.staus = RESOLVED;
			self.data = value;
			//判断callbacks 是否有函数
			if (self.callbacks.length) {
				setTimeout(() => {
					self.callbacks.forEach((callbackObj) => {
						callbackObj.onResolved(value);
					});
				});
			}
		}

		function reject(reason) {
			//状态 pinding 才执行此函数
			if (self.staus !== PINDING) {
				return;
			}
			//改变自身数据
			self.staus = REJECTED;
			self.data = reason;
			//判断callbacks 是否有函数
			if (self.callbacks.length) {
				setTimeout(() => {
					self.callbacks.forEach((callbackObj) => {
						callbackObj.onRejected(reason);
					});
				});
			}
		}
		//执行构建器
		try {
			excutor(resolve, reject);
		} catch (err) {
			//错误处理
		}
	}

	//改写.then
	Promise.prototype.then = function(onResolved, onRejected) {
		const self = this;

		return new Promise((resolve, reject) => {
			if (self.staus === PINDING) {
				self.callbacks.push({
					onResolved,
					onRejected
				})
			} else if (self.staus === RESOLVED) {
				setTimeout(() => {
					onResolved(self.data);
				});
			} else {
				setTimeout(() => {
					onRejected(self.data);
				});
			}
		});

	}


	//覆盖原生Promise
	window.Promise = Promise;

})(window)
