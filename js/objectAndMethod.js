var car = {
	make: 'Honda',
	type: 'Sedan',
	color: 'Black',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat1','seat2','seat3','seat4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	switchCar: function (isOn) {
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	},
	fly: function () {
		alert('This is a sample message!');
	}
};
console.log("Sample Text through JS line");