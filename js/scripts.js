Array.prototype.compareArray = function(array1) {
  var array1 = array1;
  var array2 = this;

  if (array1.length === array2.length) {
    for (var i = 0; i < array1.length; i++) {
      for(var c = 0; c < array2.length; i++) {
        if (array1[i] === array2[c]) {
          return true;
        }
      }
    }

  } else {
    return false;
  }
  };






// $(document).ready(function() {
//   $('#fancy-inputs input[type="text"]').blur(function(){
//     if($(this).val().length > 0){
//       $(this).addClass('white');
//     } else {
//       $(this).removeClass('white');
//     }
//   });
//   $("form#comparearray").submit(function(event) {
//     var array = ($("input#array").val()).split(" ");
//     var result = titleCase(array);
//
//     $(".array").text(result);
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
