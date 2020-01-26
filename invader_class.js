// eslint-disable-next-line no-unused-vars
class Invader {
  constructor(width, height, posX, posY, id, rand = Math.random()) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.rand = rand;
    this.appearance = this.generateInvader();
    this.id = id;
    this.explodeState = 0;
    this.lasers = [];
    this.lasersId = 0;
  }

  shootLaser() {
    // eslint-disable-next-line no-console
    console.log(`Invader ${this.id} Laser shot`);
    // eslint-disable-next-line no-undef
    this.lasers.push(new Laser(this.posX + this.width,
      this.posY + this.height, this.laserId += 1));
  }

  explode() {
    // eslint-disable-next-line no-console
    console.log(`Invader ${this.id} exploded`);

    if (this.explodeState < 1) {
      this.appearance = [
        [0, 0, 2, 0, 0],
        [0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0],
        [2, 0, 0, 0, 2],
        [2, 0, 0, 0, 2],
      ];
      this.explodeState = 1;
    }

    /* this.appearance = [
      [0, 1, 0, 2, 0],
      [0, 0, 2, 0, 1],
      [1, 2, 0, 2, 0],
      [0, 1, 2, 0, 0],
      [0, 2, 0, 2, 1],
    ]; */
  }

  /*
  isHitByBullet(bulletX, bulletY) {
    // prüfen ob der Bullet den Invader trifft
  }
  */

  generateInvader() {
    const invader = [];
    // const rand = Math.random();
    for (let x = 0; x < this.width; x += 1) {
      for (let y = 0; y < this.height; y += 1) {
        const randProcessed = this.rand.toString()[x * y];
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
