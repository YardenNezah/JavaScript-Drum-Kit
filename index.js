document.body.addEventListener('keypress', function(event) {
    var arr=[65,83,68,70,71,72,74,75,76];
    var key = event.which || event.keyCode;
    for(var i=0;i<arr.length;i++) {
        if(arr[i]==key) {
            var audio= document.getElementsByTagName('audio')[i];
            var colorKey= document.getElementsByTagName('div')[i].style;
            audio.play();
            colorKey.borderColor='#ffc600';
            colorKey.transform= 'scale(1.1)';
            colorKey.boxShadow='0 0 1rem #ffc600';
        }
    }
});

