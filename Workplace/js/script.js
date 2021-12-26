class car {
    brand;
    name;
    price;
    speed;
    engine;
    constructor(brand, name, price, speed, engine){
        this.brand = brand;
        this.name = name;
        this. price = price; 
        this.speed = speed;
        this.engine = engine;
    }
}
const merc = new car('merc' , 'C300' , '10 ty', '100mph' , 'V8'  );
console.log(merc);