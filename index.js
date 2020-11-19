document.addEventListener("scroll", handleScroll);

function handleScroll() {
  let ele = document.getElementById("infinite");
  //add new div
  let div = document.createElement("div");
  div.className = "load";

  ele.append(div);
}
