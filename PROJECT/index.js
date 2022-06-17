//sticky element selector에 sticky 속성을 사용하고자하는 엘리먼트의 selector 설정
let parent = document.querySelector(".sticky").parentElement;

while (parent) {
  const hasOverflow = getComputedStyle(parent).overflow;
  if (hasOverflow !== "visible") {
    console.log(hasOverflow, parent);
  }
  parent = parent.parentElement;
}
