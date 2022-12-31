var area = document.getElementById('area');
var cell = document.getElementsByTagName('cell');

for( var i=1; i<=9; i++){
    area.innerHTML +="<div class ='cell' pos="+i+"></div>";
}