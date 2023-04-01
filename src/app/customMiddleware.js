//create custom middleware to use in store.js



const logger = (store) => (next) => (action) => {
  console.log('Action Type: ', action.type);
  next(action);
}

export default logger;

