import * as request from 'request-promise-lite';
import * as path from 'path';
import * as fs from 'fs';

const url = 'https://httpbin.org/get';

request.get(url, { json: true })
  .then((response) => {
    console.log(JSON.stringify(response));
  });

const req = new request.Request('GET', url, { json: true });
req.run()
  .then((response: any) => {
    console.log(JSON.stringify(response));
  });

const filePath = path.resolve(__dirname, './fixtures/sample.json');
const stream = fs.createReadStream(filePath);
const reader = new request.StreamReader(stream);

reader.readAll()
  .then((output) => {
    console.log(output.toString());
  });

const error = new request.HTTPError('I\'m a teapot!', 417, 'teapot');
throw new request.ParseError('Invalid JSON', 'some message');
