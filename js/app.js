'use strict';

function Effect (name, link, image, creator, instagram, userName) {
    this.name = name,
    this.link = link,
    this.image = image,
    this.creator = creator,
    this.instagram = instagram,
    this.userName = userName,
    Effect.all.push(this);
}

Effect.all = localStorage['Effect.all'] ? JSON.parse(localStorage[Effect.all]) : [];


if (Effect.all.length < 1) {
    var PrettyFunnyFace = new Effect(
        'Pretty Funny Face',
        'https://www.instagram.com/a/r/?effect_id=1535206053289832',
        './img/prettyFunnyFace.jpg',
        'Michele Saba',
        'https://www.instagram.com/michelemsaba/',
        '@michelemsaba'
    );
    var PrettyFunnyFace = new Effect(
        'Pretty Funny Face',
        'https://www.instagram.com/a/r/?effect_id=1535206053289832',
        './img/prettyFunnyFace.jpg',
        'Alexus',
        'https://www.instagram.com/michelemsaba/',
        '@michelemsaba'
    );
    var glitterFun = new Effect(
        'Glitter Fun',
        'https://www.instagram.com/a/r/?effect_id=290978304952955',
        './img/glitterEffectIcon.jpg',
        'Michele Saba',
        'https://www.instagram.com/michelemsaba/',
        '@michelemsaba'
    );
    var eyeBrow = new Effect(
        'Brow',
        'https://www.instagram.com/a/r/?effect_id=299968370713863',
        './img/eyebrow.jpg',
        'Michele Saba',
        'https://www.instagram.com/michelemsaba/',
        '@michelemsaba'

    );
    var strobing = new Effect(
        'Strobing',
        'https://www.instagram.com/a/r/?effect_id=299968370713863',
        './img/Strobing.jpg',
        'Michele Saba',
        'https://www.instagram.com/michelemsaba/',
        '@michelemsaba'
    );
    var starBright = new Effect(
        'Star Bright',
        'https://www.instagram.com/a/r/?effect_id=243834816552692',
        './img/floatingStars.jpg',
        'Michele Saba',
        'https://www.instagram.com/michelemsaba/',
        '@michelemsaba'
    );
}
function renderEffects() {
    var effectsContainer = document.getElementById('effects-container');

    if (effectsContainer) {
        for (var i = 0; i < Effect.all.length; i++){
            var card = document.createElement('div');
            card.className= 'card col-lg-2 col-xl-2  col-sm-5';
            var ellink =  Effect.all[i].link
            var imgContainer = document.createElement('a');
            imgContainer.setAttribute('href', ellink);
            imgContainer.setAttribute('target', 'blank');
            var icon = document.createElement('img'); 
            icon.className='card-img-top';
            icon.src = Effect.all[i].image;
            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            var name = document.createElement('h5');
            name.className='card-title';
            name.innerText = Effect.all[i].name; 
            // var creator= document.createElement('p');
            // creator.className='card-text sub-heading';
            // creator.innerText = 'Creator: ' + Effect.all[i].userName; 
            var instagram= document.createElement('a');
            instagram.className='card-text sub-heading';
            var ilink =  Effect.all[i].instagram;
            instagram.innerText = 'creator ' + Effect.all[i].userName;
            instagram.setAttribute('href', ilink);
            instagram.setAttribute('target', 'blank');
            var link = document.createElement('a');
            link.className = 'btn button '
            link.setAttribute('target', 'blank');
            var ellink =  Effect.all[i].link
            link.innerText =  Effect.all[i].name;
            link.setAttribute('href', ellink);

            effectsContainer.appendChild(card);
            imgContainer.appendChild(icon);
            card.appendChild(imgContainer);
            card.appendChild(cardBody);
            cardBody.appendChild(name);
            // cardBody.appendChild(creator);
            cardBody.appendChild(instagram);
            cardBody.appendChild(link);
        }
    } 
}
renderEffects();