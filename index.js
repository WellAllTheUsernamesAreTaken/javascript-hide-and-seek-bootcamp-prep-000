function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const a = document.getElementById('nested');
  return a;
}

function increaseRankBy(n) {
  const l = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < l.length; i++) {
    l[i].innerHTML = (parseInt(l[i].innerHTML) + n).toString();
  }
  return l;
}

function deepestChild() {
  const a = document.getElementById('grand-node').querySelectorAll('div');
    for (var i = 0; i < a.length; i++) {
    if (i === a.length - 1) {
        return a[i];
    }
  }
  //return a[3];
}
 