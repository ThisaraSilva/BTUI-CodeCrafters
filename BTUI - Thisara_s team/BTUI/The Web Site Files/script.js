//nimbers count in load
function startCountAnimation() {
  var countElement = document.getElementById('count');
  var count = 1;

  function updateCount() {
      countElement.innerText = count;
      count++;

      if (count <= 100) {
          setTimeout(updateCount, 80); // Adjust the duration between counts (in milliseconds)
      }
  }

  updateCount();
}

// Start the count animation when the page loads
window.onload = startCountAnimation;





//navbar for smaller screens
function opnnav(){
    var x = document.getElementById('ul');
    var o = document.getElementById('opnnav');
    var c = document.getElementById('clsnav');
    var b = document.getElementById('body');
    b.style.overflow="hidden"
    c.style.display="block";
    o.style.rotate="180deg";
    o.style.transition="0.6s";
    o.style.opacity="0";
    x.style.right="0%";
    x.style.transition="0.38s";
}

function clsnav(){
    var x = document.getElementById('ul');
    var o = document.getElementById('opnnav');
    var c = document.getElementById('clsnav');
    var b = document.getElementById('body');
    b.style.overflow="auto"
    c.style.display="none";
    o.style.opacity="1";
    o.style.rotate="0deg";
    x.style.right="1000%";
    x.style.transition="0.35s";
}


const mediaQuery = window.matchMedia
('(max-width: 600px)')

if (mediaQuery.matches) {
function mediaul(){
    var x = document.getElementById('ul');
    var c = document.getElementById('clsnav');
    var o = document.getElementById('opnnav');
    var b = document.getElementById('body');
    b.style.overflow="auto"
    o.style.rotate="0deg";
    o.style.opacity="1";
    c.style.display="none";
    x.style.right="1000%";
    x.style.transition="0.38s";
}
}

//navbar bgcolor change on scroll
function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 2){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor')
    }
     
}
window.addEventListener('scroll', changeBg);
/////
function tpap(){
  var navbara = document.getElementById('totop');
  var scrollValue = window.scrollY;
  if(scrollValue < 20){
      navbara.classList.remove('totopapear');
  } else{
      navbara.classList.add('totopapear')
  }
   
}
window.addEventListener('scroll', tpap);


//navbar a color change on scroll

function changea(){
  var navbara = document.getElementById('a');
  var scrollValue = window.scrollY;
  if(scrollValue < 20){
      navbara.classList.remove('aColor');
  } else{
      navbara.classList.add('aColor')
  }
   
}
window.addEventListener('scroll', changea);
function changea1(){
  var navbara = document.getElementById('a1');
  var scrollValue = window.scrollY;
  if(scrollValue < 20){
      navbara.classList.remove('a1Color');
  } else{
      navbara.classList.add('a1Color')
  }
  
}
window.addEventListener('scroll', changea1);

function changea2(){
  var navbara = document.getElementById('a2');
  var scrollValue = window.scrollY;
  if(scrollValue < 20){
      navbara.classList.remove('a2Color');
  } else{
      navbara.classList.add('a2Color')
  }

}
window.addEventListener('scroll', changea2);

function changea3(){
  var navbara = document.getElementById('a3');
  var scrollValue = window.scrollY;
  if(scrollValue < 20){
      navbara.classList.remove('a3Color');
  } else{
      navbara.classList.add('a3Color')
  }
   
}
window.addEventListener('scroll', changea3);


function changea4(){
  var navbara = document.getElementById('a4');
  var scrollValue = window.scrollY;
  if(scrollValue < 20){
      navbara.classList.remove('a4Color');
  } else{
      navbara.classList.add('a4Color')
  }
   
}
window.addEventListener('scroll', changea4);

 
//loader

setTimeout(() => {
  const box = document.getElementById('loader');

  box.style.display = 'none';
}, 10000);

//facts card croll fade in anim
function fadeincard() {
    var animtrigger = document.querySelectorAll(".card");
  
    for (var i = 0; i < animtrigger.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = animtrigger[i].getBoundingClientRect().top;
      var elementVisible =100;
  
      if (elementTop < windowHeight - elementVisible) {
        animtrigger[i].classList.add("activecard");
      } else {
        animtrigger[i].classList.remove("activecard");
      }
    }
  }

window.addEventListener("scroll", fadeincard);
fadeincard();

//section2 scroll bgcolor change  anim
function section2() {
  var animtrigger = document.querySelectorAll("#section2");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =300;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", section2);
section2();

//section2title scroll   anim
function sec2title() {
  var animtrigger = document.querySelectorAll(".sec2titleh1");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =20;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", sec2title);
sec2title();

//section2animline scroll  anim
function sec2animline() {
  var animtrigger = document.querySelectorAll(".sec2animline");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =50;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", sec2animline);
sec2animline();

//handpicked animline scroll  anim
function handpicked() {
  var animtrigger = document.querySelectorAll("#handpicked");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =150;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", handpicked);
handpicked();


//pluss box scroll anim
function plus() {
  var animtrigger = document.querySelectorAll(".plus");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =200;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", plus);
plus();


//hearts scroll anim
function hearts() {
  var animtrigger = document.querySelectorAll("#hearts"); 

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =50;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", hearts);
hearts();

//natureby scroll anim
function natureh4() {
  var animtrigger = document.querySelectorAll(".natureh4");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =70;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", natureh4);
natureh4();


//natureby scroll anim
function natureh5() {
  var animtrigger = document.querySelectorAll(".natureh5");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =70;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", natureh5);
natureh5();

//cocktail line scroll anim
function cocktailline() {
  var animtrigger = document.querySelectorAll(".cocktailline");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =70;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", cocktailline);
cocktailline();

//cocktailh1  scroll anim
function cocktailh1() {
  var animtrigger = document.querySelectorAll("#cocktailh1");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =150;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", cocktailh1);
cocktailh1();

//cocktailh2  scroll anim
function cocktailh2() {
  var animtrigger = document.querySelectorAll("#cocktailh2");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =120;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", cocktailh2);
cocktailh2();

//cocktailh4  scroll anim
function cocktailh4() {
  var animtrigger = document.querySelectorAll("#cocktailh4");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =100;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", cocktailh4);
cocktailh4();


//coverimage 2  scroll anim
function coverimage2() {
  var animtrigger = document.querySelectorAll("#coverimage2");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =150;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", coverimage2);
coverimage2();

//coverimage 3  scroll anim
function coverimage3() {
  var animtrigger = document.querySelectorAll("#coverimage3");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =150;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", coverimage3);
coverimage3();

//personlink scroll anim
function personlink() {
  var animtrigger = document.querySelectorAll(".personlink");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =100;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", personlink);
personlink();


//latefix scroll anim
function latefix() {
  var animtrigger = document.querySelectorAll(".latefix");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =100;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", latefix);
latefix();

//bestofusline scroll anim
function bestofusline() {
  var animtrigger = document.querySelectorAll(".bestofusline");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =100;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", bestofusline);
bestofusline();


//bestof us option select slider anim

function bestcocktail(){
  var c = document.getElementById('cocktailtable');
  var j = document.getElementById('juicetable');
  var l = document.getElementById('cock');
  var d = document.getElementById('drink');
  d.style.border = "2px solid transparent";
  l.style.border = "2px solid #eb4034";
  j.style.display="none";
  c.style.display="block";
 
}
function bestjuice(){
  var j = document.getElementById('juicetable');
  var c = document.getElementById('cocktailtable');
  var l = document.getElementById('cock');
  var d = document.getElementById('drink');
  d.style.border = "2px solid #eb4034";
  l.style.border = "2px solid transparent";
  c.style.display="none";
  j.style.display="block";
  j.style.margin="0px"
 
 
 
}


//ourstory line scroll anim
function ourstoryline() {
  var animtrigger = document.querySelectorAll(".ourstoryline");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =100;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", ourstoryline);
ourstoryline();

//record scroll anim
function record() {
  var animtrigger = document.querySelectorAll(".record");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =170;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", record);
record();


//rcdl1 scroll anim
function rcdl1() {
  var animtrigger = document.querySelectorAll("#rcdl1");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =170;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rcdl1);
rcdl1();


//rcdl2 scroll anim
function rcdl2() {
  var animtrigger = document.querySelectorAll("#rcdl2");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =170;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rcdl2);
rcdl2();
  //ourstory show
  function ourstoryshow(){
    var s = document.getElementById('ourstorybox');
    s.style.display="block";
  }

  //bestodush1scroll anim
function bestofush1() {
  var animtrigger = document.querySelectorAll(".bestofush1");

  for (var i = 0; i < animtrigger.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animtrigger[i].getBoundingClientRect().top;
    var elementVisible =100;

    if (elementTop < windowHeight - elementVisible) {
      animtrigger[i].classList.add("active");
    } else {
      animtrigger[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", bestofush1);
bestofush1();

  //bestodush3 scroll anim
  function bestofush3() {
    var animtrigger = document.querySelectorAll(".bestofush3");
  
    for (var i = 0; i < animtrigger.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = animtrigger[i].getBoundingClientRect().top;
      var elementVisible =50;
  
      if (elementTop < windowHeight - elementVisible) {
        animtrigger[i].classList.add("active");
      } else {
        animtrigger[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", bestofush3);
  bestofush3();

    //bestodush scroll anim
    function drink() {
      var animtrigger = document.querySelectorAll("#drink");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =50;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", drink);
    drink();

    function cock() {
      var animtrigger = document.querySelectorAll("#cock");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =50;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", cock);
    cock();


//tables anim scroll
    function cocktailtable() {
      var animtrigger = document.querySelectorAll("#cocktailtable");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =50;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", cocktailtable);
    cocktailtable();

    function juicetable() {
      var animtrigger = document.querySelectorAll("#juicetable");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =50;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", juicetable);
    juicetable();
//outsroty scrol anim
    function ourstoryintroh1() {
      var animtrigger = document.querySelectorAll(".ourstoryintroh1");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =150;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", ourstoryintroh1);
    ourstoryintroh1();

    //wxplore scrol anim
    function explore() {
      var animtrigger = document.querySelectorAll(".explore");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =10;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", explore);
    explore();

    //proflie scrol anim
    function profile() {
      var animtrigger = document.querySelectorAll(".profile");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =160;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", profile);
    profile();


     //rateh1scrol anim
     function rateh1() {
      var animtrigger = document.querySelectorAll(".rateush1");
    
      for (var i = 0; i < animtrigger.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animtrigger[i].getBoundingClientRect().top;
        var elementVisible =70;
    
        if (elementTop < windowHeight - elementVisible) {
          animtrigger[i].classList.add("active");
        } else {
          animtrigger[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", rateh1);
    rateh1();
         //rateh3scrol anim
         function rateh3() {
          var animtrigger = document.querySelectorAll(".rateush3");
        
          for (var i = 0; i < animtrigger.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = animtrigger[i].getBoundingClientRect().top;
            var elementVisible =70;
        
            if (elementTop < windowHeight - elementVisible) {
              animtrigger[i].classList.add("active");
            } else {
              animtrigger[i].classList.remove("active");
            }
          }
        }
        window.addEventListener("scroll", rateh3);
        rateh3();



         //star anim
         function star1() {
          var animtrigger = document.querySelectorAll("#star1");
        
          for (var i = 0; i < animtrigger.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = animtrigger[i].getBoundingClientRect().top;
            var elementVisible =70;
        
            if (elementTop < windowHeight - elementVisible) {
              animtrigger[i].classList.add("active");
            } else {
              animtrigger[i].classList.remove("active");
            }
          }
        }
        window.addEventListener("scroll", star1);
       star1();

              //star anim
              function star2() {
                var animtrigger = document.querySelectorAll("#star2");
              
                for (var i = 0; i < animtrigger.length; i++) {
                  var windowHeight = window.innerHeight;
                  var elementTop = animtrigger[i].getBoundingClientRect().top;
                  var elementVisible =70;
              
                  if (elementTop < windowHeight - elementVisible) {
                    animtrigger[i].classList.add("active");
                  } else {
                    animtrigger[i].classList.remove("active");
                  }
                }
              }
              window.addEventListener("scroll", star2);
             star2();
      


                    //star anim
         function star3() {
          var animtrigger = document.querySelectorAll("#star3");
        
          for (var i = 0; i < animtrigger.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = animtrigger[i].getBoundingClientRect().top;
            var elementVisible =70;
        
            if (elementTop < windowHeight - elementVisible) {
              animtrigger[i].classList.add("active");
            } else {
              animtrigger[i].classList.remove("active");
            }
          }
        }
        window.addEventListener("scroll", star3);
       star3();

              //star anim
              function star4() {
                var animtrigger = document.querySelectorAll("#star4");
              
                for (var i = 0; i < animtrigger.length; i++) {
                  var windowHeight = window.innerHeight;
                  var elementTop = animtrigger[i].getBoundingClientRect().top;
                  var elementVisible =70;
              
                  if (elementTop < windowHeight - elementVisible) {
                    animtrigger[i].classList.add("active");
                  } else {
                    animtrigger[i].classList.remove("active");
                  }
                }
              }
              window.addEventListener("scroll", star4);
             star4();

                    //star anim
         function star5() {
          var animtrigger = document.querySelectorAll("#star5");
        
          for (var i = 0; i < animtrigger.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = animtrigger[i].getBoundingClientRect().top;
            var elementVisible =70;
        
            if (elementTop < windowHeight - elementVisible) {
              animtrigger[i].classList.add("active");
            } else {
              animtrigger[i].classList.remove("active");
            }
          }
        }
        window.addEventListener("scroll", star5);
       star5();
                      //sfootitem anim
                      function footitem() {
                        var animtrigger = document.querySelectorAll(".footitem");
                      
                        for (var i = 0; i < animtrigger.length; i++) {
                          var windowHeight = window.innerHeight;
                          var elementTop = animtrigger[i].getBoundingClientRect().top;
                          var elementVisible =70;
                      
                          if (elementTop < windowHeight - elementVisible) {
                            animtrigger[i].classList.add("active");
                          } else {
                            animtrigger[i].classList.remove("active");
                          }
                        }
                      }
                      window.addEventListener("scroll", footitem);
                    footitem();
                     //legal anim
                     function legal() {
                      var animtrigger = document.querySelectorAll(".legal");
                    
                      for (var i = 0; i < animtrigger.length; i++) {
                        var windowHeight = window.innerHeight;
                        var elementTop = animtrigger[i].getBoundingClientRect().top;
                        var elementVisible =70;
                    
                        if (elementTop < windowHeight - elementVisible) {
                          animtrigger[i].classList.add("active");
                        } else {
                          animtrigger[i].classList.remove("active");
                        }
                      }
                    }
                    window.addEventListener("scroll", legal);
                  legal();
          //exp a anim
          function expfnfx() {
            var animtrigger = document.querySelectorAll(".expfnfx");
          
            for (var i = 0; i < animtrigger.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = animtrigger[i].getBoundingClientRect().top;
              var elementVisible =130;
          
              if (elementTop < windowHeight - elementVisible) {
                animtrigger[i].classList.add("active");
              } else {
                animtrigger[i].classList.remove("active");
              }
            }
          }
          window.addEventListener("scroll", expfnfx);
          expfnfx();
                    //ostintroanim
                    function ourstoryintroh3() {
                      var animtrigger = document.querySelectorAll(".ourstoryintroh3");
                    
                      for (var i = 0; i < animtrigger.length; i++) {
                        var windowHeight = window.innerHeight;
                        var elementTop = animtrigger[i].getBoundingClientRect().top;
                        var elementVisible =130;
                    
                        if (elementTop < windowHeight - elementVisible) {
                          animtrigger[i].classList.add("active");
                        } else {
                          animtrigger[i].classList.remove("active");
                        }
                      }
                    }
                    window.addEventListener("scroll", ourstoryintroh3);
                    ourstoryintroh3();
           //footerbtn anim
           function footerbtn() {
            var animtrigger = document.querySelectorAll(".footerbtn");
          
            for (var i = 0; i < animtrigger.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = animtrigger[i].getBoundingClientRect().top;
              var elementVisible =70;
          
              if (elementTop < windowHeight - elementVisible) {
                animtrigger[i].classList.add("active");
              } else {
                animtrigger[i].classList.remove("active");
              }
            }
          }
          window.addEventListener("scroll", footerbtn);
        footerbtn();

//ratext hover anims
 function starhover5(){
  var txt = document.getElementById('ratetxt');
  txt.innerHTML="Awful";
 }
 function starout5(){
  var txt = document.getElementById('ratetxt');
  txt.innerHTML="";
 }

 //
 function starhover4(){
  var txt = document.getElementById('ratetxt');
  txt.innerHTML="Below Average";
 }
 function starout4(){
  var txt = document.getElementById('ratetxt');
  txt.innerHTML="";
 }
 //
  //
  function starhover3(){
    var txt = document.getElementById('ratetxt');
    txt.innerHTML="Average";
   }
   function starout3(){
    var txt = document.getElementById('ratetxt');
    txt.innerHTML="";
   }
   //
     //
  function starhover2(){
    var txt = document.getElementById('ratetxt');
    txt.innerHTML="Good";
   }
   function starout2(){
    var txt = document.getElementById('ratetxt');
    txt.innerHTML="";
   }
   //
   function starhover1(){
    var txt = document.getElementById('ratetxt');
    txt.innerHTML="Excellent";
   }
   function starout1(){
    var txt = document.getElementById('ratetxt');
    txt.innerHTML="";
   }
   //
   function starclick5(){
    var s1 = document.getElementById('star1');
    var s2 = document.getElementById('star2');
    var s3 = document.getElementById('star3');
    var s4 = document.getElementById('star4');
    var s5 = document.getElementById('star5');


    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s5.style.color="#ff5858";
   }
   function starclick4(){
    var s1 = document.getElementById('star1');
    var s2 = document.getElementById('star2');
    var s3 = document.getElementById('star3');
    var s4 = document.getElementById('star4');
    var s5 = document.getElementById('star5');
  

    s4.style.textShadow="1px 1px 25px #ff5858";
    
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s4.style.color="#ff5858";
   }

   function starclick3(){
    var s1 = document.getElementById('star1');
    var s2 = document.getElementById('star2');
    var s3 = document.getElementById('star3');
    var s4 = document.getElementById('star4');
    var s5 = document.getElementById('star5');
  

    s4.style.textShadow="1px 1px 25px #ff5858";
    s3.style.textShadow="1px 1px 25px #ff5858";
    s3.style.fontWeight="600";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s4.style.color="#ff5858";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s3.style.color="#ff5858";
    s4.style.color="#ff5858";
    
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s4.style.color="#ff5858";
   }

   function starclick2(){
    var s1 = document.getElementById('star1');
    var s2 = document.getElementById('star2');
    var s3 = document.getElementById('star3');
    var s4 = document.getElementById('star4');
    var s5 = document.getElementById('star5');


   
    s4.style.textShadow="1px 1px 25px #ff5858";
    s3.style.textShadow="1px 1px 25px #ff5858";
    s3.style.fontWeight="600";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s4.style.color="#ff5858";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s3.style.color="#ff5858";
    s4.style.color="#ff5858";
    s2.style.color="#ff5858";
    s2.style.textShadow="1px 1px 25px #ff5858";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s2.style.fontWeight="600";
    s5.style.color="#ff5858";
    s4.style.color="#ff5858";
   }

   function starclick1(){
    var s1 = document.getElementById('star1');
    var s2 = document.getElementById('star2');
    var s3 = document.getElementById('star3');
    var s4 = document.getElementById('star4');
    var s5 = document.getElementById('star5');

    s1.style.fontWeight="600";
    s1.style.textShadow="1px 1px 25px #ff5858";
    s4.style.textShadow="1px 1px 25px #ff5858";
    s3.style.textShadow="1px 1px 25px #ff5858";
    s3.style.fontWeight="600";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s1.style.color="#ff5858";
    s4.style.color="#ff5858";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s5.style.color="#ff5858";
    s3.style.color="#ff5858";
    s4.style.color="#ff5858";
    s2.style.color="#ff5858";
    s2.style.textShadow="1px 1px 25px #ff5858";
    s5.style.textShadow="1px 1px 25px #ff5858";
    s5.style.fontWeight="600";
    s4.style.fontWeight="600";
    s2.style.fontWeight="600";
    s5.style.color="#ff5858";
    s4.style.color="#ff5858";

   }


 






