gApp.maps = (function() {
  "use strict";

  var map1 = [
    [2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2],
    [0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,2],
    [0,0,0,0,0,7,0,0,0,0,0,0,0,10,0,2],
    [2,2,0,0,0,8,8,0,0,0,0,10,0,10,0,2],
    [2,2,0,0,1,1,0,0,0,0,0,0,0,0,0,2],
    [2,2,0,0,1,1,0,0,0,0,0,0,0,0,0,2],
    [2,2,0,0,1,1,0,0,0,0,0,0,0,0,0,2],
    [4,2,0,0,1,1,1,0,0,0,0,0,10,0,0,2],
    [4,4,0,0,1,1,1,0,0,0,0,0,10,0,0,2],
    [4,4,0,0,1,1,1,0,0,0,0,0,0,0,0,2],
    [4,4,2,2,1,1,1,2,2,2,2,2,2,0,0,2],
    ],
    map2 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [0,0,0,9,0,0,0,9,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2,0,0,7,0,0,0,0,0,8,0,0,0,0,0,2],
    [2,0,0,7,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [2,0,0,7,0,0,0,0,0,8,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,1,1,0,0,0,0,4],
    [4,4,2,2,2,2,2,2,1,1,1,1,2,2,2,2],
    ],
    map3 = [
    [2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0,0,0,7,0,0,0,0,2],
    [2,0,0,0,0,0,0,8,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [2,0,0,0,0,2,2,2,2,2,2,0,7,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,7,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ],
    map4 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,0,0,0,0,0,0,0,0,8,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,8,0,0,0,2],
    [2,0,0,0,0,2,2,2,2,2,2,0,0,0,0,4],
    [2,0,0,0,0,2,2,2,2,2,2,0,0,0,0,4],
    [4,0,0,9,0,0,0,0,0,7,0,0,0,0,0,4],
    [0,0,0,0,9,0,0,7,0,0,0,0,0,0,0,4],
    [0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,4],
    [4,4,2,2,2,2,2,2,2,0,0,2,2,2,2,2],
    ],
    map5 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [2,0,0,0,0,2,2,2,2,2,2,2,2,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ],
    map6 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,9,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,0,7,0,0,0,0,0,8,9,0,0,0,0,0],
    [2,0,0,0,0,0,0,0,0,9,8,0,0,0,10,0],
    [2,0,0,0,0,2,2,2,2,0,0,2,2,2,2,4],
    [4,0,0,0,0,0,0,0,2,0,0,2,2,4,4,4],
    [4,0,0,0,0,0,0,0,2,0,0,2,2,4,4,2],
    [4,0,0,0,0,0,0,0,2,0,0,2,2,4,4,2],
    [4,4,2,2,2,2,2,2,2,0,0,2,2,2,2,2],
    ],
    map7 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,11,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ],
    mapList = [
      [map6, map5, map4],
      [map3, map2, map1],
      [undefined, undefined, map7]
    ];
    
  var mapState = function() {
    this.tileX = 0;
    this.tileY = 0;
    this.shiftX = 0;
    this.shiftY = 0;
    this.mapX = 0;
    this.mapY = 1;
    this.mapCurr = mapList[this.mapY][this.mapX];
    
    this.update = function() {

      /*CLEAR ITEMS WHEN CHANGING ROOMS*/
      for(var i in gApp.item.weaponsOut) {
        if(gApp.item.weaponsOut.hasOwnProperty(i)) {
          delete gApp.item.weaponsOut[i];
        }
      }
      this.mapCurr = mapList[this.mapY][this.mapX];
       
    };

    this.render = function() {
      /*DRAWING CURRENT ROOM*/
      for(var y=0; y < this.mapCurr.length; y+=1) {
        for(var x=0; x < this.mapCurr[y].length; x+=1) {

          this.tileX = x * gApp.tileSize;
          this.tileY = y * gApp.tileSize + gApp.inv.inventory.size;

          if(this.mapCurr[y][x] === 0 || this.mapCurr[y][x] > 6) {
            image(gApp.spr.tiles, this.tileX, this.tileY, gApp.tileSize, gApp.tileSize, 32, 0, gApp.spr.size, gApp.spr.size, );
          }
          if(this.mapCurr[y][x] === 1) {
            image(gApp.spr.tiles, this.tileX, this.tileY, gApp.tileSize, gApp.tileSize, 16, 0, gApp.spr.size, gApp.spr.size, );
          }
          if(this.mapCurr[y][x] === 2) {
            image(gApp.spr.tiles, this.tileX, this.tileY, gApp.tileSize, gApp.tileSize, 16, 16, gApp.spr.size, gApp.spr.size, );
          }
          if(this.mapCurr[y][x] === -1) {
            image(gApp.spr.tiles, this.tileX, this.tileY, gApp.tileSize, gApp.tileSize, 0, 0, gApp.spr.size, gApp.spr.size, );
          }
          //green tiles
          if(this.mapCurr[y][x] === 4) {
            image(gApp.spr.tiles, this.tileX, this.tileY, gApp.tileSize, gApp.tileSize, 112, 16, gApp.spr.size, gApp.spr.size, );
          }
          if(this.mapCurr[y][x] === 5) {
            image(gApp.spr.tiles, this.tileX, this.tileY, gApp.tileSize, gApp.tileSize, 112, 0, gApp.spr.size, gApp.spr.size, );
          }
          if(this.mapCurr[y][x] === 6) {
            image(gApp.spr.tiles, this.tileX, this.tileY, gApp.tileSize, gApp.tileSize,100, 0, gApp.spr.size, gApp.spr.size, );
          }
        }
      }
    };

    this.createEnemies = function() { 
      for(var y=0; y < this.mapCurr.length; y+=1) {
        for(var x=0; x < this.mapCurr[y].length; x+=1) {
          this.tileX = x * gApp.tileSize;
          this.tileY = y * gApp.tileSize + gApp.inv.inventory.size;
          if(this.mapCurr[y][x] === 7) {
            gApp.enemy.State.enemies.push(new gApp.enemy.Enemy(this.tileX, this.tileY, "red_m", x, y));
          } 
          if(this.mapCurr[y][x] === 8) {
            gApp.enemy.State.enemies.push(new gApp.enemy.Enemy(this.tileX, this.tileY, "blue_m", x, y));
          } 
          if(this.mapCurr[y][x] === 9) {
            gApp.enemy.State.enemies.push(new gApp.enemy.Enemy(this.tileX, this.tileY, "red_c", x, y));
          } 
          if(this.mapCurr[y][x] === 10) {
            gApp.enemy.State.enemies.push(new gApp.enemy.Enemy(this.tileX, this.tileY, "blue_c", x, y));
          }
          if(this.mapCurr[y][x] === 11) {
            gApp.enemy.State.enemies.push(new gApp.enemy.Enemy(this.tileX, this.tileY, "dodongo", x, y));
          }
        }
      }
    }
  };

  return {
    State: new mapState()
  };

})();
