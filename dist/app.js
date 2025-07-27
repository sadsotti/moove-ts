"use strict";
// Classes Implementing Interfaces
class Vehicle {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.status = 'available';
        console.log(`[Vehicle Created] ${this.type} ID: ${this.id}, Status: ${this.status}`);
    }
    assignUser(user) {
        if (this.status === 'available') {
            this.status = 'in_use';
            console.log(`[Vehicle Assigned] The ${this.type} ID:${this.id} has been assigned to ${user.firstName} ${user.lastName}.`);
        }
        else {
            console.warn(`[WARNING] The ${this.type} ID:${this.id} is not available (current status: ${this.status}).`);
        }
    }
}
class User {
    constructor(firstName, lastName, email, preferredPaymentMethod) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.preferredPaymentMethod = preferredPaymentMethod;
        console.log(`[User Created] ${this.firstName} ${this.lastName}, Email: ${this.email}`);
    }
    bookVehicle(vehicle) {
        if (vehicle.status === 'available') {
            console.log(`[Booking in Progress] ${this.firstName} ${this.lastName} is trying to book the ${vehicle.type} ID:${vehicle.id}.`);
            vehicle.assignUser(this);
        }
        else {
            console.error(`[ERROR] The ${vehicle.type} ID:${vehicle.id} cannot be booked, it is currently ${vehicle.status}.`);
        }
    }
}
class City {
    constructor(name) {
        this.name = name;
        this.availableVehicles = [];
        console.log(`[City Created] ${this.name}`);
    }
    addVehicle(vehicle) {
        this.availableVehicles.push(vehicle);
        console.log(`[Vehicle Added] The ${vehicle.type} ID:${vehicle.id} has been added to ${this.name}. Total vehicles: ${this.availableVehicles.length}`);
    }
    showVehicleStatus() {
        console.log(`Vehicle Status in ${this.name}:`);
        if (this.availableVehicles.length === 0) {
            console.log("No vehicles available in this city.");
            return;
        }
        this.availableVehicles.forEach(vehicle => {
            console.log(`  - ${vehicle.type} (ID: ${vehicle.id}): Status -> ${vehicle.status}`);
        });
    }
}
// Connection Logic and Testing
// Instantiate some Vehicle objects
const bike1 = new Vehicle('bike', 'B001');
const scooter1 = new Vehicle('scooter', 'S001');
const kickscooter1 = new Vehicle('kickscooter', 'M001');
const bike2 = new Vehicle('bike', 'B002');
const scooter2 = new Vehicle('scooter', 'S002');
// Instantiate User objects
const userAlice = new User('Alice', 'Rossi', 'alice.rossi@example.com', 'Credit Card');
const userMarco = new User('Marco', 'Verdi', 'marco.verdi@example.com', 'PayPal');
// Create a City instance and add vehicles
const milan = new City('Milan');
milan.addVehicle(bike1);
milan.addVehicle(scooter1);
milan.addVehicle(kickscooter1);
milan.showVehicleStatus();
// Test vehicle booking logic by users
// Alice books a bike
userAlice.bookVehicle(bike1);
milan.showVehicleStatus();
// Marco tries to book the bike already in use by Alice
userMarco.bookVehicle(bike1);
milan.showVehicleStatus();
// Marco books an available scooter
userMarco.bookVehicle(scooter1);
milan.showVehicleStatus();
// Test adding new vehicles to cities
milan.addVehicle(bike2);
milan.addVehicle(scooter2);
milan.showVehicleStatus();
// Simulation of a vehicle under maintenance
kickscooter1.status = 'maintenance';
console.log(`[Status Update] Kickscooter ID:${kickscooter1.id} is now under maintenance.`);
milan.showVehicleStatus();
// User tries to book a vehicle under maintenance
userAlice.bookVehicle(kickscooter1);
