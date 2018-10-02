let p1y = 40;
let p2y = 40;
let pt = 10;
let ph = 100;
let bx = 50;
let by = 50;
let bd = 12;
let xv = 4;
let yv = 4;
let score1 = 0;
let score2 = 0;
let ais = 2;

window.onload=function() {
  let c = document.getElementById('gc');
  let cc = c.getContext('2d');
  setInterval(update,1000/60);
  c.addEventListener('mousemove',function(e) {
    p1y=e.clientY-ph/2;
  });

  function reset() {
    bx=c.width/2;
    by=c.height/2;
    xv=-xv;
    yv=3;
  }
  function update() {
    bx+=xv;
    by+=yv;
    if(by<0 && yv<0) {
      yv=-yv;
    }
    if(by>c.height && yv>0) {
      yv=-yv;
    }
    if(bx<0) {
      if(by>p1y && by<p1y+ph) {
        xv=-xv;
        dv=by-(p1y+ph/2);
        yv=dy*0.3;
      } else {
        score2++;
        reset();
      }
    }

    if(bx>c.width) {
      if(by>p2y && by< p2y+ph) {
        xv=-xv;
        dv=by-(p2y+ph/2);
        yv=dy*0.3;
      } else {
        score1++;
        reset();
      }
    }

    if(p2y+ph/2<by) {
      p2y+=ais;
    }else {
      p2y-=ais;
    }

    cc.fillStyle='#282c34';
    cc.fillRect(0,0,c.width,c.height);
    cc.fillStyle='#EBEBD3';
    cc.fillRect(bx-bd/2,by-bd/2,bd,bd);
    cc.font="40px Georgia";
    cc.fillText(score1,100,100);
    cc.fillText(score2,c.width-100,100);
    cc.fillStyle="#73c990";
    cc.fillRect(0,p1y,pt,ph);
    cc.fillStyle="#e2c08d";
    cc.fillRect(c.width-pt,p2y,pt,ph);
  }
}
