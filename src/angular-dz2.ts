abstract class Car {
    protected __mileage: number;
    protected __fuel: number;
    abstract drive(length): void;
    abstract refuel();
}

class CurrentCar extends Car {
    protected __mileage: number = 0;
    protected __fuel: number;

    public get getFuel() {
        return this.__fuel;
    }

    public get getMileage() {
        return this.__mileage;
    }

    public drive(length: number) {
        if (typeof length === 'number' && !length) {
            if (!this.__fuel && this.__fuel >= length) {
                this.__mileage += length;
                this.__fuel -= length; 
            } else {
                console.log('Need a refuel!');
            }
        }
    }    
    
    public refuel() {
       this.__fuel = 500;
    }   
}