const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')))

app.get('*', (req, res) => {
	const html = fs.readFileSync(path.resolve(__dirname, './public/index.html'), 'utf-8');
	res.send(html)
})

app.listen(8082)