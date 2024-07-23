import http from 'node:http';
import fs from 'node:fs';

function sendResponse(path, res, status) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.writeHead(status, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/': {
      sendResponse('./index.html', res, 200);
      break;
    }

    case '/about': {
      sendResponse('./about.html', res, 200);
      break;
    }

    case '/contact-me': {
      sendResponse('./contact-me.html', res, 200);
      break;
    }

    default: {
      sendResponse('./404.html', res, 404);
    }
  }
});

server.listen(8080, () => {
  console.log('Server started running :)');
});
