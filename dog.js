function fetchRandomDogImage() {
  $.get("https://dog.ceo/api/breeds/image/random", function (data) {
    $("#dog-image").attr("src", data.message);
  }).fail(function () {
    console.log("Error");
  });
}

$(".btn").click(fetchRandomDogImage);
