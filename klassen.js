let currentInvaderBullets = [];

function invaderFireBullet() {
  currentInvaderBullets.push({
    x: invadersPos - 3,
    y: rows + 4
  });
}
renderInvaderBullets(renderStr);

function renderInvaderBullets() {
  //TODO: Prüfen ob eine Kugel einen Invader oder ein Obstacle trifft, wenn ja Aktion auslösen

  //Kugeln entfernen die am oberen Rand angekommen sind ohne Treffer
  currentInvaderBullets = currentInvaderBullets.filter(invaderBullet => invaderBullet.y > 1);
  //Kugeln einen Schritt weiter bewegen, dann rendern
  currentInvaderBullets.forEach((invaderBullet) => {
    invaderBullet.y -= 1;
    renderStr = setCharsAt(renderStr, xyToStringPos(invaderBullet.x, invaderBullet.y), "|");
  })
}
/*Flos Tafelbild*/
class Invader {
  constructor(width, height, posX, posY, appearance, id) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY =posY;
    this.appearance = appearance;
    this.id = id;
  }

  shootLaser() {
    console.log("Invader " +this.id+" Laser shot")
  }

  explode() {
    console.log("Invader "+this.id+" exploded")
  }
  isHitByBullet(bulletX, bulletY) {
    //prüfen ob der Bullet den Invader trifft
  }
  static generateInvader() {
    return "ABC";
  }
}

myInvaders = [];

for (let index = 0; index < 5; index++) {
  let invaderLines = Invader.generateInvader();

  myInvaders.push(
    new Invader(10,10, index * 20, 0, invaderLines, index)
  )
}

console.log(myInvaders)