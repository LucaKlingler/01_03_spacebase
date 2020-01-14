class Invader {
  constructor(width, height, posX, posY, appearance, id) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.appearance = appearance;
    this.id = id;
  }

  shootLaser() {
    // eslint-disable-next-line no-console
    console.log("Invader "+this.id+ "Laser shot");
  }

  explode() {
    // eslint-disable-next-line no-console
    console.log("Invader "+this.id+" exploded");
  }

  /*
  isHitByBullet(bulletX, bulletY) {
    // prüfen ob der Bullet den Invader trifft
  }
  */

  static generateInvader(width, height, rand = Math.random()) {
    const invader = [];
    for (let x = 0; x < width; x += 1) {
      for (let y = 0; y < height; y += 1) {
        const randProcessed = rand.toString()[x * y];
        if (parseInt(randProcessed, 10) > 3) {
          if (!Array.isArray(invader[x])) {
            invader[x] = [];
            invader[x][y] = 1;
          } else {
            invader[x][y] = 1;
          }
        } else if (!Array.isArray(invader[x])) {
          invader[x] = [];
          invader[x][y] = 0;
        } else {
          invader[x][y] = 0;
        }
      }
    }
    return invader;
  }
}