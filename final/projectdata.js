

function getResults(search){

$("#Cards").html("");

$.get("https://itunes.apple.com/search?term=" + search , function(resp){
    
    //console.log(resp);
    
    var res = JSON.parse(resp);
    console.log(res);
$.each(res.results, function(i,v){
    
   
    
    var clone = $("#template").clone();
    
    $(clone).find("h1").text(v.artistName);
    $(clone).find("h2").text("Track: " + v.trackName);
    $(clone).find("#Album").text("Album: " +v.collectionName);
    $(clone).find("#genre").text("Genre: " +v.primaryGenreName);
    $(clone).find("#art").attr("src", v.artworkUrl100);

    $(clone).css("display", "block");
    $("#Cards").append(clone);
    
});


});

    
}

$('button#searchB').on('click', function(){
 
  var search =  $(".mdc-text-field__input#my-text-field").val();
  console.log(search);
  getResults(search);
    
});




    
    