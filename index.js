const getFirstSelector = (selector) => {
  return document.querySelector(selector);
}

const nestedTarget = () => {
  return document.querySelector('#nested .target');
}

const increaseRankBy= (n) => {
  const lis =  document.querySelectorAll('.ranked-list');

  for (var i = 0, l = lis.length; i < l; i++) {
    let children = lis[i].children;

    for (var j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

var deepestChild = () => {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    debugger;
    node = nextNode;
    nextNode = nextNode.children[0];
  }
  return node;
}
