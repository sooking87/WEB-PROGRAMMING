function show(id) {
  var title = document.getElementById(id).id;
  console.log(title);
  clickEventHandle(document.getElementById(id));
}

function clickEventHandle(event) {
  var target = event.target;
  console.log(target);
}
