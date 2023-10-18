(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  equal.addEventListener("click", equalfun);
  function equalfun(e) {
    if (screen.value) {
      let ans = eval(screen.value);
      screen.value = ans;
    }
  }
  clear.addEventListener("click", () => {
    screen.value = "";
  });
})();
