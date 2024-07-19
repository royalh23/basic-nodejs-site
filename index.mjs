import http from 'node:http';
import fs from 'node:fs';

function sendResponse(path, res) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/': {
      sendResponse('./index.html', res);
      break;
    }

    case '/about': {
      sendResponse('./about.html', res);
      break;
    }

    case '/contact-me': {
      sendResponse('./contact-me.html', res);
      break;
    }

    default: {
      sendResponse('./404.html', res);
    }
  }
});

server.listen(8080, () => {
  console.log('Server started running :)');
});