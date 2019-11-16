const ADD_USER_ID = "ADD USER_ID";
const ADD_CART = "ADD_CART"

// create action creators and export
const addUserId = (item) => {
//   console.log("add item called");
  return {
    type: ADD_USER_ID,
    payload: item
    
  };
};
const addCart = (c) => {
  //   console.log("add item called");
    return {
      type: ADD_CART,
      payload: c
      
    };
  };


export { addUserId, addCart };