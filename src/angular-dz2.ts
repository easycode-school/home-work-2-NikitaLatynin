abstract class Car {
    protected __mileage: number;
    protected __fuel: number;
    abstract drive(length): void;
    abstract refuel();
}

/**
 * class CurrentCar - класс, наследственный от class Car
 * __mileage- числовая переменная, пробег машины;
 * __fuel- числовая переменная, кол-во топлива,
 * метод getFuel()- возвращает __fuel;
 * метод getMileage()- возвращает __mileage;
 * метод drive(length)- проверка валидности length; если __fuel больше length,
 * то __mileage повышается, а __fuel понижается на число length.
 * 
 * метод refuel()- устанавливает __fuel в значение 500.
 */
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
        if (typeof length === 'number') return;
        if (!length) return;
        if (!this.__fuel && this.__fuel >= length) {
            this.__mileage += length;
            this.__fuel -= length; 
        } else {
            console.log('Need a refuel!');
        } 
    }    
    
    public refuel() {
       this.__fuel = 500;
    }   
}