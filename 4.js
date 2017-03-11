//this
(function(){console.log(this)})();
let person = {
	firstname: 'Tzu-Hua',
	lastname: 'Wang',
	greet1: function() {
		console.log(this);
	},
	greet2: ()=> {
		console.log(this);//underfined
	},
	greet3: function() {
		(() => console.log(this))();
	}
};
person.greet1();
person.greet2();//underfined
person.greet3();
