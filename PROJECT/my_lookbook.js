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
var input = document.getElementById("input");
var input_img = document.getElementById("label");

input.addEventListener("change", (event) => {
  const files = changeEvent(event);
  handleUpdate(files);
});

input_img.addEventListener("mouseover", (event) => {
  event.preventDefault();
  const label = document.getElementById("label");
  label?.classList.add("label--hover");
});

input_img.addEventListener("mouseout", (event) => {
  event.preventDefault();
  const label = document.getElementById("label");
  label?.classList.remove("label--hover");
});

document.addEventListener("dragenter", (event) => {
  event.preventDefault();
  console.log("dragenter");
  if (event.target.className === "inner") {
    event.target.style.background = "#616161";
  }
});

document.addEventListener("dragover", (event) => {
  console.log("dragover");
  event.preventDefault();
});

document.addEventListener("dragleave", (event) => {
  event.preventDefault();
  console.log("dragleave");
  if (event.target.className === "inner") {
    event.target.style.background = "#3a3a3a";
  }
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log("drop");
  if (event.target.className === "inner") {
    const files = event.dataTransfer?.files;
    event.target.style.background = "#3a3a3a";
    handleUpdate([...files]);
  }
});

function changeEvent(event) {
  const { target } = event;
  return [...target.files];
}

function handleUpdate(fileList) {
  const preview = document.getElementById("preview");

  fileList.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const img = el("img", {
        className: "embed-img",
        src: event.target?.result,
      });
      const imgContainer = el("div", { className: "container-img" }, img);
      preview.append(imgContainer);
    });
    reader.readAsDataURL(file);
  });
}

function el(nodeName, attributes, ...children) {
  const node =
    nodeName === "fragment"
      ? document.createDocumentFragment()
      : document.createElement(nodeName);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "events") {
      Object.entries(value).forEach(([type, listener]) => {
        node.addEventListener(type, listener);
      });
    } else if (key in node) {
      try {
        node[key] = value;
      } catch (err) {
        node.setAttribute(key, value);
      }
    } else {
      node.setAttribute(key, value);
    }
  });

  children.forEach((childNode) => {
    if (typeof childNode === "string") {
      node.appendChild(document.createTextNode(childNode));
    } else {
      node.appendChild(childNode);
    }
  });

  return node;
}
