// 자신의 최애 브랜드 저장 함수
function addBrand() {
  if (window.event.keyCode === 13) {
    var brand_name = document.getElementById("brand_name").value;

    if (brand_name.length < 1) {
      document.getElementById("brand_name").focus();
      return;
    }

    var li = document.createElement("li");
    const addList = document.createTextNode(brand_name);
    li.appendChild(addList);

    document.getElementById("brand_list").appendChild(li);

    // 리스트 만든 후, input 창 초기화
    document.getElementById("brand_name").value = "";
  }
}

// drap & drop
