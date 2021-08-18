$('.downloadPDF').on('click', function () {
  $.ajax({
    url: 'images/participant.PDF',
    method: 'GET',
    xhrFields: {
      responseType: 'blob'
    },
    success: function (data) {
      var a = document.createElement('a');
      var url = window.URL.createObjectURL(data);
      a.href = url;
      a.download = 'images/participant.PDF';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  });
});


$('.dropdown > a').click(function(){
  location.href = this.href;
});



var $dropdown = $(".navbar .nav-item");
var $dropdownToggle = $(".dropdown-toggle");
var $dropdownMenu = $(".dropdown-menu");
var showClass = "show";


//hover for dropdown items in main navbar
if ($(document).innerWidth() >= 1025) {

  $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function() {
          var $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);

          $('.nav-link.dropdown-toggle').not('.active').closest('.nav-item').find('.dropdown-menu').addClass('lightGold')
          $('.nav-link.dropdown-toggle.active').closest('.nav-item').find('.dropdown-menu').addClass('goldBackground')

        },
        function() {
          var $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

}

if ($(document).innerWidth() <= 1024) {


  $(window).on("load resize", function() {


    $('.nav-link.dropdown-toggle').not('.active').closest('.nav-item').find('.dropdown-menu').addClass('lightGold')
    $('.nav-link.dropdown-toggle.active').closest('.nav-item').find('.dropdown-menu').addClass('goldBackground')
    if (this.matchMedia("(max-width: 767px)").matches) {

      $dropdownToggle.click(


        function() {



          var $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);



        },
        function() {
          var $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    }

    else {
      $dropdownToggle.off("click");
    }
  });

}



let searchChildren = $('.top-search-container button, .top-search-container input, .top-search-container span')

function showSearch() {

  return function(e){


    if ($(document).innerWidth() >= 768) {

      $('.top-search-container').addClass('slideDown')

      $('.search.blue').fadeOut()

    }
    $(searchChildren).attr('tabindex', '0')


    if ($(document).innerWidth() <= 767) {


      $('.top-search-container').animate( { 'bottom' : 0 }, 500 );

    }


  }

}

$('.search.blue').keypress(showSearch()).click(showSearch());


function closeSearch() {

  return function(e){

    if ($(document).innerWidth() >= 768) {

      $('.top-search-container').removeClass('slideDown')

      $('.search.blue').fadeIn()
    }


    $(searchChildren).attr('tabindex', '-1')


    if ($(document).innerWidth() <= 767) {


      $('.top-search-container').animate( { 'bottom' : '-20%' }, 500 );

    }

  }

}

$('.closeTopSearch').keypress(closeSearch()).click(closeSearch());


function expand(toggleValue) {

  return function(e){

    $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $(`.expandAll${toggleValue} .collapse`).collapse('toggle');

    if ( $(this).html() == 'Collapse All') {
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-compress-arrows-alt blue changeIcon${toggleValue}"></i>`)
    }

    if ( $(this).html() == 'Expand All') {
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="fal fa-expand-alt blue changeIcon${toggleValue}"></i>`);
    }


    if ($(this).html() == 'Collapse All' && $(this).is('.white')) {

      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="far fa-compress-arrows-alt white changeIcon${toggleValue}"></i>`)
    }


    if ($(this).html() == 'Expand All' && $(this).is('.white')){
      $(`.changeIcon${toggleValue}`).replaceWith(`<i class="fal fa-expand-alt white changeIcon${toggleValue}"></i>`);
    }



  }
}

$('#toggleAccordion1').keypress(expand(1)).click(expand(1));
$('#toggleAccordion2').keypress(expand(2)).click(expand(2));
$('#toggleAccordion3').keypress(expand(3)).click(expand(3));
$('#toggleAccordion4').keypress(expand(4)).click(expand(4));
$('#toggleAccordion5').keypress(expand(5)).click(expand(5));


$('#toggleAccordion6').keypress(expand(6)).click(expand(6));
$('#toggleAccordion7').keypress(expand(7)).click(expand(7));
$('#toggleAccordion8').keypress(expand(8)).click(expand(8));
$('#toggleAccordion9').keypress(expand(9)).click(expand(9));
$('#toggleAccordion10').keypress(expand(10)).click(expand(10));
$('#toggleAccordion11').keypress(expand(11)).click(expand(11));




//animations for landing page
// $(window).on('scroll', function() {
//
//   var screenTop = $(window).scrollTop();
//   var screenBottom = $(window).scrollTop() + window.innerHeight;
//
//   $('section').each(function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = $(this).offset().top + $(this).outerHeight();
//
//     if ((screenBottom > elementTop + ($(this).find('.heros').height() && $(document).innerWidth() >= 768 )) && (screenTop < elementBottom)) {
//       $('section').removeClass('active')
//       $(this).addClass('active')
//     }
//     else {
//       $(this).removeClass('active')
//     }
//   })
//
//
//   if ($('.block5').hasClass('active')) {
//
//
//     const counters = document.querySelectorAll('.counter');
//     const speed = 500
//
//     counters.forEach(counter => {
//       const updateCount = () => {
//         const target = +counter.getAttribute('data-target')
//         const count = +counter.innerText
//
//         const inc = target / speed
//
//         if (count < target) {
//
//           counter.innerText = Math.ceil(count + inc)
//
//           setTimeout(updateCount, 1);
//         } else {
//           counter.innerText = target;
//         }
//
//       }
//       updateCount();
//
//
//
//     })
//
//   }
//
// })



$('.back-to-top').click(() => {
  scrollfn("#overview");
})

$('.back-to-top').on('keypress', () => {
  scrollfn("#overview");
})


$(window).scroll(function () {
  ((window.pageYOffset || document.documentElement.scrollTop) > 100) ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
});

function scrollfn(e) {
  let $target = $(e),
  offSet = e === "#overview" ? 0 : $target.offset().top;
  $('html, body').stop().animate({
    'scrollTop': offSet
  }, 1200, 'swing');


}


//508 tabbing

$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select, span").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')
  }

})
$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link, select, span").on('focusout', function() {
  $(this).css('outline', 'none')
})


$("a").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).find('.whiteBubble').css('outline', 'dashed 3px #4599ff')
  }

})
$("a").on('focusout', function() {
  $(this).find('.whiteBubble').css('outline', 'none')
})

$(".closeTopSearch").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).find('i').css('outline', 'dashed 3px #4599ff')
  }

})
$(".closeTopSearch").on('focusout', function() {
  $(this).find('i').css('outline', 'none')
})


$('.one input:checkbox').keypress(function (e) {
  e.preventDefault();
  if ((e.keyCode ? e.keyCode : e.which) == 13) {
    $(this).trigger('click');
  }
});
$('.form-check-input').on("keyup", function (e) {

  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 9) {

    $(this).parent().find('label').addClass('activate');
  }
});

$('.form-check-input').on('focusout', function () {
  $(this).parent().find('label').removeClass('activate');
});



//active links tab pane on nav click start


var path = window.location.href.split(location.search||location.hash||/[?#]/)[0]


$('.navbar-nav li .nav-link').each(function() {
  if (this.href == path) {
    $(this).addClass('active');
  }
  else {
    $(this).removeClass('active');
  }

});

// if ($(document).innerWidth() > 991) {


$("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
  var id = $(e.target).attr("href").substr(1);
  id = id.substring(0, id.length-10);
  window.location.hash = id;
});

// }

var hash = (window.location.hash);
$('.nav-tabs a[href="' + hash + '-tab"]').tab('show');


var hash = window.location.hash;
hash && $('.nav-tabs a[href="' + hash + '"]').tab('show')


$('.nav-tabs a').not('.blueNav .nav-tabs a').click(() => {


  // window.location.hash = this.hash;


});


$(window).on('load', () => {
  // $('html, body').scrollTop(0)
  // $('html, body').animate({scrollTop: $("#Home").offset().top}, 500);
})



$('.openTab1').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="projects"]').tab('show')

})

$('.openTab2').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="students"]').tab('show')

})


$('.openTab3').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="partners"]').tab('show')

})

$('.openTab4').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="products"]').tab('show')

})


$('.openTab5').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="vision"]').tab('show')

})

$('.openTab6').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="network"]').tab('show')

})

$('.openTab7').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="goals"]').tab('show')

})

$('.openTab8').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="leadership"]').tab('show')

})

$('.openTab9').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="expansion"]').tab('show')

})


$('.openTab10').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="prep"]').tab('show')

})

$('.openTab11').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="siic"]').tab('show')

})

$('.openTab12').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="academic"]').tab('show')

})

$('.openTab13').click(function(e){
  e.preventDefault()
  $('.nav-tabs [data-type="workforce"]').tab('show')

})

//active links tab pane on nav click end





// $('a[data-type="students"]').click(() => {
//
//   $('.imgBottomLeft').show()
//   $('.imgBottom').addClass('students').show()
// });
//
//
// $('a[data-type="race-top"]').click(() => {
// alert("iuvbvdwiuvidwubiuvdwiuvdwiuwd")
//   $('.imgBottomLeft').hide()
//   $('.imgBottom').removeClass('students').show()
// });
//
//
// $('.nav-tabs [data-type="products"], .nav-tabs [data-type="partners"]').click(() => {
//
//   $('.imgBottomLeft').hide()
//   $('.imgBottom').hide()
// });
//





//contact form

$('#slideOut2 .modal-header a').attr('tabindex', '-1')


var contactChildren = $("#slideOut2 .modal-header [tabIndex], #slideOut2 .modal-body [tabIndex], #slideOut2").each(function() {
  $(this).attr('tabindex', '-1')
})


var contactTabs = $("#slideOut2 a").each(function() {
  $(this).attr('tabindex', '-1')

})


var open = function() {


  $(contactChildren, contactTabs).attr('tabindex', '0')


  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });


  $('.changeTitle').html('Request to Submit Project Data')
  $('.contactUsOverlay').show();



  $('#closeThisPlease').attr('tabindex', '0');

  $('#sendMessage').attr('tabindex', '0');

  $('.modal-content').addClass('opened')
  $("#slideOut2").addClass('showslideOut2');
  $("#one").addClass('blueTab');
  $("#two").removeClass('blueTab');

  $('.navbar').addClass('zIndex0')
  $('.firstBlock').addClass('hide1').fadeOut()
  $('.secondBlock').removeClass('hide1').fadeIn()

  setTimeout(function() {
    $('body').addClass('showContact')
  }, 300)

  $('#slideOut2 .modal-content').css('background', 'linear-gradient(207.41deg, #61D5FF -15.35%, #89E0A9 104.75%)')

}
$('#one').keypress(
  open

).click(
  open
);




var open2 = function() {


  $(contactChildren, contactTabs).attr('tabindex', '0')


  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });

  $('.changeTitle').html('Need Help?')
  $('.contactUsOverlay').show();


  $('#closeThisPlease').attr('tabindex', '0');

  $('#sendMessage').attr('tabindex', '0');

  $('.modal-content').addClass('opened')
  $("#slideOut2").addClass('showslideOut2');
  $("#two").addClass('blueTab');
  $("#one").removeClass('blueTab');

  $('.firstBlock').removeClass('hide1').fadeIn()
  $('.secondBlock').addClass('hide1').fadeOut()


  $('#slideOut2 .modal-content').css('background', 'linear-gradient(65.95deg, #FBD431 -8.91%, #BAE386 115.33%)')

  setTimeout(function() {
    $('body').addClass('showContact')
  }, 300)

}
$('#two').keypress(
  open2

).click(
  open2
);




$('.contactUsOverlay').on('click', function(e) {

  if($('body').hasClass('showContact')) {

    $(contactChildren, contactTabs).attr('tabindex', '-1')

    $('#closeThisPlease').attr('tabindex', '-1');

    $('#sendMessage').attr('tabindex', '-1');


    $("#slideOut2").removeClass('showslideOut2');
    $('.contactUsOverlay').hide();
    $("#one, #two").removeClass('blueTab');

    setTimeout(function() {
      $('body').removeClass('showContact')
    }, 300)

  }
})


var close = function() {

  $(contactChildren, contactTabs).attr('tabindex', '-1')

  $('.contactUsOverlay').hide();

  $('#closeThisPlease').attr('tabindex', '-1');
  $('#sendMessage').attr('tabindex', '-1');
  $("#slideOut2").removeClass('showslideOut2');

  $("#one, #two").removeClass('blueTab');



}

$('#close, .form').keypress(
  close

).click(
  close
);



$("#closeThisPlease").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) {

    $('#one').focus().css('outline', 'dashed 3px #4599ff')
    $('.navbar').removeClass('zIndex0')
  }

})

var table = function() {


  var table = $(this).closest('.largePadding').find('.table')
  var graph = $(this).closest('.largePadding').find('.graph')

  var filter = $(this).closest('.largePadding').find('.activeFilter')

  $(filter).removeClass("activeFilter")
  $(this).addClass("activeFilter")

  $(table).show()
  $(graph).hide()

}
$('.showTable').keypress(
  table

).click(
  table
);


var chart = function() {


  var table = $(this).closest('.largePadding').find('.table')
  var graph = $(this).closest('.largePadding').find('.graph')
  var filter = $(this).closest('.largePadding').find('.activeFilter')

  $(filter).removeClass("activeFilter")
  $(this).addClass("activeFilter")

  $(table).hide()
  $(graph).show()


}
$('.showChart').keypress(
  chart

).click(
  chart
);






//rotate caret

$('.collapse').on('show.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(180deg)"
  });

});
$('.collapse').on('hide.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(0deg)"
  });

});





$('#slideOut2 input').on('keyup', function(e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9 ) {

    $('#slideOut2 input').change(function (e) {

      setReasonActive();

    })

    function setReasonActive() {
      $('#slideOut2 input').each(function () {
        if ($(this).prop('checked')) {
          $(this).parents('.form-check').css('background' ,'rgba(255, 255, 255, 0.3)');

        } else {
          $(this).parents('.form-check').css( 'background' ,'transparent')
        }
      })
    }

    setReasonActive()


  }
})




$('#slideOut2 input').change(function (e) {

  setReasonActive();

})

function setReasonActive() {
  $('#slideOut2 input').each(function () {
    if ($(this).prop('checked')) {
      $(this).closest('.form-check').find('i').css('font-weight', '600')
      $(this).parents('.form-check').css('background' ,'rgba(255, 255, 255, 0.3)');

    } else {
      $(this).parents('.form-check').css( 'background' ,'transparent')
      $(this).closest('.form-check').find('i').css('font-weight', '400')
    }
  })
}

setReasonActive()


$(".form-check").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $('.form-check').each(function() {
      $(this).addClass('focusClass')
    });

  }

})




if ($(document).innerWidth() <= 767) {


  $('.navbar-toggler-icon').click(() => {
    $('.navbar').animate( { 'bottom' : 0,  'height' : '100%' }, 500 ).addClass('open')
    $('.navbar-collapse.collapse').addClass('show')
    // $('.search.blue').hide()

  })


  $('.navbar-toggler .close').click(() => {


    $('.navbar').animate( { 'bottom' : 0,  'height' : '4em'}, 500 )
    setTimeout(() => {
      $('.navbar').removeClass('open')
      $('.navbar-collapse.collapse').removeClass('show')
    }, 600)


    // $('.search.blue').show()

  })

}


var hash = 1;

$(".ques").each(function(i){
  var count = "ques" + (++hash)

  $(this).attr("href",  "#" + count);


  $(this).closest('.card').find('.collapse').attr("id", count);
});





$('#nav .nav-tabs').append('<li class="slide-line"></li>').show()
$('#nav5 .nav-tabs').append('<li class="slide-line5"></li>').show()
$('#nav4 .nav-tabs').append('<li class="slide-line4"></li>').show()

var lineWidth = $('#nav .nav-tabs .nav-link.active').width()
var lineWidth5 = $('#nav5 .nav-tabs .nav-link.active').width()
var lineWidth4 = $('#nav4 .nav-tabs .nav-link.active').width()

$('#nav li.slide-line').css('width', lineWidth)
$('#nav4 li.slide-line4').css('width', lineWidth4)
$('#nav5 li.slide-line5').css('width', lineWidth5)


$(document).on('mouseenter', '#nav .nav-tabs li a', function () {

  var $this = $(this),

  offset = $this.offset(),

  offsetBody = $('#nav .nav-tabs').offset();


  TweenMax.to($('#nav .nav-tabs .slide-line'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",

    ease:Back.easeOut
  });

}).on('mouseleave', '#nav .nav-tabs li', function () {

  var $this = $(this),

  $active = $this.parent().find("a.active"),

  offset = $active.offset(),

  offsetBody = $('#nav .nav-tabs').offset();


  TweenMax.to($('#nav .nav-tabs .slide-line'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",
    ease:Power4.easeInOut
  });
});


$(document).on('mouseenter', '#nav5 .nav-tabs li a', function () {

  var $this = $(this),

  offset = $this.offset(),

  offsetBody = $('#nav5 .nav-tabs').offset();


  TweenMax.to($('#nav5 .nav-tabs .slide-line5'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",

    ease:Back.easeOut
  });

}).on('mouseleave', '#nav5 .nav-tabs li', function () {

  var $this = $(this),

  $active = $this.parent().find("a.active"),

  offset = $active.offset(),

  offsetBody = $('#nav5 .nav-tabs').offset();


  TweenMax.to($('#nav5 .nav-tabs .slide-line5'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",
    ease:Power4.easeInOut
  });
});

$(document).on('mouseenter', '#nav4 .nav-tabs li a', function () {

  var $this = $(this),

  offset = $this.offset(),

  offsetBody = $('#nav4 .nav-tabs').offset();


  TweenMax.to($('#nav4 .nav-tabs .slide-line4'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",

    ease:Back.easeOut
  });

}).on('mouseleave', '#nav4 .nav-tabs li', function () {

  var $this = $(this),

  $active = $this.parent().find("a.active"),

  offset = $active.offset(),

  offsetBody = $('#nav4 .nav-tabs').offset();


  TweenMax.to($('#nav4 .nav-tabs .slide-line4'), 0.5, {
    css:{
      width: $this.outerWidth()+'px',
      x: (offset.left-offsetBody.left)+'px'

    },
    overwrite:"all",
    ease:Power4.easeInOut
  });
});


//validate and send message on contact form and toast message


// $("#theform").validate(
//   {
//     rules:
//     {
//       email:
//       {
//         required: true,
//         email: true
//
//       }
//
//     }
//   });
//

//
// $('#sendMessage').click(function (e) {
//
//   $('.hideOnSubmit').hide()
//   // $('.firstBlock').show()
//
//   if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )    {
//     e.preventDefault()
//
//     $(contactChildren).attr('tabindex', '-1')
//
//     $('#theform input').each(function () {
//       $(this).attr('tabindex', '-1');
//     });
//
//     $("#slideOut").removeClass('showSlideOut');
//
//
//
//   }
//
//
// });
//
//
// $('#sendMessage').click(function (e) {
//
//
//   // $('.secondBlock').show()
//
//
//
// });
//
//



$('#theform input').keydown(function (event) {
  if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )  {

    // $('#sendMessage').addClass('activated')


    $('.sendMessage2 .buttonOverlay').remove()
    $('.sendMessage2').addClass('blueBackground')



  }

})

$('#theform2 input').keydown(function (event) {
if(!$('#formControl11').val() == '' && !$('#formControl12').val() == ''){
  $('.sendMessage .buttonOverlay').remove()
  $('.sendMessage').addClass('blueBackground')
}

})

var hideContent = function() {

$('.hideOnSubmit').hide()

}
$('.sendMessage').keypress(
   hideContent

).click(
   hideContent
);


$("#slideOut .form-check").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $('.form-check').each(function() {
      $(this).addClass('focusClass')
    });

  }

})


$(".survey-container .form-check").on("keyup", function (e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $('.form-check').each(function() {
      $(this).addClass('focusClass')
    });

  }

})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('[data-toggle="popover"]').popover({
  trigger: 'hover',
  'placement': 'top'
});


var stickIt = $('.block666 .heros');


//build charts:
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function percentageText(num){
  return num % 1 === 0  ? num + ".0%" : num + "%";
}

function populateTable(group, dataSet, data){
  var total = 0,
      dataCopy = data.slice(),
      newData = [];

  data.forEach(function(d){
    total += d.value;
    // d.value = numberWithCommas(d.value);
    // d.percentage = percentageText(d.percentage);

    var newObj = {};

    newObj.value = numberWithCommas(d.value);
    newObj.percentage = percentageText(d.percentage);
    newObj.label = d.label;

    newData.push(newObj);
  });

  total = numberWithCommas(total);

  var string = dataSet;
  var tableData = {
    data: newData,
    dataSet: string.charAt(0).toUpperCase() + string.slice(1),
    total: total
  }

  var source = $("#students-table-template").html();
  var template = Handlebars.compile(source);
  var html = template(tableData);

  var containerSelector = "#" + group + "-" + dataSet + "-table";

  $(containerSelector).html(html);
}

$('#nav2 .nav.nav-tabs a').on('show.bs.tab', function(){
  var that = this;
  setTimeout(function(){
    // studentData
    var dataSet = that.getAttribute('data-subset'),
    containerID = "student-" + dataSet + "-bar-chart",
    chartData = processBarchartData(studentData[dataSet], dataSet);

    if ( d3.select("#" + containerID + ' svg').node() === null ){
      var container = d3.select("#" + containerID),
      width = container.node().clientWidth,
      ratio = container.node().getAttribute('chart-ratio');

      setChartContainerHeight(containerID, ratio);
      buildBarChart(containerID, chartData);
      populateTable("student", dataSet, chartData);
    }else{
      //maybe update chart if filters cary over
    }

  }, 100);



});

$('#nav3 .nav.nav-tabs a').on('show.bs.tab', function(){
  var that = this;
  setTimeout(function(){
    // studentData
    var dataSet = that.getAttribute('data-subset'),
    containerID = "educator-" + dataSet + "-bar-chart",
    chartData = processBarchartData(educatorData[dataSet], dataSet);

    if ( d3.select("#" + containerID + ' svg').node() === null ){
      var container = d3.select("#" + containerID),
      width = container.node().clientWidth,
      ratio = container.node().getAttribute('chart-ratio');

      setChartContainerHeight(containerID, ratio);
      buildBarChart(containerID, chartData);
      populateTable("educator", dataSet, chartData);
    }else{
      //maybe update chart if filters cary over
    }

  }, 100);



});

$('#nav .nav.nav-tabs a[data-type="students"]').on('show.bs.tab', function(){
  var that = this;
  setTimeout(function(){
    var containerID = "student-gender-bar-chart";

    if ( d3.select("#" + containerID + ' svg').node() === null ){
      var container = d3.select("#" + containerID),
      width = container.node().clientWidth,
      ratio = container.node().getAttribute('chart-ratio'),
      chartData = processBarchartData(studentData.gender, 'gender');

      setChartContainerHeight(containerID, ratio);
      buildBarChart(containerID, chartData);
      populateTable("student", "gender", chartData);
    }else{
      //maybe update chart if filters cary over
    }

    var containerID2 = "educator-gender-bar-chart";

    if ( d3.select("#" + containerID2 + ' svg').node() === null ){
      var chartData2 = processBarchartData(educatorData.gender, 'gender'),
      container = d3.select("#" + containerID2),
      width = container.node().clientWidth,
      ratio = container.node().getAttribute('chart-ratio');

      setChartContainerHeight(containerID2, ratio);
      buildBarChart(containerID2, chartData2);
      populateTable("educator", 'gender', chartData2);
    }else{
      //maybe update chart if filters cary over
    }

  }, 100);



});

$('#nav5 .nav.nav-tabs a').on('show.bs.tab', function(){
  var that = this;
  setTimeout(function(){
    var href = that.getAttribute('href');

    d3.selectAll(href + " .chart-container").each(function(a, b, c, d){
      // console.log("here, ", this, a, b, c, d)
      var container = d3.select(this),
      containerID = this.id;

      if ( container.select('svg').node() === null ){
        var chartType = container.attr('chart-type');

        setChartContainerHeight(containerID, 1);

        if (chartType === "stacked2"){
          var chartData = processStackedchartData2(surveyData, containerID);
          buildStackedChart2(containerID, chartData);
        }else{
          var chartData = processStackedchartData(surveyData, containerID);
          buildStackedChart(containerID, chartData);
        }

      }


    });
  }, 100);
});


var vTop = stickIt.offset().top + 40;

$(window).scroll(function (event) {


  var y = $(this).scrollTop()


  if ( y >= vTop ) {

    stickIt.addClass('stuck');
  }


  if (y <= vTop ) {
    stickIt.removeClass('stuck');
  }


  if(y + $(window).height() > $(document).height() - .02*$(document).height()) {
    stickIt.css('margin-top', '-8em')
  }

  else {
    stickIt.css('margin-top', '0em')
  }


});

$(document).ready(function(){
  console.log("onload", window.location.pathname);
})
