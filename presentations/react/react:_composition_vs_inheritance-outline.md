I
# React: Composition vs Inheritance* Inheritance
	* Definitions:
		* "Inheritance enables new classes to receive—or inherit—the properties and methods of existing classes."<sup>[1]</sup>
		* Inheritance is when a class inherits methods and properties from another class.

	* Benefits
		1. 	Inheritance makes class methods and properties universally available in all subclassess:		
	    	For example: `class MyComponent extends React.Component{...}` gives your component access to methods such as `this.setState`, as well as automatically handling calling of lifecycle methods, such as `componentWillReceiveProps`		2. 	Inheritance can enforce consistent behavior in all instances			* React throws warnings if a `render` function is not defined		3.	Inheritance can lead to very concise, targeted classes which only implement unique/changed/etc (eg Rect extend Polygone so it just sets `sides=4;`)	* When should we use inheritance?		1. Use inheritance when there is a strict object hierarchy
			* `MyComponent` is a `React.Component`			* `Rectangle` is a `Polygon` 	* When should inheritance be avoided?
		1. Avoid inheritance when there isn't a direct **relationship** between two objects			*  My `Slide` component may use the same fade transition of my `Tab` component, but similar behaviors doesn't mean they are related.	* Inheritance: the dark side		1. Prototypal inheritance: classes inherit methods from instances, not an abstract blueprint
		2. Brittleness: Changing the prototype can have unexpteced consequences down the chain.
		3. Confusion: What objects inherit from this class? What classes are prototypes of my current class
		4. Requires you to know too much about the parent class. What methods you can and cannot override. What arguments those methods have, what other methods call them interally* Composition	* Definitions:		* Composition is when a class is **composed** of other classes. It calls methods and accesses properties on instances of other classes.		* Object composition is a way of combining discrete functionality through explicity defined interfaces
	* Benefits:
		* 
	

* Ways of composing
	* Mixins
		* Must be composed in linear order since there is no way to resolve conflicts
		
React Mixins are really more like Traits (throw errors if function defined more than once)

mixins vs higher order components

	### Benefits of composition

* Contrived example```
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