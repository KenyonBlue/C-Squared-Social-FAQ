// reducers is a function that accepts the state and the actions and then based on the action type we apply logic

export default (posts = [], action) => {
// console.log("🚀 ~ file: posts.js ~ line 4 ~ action", action)
 switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      return [posts.map(post => post._id === action.payload._id ? action.payload : post)];
    default:
      return posts;
  }
};
