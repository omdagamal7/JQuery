// NAV 
$("#bars").click(()=>{
  $("#nav").animate({left:"0"},700)
})
$("#close").click(()=> {
  let width = $("#nav").innerWidth();
  $("#nav").animate({left:`-${width}`},700)
})

$(".singer h2").click(function () {
  $(this).next("p").slideDown(); 
  $(this).parent().siblings().children('p').slideUp();
});

let counterDownDate = new Date("Dec 31,2025 23:59:59").getTime()
let counter = setInterval(()=>{
  let dateNow = new Date().getTime();
  let dateDiff = counterDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60 ) / 1000);
  $("#days").html(days)
  $("#hours").html(hours)
  $("#mins").html(minutes)
  $("#secs").html(seconds)
},1000)



$("#message").on("keyup", function () {
  
  let maxLength = 100;
  $("#countLetters").html(maxLength)
  let inputValue = $(this).val();

  let inputLength = inputValue.length;
  let leftLength = maxLength - inputLength;
  console.log(leftLength);
  if (leftLength > 0) {
    $("#countLetters").html(leftLength)
    } else {
      $("#counterOfLetter").addClass('d-none');
      $("#alert").removeClass('d-none')
    }
}
)