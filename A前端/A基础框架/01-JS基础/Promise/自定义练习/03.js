(function () {
	const { PENDING, RESOLVED, REJECTED } = { PENDING: 'pending', RESOLVED: 'resolved', REJECTED: 'rejected' }
	function Promise(excutor) {
		const self = this;
		self.status = PENDING;
		self.data = undefined;
		self.callbacks = [];
		function resolve(value) {
			if (self.status != PENDING) { return }
			self.status = RESOLVED;
			self.data = value;
			setTimeout(() => {
				self.callbacks.length && self.callbacks.forEach((callbackObj) => {
					callbackObj.onResolved(value);
				});
			});
		}
		function reject(reason) {
			if (self.status != PENDING) { return }
			self.status = REJECTED;
			self.data = reason;
			setTimeout(() => {
				self.callbacks.length && self.callbacks.forEach((callbackObj) => {
					callbackObj.onRejected(reason);
				});
			});
		}
		try {
			excutor(resolve, reject);
		} catch (reason) {
			reject(reason);
		}
	}
	Promise.prototype = {
		then(onResolved, onRejected) {
			onResolved = typeof onResolved == 'function' ? onResolved : value => value;
			onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw reason };
			const self = this;
			return new Promise((resolve, reject) => {
				function handle(callback) {
					try {
						const result = callback(self.data);
						if (result instanceof Promise) {
							result.then(resolve, reject);
						} else { resolve(result) }
					} catch (reason) { reject(reason) }
				}
				if (self.status === PENDING) {
					self.callbacks.push({
						onResolved(value) { handle(onResolved) },
						onRejected(reason) { handle(onRejected) }
					});
				} else if (self.status === RESOLVED) {
					setTimeout(() => { handle(onResolved) });
				} else {
					setTimeout(() => { handle(onRejected) });
				}
			});
		},
		catch(reason) {
			return this.then(null, onRejected);
		},

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
	window.Promise = Promise;
})(window)
