class Bird extends BaseClass {
    constructor(x, y) {
      super(x, y, 50, 50);      
      this.image = loadImage("sprites/bird.png");
    };


    display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      super.display();
    }
  };

  //extends - child class
  //To transfer all the properties of the parent class to the child class through the parent class' constructor 
    // - super() - parameters that are required are passed
  