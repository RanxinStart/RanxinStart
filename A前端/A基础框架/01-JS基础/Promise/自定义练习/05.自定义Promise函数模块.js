/* 开始自定义Promise模块 */
(function() { //1.自执行函数定义模块:IIFE
	//2.创建构造函数
	function Promise(excutor) { //2.1 excutor执行器函数
		//5.0  初始化
		const self = this;
		self.staus = 'pinding'; //Promise的状态值
		self.data = undefined; //存结果的data 默认undefined
		self.callbacks = []; //每个元素的结构(onResolved(){},onRejected(){})

		//5.1  改变Promise状态的函数
		function resolve(value) {
			//6.0 只有状态为pinding才往下执行
			if (self.staus !== 'pinding') {
				return;
			}
			// 6.1 将状态改为resolved
			self.staus = 'resolved';
			//6.2 保存value数据
			self.data = value;
			//6.3 如果有待执行 callback函数,立即异步执行回调
			if (self.callbacks.length > 0) {
				setTimeout(() => { // 放入队列中执行所有成功的回调
					self.callbacks.forEach(callbacksObj => {
						callbacksObj.onResolved(value);
					});
				});
			}
		}
		//5.2	改变Promise状态的函数
		function reject(reason) {
			//6.0 只有状态为pinding才往下执行
			if (self.staus !== 'pinding') {
				return;
			}
			// 6.1 将状态改为rejected
			self.staus = 'rejected';
			//6.2 保存reason数据
			self.data = reason;
			//6.3 如果有待执行 callback函数,立即异步执行回调
			if (self.callbacks.length > 0) {
				setTimeout(() => { // 放入队列中执行所有成功的回调
					self.callbacks.forEach(callbacksObj => {
						callbacksObj.onRejected(reason);
					});
				});
			}
		}

		try { //检测异常 后执行reject
			//5.定义构建器
			excutor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	//---------------------------------------------------------------------------

	//4.0Promise原型对象then()
	Promise.prototype.then = function(onResolved, onRejected) {
		//指定失败默认值
		onRejected = typeof onRejected === 'function' ? onRejected : reason => {
			throw reason
		};
		//指定成功的默认值
		onResolved = typeof onResolved === 'function' ? onResolved : value => value;
		const self = this;
		/* 	指定成功和失败的回调函数,返回一个新的promise对象
			要判断Promise对象三个状态 三个功能  
			pinding : 把onResolved,onRejected和保存
			resolve : 执行resolve
			reject  : 执行reject
		 */
		return new Promise((resolve, reject) => {


			function handle(callback) {
				try { //2.判断出现异常的情况
					//onResolved是客户端函数self.data是上一个的数据
					//3.执行客户端给的代码 看结果  这里还剩三种情况
					const result = callback(self.data); //3.这里还剩三种情况
					if (result instanceof Promise) {
						//4.是Promise对象还有两种情况 一种是触发resolved 还有一种触发reject
						//5.  通过.then判断执行后的状态.. 
						//5.  result返回的Promise结果就是这个Promise的结果
						/* result.then(
							value => resolve(value),
							reason => reject(reason)
						) */
						//简写一下...
						result.then(resolve, reject);
					} else {
						// 4.不是Promise对象 即为成功状态
						resolve(result);
					}
				} catch (error) {
					//2.出现异常 就是失败状态
					reject(error);
				}
			}
			//3种判断做不同的事
			if (self.staus === 'pinding') {
				//为第一次执行返回 函数给callback
				self.callbacks.push({
					onResolved(value) {
						handle(onResolved);
					},
					onRejected(reason) {
						handle(onRejected);
					}
				});
				//后面是为最后一个做处理 因为前面的状态都是pinding
			} else if (self.staus === 'resolve') { //这里和新不新也无关
				//	如果上一个成功了 会手动执行..一次
				// 	需要得到下一个Promise的结果.. 
				//	用客户端传的函数来决定
				//  客户端函数的情况:
				//  调用resolved、调用返回不是Promise 	即成功
				//  调用reject、出现异常 				即失败
				setTimeout(() => { // 1.异步执行
					handle(onResolved);
				});
			} else {
				setTimeout(() => { //四种情况的判定..
					handle(onRejected)
				});
			}
		})
	}
	//4.1Promise函数对象方法catch
	Promise.prototype.catch = function(reason) {
		//指定失败的回调函数,返回一个新的promise对象
		return this.then(undefined, reason);
	}
	//4.2Promise函数对象方法resolve
	Promise.resolve = function(value) {
		//返回一个指定结果,成功的Promise
	}
	//4.3Promise函数对象方法reject
	Promise.reject = function(reason) {
		//返回一个指定结果,失败的Promise
	}
	//4.4Promise函数对象方法reject
	Promise.all = function(promises) {
		//返回一个新的Promise 只有全部成功才返回成功的Promise 失败直接返回失败的Promise
	}
	//4.5Promise函数对象方法reject
	Promise.rece = function(reason) {
		//返回一个新的Promise 由第一个Promise决定 成功和失败
	}

	//3.向外暴露Promise函数
	window.Promise = Promise;
})(window)









/* 
 
 *	p.then(value=>{},reason=>{})；
 *	p.type.then(a,b){
 * 这是错的...
 *		1.0 返回一个新的对象是为了 能够用下一个.then
 * 		1.1 判断上一个执行的结果状态 如果是没有待定那么它就是第一次执行
 * 		1.2 第一次执行会对原型对象callbacks进行赋值操作
 * 
 * 		？？ 此时根据.then的数量开始循环了 ~~~~
 * 
 *		2.0 如果上一个是成功 那么就运行状态为resolved
 * 		2.1 接收客户端.then的函数(就是上面的形参 onResolved)
 * 		2.2 根据形参给new的Promise 赋值 给下一个.then用
 * 		2.3 如果有.then 继续循环
 * 
 * 		3.0 如果上一个是失败 那么就运行状态为reject
 * 		3.1 接收客户端.then的函数(就是上面的形参 onReject)
 * 		3.2 根据形参给new的Promise 赋值 给下一个.then用
 * 		3.3 如果有.then 继续循环
 *	}  
 */
