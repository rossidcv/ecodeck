$(document).ready(function(){
  var flag = false;
  var scroll;
  var percentTime;

  $(function () {
    $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target.length ) {
      event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 75
        }, 100);
      }
    }); 
  });
});

$(document).ready(function(){
  var flag = false;
  var scroll;
  var percentTime;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 0){
      if(!flag){
        $(".navbar").css({"background-color": "#000"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav .dropdown-menu li a").css({"color": "#ABC566"});
        $(".navbar-nav li a.active").css({"color": "#ABC566", "font-weight": "700"});
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(0, 0, 0, 0)"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav .dropdown-menu li a").css({"color": "#ABC566"});
        flag = false;
      }
    }       
  });
});
var lastScrollTop = 0;
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    }
    if ($(window).scrollTop() < 1) {
      $('.navbar').removeClass('scrolled');
    }
  });

/*Efecto botón hamburger*/
$(document).ready(function(){
  var flag = false;
  var scroll;
  var percentTime;  

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

  var hamburger = document.querySelector(".hamburger");
  menu.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  }); 
});

/*Efecto marcas medios de pagor*/
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

/*DATOS TÉCNICOS - PORCENTAJES*/
/*Porcentaje 1*/
$(document).ready(function(){
  function setProgress(elem, percent) {
    var
    degrees = percent * 3.6,
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.counter').setAttribute('data-percent', Math.round(percent));
    elem.querySelector('.progressEnd').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
      elem.className += ' fiftyPlus';
  }

  (function() {
    var
    elem = document.querySelector('.circlePercent'),
    percent = 0;
    (function animate() {
      setProgress(elem, (percent += .25));
      if(percent < 65) setTimeout(animate, 15); 
    })(); 
  })(); 
});

/*Porcentaje 2*/
$(document).ready(function(){
  function setProgress(elem, percent) {
    var
    degrees = percent * 3.6,
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.counter2').setAttribute('data-percent', Math.round(percent));
    elem.querySelector('.progressEnd2').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress2').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
      elem.className += ' fiftyPlus';
  }

  (function() {
    var
    elem = document.querySelector('.circlePercent2'),
    percent = 0;
    (function animate() {
      setProgress(elem, (percent += .25));
      if(percent < 30) setTimeout(animate, 15); 
    })(); 
  })(); 
});

/*Porcentaje 3*/
$(document).ready(function(){
  function setProgress(elem, percent) {
    var
    degrees = percent * 3.6,
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.counter3').setAttribute('data-percent', Math.round(percent));
    elem.querySelector('.progressEnd3').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress3').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
      elem.className += ' fiftyPlus';
  }

  (function() {
    var
    elem = document.querySelector('.circlePercent3'),
    percent = 0;
    (function animate() {
      setProgress(elem, (percent += .25));
      if(percent < 5) setTimeout(animate, 15); 
    })(); 
  })(); 
});


/*EFECTO CATALOGO*/
$(document).ready(function(){
  'use strict';
  var $projects = $('.projects');
  $projects.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('ul.filters > li').on('click', function(e){
    e.preventDefault();
    var filter = $(this).attr('data-filter');
    $('ul.filters > li').removeClass('active');
    $(this).addClass('active');
    $projects.isotope({filter: filter});
  });

  $('.card').mouseenter(function(){
    $(this).find('.card-overlay').css({'top': '-100%'});
    $(this).find('.card-hover').css({'top':'0'});

  }).mouseleave(function(){
    $(this).find('.card-overlay').css({'top': '0'});
    $(this).find('.card-hover').css({'top':'100%'});
  });


  //Inicializar la galería de productos
  $('.producto').zoomImage();
  $('.show-small-img:first-of-type').css({'border': 'solid 1px #951b25', 'padding': '2px'})
  $('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
  $('.show-small-img').click(function () {
    $('#show-img').attr('src', $(this).attr('src'))
    $('#big-img').attr('src', $(this).attr('src'))
    $(this).attr('alt', 'now').siblings().removeAttr('alt')
    $(this).css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
    if ($('#small-img-roll').children().length > 4) {
      if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
        $('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
      } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
        $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
      } else {
        $('#small-img-roll').css('left', '0')
      }
    }
  })
});

//EFECTO ZOOM PRODUCTO CATALOGO

;(function($) {

  $.fn.zoomImage = function(paras) {       
    var defaultParas = {
      layerW: 100, 
      layerH: 100, 
      layerOpacity: 0.2, 
      layerBgc: '#000',  
      showPanelW: 300, 
      showPanelH: 400, 
      marginL: 5, 
      marginT: 0 
    };

    paras = $.extend({}, defaultParas, paras);

    $(this).each(function() {
      var self = $(this).css({position: 'relative'});
      var selfOffset = self.offset();
      var imageW = self.width();
      var imageH = self.height();

      self.find('img').css({
        width: '100%',
        height: '100%'
      });

      var wTimes = paras.showPanelW / paras.layerW;
      var hTimes = paras.showPanelH / paras.layerH;

      var img = $('<img>').attr('src', self.attr("href")).css({
        position: 'absolute',
        left: '0',
        top: '0',
        width: imageW * wTimes,
        height: imageH * hTimes
      }).attr('id', 'big-img');

      var layer = $('<div>').css({
        display: 'none',
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundColor: paras.layerBgc,
        width: paras.layerW,
        height: paras.layerH,
        opacity: paras.layerOpacity,
        border: '1px solid #ccc',
        cursor: 'crosshair'
      });

      var showPanel = $('<div>').css({
        display: 'none',
        position: 'absolute',
        overflow: 'hidden',
        left: imageW + paras.marginL,
        top: paras.marginT,
        width: paras.showPanelW,
        height: paras.showPanelH
      }).append(img);

      self.append(layer).append(showPanel);

      self.on('mousemove', function(e) {
        var x = e.pageX - selfOffset.left;
        var y = e.pageY - selfOffset.top;

        if(x <= paras.layerW / 2) {
          x = 0;
        }else if(x >= imageW - paras.layerW / 2) {
          x = imageW - paras.layerW;
        }else {
          x = x - paras.layerW / 2;
        }

        if(y < paras.layerH / 2) {
          y = 0;
        } else if(y >= imageH - paras.layerH / 2) {
          y = imageH - paras.layerH;
        } else {
          y = y - paras.layerH / 2;
        }

        layer.css({
          left: x,
          top: y
        });

        img.css({
          left: -x * wTimes,
          top: -y * hTimes
        });
      }).on('mouseenter', function() {
        layer.show();
        showPanel.show();
      }).on('mouseleave', function() {
        layer.hide();
        showPanel.hide();
      });
    });
  }
})(jQuery);


//EFECTO LUPA
$(document).ready(function () {
  $('.laftImg').bup('laftImg',1)
  $('.laftImg1').bup('laftImg1',1)
  $('.laftImg2').bup('laftImg2',1)
  $('.laftImg3').bup('laftImg3',1)
}) 

sup=`
<nav class="navbar navbar-default" data-target=".navbar-collapse" data-toggle="collapse">
    <div class="container">
      <a class="navbar-brand" href="index.html"><img src="imagenes/logo/ecodeck-logo.png" alt="logo Ecodeck"></a>
      <button class="hamburger hamburger--emphatic" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">            
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav">
          <li>
            <a class="nav-link" href="index.html"><i class="bi bi-house-door-fill"></i></a>
          </li>
          <li>
            <a class="nav-link" href="quienes-somos.html">¿Quienes somos?</a>
          </li>
          <li class="dropdown">
            <a class="nav-link dropdown-toggle" href="." id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos <i class="bi bi-caret-down-fill"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="nav-link" href="catalogo.html">Ver catálogo</a></li>
              <li><a class="nav-link" href="comparativa.html">Comparativa</a></li>
              <li><a class="nav-link" href="deck-sintetico.html">Deck sintético</a></li>
              <li><a class="nav-link" href="deck-madera.html">Deck de madera</a></li>
              <li><a class="nav-link" href="wall-panel.html">Wall Panel</a></li>
              <li><a class="nav-link" href="pergolas.html">Pérgolas</a></li>
              <li><a class="nav-link" href="pisos.html">Pisos SPC</a></li>
              <li><a class="nav-link" href="perfiles.html">Perfiles WPC</a></li>
              <li><a class="nav-link" href="cielorrasopvc.html">Revestimientos / Cielorraso PVC</a></li>
            </ul>
          </li> 
          <li>
            <a class="nav-link" href="obras.html">Obras</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`
document.write(sup)


sup=`
  <footer>  
    <div class="bg-dark">
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12">
              <div class="logo-footer">
                <img src="imagenes/logo/ecodeck-logo.png" alt="logo Ecodeck">
                <p>Somos una empresa dedicada a la venta, distribución y colocación de decks de alta calidad para toda la República Argentina y países limítrofes.</p>
                <div class="redes-sociales">
                  <ul>
                    <li><a href="https://www.facebook.com/ecodeckarg" target="_blank"><i class="bi bi-facebook" title="Encontranos en Facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/ecodeckarg" target="_blank"><i class="bi bi-instagram" title="Encontranos en Instagram"></i></a></li>
                  </ul>
                </div><!-- cierra redes-sociales-->
              </div><!-- cierra logo-footer-->
            </div><!-- cierra col-->
            <div class="col-lg-3 col-md-12"> 
                <h4>PRODUCTOS</h4>
                <ul>       
                <li><a class="nav-link" href="deck-sintetico.html"><i class="bi bi-caret-right-fill"></i> Deck sintético</a></li>
                <li><a class="nav-link" href="deck-madera.html"><i class="bi bi-caret-right-fill"></i> Deck de madera</a></li>
                <li><a class="nav-link" href="wall-panel.html"><i class="bi bi-caret-right-fill"></i> Wall Panel</a></li>
                <li><a class="nav-link" href="pergolas.html"><i class="bi bi-caret-right-fill"></i> Pérgolas</a></li>
                <li><a class="nav-link" href="pisos.html"><i class="bi bi-caret-right-fill"></i> Pisos SPC</a></li>
                <li><a class="nav-link" href="perfiles.html"><i class="bi bi-caret-right-fill"></i> Perfiles WPC</a></li>
                <li><a class="nav-link" href="cielorrasopvc.html"><i class="bi bi-caret-right-fill"></i> Revestimientos / Cielorraso PVC</a></li>              
                
              </ul>
            </div><!-- cierra col-->
            <div class="col-lg-4 col-md-12">  
                <h4>CONTACTO</h4>
              <ul class="contacto-footer">
                <li><a href=""><i class="bi bi-geo-alt"></i><span>Dirección Oficinas administrativas:</span> </a></li>                
                  <li class="footer-direccion"><a href="">Av. Olazabal 1515, Belgrano, CABA</a></li>
                  <li><a href=""><i class="bi bi-telephone"></i> <span>Ventas:</span> (011) 5353-4870</a></li>
                  <li><a href=""><i class="bi bi-phone-vibrate"></i> <span>Celular:</span> (011) 15-6759-1079</a></li>
                  <li><a href=""><i class="bi bi-phone-vibrate"></i> <span>Celular:</span> (011) 15-6733-1111</a></li>
                  <li><a href=""><i class="bi bi-envelope"></i> <span>E-mail:</span> info@ecodeck.com.ar</a></li>        
                </ul>
              </div><!-- cierra col-->
            </div><!-- cierra row-->
          </div> <!-- cierra container-->  
        </div> <!-- cierra py-3-->  
      </div><!-- cierra bg-dark -->       
    </footer>
`
document.write(sup)

sup=`
  <div class="footer-bottom">
      <p class="copyright">Copyright &copy; <script>document.write(new Date().getFullYear())</script> Ecodeck. Todos los derechos reservados.</p>
    </div><!-- cierra footer-bottom -->
  `
document.write(sup)


document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
  }  
});
