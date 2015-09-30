class List{

	constructor() {
		this.items = [];
	}

	add(item) {
		this.items.push(item);
	}

	addMany(){
		let items = Array.prototype.slice.call(arguments, 0);
		items.map(this.add.bind(this));
	}

	valueOf() {
		return this.items;
	}

}

class InheritedList extends List{

	constructor() {
		super()
		this.length = 0
	}

	add(item) {
		super.add(item);
		this.length++;
	}

	addMany(){
		super.addMany(...arguments);
		this.length += arguments.length
	}
}


var myList = new InheritedList();

myList.add('One item');
console.log("expected 1:", myList.length);
//1
myList.addMany('here', 'are', 'more', 'items');
console.log("expected 5:", myList.length);


class ComposedList{

	constructor() {
		this.list = new List();
		this.length = 0
	}

	add(item) {
		this.list.add(item);
		this.length++;
	}

	addMany(){
		this.list.addMany(...arguments);
		this.length += arguments.length
	}
}

var myComposedList = new ComposedList();

myComposedList.add('One item');
console.log("expected 1:", myComposedList.length);
//1
myComposedList.addMany('here', 'are', 'more', 'items');
console.log("expected 5:", myComposedList.length);



// window.x = new InheritedList();
// window.y = new ComposedList();