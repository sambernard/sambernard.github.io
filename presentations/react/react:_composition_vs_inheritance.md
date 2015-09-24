
# React: Composition vs Inheritance## What is Inheritance


### Definition:
"Inheritance enables new classes to receive—or inherit—the properties and methods of existing classes."<sup>[1]</sup>
### Benefits of Inheritance


1. 	Make class methods and properties universally available in all subclassess:
    
    For example:

	    class MyComponent extends React.Component{...}
	    	Gives your component access to methods such as `this.setState`, as well as automatically handling calling of lifecycle methods, such as `componentWillReceiveProps`
2. 	Enforce a consistent interface
3.	### Inheritance: the dark side
1. Prototypal inheritance: classes inherit methods from instances, not an abstract blueprint
2. Brittleness: Changing the prototype can have unexpteced consequences down the chain.
3. Confusion: What objects inherit from this class? What classes are prototypes of my current class
4. Requires you to know too much about the parent class. What methods you can and cannot override. What arguments those methods have, what other methods call them interally
### Use Inheritance When
1. There is a strict object hierarchy
	* `MyComponent` is a `React.Component`
	* `Rectangle` is a `Polygon` ### Avoid Inheritance If
1. There isn't a logical **relationship** between two objects	*  My `Slide` component may use the same fade transition of my `Tab` component, but similar behaviors doesn't mean they are related.## What is composition
### Defintions
Composition is when a class is **composed** of other classes. It calls methods and accesses properties on instances of other classes.Object composition is a way of combining discrete functionality through explicity defined interfaces - me


//
Composition is simply when a class is composed of other classes; or to say it another way, an instance of an object has references to instances of other objects.

Inheritance is when a class inherits methods and properties from another class.### Benefits of composition

* Simpl//https://www.quora.com/What-are-the-main-disadvantages-of-inheritance-in-object-oriented-programming-and-why```
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
console.log("expected 5:", myComposedList.length);```### Footnotes
[1]: http://www.adobe.com/devnet/actionscript/learning/oop-concepts/inheritance.html Object-oriented programming concepts: InheritanceInheritance A treeComposition - an onion Inheritance can lead to bloated classes- where was this function defined- what if I want to override it- easy to implement- what if you want to change a base behavior later Composition - simple functionally - encapsulated behavior - Expose an interface - capture user interaction - simplify complex tasks- flexible - prop types - intelligently expose configuration - can debug in react tools extension - ## types of higher order components ##-  Interaction - draggable-  configuration - Marty container- instance vs always (eg provide context vs draggable)Utilities- proxyToParentWhen to pass down props and context to childrenNotes- when to stop event propagation A solution for mixins- create es5 higher order components and pass dat via props and functionality via context When is inheritance appropriate? Enforce functionalityApp-wide override of behaviorsAnalogy- Ids vs classes in css 