/**
 *  Make a Circle with OOP
 * Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).
 * 
 * For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
 * 
 * Examples
 * let circy = new Circle(11);
 * circy.getArea();
 * 
 * // Should return 380.132711084365
 * 
 * let circy = new Circle(4.44);
 * circy.getPerimeter();
 * 
 * // Should return 27.897342763877365
 * Notes
 * Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.
 * 
 * function round(number) {
 *   var factor = Math.pow(10, 5);
 *   return Math.round(number * factor) / factor;
 * }
 * let circo = new Circle(20);
 * Test.assertEquals(round(circo.getArea()), 1256.63706);
 * Test.assertEquals(round(circo.getPerimeter()), 125.66371);
 * let circo1 = new Circle(2);
 * Test.assertEquals(round(circo1.getArea()), 12.56637);
 * Test.assertEquals(round(circo1.getPerimeter()), 12.56637);
 * let circo2 = new Circle(4.4);
 * Test.assertEquals(round(circo2.getArea()), 60.82123);
 * Test.assertEquals(round(circo2.getPerimeter()),  27.64602);
 * let randomInt = round(Math.floor(Math.random() * Math.floor(200)));
 * //scroll down for spoilers that are hard to use
 * let circo3 = new Circle(randomInt);
 * Test.assertEquals(round(circo3.getArea()), round(Math.PI*Math.pow(randomInt,2)));
 * Test.assertEquals(round(circo3.getPerimeter()), round(2*Math.PI*randomInt));
 */

class Rectangle {
    sideA: number;
    sideB: number;
    constructor(sideA: number, sideB: number){
      this.sideA = sideA;
      this.sideB = sideB;
    }

    getArea(): number {
        return this.sideA*this.sideB
    };

    getPerimeter(): number {
        return (this.sideA + this.sideB) *2 
    };
  }
  
  
  class Circle {
      //put code here
      radius: number;
      constructor(radius: number) {
          this.radius = radius;
      }

      getArea(): number {
          return Math.PI * this.radius ** 2;
      }

      getPerimeter(): number {
          return Math.PI * this.radius * 2;
      }
  }
