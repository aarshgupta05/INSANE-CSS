const express = require('express');
const path = require('path');
const app = express();

// Logs the different pages accessed
const logger = require('morgan');
app.use(logger('dev'));

// Serve static files from the "public" directory
app.use('/static', express.static(path.join(__dirname, 'public')));

// For more optimisation
const compression = require('compression');
app.use(compression());

// Example route
app.get('/', (req, res) => {
	res.send('Welcome to the home page! Static files are in /public');
});

// Example route
app.get('/test', (req, res) => {
	// res.sendFile('/static/HTML/aibar.html')
	res.sendFile(path.join(__dirname + '/public/HTML/aiorb.html'))
});

const PORT = 8000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
