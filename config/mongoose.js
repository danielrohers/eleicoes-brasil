const mongoose = require( 'mongoose' );

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eleicoes-brasil';

mongoose.Promise = global.Promise;

mongoose.connect(dbURI);

mongoose.set('debug', process.env.NODE_ENV !== 'production')

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.once('open', () => {
  console.log('Mongoose default connection is open')
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
