const http = require('http');

//set up you data
const YOU_NAME = 'Niko';
const YOU_AGE = '32';

const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: `/?name=${YOU_NAME}&age=${YOU_AGE}`,
    method: 'GET'
};

let responseMessage = '';

const req = http.request(options, (res) => {
    const { statusCode } = res;
    let error;

    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
    }

    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        process.stdout.write(chunk);
        //responseMessage += chunk;
    });
});

req.on('error', (err) => {
    console.error(`Got error: ${err.message}`);
});

req.end();