var positionY;
var scrollTop;

var lastPositionX =0;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); 

    // $('.globuleORD').css({
    //   'height' : ""+event.pageX+"10px" //La hauteur d'un élément 
    //                                 //sera égale à la hauteur de la souris 
    //   });
    
  });
  //récupérer la "quantité" de scroll
  
////vous pouvez rédiger vos modification ici !



$(window).on('mousemove', function(){
  $('.filsjfond').css({
 'left' : ((event.pageX-850)/6),
 });
})

$(window).on('mousemove', function(){
  $('.filsvert1').css({
 'left' : ((event.pageX-1500)/8),
 });
})
$(window).on('mousemove', function(){
  $('.filsvert2').css({
 'left' : ((event.pageX-5500)/12),
 });
})
$(window).on('mousemove', function(){
  $('.filsvert3').css({
 'left' : ((event.pageX+7500)/9),
 });
})

$(window).on('mousemove', function(){
  $('.filsnoir').css({
 'left' : ((event.pageX+300)/6),
 });
})






  /// décricre se qu'il se passe

 

  $(window).on( 'click', function() {
    $('#G1_G').css({
       'transform' : 'rotate(279.24deg)'
    })
    $('#G1_B').css({
      'transform' : 'rotate(120.87deg)'
   })
   $('#G1_D').css({
    'transform' : 'rotate(126.02deg)'
    })
    $('#G2').css({
   'transform' : 'rotate(0deg)'
    })
    $('#G3').css({
  'transform' : 'rotate(0deg)'
    })
    $('#G4').css({
    'transform' : 'rotate(0deg)'
    })
    $('#G4_H').css({
      'transform' : 'rotate(0deg)'
      })
    })

    $(document).ready(function() {
    // Initialiser l'opacité de globuleTAB à 1
    var opacityValue = 1;

    // Réduire l'opacité à chaque clic
    $(window).on('click', function() {
        // Décrémenter l'opacité
        opacityValue -= 0.1;
        if (opacityValue < 0.1) opacityValue = 0.1; // Empêcher l'opacité d'être trop faible

        // Appliquer l'opacité à .globuleTAB
        $('.globuleTAB').css('opacity', opacityValue);
    });

    // Réinitialiser l'opacité à 1 lors d'un double-clic
    $(window).on('dblclick', function() {
        opacityValue = 1;
        $('.globuleTAB').css('opacity', opacityValue);
    });
});


$(document).ready(function() {
  var isHidden = false; // Variable pour suivre l'état de trucCLIC

  $(window).on('click', function() {
      if (!isHidden) {
          $('.trucCLIC').hide(); // Disparition immédiate
      } else {
          $('.trucCLIC').show(); // Réapparition immédiate
      }
      isHidden = !isHidden; // Inverser l'état à chaque clic
  });
});


    

    $(window).on('mousemove', function(event) {
     
      var mouseX = event.pageX; //sourie horizontal position
      var windowWidth = $(window).width(); // Largeur de la fenêtre
      var opacity = 1 - (mouseX / windowWidth); // opacité qui diminu


      
      if (opacity < 0.1) opacity = 0.1; // Ne pas autoriser l'opacité à descendre en dessous de 0.1
      if (opacity > 1) opacity = 1; // Ne pas autoriser l'opacité à dépasser 1

     // Appliquer l'opacité calculée à tous les éléments 
      $('.triangleBC').css('opacity', opacity);
     
    });

    
     

   
    
  

   
  


/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on( 'scroll', function(){
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
 });

 $(window).on( 'scroll', function(){
  var scrollTop = $(window).scrollTop(); //récupérer la quantitée de scroll

  $('.globuleORD').css({
      'transform' : 'rotate('+scrollTop/2+'deg)' //utiliser cette valeur pour altérer l'apparence d'un élément
  })
  
});


$(window).on('scroll', function () {
  // Récupérer la largeur de la fenêtre
  var windowWidth = $(window).width();

  // Appliquer l'effet seulement si la largeur de la fenêtre est comprise entre 500px et 1800px
  if (windowWidth >= 500 && windowWidth <= 1800) {
      // Récupérer la quantité de scroll
      var scrollTop = $(window).scrollTop();

      // Calculer un pourcentage basé sur le scroll (vous pouvez ajuster les valeurs ici)
      var scrollPercentage = scrollTop / $(document).height();

      // Calculer la couleur de fond en fonction du scroll (passage du bleu au jaune)
      var red = 255; // La couleur rouge augmente avec le scroll
       var green = Math.max(180, 255 - (255 * scrollPercentage * 0.8));
      var blue = Math.max(0, 255 - 255 * scrollPercentage); // Le bleu diminue

      // Appliquer la couleur de fond
      $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
  }
});


$(window).on('scroll', function () {
 // Appliquer l'effet d'opacité sur .globuleTEL en fonction du scroll
 var opacityValue = 1 - (scrollTop / $(document).height());  // L'opacité diminue en fonction du scroll
 if (opacityValue < 0.1) opacityValue = 0.1; // L'opacité ne doit pas être inférieure à 0.1
 if (opacityValue > 1) opacityValue = 1; // L'opacité ne doit pas être supérieure à 1

 // Appliquer l'opacité à l'élément .globuleTEL
 $('.globuleTEL').css('opacity', opacityValue);
});





  

 
  //utilisation de la valeur convertie :

 //////// ///ne rien écrire après ceci});
 


