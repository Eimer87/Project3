// const path =require('path');
const express =require('express');
const dotenv =require('dotenv');
const morgan =require('morgan');
const { notFound, errorHandler } =require('./middleware/errorMiddleware.js');
const connectDB =require('./config/db');

const resturantRoutes =require('./routes/resturantRoutes.js');
const userRoutes =require('./routes/userRoutes.js');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/resturant', resturantRoutes);
app.use('/api/users', userRoutes);


//Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
  // }
  

if (process.env.NODE_ENV === 'production') {
//   //Set static folder
app.use(express.static('client/build'));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}
 else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
