$(document).ready (function(){
    var elem = document.getElementById('doodle');
    var two = new Two ({fullscreen: true}).appendTo(elem);
    
    var position = new Two.Vector(two.width/2, two.height/2);
    
    var head = two.makeCircle(position.x, position.y, 100);
    head.fill = '#52C5DC';
    head.noStroke();
    
    var nose;
    nose = two.makeCircle(position.x, position.y+30, 32);
    nose.fill = '#EFB8D2';
    nose.noStroke();
    
    var eyeLeft;
    eyeLeft = two.makeCircle(position.x+42, position.y-26, 32);
    eyeLeft.fill = '#FFFFFF';
    eyeLeft.noStroke();
    
    var pupilLeft;
    pupilLeft = two.makeCircle(position.x+42, position.y-26, 20);
    pupilLeft.fill = '#7FC35E';
    pupilLeft.noStroke();
    
    var earLeft;
    earLeft = two.makeEllipse(position.x-100, position.y-80, 26, 46);
    earLeft.fill = '#52C5DC';
    earLeft.noStroke();
    earLeft.rotation = Math.PI / 4;
    
        var eyeRight;
    eyeRight = two.makeCircle(position.x-42, position.y-26, 32);
    eyeRight.fill = '#FFFFFF';
    eyeRight.noStroke();
    
    var pupilRight;
    pupilRight = two.makeCircle(position.x-42, position.y-26, 20);
    pupilRight.fill = '#7FC35E';
    pupilRight.noStroke();
    
    var earRight;
    earRight = two.makeEllipse(position.x+100, position.y-80, 26, 46);
    earRight.fill = '#52C5DC';
    earRight.noStroke();
    earRight.rotation = -Math.PI / 4;
    
    var tongue;
    tongue = two.makePolygon(0,0, 100,0, 100,0, 90,58, 50,80, 10,58, 0,0);
    tongue.curved = true;
    tongue.fill = '#EE3E36';
    tongue.noStroke();
    tongue.translation.x = position.x-40;
    tongue.translation.y = position.y+86;
    tongue.scale = 0.4;
    tongue.rotation = -Math.PI / 5;
    
    
    

    two.update();

})