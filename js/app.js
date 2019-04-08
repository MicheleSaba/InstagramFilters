'use strict';

function Effect (name, link, image, creator) {
    this.name = name,
    this.link = link,
    this.image = image,
    this.creator = creator,
    Effect.all.push(this);
}

Effect.all = localStorage['Effect.all'] ? JSON.parse(localStorage[Effect.all]) : [];


if (Effect.all.length < 1) {
    var PrettyFunnyFace = new Effect(
        'Pretty Funny Face',
        'https://www.instagram.com/a/r/?effect_id=1535206053289832',
        './img/prettyFunnyFace.jpg',
        'Michele Saba'
    );
    var glitterFun = new Effect(
        'Glitter Fun',
        'https://www.instagram.com/a/r/?effect_id=290978304952955',
        './img/glitterEffectIcon.jpg',
        'Michele Saba'
    );
    var eyeBrow = new Effect(
        'Brow',
        'https://www.instagram.com/a/r/?effect_id=299968370713863',
        './img/eyebrow.jpg',
        'Michele Saba'
    );
    var strobing = new Effect(
        'Strobing',
        'https://www.instagram.com/a/r/?effect_id=299968370713863',
        './img/Strobing.jpg',
        'Michele Saba'
    );
    var starBright = new Effect(
        'Star Bright',
        'https://www.instagram.com/a/r/?effect_id=243834816552692',
        './img/floatingStars.jpg',
        'Michele Saba'
    );
}
function renderEffects() {
    var effectsContainer = document.getElementById('effects-container');
   
    if (effectsContainer) {
        for (var i = 0; i < Effect.all.length; i++){
            var card = document.createElement('div');
            card.className= 'card col-lg-4 col-xl-4  col-sm-10 shadow';
            var icon = document.createElement('img'); 
            icon.className='card-img-top'
           
            icon.src = Effect.all[i].image;
            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            var name = document.createElement('h5');
            name.className='card-title';
            name.innerText = Effect.all[i].name; 
            var creator= document.createElement('p');
            creator.className='card-text';
            creator.innerText = 'Creator ' + Effect.all[i].creator; 

            // creator.innerText = Effect.all[i].creator; 
            var link = document.createElement('a');
            link.className = 'btn btn-primary'
            link.setAttribute('target', 'blank');
            var ellink =  Effect.all[i].link
            link.innerText = "Try Now!"
            link.setAttribute('href', ellink);
           
            effectsContainer.appendChild(card);
            card.appendChild(icon);
            card.appendChild(cardBody);
            cardBody.appendChild(name);
            cardBody.appendChild(creator);
            cardBody.appendChild(link);
        }
    } 
}
renderEffects();