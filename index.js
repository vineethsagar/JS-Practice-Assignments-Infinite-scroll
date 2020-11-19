document.addEventListener("scroll", handleScroll);

function handleScroll() {
  let ele = document.getElementById("infinite");

  let div = document.createElement("div");
  div.className = "load";

  ele.append(div);
}
