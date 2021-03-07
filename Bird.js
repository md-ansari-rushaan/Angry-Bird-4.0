class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.tragety = [];
  }

  display() {
    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      this.tragety.push(position);
    }
    for(var i  =0 ; i<this.tragety.length;i++){
      image(this.image2,this.tragety[i][0],this.tragety[i][1],50,50);
    }
  }
}
