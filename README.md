# SPACE INVADERS
In Verbindung der Fächer Programmiersprachen 1 und Datenbanken sollten wir ein "Space Invader" ähnliches Spiel programmieren. Dafür gab uns unser Dozent (Florian Geiselhart) eine Datei als Vorlage mit groben Anleitungen. Darin sollten wir dann unser Spiel aufbauen. Die Vorlage enthielt schon Code, welcher die Grundstuktur des Spiels beschrieb. Unsere Aufgabe war es dann, die Invader darstellen, sie wandern lassen, schießen lassen und treffbar machen. Desweiteren sollte eine Variable die Treffer hoch zählen.  
## How to use:
Das Spiel lässt sich von GitHub direkt herunterladen. Durch das Öffnen der Datei "index.js" startet sich der jeweils als  Standartbrowser festgelegte Browser und das Spiel startet direkt.
### Steurung Spaceship
**Pfeiltaste rechts:** nach rechts fliegen  
**Pfeiltaste links:** nach links fliegen  
**Leertaste:** schießen  
### Steuerung Spiel
**Pausieren:** Taste "P" / Pausebutton drücken  
**Invader schießen lassen:** Taste "L" (Untere mittlere Invader schießt zurück, ACHTUNG! ESKALATION)  
**Restart:** Restart button drücken
## Structure / Aufbau
### Klassen:  
* **invader_class.js:** Grundlegenden Invadern mit folgenden Eigenschaften:
  * `this.width` gibt die Breite der Invader an
  * `this.height` gibt die Höhe der Invader an
  * `this.posX & this.posY` gibt X und Y Koordinate der Invader an
  * `this.rand` Zufälliges generieren der Invader (optische Erscheinung)
  * `this.appearance` speichern der generierten Invader
  * `this.id` benennt die Invader
  * `this.explodeState` gibt an ob Invader getroffen wurde
  * `this.lasers` speichert alle Laser
  * `this.laserId` zählt bei jedem neuen Laser eins hoch  

* **InvaderRow.js:** eine Reihe von Invadern mit folgenden Eigenschaften:
  * `this.posX & this.posY` gibt X und Y Koordinaten der Reihe an
  * `this.cols` gibt die Breite des Displays an 
  * `this.rand` Zufälliges generieren der Invader
  * `this.invWidth` gibt die Breite an
  * `this. invHeight` gibt die Höhe an
  * `this.invaderCount` sagt wie viel Invader in einer Reihe sein sollen
  * `this.id` benennt die Reihe
  * `this.spaces` definiert den Platz zwischen den einzelnen Invader
  * `this.rowWidth` gibt die Breite der Reihe an
  * `this.invaders` enthält alle Invaders 

* **bullet.js:** geschossenen Bullets mit folgenden Eigenschaften:
  * `this.posX & this.posY` gibt X und Y Koordinaten der Bullets an
  * `this.id` benennt die Bullets

* **Laser.js:** geschossene Laser der Invader mit folgenden Eigenschaften:
  * `this.posX & this.posY` gibt X und Y Koordinaten der Laser an
  * `this.id` benennt die Laser
### Zentrale Funktionen:
`renderBullets():` Eine Funktion, die jeden Invader durchgeht und jede Bullet durchgeht und ausrechnet, wie der Abstand zwischen Invader und Bullet ist. Falls dieser kleiner ist als der Invaderdurchmesser explodiert der Invader, die Bullet wird gelöscht und der Shotcount (Scoreboard) wird hochgezählt. Falls die Bullets den Rand erreichen werden sie auch gelöscht, damit sie nicht ins Unendliche fliegen.  
`renderLasers():` Geht jeden Invader beziehungsweise deren Laser durch und berechnet den Abstand zwischen Laser und Spaceship. Falls dieses getroffen wird, wird das Spaceship und der Laser entfernt, das Spiel beschleunigt und das Spielende wird eingeleitet. Wenn der Laser den Rand erreicht, wird er gelöscht.  
`renderInvaders():` Das Spiel wird alle 40 ms gerendert. Alle 25 mal bewegt die Funktion die Invader um einen definierten Step weiter. Wenn die Invader den Rand erreichen werden sie eine Zeile weiter nach unten bewegt und ändern die Richtung. Wenn sie den unteren Rand erreichen, verliert der Spieler.
