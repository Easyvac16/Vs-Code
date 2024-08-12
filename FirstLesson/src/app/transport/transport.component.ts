import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-transport',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './transport.component.html',
	styleUrl: './transport.component.css'
})
export class TransportComponent {

	car = {
		name: 'BelAZ 75710',
		description: 'Найбільший вантажний автомобіль у світі, використовується для перевезення корисних копалин.',
		size: 20.6, 
		weight: 360000, 
		country: 'Білорусь'
	};

	airplane = {
		name: 'Ан-225 «Мрія»',
		description: 'Найбільший транспортний літак у світі, розроблений в Україні.',
		size: 84,
		weight: 640000, 
		country: 'Україна'
	};

	ship = {
		name: 'Prelude FLNG',
		description: 'Найбільший корабель у світі, плавучий завод для виробництва зрідженого природного газу.',
		size: 488, 
		weight: 600000, 
		country: 'Південна Корея'
	};

	selectedVehicle: string = 'car';

	showCar() {
		this.selectedVehicle = 'car';
	}

	showAirplane() {
		this.selectedVehicle = 'airplane';
	}

	showShip() {
		this.selectedVehicle = 'ship';
	}
}
