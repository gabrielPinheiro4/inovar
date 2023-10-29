//////////////////////intro///////////////////q
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)

    })
})

////////////////////////Scroll Suave para Link Interno//////////////////////////q
const anchorLinks = document.querySelectorAll(
    'a[href^=\\#]:not([href$=\\#])'
  );

  anchorLinks.forEach((anchorLink) => {
    let hashval = anchorLink.getAttribute('href');
    let target = document.querySelector(hashval);

    anchorLink.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      anchorLinks.forEach((anchorLink) => {
        anchorLink.classList.remove('active') ;
      });

      e.target.classList.add('active');

      scroll.scrollTo(target);
    });
  });


///////////////////////////////show menu//////////////////////////////////////////////////
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

 //////////////////////////////////////////menu show/////////////////////////////////////qq
 if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
 }

////////////////////////////////////  menu hidden//////////////////////////////////q
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
 }

//////////////////////////click outside close menu////////////////////
document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('header');
  
    if (!box.contains(event.target)) {
        navMenu.classList.remove('show-menu');
    }
  });
  



///////////////////////////////////////navbar/////////////////////////qq
jQuery(document).ready(function($){

    window.onscroll = function() {
        if(window.pageYOffset > 140){
            $('#header').addClass("active");
        }else {
            $('#header').removeClass("active");
        }
    }
})

///////////////////////// locomotive scroll //////////////////////////////
const Scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
     mobile: {
       smooth: true,
       breakpoint: 0,
       getDirection: true,
   },
   tablet: {
       smooth: true,
       breakpoint: 0,
       getDirection: true,
   }
});

document.addEventListener('lazyloaded', function(){
    Scroll.update()
});

//////////////////////q//anime js clientes 1////////////////////////////q

const button3 = document.querySelector('#cliente__1');

const MousehoverAnimation = () => {
    anime({
        targets: '#cliente__1', 
        with: '100%',
        scale: {
            value: 1.4
        },
        duration: 1000
      });

}

const MouseoutAnimation = () => {
    anime({
        targets: '#cliente__1',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button3.addEventListener('mouseover', MousehoverAnimation);
button3.addEventListener('mouseout', MouseoutAnimation);


////////////////////////////////////anime js clientes 2/////////////qqq
const button4 = document.querySelector('#cliente__2');

const MOusehoverAnimation = () => {
    anime({
        targets: '#cliente__2', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOuseoutAnimation = () => {
    anime({
        targets: '#cliente__2',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button4.addEventListener('mouseover', MOusehoverAnimation);
button4.addEventListener('mouseout', MOuseoutAnimation);


////////////////////////////qq//anime js clientes 3///////////////////////qq
const button5 = document.querySelector('#cliente__3');

const MOUsehoverAnimation = () => {
    anime({
        targets: '#cliente__3', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUseoutAnimation = () => {
    anime({
        targets: '#cliente__3',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button5.addEventListener('mouseover', MOUsehoverAnimation);
button5.addEventListener('mouseout', MOUseoutAnimation);


////////////////////////////////anime js clientes 4///////////////////////////////q
const button6 = document.querySelector('#cliente__4');

const MOUSehoverAnimation = () => {
    anime({
        targets: '#cliente__4', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUSeoutAnimation = () => {
    anime({
        targets: '#cliente__4',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button6.addEventListener('mouseover', MOUSehoverAnimation);
button6.addEventListener('mouseout', MOUSeoutAnimation);


///////////////////////////////qq//anime js clientes 5/////////////////////////////////qq
const button7 = document.querySelector('#cliente__5');

const MOUSEhoverAnimation = () => {
    anime({
        targets: '#cliente__5', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUSEoutAnimation = () => {
    anime({
        targets: '#cliente__5',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button7.addEventListener('mouseover', MOUSEhoverAnimation);
button7.addEventListener('mouseout', MOUSEoutAnimation);


//////////////////////q//anime js clientes 6//////////////////////////////qqq
const button8 = document.querySelector('#cliente__6');

const MOUSEHoverAnimation = () => {
    anime({
        targets: '#cliente__6', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUSEOutAnimation = () => {
    anime({
        targets: '#cliente__6',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button8.addEventListener('mouseover', MOUSEHoverAnimation);
button8.addEventListener('mouseout', MOUSEOutAnimation);


/////////////////q/anime js clientes 7//////////////////////////////q
const button9 = document.querySelector('#cliente__7');

const MOUSEHOverAnimation = () => {
    anime({
        targets: '#cliente__7', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUSEOUtAnimation = () => {
    anime({
        targets: '#cliente__7',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button9.addEventListener('mouseover', MOUSEHOverAnimation);
button9.addEventListener('mouseout', MOUSEOUtAnimation);


//////////////////////////////anime js clientes 8///////////////////////q
const button10 = document.querySelector('#cliente__8');

const MOUSEHOVerAnimation = () => {
    anime({
        targets: '#cliente__8', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUSEOUTAnimation = () => {
    anime({
        targets: '#cliente__8',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button10.addEventListener('mouseover', MOUSEHOVerAnimation);
button10.addEventListener('mouseout', MOUSEOUTAnimation);

//////////////////////////////anime js clientes 9///////////////////////q
const button1 = document.querySelector('#cliente__9');

const mOUSEHOVerAnimation = () => {
    anime({
        targets: '#cliente__9', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const mOUSEOUTAnimation = () => {
    anime({
        targets: '#cliente__9',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button1.addEventListener('mouseover', mOUSEHOVerAnimation);
button1.addEventListener('mouseout', mOUSEOUTAnimation);

//////////////////////////////anime js clientes 10///////////////////////q
const button2 = document.querySelector('#cliente__10');

const MOuseHoverAnimation = () => {
    anime({
        targets: '#cliente__10', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MouseOUTAnimation = () => {
    anime({
        targets: '#cliente__10',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button2.addEventListener('mouseover', MOuseHoverAnimation);
button2.addEventListener('mouseout', MouseOUTAnimation);

//////////////////////////////anime js clientes 11///////////////////////q
const button11 = document.querySelector('#cliente__11');

const MOUSEHOVERAnimation = () => {
    anime({
        targets: '#cliente__11', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUSEOUTANimation = () => {
    anime({
        targets: '#cliente__11',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button11.addEventListener('mouseover', MOUSEHOVERAnimation);
button11.addEventListener('mouseout', MOUSEOUTANimation);

//////////////////////////////anime js clientes 12///////////////////////q
const button12 = document.querySelector('#cliente__12');

const MOUSEHOVerAnimatiON = () => {
    anime({
        targets: '#cliente__12', 
        with: '100%',
        scale: {
           value:1.4
        },
        duration: 1000
      });

}

const MOUSEOUTAnimatiON = () => {
    anime({
        targets: '#cliente__12',
        with: '50%',
        scale: {
            value: 1
        },
        duration: 1000
      });

}

button12.addEventListener('mouseover', MOUSEHOVerAnimatiON);
button12.addEventListener('mouseout', MOUSEOUTAnimatiON);


////////////////////////////////////////TYPED JS///////////////////////
var typed = new Typed('.element', {
    strings: ['Estratégia' , 'Design', 'Branding'],
    loop:true,
    typeSpeed:70,
    backSpeed:70,
    smartBackspace: true // Default value
  });

   /////////////////////////////////FORMULARIO////////////////////
   const form = document.getElementById('form');
   const campos = document.querySelectorAll('.required');
   const spans = document.querySelectorAll(".span__required")
   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   form.addEventListener('enviar', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    numberValidate();
    projetoValidate();
    textareaValidate();
   })


   function setError(index){
    campos[index].style.border = '2.5px solid #e63636';
    spans[index].style.display = 'block';
    
   }

   function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
   }

   function nameValidate(){
    if(campos[0].value.length < 3){
       setError(0);

    }else{
        removeError(0);
    }
   }

   function emailValidate(){
    if(emailRegex.test(campos[1].value)){
       removeError(1);
    }else{
        setError(1);
    }
   }

   function numberValidate(){
    if(campos[2].value.length < 5){
        setError(2);
    }else{
        removeError(2);
    }
   }

   function projetoValidate(){
    if(campos[3].value.length <= 2){
        setError(3);
    }else{
        removeError(3);
    }
   }

   function textareaValidate(){
    if(campos[4].value.length <= 1){
        setError(4);
    }else{
        removeError(4);
    }
   }
