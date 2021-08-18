
//
// $('.filterData select').select2({
//   theme: 'bootstrap4',
// });



$("#orgType").on("click", function () {
  console.log("reset")
$("#alliance").val($("#alliance").data("default-value"));
});

$("#alliance").on("click", function () {
  console.log("reset")
$("#orgType").val($("#orgType").data("default-value"));
});


$("#resource").on("click", function () {
  console.log("reset")
$("#alliance2").val($("#alliance2").data("default-value"));
});

$("#alliance2").on("click", function () {
  console.log("reset")
$("#resourceType").val($("#resourceType").data("default-value"));
});



$('#orgType').on("change", function(){

  var word = $('#orgType').val();

  var Opt01 = "";

  $('.orgType').each(function() {
    Opt01 = $(this).html();

    if (word == Opt01){


      $(this).closest('.orgBlocks').removeClass('hiddenBar')


    }

    if (word !== Opt01){
      $(this).closest('.orgBlocks').addClass('hiddenBar')
    }

  })

  if ( word == "All"){

    $('.orgBlocks').removeClass('hiddenBar')

    $('.orgBlocks').show()


  }


  var word2 = $('#alliance').val();

  var Opt02 = "";


  console.log(word2)


  $('.allianceName').each(function() {
    Opt02 = $(this).html();

    if (word2 == Opt02 && word == Opt01){

      console.log('yes')

      $(this).closest('.orgBlocks').removeClass('hiddenBar')

    }


    // if (word == Opt02  &&  word2 !== Opt01){
    //
    //
    //   console.log('some')
    //   $(this).closest('.orgBlocks').removeClass('hiddenBar')
    // }



    // if (word2 !== Opt02 &&  word !== Opt01){
    //
    //
    //   console.log('no')
    //   $(this).closest('.orgBlocks').removeClass('hiddenBar')
    // }



  })



});


$('#alliance').on("change", function(){

  var word2 = $('#alliance').val();

  var Opt02 = "";


  $('.allianceName').each(function() {
    Opt02 = $(this).html();

    if (word2 == Opt02){

      $(this).closest('.orgBlocks').removeClass('hiddenBar')

    }

    if (word2 !== Opt02){
      $(this).closest('.orgBlocks').addClass('hiddenBar')
    }

  })



  if (word2 == "All" ){

    $('.orgBlocks').removeClass('hiddenBar')

    $('.orgBlocks').show()


  }



  var word = $('#orgType').val();

  var Opt01 = "";



  $('.orgType').each(function() {
    Opt01 = $(this).html();

    if (word2 == Opt02 && word == Opt01){

      console.log('yes')

      $(this).closest('.orgBlocks').removeClass('hiddenBar')

    }

    //
    // if (word2 == Opt02  &&  word !== Opt01){
    //
    //
    //   console.log('some')
    //   $(this).closest('.orgBlocks').removeClass('hiddenBar')
    // }



    // if (word2 !== Opt02  &&  word !== Opt01){
    //
    //
    //   console.log('no')
    //   $(this).closest('.orgBlocks').removeClass('hiddenBar')
    // }



  })




});




$('#resourceType').on("change", function(){

  var word3 = $('#resourceType').val();

  var Opt03 = "";

  $('.resourceType').each(function() {
    Opt03 = $(this).html();

    if (word3 == Opt03){


      $(this).closest('.resourceBlocks').removeClass('hiddenBar')


    }

    if (word3 !== Opt03){
      $(this).closest('.resourceBlocks').addClass('hiddenBar')
    }

  })

  if ( word3 == "All"){

    $('.resourceBlocks').removeClass('hiddenBar')

    $('.resourceBlocks').show()


  }


  var word4 = $('#alliance2').val();

  var Opt04 = "";



  $('.resourceAlliance').each(function() {
    Opt04 = $(this).html();

    if (word4 == Opt04 && word3 == Opt03){


      $(this).closest('.resourceBlocks').removeClass('hiddenBar')

    }




  })



});


$('#alliance2').on("change", function(){

  var word4 = $('#alliance2').val();

  var Opt04 = "";


  $('.resourceAlliance').each(function() {
    Opt04 = $(this).html();

    if (word4 == Opt04){

      $(this).closest('.resourceBlocks').removeClass('hiddenBar')

    }

    if (word4 !== Opt04){
      $(this).closest('.resourceBlocks').addClass('hiddenBar')
    }

  })



  if (word4 == "All" ){

    $('.resourceBlocks').removeClass('hiddenBar')

    $('.resourceBlocks').show()


  }



  var word3 = $('#resourceType"').val();

  var Opt03 = "";



  $('.resourceType').each(function() {
    Opt03 = $(this).html();

    if (word4 == Opt04 && word3 == Opt03){



      $(this).closest('.resourceBlocks').removeClass('hiddenBar')

    }



  })




});




$('.sortAlliance').on('click', function() {

  if (!$('.sortAlliance').hasClass('ascending')) {

    var ascendOrderedDivs5 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".allianceName").text() > $(b).find(".allianceName").text() ? 1 : -1;
    });

    var ascend501 = $('.updateBlocks').sort(function(a, b) {
      return $(a).find(".allianceName").text() > $(b).find(".allianceName").text() ? 1 : -1;
    });

    $(".renderSchoolUpdate").html(ascend501);

    $(".renderOrgs").html(ascendOrderedDivs5);
    setTimeout(function() {
      $('.sortAlliance').addClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
      $('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortAlliance').hasClass('ascending')) {

    var descendOrderedDivs5 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".allianceName").text() > $(b).find(".allianceName").text() ? -1 : 1;
    });

    var descend501 = $('.updateBlocks').sort(function(a, b) {
      return $(a).find(".allianceName").text() > $(b).find(".allianceName").text() ? -1 : 1;
    });

    $(".renderSchoolUpdate").html(descend501);

    $(".renderOrgs").html(descendOrderedDivs5);
    setTimeout(function() {
      $('.sortAlliance').removeClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
      $('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});

$('.sortResourceAlliance').on('click', function() {

  if (!$('.sortResourceAlliance').hasClass('ascending')) {

    var ascendOrderedDivs55 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".resourceAlliance").text() > $(b).find(".resourceAlliance").text() ? 1 : -1;
    });

    $(".renderResources").html(ascendOrderedDivs55);
    setTimeout(function() {
      $('.sortResourceAlliance').addClass('ascending')
    }, 100)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortResourceAlliance').hasClass('ascending')) {

    var descendOrderedDivs55 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".resourceAlliance").text() > $(b).find(".resourceAlliance").text() ? -1 : 1;
    });

    $(".renderResources").html(descendOrderedDivs55);
    setTimeout(function() {
      $('.sortResourceAlliance').removeClass('ascending')
    }, 100)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});



$('.sortResourceType').on('click', function() {

  if (!$('.sortResourceType').hasClass('ascending')) {

    var ascendOrderedDivs55 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".resourceType").text() > $(b).find(".resourceType").text() ? 1 : -1;
    });

    $(".renderResources").html(ascendOrderedDivs55);
    setTimeout(function() {
      $('.sortResourceType').addClass('ascending')
    }, 100)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortResourceType').hasClass('ascending')) {

    var descendOrderedDivs55 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".resourceType").text() > $(b).find(".resourceType").text() ? -1 : 1;
    });

    $(".renderResources").html(descendOrderedDivs55);
    setTimeout(function() {
      $('.sortResourceType').removeClass('ascending')
    }, 100)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});



$('.sortAuthors').on('click', function() {

  if (!$('.sortAuthors').hasClass('ascending')) {

    var ascendOrderedDivs55 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".author").text() > $(b).find(".author").text() ? 1 : -1;
    });

    $(".renderResources").html(ascendOrderedDivs55);
    setTimeout(function() {
      $('.sortAuthors').addClass('ascending')
    }, 100)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortAuthors').hasClass('ascending')) {

    var descendOrderedDivs55 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".author").text() > $(b).find(".author").text() ? -1 : 1;
    });

    $(".renderResources").html(descendOrderedDivs55);
    setTimeout(function() {
      $('.sortAuthors').removeClass('ascending')
    }, 100)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});

$('.sortOrgName').on('click', function() {

  if (!$('.sortOrgName').hasClass('ascending')) {

    var ascendOrderedDivs6 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".orgName").text() > $(b).find(".orgName").text() ? 1 : -1;
    });

    $(".renderOrgs").html(ascendOrderedDivs6);
    setTimeout(function() {
      $('.sortOrgName').addClass('ascending')
    }, 600)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortOrgName').hasClass('ascending')) {

    var descendOrderedDivs6 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".orgName").text() > $(b).find(".orgName").text() ? -1 : 1;
    });

    $(".renderOrgs").html(descendOrderedDivs6);
    setTimeout(function() {
      $('.sortOrgName').removeClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});

$('.sortResourceName').on('click', function() {

  if (!$('.sortResourceName').hasClass('ascending')) {

    var ascendOrderedDivs6 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".resourceName").text() > $(b).find(".resourceName").text() ? 1 : -1;
    });

    $(".renderResources").html(ascendOrderedDivs6);
    setTimeout(function() {
      $('.sortResourceName').addClass('ascending')
    }, 100)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortResourceName').hasClass('ascending')) {

    var descendOrderedDivs6 = $('.resourceBlocks').sort(function(a, b) {
      return $(a).find(".resourceName").text() > $(b).find(".resourceName").text() ? -1 : 1;
    });

    $(".renderResources").html(descendOrderedDivs6);
    setTimeout(function() {
      $('.sortResourceName').removeClass('ascending')
    }, 100)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});


$('.sortOrgType').on('click', function() {

  if (!$('.sortOrgType').hasClass('ascending')) {

    var ascendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".orgType").text() > $(b).find(".orgType").text() ? 1 : -1;
    });

    $(".renderOrgs").html(ascendOrderedDivs7);
    setTimeout(function() {
      $('.sortOrgType').addClass('ascending')
    }, 600)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortOrgType').hasClass('ascending')) {

    var descendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".orgType").text() > $(b).find(".orgType").text() ? -1 : 1;
    });

    $(".renderOrgs").html(descendOrderedDivs7);
    setTimeout(function() {
      $('.sortOrgType').removeClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});



// $('.sortLocation').on('click', function() {
//
//   if (!$('.sortLocation').hasClass('ascending')) {
//
//     var ascendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
//       return $(a).find(".orgLocation").text() > $(b).find(".orgLocation").text() ? 1 : -1;
//     });
//
//     $(".renderOrgs").html(ascendOrderedDivs7);
//     setTimeout(function() {
//       $('.sortLocation').addClass('ascending')
//     }, 600)
//
//     $('.topAttr i').each(function() {
//       $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
//     })
//
//     $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')
//
//   }
//
//   if ($('.sortLocation').hasClass('ascending')) {
//
//     var descendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
//       return $(a).find(".orgLocation").text() > $(b).find(".orgLocation").text() ? -1 : 1;
//     });
//
//     $(".renderOrgs").html(descendOrderedDivs7);
//     setTimeout(function() {
//       $('.sortLocation').removeClass('ascending')
//     }, 600)
//
//     $('.topAttr  i').each(function() {
//       $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
//     })
//
//     $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')
//
//   }
//
// });

$('.sortClassification').on('click', function() {

  if (!$('.sortClassification').hasClass('ascending')) {

    var ascendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".classification").text() > $(b).find(".classification").text() ? 1 : -1;
    });

    $(".renderOrgs").html(ascendOrderedDivs7);
    setTimeout(function() {
      $('.sortClassification').addClass('ascending')
    }, 600)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortClassification').hasClass('ascending')) {

    var descendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".classification").text() > $(b).find(".classification").text() ? -1 : 1;
    });

    $(".renderOrgs").html(descendOrderedDivs7);
    setTimeout(function() {
      $('.sortClassification').removeClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});

$('.sortLevel').on('click', function() {

  if (!$('.sortLevel').hasClass('ascending')) {

    var ascendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".level").text() > $(b).find(".level").text() ? 1 : -1;
    });

    $(".renderOrgs").html(ascendOrderedDivs7);
    setTimeout(function() {
      $('.sortLevel').addClass('ascending')
    }, 600)

    $('.topAttr i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortLevel').hasClass('ascending')) {

    var descendOrderedDivs7 = $('.orgBlocks').sort(function(a, b) {
      return $(a).find(".level").text() > $(b).find(".level").text() ? -1 : 1;
    });

    $(".renderOrgs").html(descendOrderedDivs7);
    setTimeout(function() {
      $('.sortLevel').removeClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
      $('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});

$('.sortYear').on('click', function() {


  if (!$('.sortYear').hasClass('ascending')) {




    var numerical101 = $('.resourceBlocks').sort(function(a, b) {


      var aThing = $(a).find('.year').text()

      var bThing = $(b).find('.year').text()

      if (aThing  == "n/a"){
        aThing = 0
      }

      if (bThing  == "n/a"){
        bThing = 0
      }

      var thisA = parseFloat(aThing)
      var thisB = parseFloat(bThing)


      return  thisA > thisB ? 1 : -1;



    });


    $(".renderResources").html(numerical101);


    setTimeout(function() {
      $('.sortYear').addClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
      $('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>')

  }

  if ($('.sortYear').hasClass('ascending')) {

    var numerical101 = $('.resourceBlocks').sort(function(a, b) {

          var aThing = $(a).find('.year').text()

          var bThing = $(b).find('.year').text()

          if (aThing  == "n/a"){
            aThing = 0
          }

          if (bThing  == "n/a"){
            bThing = 0
          }

          var thisA = parseFloat(aThing)
          var thisB = parseFloat(bThing)


          return  thisA > thisB ? -1 : 1;
        });



    // var numerical101 = $('.resourceBlocks').sort(function(a, b) {
    //   return parseFloat($(a).find('.year').text()) > parseFloat($(b).find('.year').text()) ? -1 : 1;
    // });

    $(".renderResources").html(numerical101);



    setTimeout(function() {
      $('.sortYear').removeClass('ascending')
    }, 600)

    $('.topAttr  i').each(function() {
    $('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>')
    })

    $(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>')

  }

});

$('.orgType').on('click', function(e) {

  $('.group1').show().css('display', 'flex')
  $('.group2').hide()
});

$('.allianceType').on('click', function(e) {

  $('.group2').show().css('display', 'flex')
  $('.group1').hide()

});


var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
  content: ''
});

markers1 = [
  ['0', '<div class="d-flex flex-column"><p class="blue strong">Achieving the Dream (ATD) Network</p><p>Silver Spring, MD<br>20910</p><p>Alliance: <span class="strong">ASPIRE</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9942321, -77.0294042, ['Aspire', 'Other'], 'images/aspire-map.svg', 'images/other.svg'],

  // ['1', '<div class="d-flex flex-column"><p class="blue strong">ADVANCE Implementation Mentors Network</p><p>Bethlehem, PA<br>18015</p><p>Alliance: <span class="strong">ASPIRE</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.6048687,-75.3797127, ['Aspire', 'Other'], 'images/aspire-map.svg', 'images/other.svg'],

  // ['2', '<div class="d-flex flex-column"><p class="blue strong">American Association for the Advancement of Science</p><p>Washington, DC<br>20005</p><p>Alliance: <span class="strong">ASPIRE</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9000001,-77.0304629, ['Aspire', 'Other'], 'images/aspire-map.svg', 'images/other.svg'],

  // ['3', '<div class="d-flex flex-column"><p class="blue strong">American Association of Physics Teachers</p><p>College Park, MD<br>20742</p><p>Alliance: <span class="strong">ASPIRE</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.972748,-76.9483733, ['Aspire', 'Other'], 'images/aspire-map.svg', 'images/other.svg'],


  // ['4', '<div class="d-flex flex-column"><p class="blue strong">American Chemical Society</p><p>Washington, DC<br>20036</p><p>Alliance: <span class="strong">ASPIRE</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9053482,-77.0383415, ['Aspire', 'Other'], 'images/aspire-map.svg', 'images/other.svg'],

  ['5', '<div class="d-flex flex-column"><p class="blue strong">American Mathematical Association of Two-Year Colleges (AMATYC)</p><p>Memphis, TN<br>38134</p><p>Alliance: <span class="strong">ASPIRE</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 35.1610765,-89.8687075, ['Aspire', 'Other'], 'images/aspire-map.svg', 'images/other.svg'],

  ['6', '<div class="d-flex flex-column"><p class="blue strong">Chemours</p><p>Washington, WV<br>26181</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 38.7538961,-82.1721159, ['First2', 'Company'], 'images/first2-map.svg', 'images/company.svg'],

  ['7', '<div class="d-flex flex-column"><p class="blue strong">Division of Science and Research, WV Higher Education Policy</p><p>Charleston, WV<br>25031</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.3461993,-81.6363815, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],

  ['8', '<div class="d-flex flex-column"><p class="blue strong">Fairmont State University</p><p>Fairmont, WV<br>26554</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.4857908,-80.1652222, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['9', '<div class="d-flex flex-column"><p class="blue strong">Green Bank Observatory</p><p>Green Bank, WV<br>24944</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.4314338,-79.8213715, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],


  ['10', '<div class="d-flex flex-column"><p class="blue strong">Health Sciences and Technology Academy</p><p>Morgantown, WV<br>26506</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p><br><p class="blue strong">West Virginia IDeA Network of Biomedical Research Excellence</p><p>Morgantown, WV<br>26506</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p><br><p class="blue strong">West Virginia University (Health Sciences & Technology Academy)</p><p>Morgantown, WV<br>26506</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p><br><p class="blue strong">West Virginia University Center for STEM Excellence</p><p>Morgantown, WV<br>26506</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 39.6515806,-79.9682796, ['First2', 'IHEProgram', 'Other'], 'images/multiple.svg', 'images/multiple.svg'],


  ['11', '<div class="d-flex flex-column"><p class="blue strong">American Astronomical Society</p><p>Washington, DC<br>20006</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9030289,-77.040339, ['IGEN', 'Other'], 'images/igen-map.svg', 'images/other.svg'],

  ['12', '<div class="d-flex flex-column"><p class="blue strong">American Chemical Society</p><p>Washington, DC<br>20036</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p><br><p class="blue strong">American Chemical Society</p><p>Washington, DC<br>20036</p><p>Alliance: <span class="strong">ASPIRE</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9053524,-77.0383362, ['IGEN', 'Aspire' , 'Other'], 'images/multiple.svg', 'images/multiple.svg'],

  ['13', '<div class="d-flex flex-column"><p class="blue strong">American Geophysical Union</p><p>Washington, DC<br>20009</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9146133,-77.0473965, ['IGEN', 'Other'], 'images/igen-map.svg', 'images/other.svg'],

  ['14', '<div class="d-flex flex-column"><p class="blue strong">American Physical Society</p><p>College Park, MD<br>20740</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p><br><p class="blue strong">American Physical Society</p><p>College Park, MD<br>20740</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.0005822,-76.9665783, ['IGEN', 'Aspire' , 'Other'], 'images/multiple.svg', 'images/multiple.svg'],

  ['15', '<div class="d-flex flex-column"><p class="blue strong">Google</p><p>Mountain View, CA<br>94043</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Company</span></p><br><p class="blue strong">Google</p><p>Mountain View, CA<br>94043</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 37.4133143,-122.1514791, ['IGEN', 'CAHSI' , 'Company'], 'images/multiple.svg', 'images/multiple.svg'],

  ['16', '<div class="d-flex flex-column"><p class="blue strong">University of Southern California</p><p>Los Angeles, CA<br>90007</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0223519,-118.287311, ['IGEN', 'IHE'], 'images/igen-map.svg', 'images/phd.svg'],

  ['17', '<div class="d-flex flex-column"><p class="blue strong">University of Wisconsin-Madison</p><p>Madison, WI<br>53715</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">University of Wisconsin-Madison</p><p>Madison, WI<br>53715</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 43.076592,-89.4146815, ['IGEN', 'Aspire', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  // ['18', '<div class="d-flex flex-column"><p class="blue strong">New Mexico State University</p><p>Las Cruces, NM<br>88003</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.278779,-106.7501, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['19', '<div class="d-flex flex-column"><p class="blue strong">North Carolina Agricultural and Technical State University</p><p>Greensboro, NC<br>27411</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.0770077,-79.7740139, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['20', '<div class="d-flex flex-column"><p class="blue strong">The Community College of Baltimore County</p><p>Owings Mills, MD<br>21117</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.4070289,-76.7843981, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['21', '<div class="d-flex flex-column"><p class="blue strong">Pittsburgh Parks Young Naturalists</p><p>Pittsburgh, PA<br>15219</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.4251919,-80.0001586, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['22', '<div class="d-flex flex-column"><p class="blue strong">Chicago STEM Pathways Cooperative</p><p>Chicago, IL<br>60653</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 41.8127032,-87.6099934, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  // ['23', '<div class="d-flex flex-column"><p class="blue strong">California Academy of Sciences</p><p>San Francisco, CA<br>94118</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 37.7698646,-122.4682887, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  // ['24', '<div class="d-flex flex-column"><p class="blue strong">SMASH</p><p>Oakland, CA<br>94612</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 37.7696051,-122.607393, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['25', '<div class="d-flex flex-column"><p class="blue strong">Bridge to Enter Advanced Mathematics (BEAM)</p><p>New York, NY<br>10005</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.7063185,-74.0130354, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['26', '<div class="d-flex flex-column"><p class="blue strong thisName">Northern Senior High School</p><p>Owings, MD<br>20736</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 38.6859019,-76.6533683, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],


  ['27', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University-Dominguez Hills</p><p>Carson, CA<br>90747</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.8624581,-118.2565995, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['28', '<div class="d-flex flex-column"><p class="blue strong thisName">Kean University</p><p>Union, NJ<br>07083</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 40.6801659,-74.2352987, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['29', '<div class="d-flex flex-column"><p class="blue strong thisName">Coral World Ocean Park</p><p>6450 Coki Point, St Thomas, U.S. Virgin Islands<br>00802</p><p>Alliance: <span class="strong">SEAS</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 18.349389,-64.8657887, ['SEAS', 'Company'], 'images/seas-map.svg', 'images/company.svg'],

  ['30', '<div class="d-flex flex-column"><p class="blue strong thisName">Data Geeks Lab</p><p>Hercules, CA<br>94547</p><p>Alliance: <span class="strong">SEAS</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 38.0279607,-122.32406, ['SEAS', 'Company'], 'images/seas-map.svg', 'images/company.svg'],

  ['31', '<div class="d-flex flex-column"><p class="blue strong thisName">From Prison Cells to PhD</p><p>Baltimore, MD<br>21224</p><p>Alliance: <span class="strong">STEM OPS</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.2624502,-76.5629464, ['STEMOPS', 'Foundation'], 'images/opps-map.svg', 'images/other.svg'],

  ['32', '<div class="d-flex flex-column"><p class="blue strong thisName">Operation Restoration</p><p>New Orleans, LA<br>70112</p><p>Alliance: <span class="strong">STEM OPS</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 29.9578291,-90.0857598, ['STEMOPS', 'Foundation'], 'images/opps-map.svg', 'images/other.svg'],

  ['33', '<div class="d-flex flex-column"><p class="blue strong">Argonne National Laboratory</p><p>Washington, DC<br>20024</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 38.8846835,-77.0271525, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['33', '<div class="d-flex flex-column"><p class="blue strong">California Academy of Sciences</p><p>San Francisco, CA<br>94118</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Museum</span></p></div>', 37.7698646,-122.4682887, ['STEMPUSH', 'Museum'], 'images/push-map.svg', 'images/Museum-map.svg'],

  ['34', '<div class="d-flex flex-column"><p class="blue strong">ADVANCE Implementation Mentors Network</p><p>Bethlehem, PA<br>18015</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.5996657,-75.4303209, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['35', '<div class="d-flex flex-column"><p class="blue strong">Iowa Department of Education</p><p>Des Moines, IA<br>50319</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">State or Local Education Agency</span></p></div>', 41.5924013,-93.6007427, ['Aspire', 'stateLocal'], 'images/aspire-map.svg', 'images/education-map.svg'],

  ['36', '<div class="d-flex flex-column"><p class="blue strong">West Virginia Higher Education Policy Commission (Division of Science and Research)</p><p>Charleston, WV<br>25301</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">State or Local Agency (non-SEA/LEA)</span></p></div>', 38.3461993,-81.6363815, ['First2', 'non-SEA'], 'images/first2-map.svg', 'images/nonsea-map.svg'],

  ['37', '<div class="d-flex flex-column"><p class="blue strong">West Virginia Department of Education</p><p>Charleston, WV<br>25305</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">State or Local Education Agency</span></p></div>', 38.3378126,-81.6124078, ['First2', 'stateLocal'], 'images/first2-map.svg', 'images/education-map.svg'],

  ['38', '<div class="d-flex flex-column"><p class="blue strong">Alliance to Catalyze Change for Equity in STEM Success</p><p>Washington, DC<br>20005</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9042336,-77.0400392, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['39', '<div class="d-flex flex-column"><p class="blue strong">American Association for the Advancement of Science</p><p>Washington, DC<br>20005</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9000043,-77.0304576, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['40', '<div class="d-flex flex-column"><p class="blue strong">American Association of Physics Teachers</p><p>College Park, MD<br>20742</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9714364,-76.9320784, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['41', '<div class="d-flex flex-column"><p class="blue strong">American Mathematical Society</p><p>Providence, RI<br>02904</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 41.8371751,-71.414592, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  // ['42', '<div class="d-flex flex-column"><p class="blue strong">American Physical Society</p><p>College Park, MD<br>20740</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.0008935,-77.0715571, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['43', '<div class="d-flex flex-column"><p class="blue strong">American Society for Cell Biology</p><p>Bethesda, MD<br>20814</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9914791,-77.0993207, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['44', '<div class="d-flex flex-column"><p class="blue strong">American Society for Engineering Education</p><p>Washington, DC<br>20036</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9069328,-77.0451582, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['45', '<div class="d-flex flex-column"><p class="blue strong">American Statistical Association</p><p>Alexandria, VA<br>22314</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.812911,-77.0477655, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['46', '<div class="d-flex flex-column"><p class="blue strong">Association of Public and Land-Grant Universities</p><p>Washington, DC<br>20005</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9033083,-77.0316123, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['47', '<div class="d-flex flex-column"><p class="blue strong">Big Ten Academic Alliance</p><p>Champaign, IL<br>61820</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.1147793,-88.2792239, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['48', '<div class="d-flex flex-column"><p class="blue strong">Building Leadership Capacity Research Project</p><p>Whitewater, WI<br>53190</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 42.807716,-88.8601602, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['49', '<div class="d-flex flex-column"><p class="blue strong">California Community Colleges’ Success Network</p><p>Los Angeles, CA<br>90017</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 34.0523164,-118.2730013, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['50', '<div class="d-flex flex-column"><p class="blue strong">Coalition for Reform of Undergraduate STEM Education</p><p>Washington, DC<br>20009</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9198359,-77.0474802, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['51', '<div class="d-flex flex-column"><p class="blue strong">Mathematical Association of America</p><p>Washington, DC<br>20036</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9106181,-77.0435776, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['52', '<div class="d-flex flex-column"><p class="blue strong">National Academic Advising Association at Kansas State University</p><p>Manhattan, KS<br>66502</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.1521149,-96.670972, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['53', '<div class="d-flex flex-column"><p class="blue strong">National Alliance for Doctoral Studies in the Mathematical Sciences</p><p>West Lafayette, IN<br>47907</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.4314228,-86.9436285, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['54', '<div class="d-flex flex-column"><p class="blue strong">National Association of Geoscience Teachers</p><p>Northfield, MN<br>55057</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 44.4620649,-93.3352875, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['55', '<div class="d-flex flex-column"><p class="blue strong">National Institute on Scientific Teaching</p><p>New Haven, CT<br>06520</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 41.2983961,-72.9991358, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['56', '<div class="d-flex flex-column"><p class="blue strong">National Postdoctoral Association</p><p>Rockville, MD<br>20855</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.1437677,-77.173059, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['57', '<div class="d-flex flex-column"><p class="blue strong">Network of STEM Education Centers</p><p>Washington, DC<br>20005</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9042503,-77.0400178, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['58', '<div class="d-flex flex-column"><p class="blue strong">Professional and Organizational Development in Higher Education</p><p>Nederland, CO<br>80466</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.9910018,-105.7041645, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['59', '<div class="d-flex flex-column"><p class="blue strong">Southern Region Education Board</p><p>Atlanta, GA<br>30318</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 33.7811618,-84.4087034, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],

  ['60', '<div class="d-flex flex-column"><p class="blue strong">Two-Year College Chemistry Consortium</p><p>Washington, DC<br>20036</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9042503,-77.0400178, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],


  ['61', '<div class="d-flex flex-column"><p class="blue strong">Women in Engineering ProActive Network (ADVANCE Resource and Coordination Network)</p><p>Washington, DC<br>20006</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.895153,-77.0493862, ['Aspire', 'Foundation'], 'images/aspire-map.svg', 'images/other.svg'],


  ['62', '<div class="d-flex flex-column"><p class="blue strong thisName">Center for Minorities and People with Disabilities in Information Technology</p><p>College Station, TX<br>77843</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 30.59098,-96.3617012, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  ['63', '<div class="d-flex flex-column"><p class="blue strong thisName">CSforAII</p><p>New York, NY<br>10013</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.7200895,-74.0167017, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  ['64', '<div class="d-flex flex-column"><p class="blue strong thisName">Great Minds in STEM</p><p>Los Angeles, CA<br>90040</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 33.9940303,-118.1699877, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  ['65', '<div class="d-flex flex-column"><p class="blue strong thisName">National Center for Women & Information Technology</p><p>Boulder, CO<br>80302</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.0399135,-105.5247971, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  ['66', '<div class="d-flex flex-column"><p class="blue strong thisName">Reboot Representation</p><p>Forest Hills, NY<br>11375</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.7222902,-73.8615555, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  // ['67', '<div class="d-flex flex-column"><p class="blue strong thisName">Reboot Representation</p><p>Forest Hills, NY<br>11375</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.7222902,-73.8615555, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  ['68', '<div class="d-flex flex-column"><p class="blue strong thisName">Workforce Solution/Borderplex</p><p>El Paso, TX<br>79901</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 31.7616301,-106.4939122, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  ['69', '<div class="d-flex flex-column"><p class="blue strong thisName">Young Women In Computing</p><p>Las Cruces, NM<br>88003</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 32.2780606,-106.7582166, ['CAHSI', 'Foundation'], 'images/cahsi-map.svg', 'images/other.svg'],

  ['70', '<div class="d-flex flex-column"><p class="blue strong">Education Alliance</p><p>Charleston, WV<br>25304</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.2997006,-81.6779956, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],

  ['71', '<div class="d-flex flex-column"><p class="blue strong">Generation WV</p><p>Charleston, WV<br>25301</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.348256,-81.6275367, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],

  ['72', '<div class="d-flex flex-column"><p class="blue strong">Green Bank Observatory</p><p>Green Bank, WV<br>24944</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.4322076,-79.8338229, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],

  ['73', '<div class="d-flex flex-column"><p class="blue strong">High Rocks Educational Corporation</p><p>Hillsboro, WV<br>24946</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.1838656,-80.1964087, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],

  ['74', '<div class="d-flex flex-column"><p class="blue strong">West Virginia NASA Space Grant Consortium</p><p>Morgantown, WV<br>26506</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.6480359,-79.9719087, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],

  ['75', '<div class="d-flex flex-column"><p class="blue strong">West Virginia NASA Space Grant Consortium</p><p>Morgantown, WV<br>26506</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.6480359,-79.9719087, ['First2', 'Other'], 'images/first2-map.svg', 'images/other.svg'],


  ['76', '<div class="d-flex flex-column"><p class="blue strong">Genentech Foundation</p><p>San Francisco, CA<br>94080</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 37.6565061,-122.4406515, ['IGEN', 'Other'], 'images/igen-map.svg', 'images/other.svg'],


  ['77', '<div class="d-flex flex-column"><p class="blue strong">Materials Research Society</p><p>Warrendale, PA<br>15086</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.6710101,-80.1179852, ['IGEN', 'Other'], 'images/igen-map.svg', 'images/other.svg'],

  ['78', '<div class="d-flex flex-column"><p class="blue strong">PPG Foundation</p><p>Pittsburgh, PA<br>15272</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.4396501,-80.0052848, ['IGEN', 'Other'], 'images/igen-map.svg', 'images/other.svg'],


  ['79', '<div class="d-flex flex-column"><p class="blue strong">Sloan Foundation</p><p>New York, NY<br>10111</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.758995,-73.9794921, ['IGEN', 'Other'], 'images/igen-map.svg', 'images/other.svg'],

  ['80', '<div class="d-flex flex-column"><p class="blue strong thisName">Coastal & Estuarine Research Federation</p><p>Seattle, WA<br>98133</p><p>Alliance: <span class="strong">SEAS</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 47.7387181,-122.3848657, ['SEAS', 'Company'], 'images/seas-map.svg', 'images/company.svg'],

  ['81', '<div class="d-flex flex-column"><p class="blue strong thisName">The Nature Conservancy</p><p>U.S. Virgin Islands, St Croix, U.S. Virgin Islands<br>00820</p><p>Alliance: <span class="strong">SEAS</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 17.7571918,-64.7278132, ['SEAS', 'Company'], 'images/seas-map.svg', 'images/company.svg'],

  ['82', '<div class="d-flex flex-column"><p class="blue strong">Arthur Ashe Institute for Urban Health (Health Science Academy)</p><p>New York, NY<br>11201</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.6970754,-74.005191, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['83', '<div class="d-flex flex-column"><p class="blue strong">Bay Area STEM Ecosystem</p><p>Corona Del Mar, CA<br>92625</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.6970754,-74.005191, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['84', '<div class="d-flex flex-column"><p class="blue strong">ExpandED Schools (New York City STEM Network)</p><p>New York, NY<br>10036</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.7541517,-73.9840473, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['85', '<div class="d-flex flex-column"><p class="blue strong">Middle States Association</p><p>Philadelphia, PA<br>19104</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 39.9559161,-75.1976317, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['86', '<div class="d-flex flex-column"><p class="blue strong">National College Attainment Network</p><p>Washington, DC<br>20011</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 38.9029046,-77.0412022, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['87', '<div class="d-flex flex-column"><p class="blue strong">Pittsburgh Parks Conservancy (Pittsburgh Parks Young Naturalists)</p><p>Pittsburgh, PA<br>15203</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.4294299,-79.9992874, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['88', '<div class="d-flex flex-column"><p class="blue strong">Project Exploration (Chicago STEM Pathways Cooperative)</p><p>Chicago, IL<br>60653</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 41.812727,-87.6100036, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['89', '<div class="d-flex flex-column"><p class="blue strong">Remake Learning (Pittsburgh STEAM Ecosystem)</p><p>Pittsburgh, PA<br>15212</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 40.4480412,-80.0046294, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['90', '<div class="d-flex flex-column"><p class="blue strong">Summer Math and Science Honors (SMASH) Academy</p><p>Oakland, CA<br>94612</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Community-Based Organization/Foundation/Other Non-Profit</span></p></div>', 37.8085467,-122.2787212, ['STEMPUSH', 'Other'], 'images/push-map.svg', 'images/other.svg'],

  ['91', '<div class="d-flex flex-column"><p class="blue strong">Internet Scout Research Group</p><p>Madison, WI<br>53715</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 43.0715255,-89.4088546, ['Aspire', 'Company'], 'images/aspire-map.svg', 'images/company.svg'],

  ['92', '<div class="d-flex flex-column"><p class="blue strong">Internet Scout Research Group</p><p>Madison, WI<br>53715</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 43.0715255,-89.4088546, ['Aspire', 'Company'], 'images/aspire-map.svg', 'images/company.svg'],

  ['93', '<div class="d-flex flex-column"><p class="blue strong thisName">Lockheed Martin</p><p>Grand Prarie, TX<br>75051</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 32.7175782,-97.0295799, ['CAHSI', 'Company'], 'images/cahsi-map.svg', 'images/company.svg'],

  ['94', '<div class="d-flex flex-column"><p class="blue strong thisName">ICF International</p><p>Charleston, WV<br>25301</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 38.3523607,-81.6358232, ['First2', 'Company'], 'images/first2-map.svg', 'images/company.svg'],

  ['95', '<div class="d-flex flex-column"><p class="blue strong thisName">General Atomics</p><p>San Diego, CA<br>92121</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 32.9034046,-117.2337826, ['IGEN', 'Company'], 'images/igen-map.svg', 'images/company.svg'],

  ['96', '<div class="d-flex flex-column"><p class="blue strong thisName">SRI, International</p><p>Menlo Park, CA<br>94025</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 37.4575414,-122.1786223, ['First2', 'Company'], 'images/first2-map.svg', 'images/company.svg'],

  ['97', '<div class="d-flex flex-column"><p class="blue strong thisName">IBM</p><p>Armonk, NY<br>10504</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 41.1106347,-73.7248718, ['IGEN', 'Company'], 'images/igen-map.svg', 'images/company.svg'],

  ['98', '<div class="d-flex flex-column"><p class="blue strong thisName">Intel</p><p>Santa Clara, CA<br>95054</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 37.3821497,-121.9739497, ['IGEN', 'Company'], 'images/igen-map.svg', 'images/company.svg'],

  ['99', '<div class="d-flex flex-column"><p class="blue strong thisName">WestEd</p><p>Atlanta, GA<br>30309</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 33.7915514,-84.3883743, ['IGEN', 'Company'], 'images/igen-map.svg', 'images/company.svg'],

  ['100', '<div class="d-flex flex-column"><p class="blue strong thisName">Teaching Institute for Excellence in STEM</p><p>Lewis Center, OH<br>43035</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Company</span></p></div>', 33.7915514,-84.3883743, ['STEMPUSH', 'Company'], 'images/push-map.svg', 'images/company.svg'],

  ['101', '<div class="d-flex flex-column"><p class="blue strong">Brookhaven National Laboratory</p><p>Upton, NY<br>11973</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 40.8630477,-72.875055, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['102', '<div class="d-flex flex-column"><p class="blue strong">Facility for Rare Isotope Beams</p><p>East Lansing, MI<br>48824</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 42.7244103,-84.4757846, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['103', '<div class="d-flex flex-column"><p class="blue strong">Fermilab</p><p>Batavia, IL<br>60510</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 41.8406227,-88.2794488, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],


  ['104', '<div class="d-flex flex-column"><p class="blue strong">Idaho National Laboratory</p><p>Idaho Falls, ID<br>83415</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 43.5194931,-112.0481175, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['105', '<div class="d-flex flex-column"><p class="blue strong">Jet Propulsion Lab - NASA</p><p>Los Angeles<br>91109</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 34.2013081,-118.1735831, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['106', '<div class="d-flex flex-column"><p class="blue strong">Lawrence Berkeley National Lab</p><p>Berkeley, CA<br>94720</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 37.8759016,-122.2522432, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['107', '<div class="d-flex flex-column"><p class="blue strong">Lawrence Livermore National Laboratory</p><p>Livermore, CA<br>94550</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 37.6869634,-121.7080639, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['108', '<div class="d-flex flex-column"><p class="blue strong">Los Alamos National Laboratory</p><p>Los Alamos, NM<br>87545</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 37.0224489,-100.6512644, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['109', '<div class="d-flex flex-column"><p class="blue strong">National High Magnetic Field Laboratory</p><p>Tallahassee, FL<br>32310</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 30.4243815,-84.3230232, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['110', '<div class="d-flex flex-column"><p class="blue strong">National Institute Of Standards and Technology</p><p>Gaithersburg, MD<br>20899</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 39.1401632,-77.2206433, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['111', '<div class="d-flex flex-column"><p class="blue strong">Oak Ridge National Laboratory</p><p>Oak Ridge, TN<br>37830</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 35.9311,-84.3121665, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['112', '<div class="d-flex flex-column"><p class="blue strong">Pacific Northwest National Laboratory</p><p>Richland, WA<br>99354</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 46.3451404,-119.2814185, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['113', '<div class="d-flex flex-column"><p class="blue strong">Sandia National Laboratories</p><p>Albuquerque, NM<br>87123</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 35.0571776,-106.5361761, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['114', '<div class="d-flex flex-column"><p class="blue strong">Sandia National Laboratories</p><p>Albuquerque, NM<br>87123</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 35.0571776,-106.5361761, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['115', '<div class="d-flex flex-column"><p class="blue strong">SLAC National Accelerator Laboratory</p><p>Menlo Park, CA<br>94025</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Federal Agency or Lab</span></p></div>', 37.4198517,-122.2048944, ['IGEN', 'Federal'], 'images/igen-map.svg', 'images/federal-map.svg'],

  ['116', '<div class="d-flex flex-column"><p class="blue strong">Appalachian State University</p><p>Boone, NC<br>28608</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.2135628,-81.6865105, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['117', '<div class="d-flex flex-column"><p class="blue strong">Auburn University</p><p>Auburn, AL<br>36849</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.5933574,-85.497355, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['118', '<div class="d-flex flex-column"><p class="blue strong">Bakersfield College</p><p>Bakersfield, CA<br>93305</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.4078467,-118.9739525, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['119', '<div class="d-flex flex-column"><p class="blue strong">Ball State University</p><p>Muncie, IN<br>47306</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.2049604,-85.4084733, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['119', '<div class="d-flex flex-column"><p class="blue strong">Ball State University</p><p>Muncie, IN<br>47306</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.2049604,-85.4084733, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['120', '<div class="d-flex flex-column"><p class="blue strong">Boise State University</p><p>Boise, ID<br>83725</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 43.6026952,-116.2036491, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['121', '<div class="d-flex flex-column"><p class="blue strong">California Polytechnic State University</p><p>San Luis Obispo, CA<br>93407</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.3050053,-120.6646829, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['122', '<div class="d-flex flex-column"><p class="blue strong">California State University-Fullerton</p><p>Fullerton, CA<br>92831</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.8823476,-117.887292, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['123', '<div class="d-flex flex-column"><p class="blue strong">California State University-Los Angeles</p><p>Los Angeles, CA<br>90032</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">California State University-Los Angeles</p><p>Los Angeles, CA<br>90032</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0667698,-118.1706279, ['Aspire', 'CAHSI','IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['124', '<div class="d-flex flex-column"><p class="blue strong">California State University-Northridge</p><p>Northridge, CA<br>91330</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.2410366,-118.5298632, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['125', '<div class="d-flex flex-column"><p class="blue strong">California State University-Pomona</p><p>Pomona, CA<br>91768</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0583116,-117.8239615, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['126', '<div class="d-flex flex-column"><p class="blue strong">California State University-Pomona</p><p>Pomona, CA<br>91768</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0583116,-117.8239615, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['127', '<div class="d-flex flex-column"><p class="blue strong">California State University, Dominguez Hills</p><p>Carson, CA<br>90747</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.8624581,-118.2565995, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['128', '<div class="d-flex flex-column"><p class="blue strong">Central Michigan University</p><p>Mount Pleasant, MI<br>48859</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 43.5819086,-84.7800138, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['129', '<div class="d-flex flex-column"><p class="blue strong">Cerritos College</p><p>Norwalk, CA<br>90650</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.8846277,-118.098695, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['130', '<div class="d-flex flex-column"><p class="blue strong">Cleveland State University</p><p>Cleveland, OH<br>44115</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 41.5027643,-81.6766117, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['131', '<div class="d-flex flex-column"><p class="blue strong">Coastline Community College</p><p>Fountain Valley, CA<br>92708</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.7025658,-118.026991, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['132', '<div class="d-flex flex-column"><p class="blue strong">College of the Canyons</p><p>Santa Clarita, CA<br>91355</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.4042187,-118.57182, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['133', '<div class="d-flex flex-column"><p class="blue strong">Colorado State University</p><p>Fort Collins, CO<br>80523</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.5734148,-105.0887374, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['134', '<div class="d-flex flex-column"><p class="blue strong">Des Moines Area Community College</p><p>Ankeny, IA<br>50023</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 41.6528225,-93.6891111, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['135', '<div class="d-flex flex-column"><p class="blue strong">East Los Angeles College</p><p>Monterey Park, CA<br>91754</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">East Los Angeles College</p><p>Monterey Park, CA<br>91754</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0413848,-118.1524532, ['Aspire', 'STEMCORE', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['136', '<div class="d-flex flex-column"><p class="blue strong">Eastern Iowa Community College District</p><p>Davenport, IA<br>52801</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 41.5222439,-90.5767835, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['137', '<div class="d-flex flex-column"><p class="blue strong">El Paso Community College</p><p>El Paso, TX<br>79915</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 31.7881213,-106.5642591, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['138', '<div class="d-flex flex-column"><p class="blue strong">Florida International University</p><p>Miami, FL<br>33199</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">Florida International University</p><p>Miami, FL<br>33199</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 25.7561275,-80.3790673, ['Aspire', 'CAHSI', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['139', '<div class="d-flex flex-column"><p class="blue strong">Florida State University</p><p>Tallahassee, FL<br>32306</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 30.4402458,-84.3018667, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['140', '<div class="d-flex flex-column"><p class="blue strong">Foothill College</p><p>Los Altos Hills, CA<br>94022</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">Foothill College</p><p>Los Altos Hills, CA<br>94022</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.3614051,-122.1299461, ['Aspire', 'STEMCORE', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['141', '<div class="d-flex flex-column"><p class="blue strong">Gannon University</p><p>Erie, PA<br>16541</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.1282555,-80.0889365, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['142', '<div class="d-flex flex-column"><p class="blue strong">Georgia State University</p><p>Atlanta, GA<br>30302</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.753068,-84.3874706, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['143', '<div class="d-flex flex-column"><p class="blue strong">Golden West College</p><p>Huntington Beach, CA<br>92647</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.7337155,-118.0052242, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['144', '<div class="d-flex flex-column"><p class="blue strong">Grand Valley State University</p><p>Allendale, MI<br>49401</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.9641221,-85.8912291, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['145', '<div class="d-flex flex-column"><p class="blue strong">High Point University</p><p>High Point, NC<br>27268</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.9721829,-79.9973587, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['146', '<div class="d-flex flex-column"><p class="blue strong">Howard Community College</p><p>Columbia, MD<br>21044</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">Howard Community College</p><p>Columbia, MD<br>21044</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.2123168,-76.8806358, ['Aspire', 'STEMCORE', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['147', '<div class="d-flex flex-column"><p class="blue strong">Humboldt State University</p><p>Arcata, CA<br>95521</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.8706248,-124.0852606, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['148', '<div class="d-flex flex-column"><p class="blue strong">Indiana University Purdue University Indianapolis</p><p>Indianapolis, IN<br>46202</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.7749927,-86.1794685, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['149', '<div class="d-flex flex-column"><p class="blue strong">Iowa State University</p><p>Ames, IA<br>50011</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.0266573,-93.6486403, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['150', '<div class="d-flex flex-column"><p class="blue strong">Jackson State University</p><p>Jackson, MS<br>39217</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.2968851,-90.2086139, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['151', '<div class="d-flex flex-column"><p class="blue strong">Kirkwood Community College</p><p>Cedar Rapids, IA<br>52404</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 41.9109667,-91.6543488, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['152', '<div class="d-flex flex-column"><p class="blue strong">Lane Community College</p><p>Eugene, OR<br>97405</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 44.0088358,-123.0386905, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['153', '<div class="d-flex flex-column"><p class="blue strong">Lehigh University</p><p>Bethlehem, PA<br>18015</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.6048687,-75.3797074, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['154', '<div class="d-flex flex-column"><p class="blue strong">Los Angeles Pierce College</p><p>Woodland Hills, CA<br>91371</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.1844774,-118.5812296, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['155', '<div class="d-flex flex-column"><p class="blue strong">Louisiana Tech University</p><p>Ruston, LA<br>71272</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.5282644,-92.6521185, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['156', '<div class="d-flex flex-column"><p class="blue strong">Marshalltown Community College</p><p>Marshalltown, IA<br>50158</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.0006965,-92.9108996, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['157', '<div class="d-flex flex-column"><p class="blue strong">Meharry Medical College</p><p>Nashville, TN<br>37208</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.1668749,-86.8098915, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['158', '<div class="d-flex flex-column"><p class="blue strong">Midland College</p><p>Midland, TX<br>79705</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.0304457,-102.1083484, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['159', '<div class="d-flex flex-column"><p class="blue strong">Mississippi State University</p><p>Mississippi State, MS<br>39762</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.4551742,-88.7965653, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['160', '<div class="d-flex flex-column"><p class="blue strong">Montana State University</p><p>Bozeman, MT<br>59717</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 45.6673524,-111.0568098, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['161', '<div class="d-flex flex-column"><p class="blue strong">Mt. San Antonio College</p><p>Walnut, CA<br>91789</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0487487,-117.8443208, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['162', '<div class="d-flex flex-column"><p class="blue strong">North Dakota State University</p><p>Fargo, ND<br>58015</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 46.8977528,-96.8046254, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['163', '<div class="d-flex flex-column"><p class="blue strong">North Iowa Area Community College</p><p>Mason City, IA<br>50401</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 43.156929,-93.1350095, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['164', '<div class="d-flex flex-column"><p class="blue strong">Odessa College</p><p>Odessa, TX<br>79764</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 31.8657459,-102.3859459, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['165', '<div class="d-flex flex-column"><p class="blue strong">Orange Coast College</p><p>Costa Mesa, CA<br>92626</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.6713265,-117.9138966, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['166', '<div class="d-flex flex-column"><p class="blue strong">Oregon State University</p><p>Corvallis, OR<br>97331</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 44.5637806,-123.281633, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['167', '<div class="d-flex flex-column"><p class="blue strong">Pennsylvania State University</p><p>State College, PA<br>16801</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.7982133,-77.8620971, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['168', '<div class="d-flex flex-column"><p class="blue strong">Rio Hondo College</p><p>Whittier, CA<br>90601</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0190058,-118.0369068, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['169', '<div class="d-flex flex-column"><p class="blue strong">Rochester Institute of Technology</p><p>Rochester, NY<br>14623</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">Rochester Institute of Technology</p><p>Rochester, NY<br>14623</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 43.0844955,-77.6771198, ['Aspire', 'IGEN' , 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['170', '<div class="d-flex flex-column"><p class="blue strong">San Francisco State University</p><p>San Francisco, CA<br>94132</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">San Francisco State University</p><p>San Francisco, CA<br>94132</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.7241492,-122.4821292, ['Aspire','CAHSI' , 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['171', '<div class="d-flex flex-column"><p class="blue strong">Santa Monica College</p><p>Santa Monica, CA<br>90405</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">Santa Monica College</p><p>Santa Monica, CA<br>90405</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.0165568,-118.4725835, ['Aspire', 'STEMCORE', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['172', '<div class="d-flex flex-column"><p class="blue strong">South Dakota State University</p><p>Brookings, SD<br>57007</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 44.3219388,-96.7859298, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['173', '<div class="d-flex flex-column"><p class="blue strong">Southwestern College</p><p>Chula Vista, CA<br>91910</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.6407108,-117.0002485, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['174', '<div class="d-flex flex-column"><p class="blue strong">Stevens Institute of Technology</p><p>Hoboken, NJ<br>07030</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.7468668,-74.0280354, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['175', '<div class="d-flex flex-column"><p class="blue strong">Tallahassee Community College</p><p>Tallahassee, FL<br>32304</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 30.4438624,-84.3411585, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['176', '<div class="d-flex flex-column"><p class="blue strong">Tarrant County College</p><p>Fort Worth, TX<br>76102</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.7474661,-97.330064, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['177', '<div class="d-flex flex-column"><p class="blue strong">Temple University</p><p>Philadelphia, PA<br>19122</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.9805942,-75.1579263, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['178', '<div class="d-flex flex-column"><p class="blue strong">Texas A&M University</p><p>College Station, TX<br>77843</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 30.6187558,-96.3386659, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['179', '<div class="d-flex flex-column"><p class="blue strong">The Ohio State University</p><p>Columbus, OH<br>43210</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.0066723,-83.0326433, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['180', '<div class="d-flex flex-column"><p class="blue strong">The Ohio State University</p><p>Columbus, OH<br>43210</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.0066723,-83.0326433, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['181', '<div class="d-flex flex-column"><p class="blue strong">The University of Texas at San Antonio</p><p>San Antonio, TX<br>78249</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 29.5827351,-98.621094, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['182', '<div class="d-flex flex-column"><p class="blue strong">Tyler Junior College</p><p>Tyler, TX<br>75701</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.3350036,-95.2845478, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['183', '<div class="d-flex flex-column"><p class="blue strong">University of Arkansas - Fayetteville</p><p>Fayetteville, AR<br>72701</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.0686895,-94.1770358, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['184', '<div class="d-flex flex-column"><p class="blue strong">University of California - Davis</p><p>Davis, CA<br>95616</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.5382322,-121.7639012, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['185', '<div class="d-flex flex-column"><p class="blue strong">University of California - Irvine</p><p>Irvine, CA<br>92697</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.6404952,-117.8464849, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['186', '<div class="d-flex flex-column"><p class="blue strong">University of California - Merced</p><p>Merced, CA<br>95343</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">University of California - Merced</p><p>Merced, CA<br>95343</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.3660652,-120.4246066, ['Aspire', 'CAHSI' , 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['187', '<div class="d-flex flex-column"><p class="blue strong">University of California - Riverside</p><p>Riverside, CA<br>92521</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.9737055,-117.3302531, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['188', '<div class="d-flex flex-column"><p class="blue strong">University of California -Santa Barbara</p><p>Santa Barbara, CA<br>93106</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.4139629,-119.8511357, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['189', '<div class="d-flex flex-column"><p class="blue strong">University of California - Santa Cruz</p><p>Santa Cruz, CA<br>95064</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.9880503,-122.060398, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['190', '<div class="d-flex flex-column"><p class="blue strong">University of California, Office of the President</p><p>Oakland, CA<br>94607</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 37.8022632,-122.2735253, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['191', '<div class="d-flex flex-column"><p class="blue strong">University of Central Florida</p><p>Orlando, FL<br>32816</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p><br><p class="blue strong">University of Central Florida</p><p>Orlando, FL<br>32816</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 28.6024274,-81.2022486, ['Aspire', 'IGEN', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['192', '<div class="d-flex flex-column"><p class="blue strong">University of Cincinnati</p><p>Cincinnati, OH<br>45221</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.1329219,-84.5171391, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['193', '<div class="d-flex flex-column"><p class="blue strong">University of Denver</p><p>Denver, CO<br>80208</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.6766174,-104.9640852, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['194', '<div class="d-flex flex-column"><p class="blue strong">University of Florida</p><p>Gainesville, FL<br>32611</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 29.6436325,-82.3571189, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['195', '<div class="d-flex flex-column"><p class="blue strong">University of Georgia</p><p>Athens, GA<br>30602</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.9480053,-83.3795108, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['196', '<div class="d-flex flex-column"><p class="blue strong">University of Houston</p><p>Houston, TX<br>77004</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 29.7199489,-95.3444274, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['197', '<div class="d-flex flex-column"><p class="blue strong">University of Illinois at Urbana-Champaign</p><p>Champaign, IL<br>61801</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.1019523,-88.2293502, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['198', '<div class="d-flex flex-column"><p class="blue strong">University of Iowa</p><p>Iowa City, IA<br>52242</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 41.6627078,-91.5571658, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['199', '<div class="d-flex flex-column"><p class="blue strong">University of Louisiana at Lafayette</p><p>Lafayette, LA<br>70504</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 30.2114404,-92.0226008, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['200', '<div class="d-flex flex-column"><p class="blue strong">University of Maryland College Park</p><p>College Park, MD<br>20742</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.9869183,-76.944743, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['201', '<div class="d-flex flex-column"><p class="blue strong">University of Massachusetts Amherst</p><p>Amherst, MA<br>01003</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.3867598,-72.5322402, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['202', '<div class="d-flex flex-column"><p class="blue strong">University of Minnesota-Twin Cities</p><p>Minneapolis, MN<br>55455</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 44.97399,-93.2299172, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['203', '<div class="d-flex flex-column"><p class="blue strong">University of Minnesota, Duluth</p><p>Duluth, MN<br>55812</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 46.8187754,-92.0865193, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['204', '<div class="d-flex flex-column"><p class="blue strong">University of Missouri</p><p>Columbia, MO<br>65211</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.9403808,-92.3299262, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['205', '<div class="d-flex flex-column"><p class="blue strong">University of Nebraska-Lincoln</p><p>Lincoln, NE<br>68588</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.8201966,-96.702665, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['206', '<div class="d-flex flex-column"><p class="blue strong">University of North Carolina at Charlotte</p><p>Charlotte, NC<br>28223</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.3070929,-80.7373527, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['207', '<div class="d-flex flex-column"><p class="blue strong">University of North Carolina Chapel Hill</p><p>Chapel Hill, NC<br>27514</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.9049122,-79.0491021, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['208', '<div class="d-flex flex-column"><p class="blue strong">University of North Texas</p><p>Denton, TX<br>76203</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.207488,-97.1547749, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['209', '<div class="d-flex flex-column"><p class="blue strong">University of Northern Iowa</p><p>Cedar Falls, IA<br>50614</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.5121517,-92.4668356, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['210', '<div class="d-flex flex-column"><p class="blue strong">University of Oregon</p><p>Eugene, OR<br>97403</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 44.0448302,-123.0747942, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['211', '<div class="d-flex flex-column"><p class="blue strong">University of Pittsburgh</p><p>Pittsburgh, PA<br>15260</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.4443533,-79.9630237, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['212', '<div class="d-flex flex-column"><p class="blue strong">University of Rochester</p><p>Rochester, NY<br>14611</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 43.1305531,-77.628192, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['213', '<div class="d-flex flex-column"><p class="blue strong">University of South Carolina</p><p>Columbia, SC<br>29208</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.9937575,-81.0321073, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['214', '<div class="d-flex flex-column"><p class="blue strong">University of South Florida</p><p>Tampa, FL<br>33620</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 28.0587031,-82.4160426, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['215', '<div class="d-flex flex-column"><p class="blue strong">University of Tennessee, Knoxville</p><p>Knoxville, TN<br>37996</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.9544013,-83.9316451, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['216', '<div class="d-flex flex-column"><p class="blue strong">University of Texas at Arlington</p><p>Arlington, TX<br>76019</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.7292117,-97.1173858, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['217', '<div class="d-flex flex-column"><p class="blue strong">University of Texas at Austin</p><p>Austin, TX<br>78712</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 30.2849185,-97.7362454, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['218', '<div class="d-flex flex-column"><p class="blue strong">University of Texas at El Paso</p><p>El Paso, TX<br>79968</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 31.7709368,-106.5068292, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['219', '<div class="d-flex flex-column"><p class="blue strong">University of Texas at Tyler</p><p>Tyler, TX<br>75799</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.315745,-95.2564197, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['220', '<div class="d-flex flex-column"><p class="blue strong">University of Texas Permian Basin</p><p>Odessa, TX<br>79762</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 31.8876067,-102.3251933, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['221', '<div class="d-flex flex-column"><p class="blue strong">University of Vermont</p><p>Burlington, VT<br>05405</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 44.4778528,-73.1986524, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['222', '<div class="d-flex flex-column"><p class="blue strong">University of Virginia</p><p>Charlottesville, VA<br>22904</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.0335529,-78.5101659, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  // ['223', '<div class="d-flex flex-column"><p class="blue strong">University of Wisconsin-Madison</p><p>Madison, WI<br>53715</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 43.076592,-89.4146762, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['224', '<div class="d-flex flex-column"><p class="blue strong">Utah State University</p><p>Logan, UT<br>84322</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 41.745161,-111.8119312, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['225', '<div class="d-flex flex-column"><p class="blue strong">Virginia Polytechnic Institute and State University</p><p>Blacksburg, VA<br>24061</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.2283843,-80.4256054, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['226', '<div class="d-flex flex-column"><p class="blue strong">Western Michigan University</p><p>Kalamazoo, MI<br>49008</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.2826709,-85.6168626, ['Aspire', 'IHE'], 'images/aspire-map.svg', 'images/phd.svg'],

  ['227', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University - Bakersfield</p><p>Bakersfield, CA<br>93311</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.3486641,-119.1055335, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['228', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University - Sacramento</p><p>Sacramento, CA<br>95819</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.5584592,-121.4240103, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['229', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University-Chico</p><p>Chico, CA<br>95929</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.7287566,-121.8498174, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['230', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University-East Bay</p><p>Hayward, CA<br>94542</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 37.6571459,-122.0596759, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['231', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University-Fresno</p><p>Fresno, CA<br>93740</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 36.8133631,-119.7482834, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['232', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University-Fresno</p><p>Fresno, CA<br>93740</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 36.8133631,-119.7482834, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['233', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University-San Marcos</p><p>San Marcos, CA<br>92096</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.1294938,-117.1617594, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['234', '<div class="d-flex flex-column"><p class="blue strong thisName">California State University-Stanislaus</p><p>Turlock, CA<br>95382</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 37.525248,-120.8575818, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['235', '<div class="d-flex flex-column"><p class="blue strong thisName">Chandler-Gilbert Community College</p><p>Chandler, AZ<br>85225</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.2951034,-111.7978701, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['236', '<div class="d-flex flex-column"><p class="blue strong thisName">CUNY New York City College of Technology</p><p>Brooklyn, NY<br>11201</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 40.6973381,-73.9882574, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['237', '<div class="d-flex flex-column"><p class="blue strong thisName">El Paso Community College</p><p>El Paso, TX<br>79925</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 31.7956642,-106.4130133, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['238', '<div class="d-flex flex-column"><p class="blue strong thisName">Estrella Mountain Community College</p><p>Avondale, AZ<br>85392</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.4804639,-112.3456574, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['239', '<div class="d-flex flex-column"><p class="blue strong thisName">Estrella Mountain Community College</p><p>Avondale, AZ<br>85392</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.4804639,-112.3456574, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['240', '<div class="d-flex flex-column"><p class="blue strong thisName">GateWay Community College</p><p>Phoenix, AZ<br>85034</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.4580541,-112.269469, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['241', '<div class="d-flex flex-column"><p class="blue strong thisName">Glendale Community College</p><p>Glendale, AZ<br>85302</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.5694378,-112.1930211, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['242', '<div class="d-flex flex-column"><p class="blue strong thisName">Inter American University of Puerto Rico-Bayamon</p><p>Bayamon, PR<br>00957</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 18.3502748,-66.1848565, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['243', '<div class="d-flex flex-column"><p class="blue strong thisName">Merced College</p><p>Merced, CA<br>95348</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 37.3348396,-120.4783736, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['244', '<div class="d-flex flex-column"><p class="blue strong thisName">Mesa Community College</p><p>Mesa, AZ<br>85202</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 35.3452653,-118.4221653, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['245', '<div class="d-flex flex-column"><p class="blue strong thisName">Miami Dade College</p><p>Miami, FL<br>33132</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 25.7767337,-80.1951927, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['246', '<div class="d-flex flex-column"><p class="blue strong thisName">Montclair State University</p><p>Montclair, NJ<br>07043</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 40.8665516,-74.1998136, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['247', '<div class="d-flex flex-column"><p class="blue strong thisName">New Mexico Institute of Mining and Technology</p><p>Socorro, NM<br>87801</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 34.0659974,-106.907805, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['248', '<div class="d-flex flex-column"><p class="blue strong thisName">New Mexico State University – Alamogordo</p><p>Alamogordo, NM<br>88310</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 32.9192825,-105.9277539, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['249', '<div class="d-flex flex-column"><p class="blue strong thisName">New Mexico State University</p><p>Las Cruces, NM<br>88003</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p><br><p class="blue strong">New Mexico State University</p><p>Las Cruces, NM<br>88003</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.278779,-106.7500999, ['CAHSI', 'STEMCORE', 'IHE'], 'images/multiple.svg', 'images/multiple.svg'],

  ['250', '<div class="d-flex flex-column"><p class="blue strong thisName">Northeastern Illinois University</p><p>Chicago, IL<br>60625</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 41.9804383,-87.720899, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['251', '<div class="d-flex flex-column"><p class="blue strong thisName">Paradise Valley Community College</p><p>Phoenix, AZ<br>85032</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.6530751,-112.0129001, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['252', '<div class="d-flex flex-column"><p class="blue strong thisName">Phoenix College</p><p>Phoenix, AZ<br>85013</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.4831722,-112.0914648, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['253', '<div class="d-flex flex-column"><p class="blue strong thisName">Polytechnic University of Puerto Rico-San Juan</p><p>San Juan, PR<br>00918</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 18.4223394,-66.0581079, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['254', '<div class="d-flex flex-column"><p class="blue strong thisName">Rio Salado College</p><p>Tempe, AZ<br>85281</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.4133067,-111.9763711, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['255', '<div class="d-flex flex-column"><p class="blue strong thisName">Saint Peter\s University</p><p>Jersey City, NJ<br>07306</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 40.7272271,-74.0736969, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['256', '<div class="d-flex flex-column"><p class="blue strong thisName">San Jose State University</p><p>San Jose, CA<br>95192</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 37.3351874,-121.8832655, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['257', '<div class="d-flex flex-column"><p class="blue strong thisName">Scottsdale Community College</p><p>Scottsdale, AZ<br>85256</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 3.5133147,-111.8858125, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['258', '<div class="d-flex flex-column"><p class="blue strong thisName">Scottsdale Community College</p><p>Scottsdale, AZ<br>85256</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 3.5133147,-111.8858125, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['259', '<div class="d-flex flex-column"><p class="blue strong thisName">South Mountain Community College</p><p>Phoenix, AZ<br>85042</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 33.381761,-112.0344275, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['260', '<div class="d-flex flex-column"><p class="blue strong thisName">Texas A & M University-Corpus Christi</p><p>Corpus Christi, TX<br>78412</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 27.7127448,-97.3263373, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['261', '<div class="d-flex flex-column"><p class="blue strong thisName">Texas A & M University-Kingsville</p><p>Kingsville, TX<br>78363</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 27.5269467,-97.8847345, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['262', '<div class="d-flex flex-column"><p class="blue strong thisName">Texas A & M University-Kingsville</p><p>Kingsville, TX<br>78363</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 27.5269467,-97.8847345, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['263', '<div class="d-flex flex-column"><p class="blue strong thisName">Texas A & M University-Kingsville</p><p>Kingsville, TX<br>78363</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 27.5269467,-97.8847345, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['264', '<div class="d-flex flex-column"><p class="blue strong thisName">The University of Texas at El Paso</p><p>El Paso, TX<br>79968</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 31.7709368,-106.5068345, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['265', '<div class="d-flex flex-column"><p class="blue strong thisName">The University of Texas Rio Grande Valley</p><p>Edinburg, TX<br>78539</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 26.3081983,-98.1762098, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['266', '<div class="d-flex flex-column"><p class="blue strong thisName">The University of Texas Rio Grande Valley</p><p>Edinburg, TX<br>78539</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 26.3081983,-98.1762098, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['267', '<div class="d-flex flex-column"><p class="blue strong thisName">University of Houston-Downtown</p><p>Houston, TX<br>77002</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 29.7662579,-95.3615534, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['268', '<div class="d-flex flex-column"><p class="blue strong thisName">University of Puerto Rico-Arecibo</p><p>Arecibo, PR<br>00612</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 18.4680427,-66.7426504, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['269', '<div class="d-flex flex-column"><p class="blue strong thisName">University of Puerto Rico-Mayaguez</p><p>Mayaguez, PR<br>00682</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE</span></p></div>', 18.2108895,-67.1430965, ['CAHSI', 'IHE'], 'images/cahsi-map.svg', 'images/phd.svg'],

  ['270', '<div class="d-flex flex-column"><p class="blue strong">Glenville State College</p><p>Glenville, WV<br>26351</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.9348779,-80.835416, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['271', '<div class="d-flex flex-column"><p class="blue strong">Marshall University</p><p>Huntington, WV<br>25755</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.4236242,-82.4269341, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['272', '<div class="d-flex flex-column"><p class="blue strong">University of Charleston</p><p>Charleston, WV<br>25304</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.3327567,-81.6181217, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['273', '<div class="d-flex flex-column"><p class="blue strong">West Virginia School of Osteopathic Medicine</p><p>Lewisburg, WV<br>24901</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.8040415,-80.4403132, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['274', '<div class="d-flex flex-column"><p class="blue strong">West Virginia State University</p><p>Institute, WV<br>25112</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.3789586,-81.7687822, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['275', '<div class="d-flex flex-column"><p class="blue strong">West Virginia University</p><p>Morgantown, WV<br>26506</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.6480359,-79.9719087, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['276', '<div class="d-flex flex-column"><p class="blue strong">West Virginia University Institute of Technology</p><p>Beckley, WV<br>25801</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.7764405,-81.1859965, ['First2', 'IHE'], 'images/first2-map.svg', 'images/phd.svg'],

  ['277', '<div class="d-flex flex-column"><p class="blue strong">Hope College</p><p>Holland, MI<br>49423</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.7869513,-86.1045606, ['IGEN', 'IHE'], 'images/igen-map.svg', 'images/phd.svg'],

  ['278', '<div class="d-flex flex-column"><p class="blue strong">Michigan State University</p><p>East Lansing, MI<br>48824</p><p>Alliance: <span class="strong">IGEN</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 42.701848,-84.4843659, ['IGEN', 'IHE'], 'images/igen-map.svg', 'images/phd.svg'],

  ['279', '<div class="d-flex flex-column"><p class="blue strong thisName">University of the Virgin Islands</p><p>Charlotte Amalie, VI<br>00802</p><p>Alliance: <span class="strong">SEAS</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 18.3432344,-64.9750737, ['SEAS', 'IHE'], 'images/seas-map.svg', 'images/phd.svg'],

  ['280', '<div class="d-flex flex-column"><p class="blue strong thisName">The Initiative for Race Research and Justice at Peabody School at Vanderbilt University</p><p>Nashville, TN<br>37203</p><p>Alliance: <span class="strong">STEM OPS</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.1400112,-86.8011862, ['STEMOPS', 'IHE'], 'images/opps-map.svg', 'images/phd.svg'],

  ['281', '<div class="d-flex flex-column"><p class="blue strong thisName">The Prison Teaching Initiative at Princeton University</p><p>Princeton, NJ<br>08540</p><p>Alliance: <span class="strong">STEM OPS</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.3483788,-74.6510563, ['STEMOPS', 'IHE'], 'images/opps-map.svg', 'images/phd.svg'],

  ['282', '<div class="d-flex flex-column"><p class="blue strong">Center for Urban Education - University of Pittsburgh</p><p>Pittsburgh, PA<br>15260</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 40.4413251,-79.959805, ['STEMPUSH' , 'IHE'], 'images/push-map.svg', 'images/phd.svg'],

  ['283', '<div class="d-flex flex-column"><p class="blue strong">Anne Arundel Community College</p><p>Arnold, MD<br>21012</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.05013,-76.5161612, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['284', '<div class="d-flex flex-column"><p class="blue strong">Cañada College</p><p>Redwood City, CA<br>94061</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.4473859,-122.2674359, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['285', '<div class="d-flex flex-column"><p class="blue strong">Central New Mexico Community College</p><p>Albuquerque, NM<br>87106</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.0713551,-106.6311318, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['286', '<div class="d-flex flex-column"><p class="blue strong">Seattle Central College</p><p>Seattle, WA<br>98122</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 47.6167174,-122.3236847, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['287', '<div class="d-flex flex-column"><p class="blue strong">City College of San Francisco</p><p>San Francisco, CA<br>94112</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.72569,-122.4532737, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['288', '<div class="d-flex flex-column"><p class="blue strong">Community College of Aurora Foundation</p><p>Aurora, CO<br>80011</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.7178954,-104.8049313, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['289', '<div class="d-flex flex-column"><p class="blue strong">New Mexico State University- Doña Ana</p><p>Las Cruces, NM<br>80033</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.2764635,-106.7571346, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['400', '<div class="d-flex flex-column"><p class="blue strong">Doña Ana Community College</p><p>Las Cruces, NM<br>80011</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.2764635,-106.7571293, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['290', '<div class="d-flex flex-column"><p class="blue strong">Evergreen Valley College</p><p>San Jose, CA<br>95135</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.3011274,-121.7672732, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['291', '<div class="d-flex flex-column"><p class="blue strong">Forsyth Technical Community College</p><p>Winston-Salem, NC<br>27103</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.0686855,-80.2739936, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['292', '<div class="d-flex flex-column"><p class="blue strong">Grossmont College</p><p>El Cajon, CA<br>92020</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.816678,-117.0087665, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['293', '<div class="d-flex flex-column"><p class="blue strong">Guilford Technical Community College</p><p>Jamestown, NC<br>27282</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.998156,-79.9213567, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['294', '<div class="d-flex flex-column"><p class="blue strong">Highline College</p><p>Des Moines, IA<br>98198</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 47.3883383,-122.3039606, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['295', '<div class="d-flex flex-column"><p class="blue strong">Las Positas College</p><p>Livermore, CA<br>94551</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.7116932,-121.8019557, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['296', '<div class="d-flex flex-column"><p class="blue strong">Merritt College</p><p>Oakland, CA<br>94619</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.7895572,-122.167806, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['297', '<div class="d-flex flex-column"><p class="blue strong">Mission College</p><p>Santa Clara, CA<br>95054</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.3910813,-121.9832544, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['298', '<div class="d-flex flex-column"><p class="blue strong">Navajo Technical University</p><p>Crownpoint, NM<br>87313</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.687962,-108.1508756, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['299', '<div class="d-flex flex-column"><p class="blue strong">Northern New Mexico College</p><p>Española, NM<br>87532</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 36.0040613,-106.086634, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['300', '<div class="d-flex flex-column"><p class="blue strong">Northwest Indian College</p><p>Bellingham, WA<br>98226</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 41.6482581,-123.6457153, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['301', '<div class="d-flex flex-column"><p class="blue strong">Ohlone College</p><p>Freemont, CA<br>94539</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.5243616,-121.9755859, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['302', '<div class="d-flex flex-column"><p class="blue strong">Palomar College</p><p>San Marcos, CA<br>92069</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.1893229,-117.2922402, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['303', '<div class="d-flex flex-column"><p class="blue strong">Pasadena City College</p><p>Pasadena, CA<br>91106</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 34.1439995,-118.1203927, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['304', '<div class="d-flex flex-column"><p class="blue strong">Pikes Peak Community College</p><p>Colorado Springs, CO<br>80906</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 38.7646273,-104.7883984, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['305', '<div class="d-flex flex-column"><p class="blue strong">Red Rocks Community College</p><p>Lakewood, CO<br>80228</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 39.7202564,-105.152168, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['306', '<div class="d-flex flex-column"><p class="blue strong">Saddleback College</p><p>Mission Viejo, CA<br>92692</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.5540364,-117.6663061, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['307', '<div class="d-flex flex-column"><p class="blue strong">San Diego Mesa College</p><p>San Diego, CA<br>92111</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 32.8047163,-117.1702747, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['308', '<div class="d-flex flex-column"><p class="blue strong">San Jose City College</p><p>San Jose, CA<br>95128</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.3146989,-121.9293662, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['309', '<div class="d-flex flex-column"><p class="blue strong">Santa Ana College</p><p>Santa Ana, CA<br>92706</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 33.7579757,-117.891078, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['310', '<div class="d-flex flex-column"><p class="blue strong">Santa Fe Community College</p><p>Santa Fe, NM<br>87508</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.6051564,-105.9973035, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['311', '<div class="d-flex flex-column"><p class="blue strong">Skyline College</p><p>San Bruno, CA<br>94066</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.6300963,-122.4682248, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['312', '<div class="d-flex flex-column"><p class="blue strong">South Seattle College</p><p>Seattle, WA<br>98106</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 47.5480474,-122.354642, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['313', '<div class="d-flex flex-column"><p class="blue strong">Tacoma Community College</p><p>Tacoma, WA<br>98466</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 47.2462364,-122.5241875, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['314', '<div class="d-flex flex-column"><p class="blue strong">University of New Mexico-Gallup (serves as a community college)</p><p>Gallup, NM<br>87301</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.529961,-108.7597986, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['315', '<div class="d-flex flex-column"><p class="blue strong">University of New Mexico-Los Alamos</p><p>Los Alamos, NM<br>87544</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 35.8861247,-106.32181, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['316', '<div class="d-flex flex-column"><p class="blue strong">West Valley College</p><p>Saratoga, CA<br>95070</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.263359,-122.0127406, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['317', '<div class="d-flex flex-column"><p class="blue strong">Laney College</p><p>Oakland, CA<br>94607</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.7945257,-122.2633601, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['318', '<div class="d-flex flex-column"><p class="blue strong">Fort Lewis College</p><p>Durango, CO<br>81301</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">Institution of Higher Education</span></p></div>', 37.2739859,-107.8782816, ['STEMCORE' , 'IHE'], 'images/core-map.svg', 'images/phd.svg'],

  ['319', '<div class="d-flex flex-column"><p class="blue strong">Center for the Improvement of Mentored Experiences in Research/National Research Mentoring Network</p><p>Madison, WI<br>53706</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 43.0754404,-89.4133863, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['320', '<div class="d-flex flex-column"><p class="blue strong">Center for the Integration of Research, Teaching and Learning</p><p>Madison, WI<br>53706</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 43.0754404,-89.4133863, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['321', '<div class="d-flex flex-column"><p class="blue strong">Collaborative on Academic Careers in Higher Education at Harvard University</p><p>Cambridge, MA<br>53706</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 42.3762318,-71.120401, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['322', '<div class="d-flex flex-column"><p class="blue strong">Council for the Study of Community Colleges</p><p>Champaign, IL<br>61820</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.0942448,-88.2427748, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['323', '<div class="d-flex flex-column"><p class="blue strong">Council for the Study of Community Colleges</p><p>Champaign, IL<br>61820</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.0942448,-88.2427748, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['324', '<div class="d-flex flex-column"><p class="blue strong">Los Angeles Community College District</p><p>Los Angeles, CA<br>90017</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 34.0634172,-118.2552473, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['325', '<div class="d-flex flex-column"><p class="blue strong">Louis Stokes Midwest Regional Center of Excellence</p><p>Chicago, IL<br>60628</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 41.719584,-87.6130678, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['326', '<div class="d-flex flex-column"><p class="blue strong">National Institute for Staff and Organizational Development at The University of Texas at Austin</p><p>Austin, TX<br>78712</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 30.2792669,-97.7342391, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['327', '<div class="d-flex flex-column"><p class="blue strong">Partnership for Undergraduate Life Sciences Education (PULSE) at Washington University in St. Louis</p><p>St. Louis, MO<br>63130</p><p>Alliance: <span class="strong">Aspire</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 38.6487895,-90.3129849, ['Aspire', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['328', '<div class="d-flex flex-column"><p class="blue strong">Extreme Science and Engineering Discovery Environment</p><p>Champaign, IL<br>61820</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.1012547,-88.2294146, ['CAHSI', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['329', '<div class="d-flex flex-column"><p class="blue strong">New Mexico EPSCoR</p><p>Albuquerque, NM<br>87106</p><p>Alliance: <span class="strong">CAHSI</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 35.072455,-106.6369374, ['CAHSI', 'IHE-Program'], 'images/aspire-map.svg', 'images/IHEProgram-maps.svg'],

  ['330', '<div class="d-flex flex-column"><p class="blue strong">The Virgin Islands Experimental Program to Stimulate Competitive Research (VI EPSCoR)</p><p>St. Thomas, VI<br>00802</p><p>Alliance: <span class="strong">SEAS</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 18.343413,-64.970726, ['SEAS', 'IHE-Program'], 'images/seas-map.svg', 'images/IHEProgram-maps.svg'],

  ['331', '<div class="d-flex flex-column"><p class="blue strong">CMU CS Pathways</p><p>Pittsburgh, PA<br>15213</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.4441647,-79.9455665, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['332', '<div class="d-flex flex-column"><p class="blue strong">CMU CS Pathways</p><p>Pittsburgh, PA<br>15213</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.4441647,-79.9455665, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['333', '<div class="d-flex flex-column"><p class="blue strong">Cooper Union Summer STEM</p><p>New York, NY<br>10003</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.7280822,-73.9938026, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['334', '<div class="d-flex flex-column"><p class="blue strong">CSUEB MESA College Prep Program</p><p>Hayward, CA<br>94542</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 35.2101312,-121.8615745, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['335', '<div class="d-flex flex-column"><p class="blue strong">Gene Team</p><p>Pittsburgh, PA<br>15260</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.446925,-79.9559981, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['336', '<div class="d-flex flex-column"><p class="blue strong">INVESTING NOW</p><p>Pittsburgh, PA<br>15261</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.4438019,-79.9606243, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['337', '<div class="d-flex flex-column"><p class="blue strong">Northeastern Illinois University (TRIO Upward Bound Math and Science)</p><p>Chicago, IL<br>60625</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 41.9382717,-87.7186138, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['338', '<div class="d-flex flex-column"><p class="blue strong">Partners for Network Improvement</p><p>Pittsburgh, PA<br>15260</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.4443533,-79.963029, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['339', '<div class="d-flex flex-column"><p class="blue strong">RockEdu LAB Jumpstart & Summer Science Research Program</p><p>New York, NY<br>10065</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 40.7624872,-73.9578702, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['340', '<div class="d-flex flex-column"><p class="blue strong">UCSF High School Intern Program</p><p>San Francisco, CA<br>94143</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">IHE-Affiliated Center or Program</span></p></div>', 37.7626459,-122.4609046, ['STEMPUSH', 'IHE-Program'], 'images/push-map.svg', 'images/IHEProgram-maps.svg'],

  ['341', '<div class="d-flex flex-column"><p class="blue strong">Chicago Academy of Sciences (Teenagers Exploring and Explaining Nature and Science)</p><p>Chicago, IL<br>60614</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Museum</span></p></div>', 41.9265655,-87.6370603, ['STEMPUSH', 'Museum'], 'images/push-map.svg', 'images/Museum-map.svg'],

  ['342', '<div class="d-flex flex-column"><p class="blue strong">Chicago Botanic Garden Science Career Continuum (Science First I & II and College First)</p><p>Chicago, IL<br>60022</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Museum</span></p></div>', 42.149031,-87.7917937, ['STEMPUSH', 'Museum'], 'images/push-map.svg', 'images/Museum-map.svg'],

  ['343', '<div class="d-flex flex-column"><p class="blue strong">New York Hall of Science</p><p>Queens, NY<br>11368</p><p>Alliance: <span class="strong">STEM Push</span></p><p>Organization Type: <span class="strong">Museum</span></p></div>', 40.7475054,-73.8534115, ['STEMPUSH', 'Museum'], 'images/push-map.svg', 'images/Museum-map.svg'],

  ['344', '<div class="d-flex flex-column"><p class="blue strong thisName">Digital Harbor High School</p><p>Baltimore, MD<br>21230</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 39.2765202,-76.6093658, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],

  ['345', '<div class="d-flex flex-column"><p class="blue strong thisName">Forest Park High School</p><p>Baltimore, MD<br>21207</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 39.3325577,-76.6916139, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],

  ['346', '<div class="d-flex flex-column"><p class="blue strong thisName">Gallup High School</p><p>Gallup, NM<br>87301</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 35.4970293,-108.8195702, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],

  ['347', '<div class="d-flex flex-column"><p class="blue strong thisName">Meade High School</p><p>Ft. Meade, MD<br>20755</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 39.1224821,-76.7402224, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],

  ['348', '<div class="d-flex flex-column"><p class="blue strong thisName">Miyamura High School</p><p>Gallup, NM<br>87301</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 35.5169177,-108.7108145, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],

  ['349', '<div class="d-flex flex-column"><p class="blue strong thisName">Oakland High School</p><p>Oakland, CA<br>94610</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 37.8041897,-122.2383296, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],

  ['350', '<div class="d-flex flex-column"><p class="blue strong thisName">Valley High School</p><p>Santa Ana, CA<br>92704</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">PreK-12 School</span></p></div>', 33.7228333,-117.9018554, ['STEMCORE', 'HighSchool'], 'images/core-map.svg', 'images/high-school.svg'],

  ['351', '<div class="d-flex flex-column"><p class="blue strong">Department of Planning and Natural Resources (Coastal Zone Management Program)</p><p>St. Thomas, VI<br>00802</p><p>Alliance: <span class="strong">FIRST2</span></p><p>Organization Type: <span class="strong">SEAS</span></p></div>', 18.3406887,-64.8914709, ['SEAS', 'non-SEA'], 'images/seas-map.svg', 'images/nonsea-map.svg'],

  ['352', '<div class="d-flex flex-column"><p class="blue strong">Gallup-McKinley School District</p><p>Gallup, NM<br>25305</p><p>Alliance: <span class="strong">STEM Core</span></p><p>Organization Type: <span class="strong">State or Local Education Agency</span></p></div>', 35.5184672,-108.7106576, ['STEMCORE', 'stateLocal'], 'images/core-map.svg', 'images/education-map.svg'],

];

function initialize() {
  // var center = new google.maps.LatLng(47.1000723,-163.7314545);
  var center = new google.maps.LatLng(37.850033, -99.6500523);
  var mapOptions = {
    zoom: 4,

    center: center,
    styles:

    [
      {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#63B5E5"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "##000000"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#0B66A6"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
          {
            "lightness": "62"
          },
          {
            "color": "#0B66A6"
          },
          {
            "saturation": "11"
          },
          {
            "gamma": "3.19"
          },
          {
            "weight": "2.17"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "gamma": 0.01
          },
          {
            "lightness": 20
          },
          {
            "weight": "1.92"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "saturation": -31
          },
          {
            "lightness": -33
          },
          {
            "weight": "1.75"
          },
          {
            "gamma": 0.8
          },
          {
            "color": "#8D95A9"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 30
          },
          {
            "saturation": 30
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#56D2FF"
          },
          {
            "gamma": "1.34"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": 20
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 20
          },
          {
            "saturation": -20
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 10
          },
          {
            "saturation": -30
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "saturation": 25
          },
          {
            "lightness": 25
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "lightness": -20
          }
        ]
      }
    ]
    // mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  for (i = 0; i < markers1.length; i++) {
    addMarker(markers1[i]);
  }
}



function addMarker(marker) {
  var category = marker[4];
  var title = marker[1];
  var pos = new google.maps.LatLng(marker[2], marker[3]);
  var content = marker[1];
  var icon = {

    url : markers1[i][6],
    scaledSize: new google.maps.Size(35, 46)
  }

  var icon2 = {

    url : markers1[i][5],
    scaledSize: new google.maps.Size(35, 46)
  }





  var marker1 = new google.maps.Marker({
    title: title,
    position: pos,
    category: category,
    icon:icon,


    map: map

  });



  gmarkers1.push(marker1);

  // Marker click listener
  google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
    return function () {
      console.log('Gmarker 1 gets pushed');
      infowindow.setContent(content);
      infowindow.open(map, marker1);

    }
  })(marker1, content));





  $('.orgType').on('click', function(e) {
    marker1.setIcon(icon);


  });

  $('.allianceType').on('click', function(e) {
    marker1.setIcon(icon2);



  });




}



$('#type input').on('click', function(e) {
  // e.stopPropagation()
  //  e.preventDefault()
  filterMarkers(this.value);
  var thisInput =  $(this).closest('label').find('.showOnClick')
  var thisLabel =  $(this).closest('label')


  $(thisInput).show()
  $(thisLabel).addClass('filterOn')


  var others = $('#type span').not(thisInput)

  var others2 = $('#type label').not(thisLabel)


  $(others).hide()
  $(others2).removeClass('filterOn')


})

$('#type .showOnClick').on('click', function(e) {
  // e.preventDefault()
  // e.stopPropagation()
  var btn = $(this).closest('#type label')

  $(btn).removeClass('filterOn')

  $(this).hide()

})


$('#type label').on('keyup', function(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9 ) {
    $(this).find('input').css({
      'visibility' : 'visible',
      'width': 'auto'
    })

  }
})



$('#type input').on('keyup', function(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9 ) {
    $(this).closest('label').css('outline', 'none')
    $(this).closest('.btn').css('outline', 'none')

  }
})


$('#type input').on('keyup', function(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13 ) {



    // $(this).find('input').prop('checked', true)

    filterMarkers(this.value);


    var thisInput =  $(this).closest('label').find('.showOnClick')


    var thisLabel =  $(this).closest('label')

    // $('#type span').not(thisInput).hide()

    $(thisInput).show()
    $(thisLabel).addClass('filterOn')


    var others = $('#type span').not(thisInput)

    var others2 = $('#type label').not(thisLabel)

    console.log(others)

    $(others).hide()
    $(others2).removeClass('filterOn')

  }
})



filterMarkers = function (category) {
  for (i = 0; i < gmarkers1.length; i++) {
    marker = gmarkers1[i];

    if((typeof marker.category == 'object' && marker.category.indexOf(category) >= 0) || category.length == 0){
      marker.setVisible(true);
    }

    else {
      marker.setVisible(false);
    }
  }





}







// Init map
initialize();
