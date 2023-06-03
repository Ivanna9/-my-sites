var area = document.getElementById('area');
var cell = document.getElementsByTagName('cell');

var player = "x";
var winIndex = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
];

for( var i=1; i<=9; i++){
    area.innerHTML +="<div class ='cell' pos="+i+"></div>";
}

for (var i=0; i<cell.length; i++) {
    cell[i].addEventListener('click',cellClick, false );
}

function cellClick() {
    var data =[];
    if (!this.innerHTML) {
        this.innerHTML= player;
    }
    else{
        alert("ячейка занята сволоч ти така");
        return;
    }

for (var i in  cell){
    if (cell[i].innerHTML== player){
        data.push(parseInt(cell[i].getAttribute('pos')));
         }
    }
 player = player == "x" ? "o" : "x";

 if (checkWin(data)){
    alert ("WIN:"+player);

 }
}
function checkWin(data) {
for(var i in winIndex){
    var win=true;
    for (var j in winIndex[i]){
        var id=winIndex[i][j];
        var ind = data.indexOf(id);

        if(win == -1){
            win = false
        }
        }
        if(win) return true;
    }
}
