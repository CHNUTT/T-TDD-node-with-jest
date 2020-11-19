const loader = require('./loaders');

const init = async () => {
  try {
    console.log('hello world');
    loader();
  } catch (error) {
    throw error;
  }
};

init();
