function date() {
  let outputDate = document.querySelector(".date");
  let date = new Date(),
    targetDay = 1,
    targetDate = new Date(),
    delta = targetDay - date.getDay();
  if (delta >= 0) {
    targetDate.setDate(date.getDate() + delta);
  } else {
    targetDate.setDate(date.getDate() + 7 + delta);
  }
  let result = targetDate.toLocaleDateString();
  outputDate.innerText = result;
}
date();
