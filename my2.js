function play_se(){
    var おばけのウケねらい = new Audio('おばけのウケねらい.mp3');
    おばけのウケねらい.play();
}


$(function(){
    $('#2曲目').click(play_se);
});