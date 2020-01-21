class invaderRow {
  constructor(posX, posY, cols, invaderCount, id, invHeight, invWidth, rand) {
    this.posX = posX;
    this.posY = posY;
    this.cols = cols;
    this.rand = rand;
    this.invWidth = invWidth;
    this.invHeight = invHeight;
    this.invaderCount = invaderCount;
    this.id = id;
    this.spaces = this.cols / this.invaderCount / 2;
    this.rowWidth = this.invWidth * this.invaderCount + this.spaces * this.invaderCount;
    this.invaders = this.generateInvaderRow();
    
  }

generateInvaderRow (){
    const temp = [];
    let xPos = this.spaces;
    const yPos = 0;

    for (let i=0; i < this.invaderCount; i += 1) {
      temp.push(new Invader(this.invWidth, this.invHeight, xPos, yPos, i, this.rand));
      xPos += this.spaces + this.invWidth;
    }
    return temp;
  }
}
