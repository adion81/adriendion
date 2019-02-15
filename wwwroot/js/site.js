var count = 0;

function hamburger(x) {
    x.classList.toggle('change');
    count ++;
    if(count % 2 === 0){
        document.getElementById('menu').style.visibility = 'hidden';
        document.getElementById('title').style.left = '-1000px';
    }
    else if(count % 2 === 1){
        document.getElementById('menu').style.visibility = 'visible';
        document.getElementById('title').style.left = '-.5%';
    }
    
}

function bookmark(address){
    var goTo = document.getElementById(address);
    goTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
var modalCount = 0
function movesix(id, partial){
    modalCount ++;
    id.classList.toggle('six');
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        console.log(partial);
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}

function movefive(id, partial){
    modalCount ++;
    console.log(modalCount);
    id.classList.toggle('five');
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function movefour(id, partial){
    id.classList.toggle('four');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function movethree(id, partial){
    id.classList.toggle('three');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function movetwo(id, partial){
    id.classList.toggle('two');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}
function moveone(id, partial){
    id.classList.toggle('one');
    modalCount ++;
    if(modalCount % 2 === 1){
        document.getElementById('skill-modal').style.display = 'block';
        document.getElementById(`${partial}`).style.display = 'block';
    }
    else if(modalCount % 2 === 0){
        document.getElementById('skill-modal').style.display = 'none';
        document.getElementById(`${partial}`).style.display = 'none';
    }
    console.log(id);
}