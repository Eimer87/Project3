const mongoose= require('mongoose');
const dotenv =require('dotenv');
const colors =require('colors');
// const users require('./data/users.js');
const resturants =require('./data/resturants.js');
// const User require('./models/userModel.js');
const Resturant= require('./models/resturantModel.js');
const connectDB =require('./config/db.js');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Resturant.deleteMany();
    // await User.deleteMany();

    // const createdUsers = await User.insertMany(users);

    // const adminUser = createdUsers[0]._id;

    const sampleResturants = resturants.map((product) => {
      return { ...product };
    });

    await Resturant.insertMany(sampleResturants);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Resturant.deleteMany();
    // await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
