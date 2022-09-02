const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const nav = document.querySelectorAll('.rond-nav-bouton');
const avatar = document.querySelector('.avatar');
const identite = document.querySelector('.identite');
const paragraphe = document.querySelector('.paragraphe-avatar');

toggle.addEventListener('click', function() {
    body.classList.toggle('animation');
    body.classList.toggle('gris');
});

nav[0].classList.add('plein')

nav.forEach((item) => {
    item.addEventListener('click', function(e) {
        console.log(e.target.id)

        switch(e.target.id) {
            case "un":
                nav[0].classList.add('plein');
                nav[1].classList.remove('plein');
                nav[2].classList.remove('plein');
                nav[3].classList.remove('plein');
                avatar.src = "images/avatar-anisha.png";
                identite.innerHTML ="Anisha Li"
                paragraphe.innerHTML="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”";
                break;

            case "deux":
                nav[0].classList.remove('plein');
                nav[1].classList.add('plein');
                nav[2].classList.remove('plein');
                nav[3].classList.remove('plein');
                avatar.src = "images/avatar-ali.png";
                identite.innerHTML ="Ali Bravo"
                paragraphe.innerHTML="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
                break;

            case "trois":
                nav[0].classList.remove('plein');
                nav[1].classList.remove('plein');
                nav[2].classList.add('plein');
                nav[3].classList.remove('plein');
                avatar.src = "images/avatar-richard.png";
                identite.innerHTML ="Richard Watts"
                paragraphe.innerHTML="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
                break;

            case "quatre":
                nav[0].classList.remove('plein');
                nav[1].classList.remove('plein');
                nav[2].classList.remove('plein');
                nav[3].classList.add('plein');
                avatar.src = "";
                identite.innerHTML =""
                paragraphe.innerHTML=""
                
                break;
        }
    })
});