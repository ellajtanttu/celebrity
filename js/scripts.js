$(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();
    const gender = $("select#intGender").val();
    // console.log("gender = " + gender);
    const interests =$("select#interests").val();
    //
    $(".results").show();
    if ((gender === "men" && interests == "outdoors") || (gender === "men" && interests === "sports")) {
      $("#ellenDeg").hide();
      $("#jennLaw").hide();
      $("#scarJoh").hide();
      $("#bradPitt").hide();
      $("#mattMac").show();
    } else if ((gender === "men" && interests == "creativity") || (gender === "men" && interests === "food")) {
      $("#ellenDeg").hide();
      $("#jennLaw").hide();
      $("#scarJoh").hide();
      $("#mattMac").hide();
      $("#bradPitt").show();
    } else if ((gender === "women" && interests == "outdoors") || (gender === "women" && interests === "sports")) {
      $("#scarJoh").show();
      $("#ellenDeg").hide();
      $("#jennLaw").hide();
      $("#bradPitt").hide();
      $("#mattMac").hide();
    } else if ((gender === "women" && interests == "creativity") || (gender === "women" && interests === "food")) {
      $("#ellenDeg").hide();
      $("#scarJoh").hide();
      $("#bradPitt").hide();
      $("#mattMac").hide();
      $("#jennLaw").show();
    } else {
      $("#ellenDeg").show();
      $("#jennLaw").show();
      $("#scarJoh").show();
      $("#bradPitt").show();
      $("#mattMac").show();
    }
  });
});

// if user intersted in men && outdoor || men && sports>> Matthew Mac
//  else if intersted in men && creativity || men && food >> Brad pitt
// else if intersted in women && sports || women && outdoor >> Scarette Johanson
// else if interstd in woman && creativity || women && food >> Jenifer lawrence
//  else non binary(prefered not to say) celeb link.. Ellen Degenerous


// $(".mattMac").show();

// Gender Interest:
//   Female
//   Male
//   All


// Interests:
//   Outdoors
//   Creativity
//   Food
//   Sports

