function createElement (data) {
  const p = document.createElement('p');
  p.textContent = data;
  const body = document.querySelector('body');
  body.appendChild(p);
}

function queryWikipedia (callback) {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin');
  req.send();

  req.onload = function () {
    if (req.status === 200) {
      const res = JSON.parse(req.responseTExt);
      const extract = res.query.pages[Object.keys[0]].extract;
      callback(extract);
    } else {
      throw new Error('Bad request');
    }
  };

  req.onerror = function () {
    console.error('Request failed');
  };
}

queryWikipedia(createElement);
