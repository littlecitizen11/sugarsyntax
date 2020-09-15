
class Shape {
    constructor(id, x, y, color, area) {
        this.id = id;
        this.color=color;
        this.area=area;
        this.setLocation(x, y);
    }


    setLocation(x, y) {
        // prototype function
        this.x = x;
        this.y = y;
    }

    getLocation() {
        return {
            x: this.x,
            y: this.y
        };
    }

    toString() {
        return `Shape:"${this.id}"\n Area:"${this.area}"\n Color:"${this.color}"\n Location:"${this.getLocation().x} , ${this.getLocation().y}"`;
    }
}

class Circle extends Shape {
    constructor(id, x, y, radius, color,area) {
        super(id, x, y,color,area);
        this.radius = radius;
    }

    toString() {
        return `Circle > ${super.toString()}\n Radius:"${this.radius}"`;
    }
}

// test the classes
var myCircle = new Circle('mycircleid', 100, 200, 50, "red", 50);
console.log(myCircle.toString());
console.log(myCircle.getLocation());