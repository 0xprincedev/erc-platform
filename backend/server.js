import path from 'path';
import express from 'express';
// import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { init } from './config/db.js';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();

// if (process.env.NODE_ENV === 'development') {
// 	app.use(morgan('dev'));
// }

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

init();

app.use('/api', routes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
