$(".flower").click((event) => {
  if ($(event.target).html() === "") {
    $(event.target).html("x");
  } else {
    $(event.target).html("");
  }

  console.log($(event.target.id));
});
