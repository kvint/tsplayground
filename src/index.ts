export default class HelloWorld {
	idx = 0
	method() {
		this.idx++;
		if (this.idx > 10) {
			return;
		}
		console.log("Yay!")
		setTimeout(() => {
			this.method()
		}, 200)
	}
}

class Hello2 extends HelloWorld {
	method() {
		console.log("Hello2")
	}
}
new HelloWorld().method();