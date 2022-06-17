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

// 동적 웹페이지 만들기

var input = document.getElementById("input");
var input_img = document.getElementById("label");
// 이벤트가 발생하면 발생한 이벤트 객체를 리스트(changeEvent)로 바꾸어서 handleUpdate에 전달.

input.addEventListener("change", (event) => {
  const files = changeEvent(event);
  handleUpdate(files);
});

// 발생한 이벤트 객체를 리스트(changeEvent)로 바꾸어줌
function changeEvent(event) {
  const { target } = event;
  return [...target.files];
}

// 이미지 파일을 업데이트 해주는 메소드
function handleUpdate(fileList) {
  const preview = document.getElementById("preview");

  // 한번에 여러개 파일 열기가 가능하도록 하기위해서 forEach 사용
  fileList.forEach((file) => {
    const reader = new FileReader();
    // 이미지 파일 경로를 구해서(load 이벤트), div 태그에 넣어주는 메소드
    reader.addEventListener("load", (event) => {
      // 이미지 노드(img 태그) 하나 완성
      const img = el("img", {
        className: "embed-img",
        src: event.target.result,
      });
      const imgContainer = el("div", { className: "container-img" }, img); // img 태그를 다시 div 태그로 감싼다.
      preview.append(imgContainer);
    });
    reader.readAsDataURL(file);
  });
}

// 폴더에서 선택된 이미지를 div 태그에 넣어주는 메소드
function el(nodeName, attributes, ...children) {
  const node = document.createElement(nodeName);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key in node) {
      // 사진 노드 추가
      try {
        node[key] = value;
      } catch (err) {
        node.setAttribute(key, value);
      }
    }
  });

  children.forEach((childNode) => {
    node.appendChild(childNode);
  });
  return node;
}
