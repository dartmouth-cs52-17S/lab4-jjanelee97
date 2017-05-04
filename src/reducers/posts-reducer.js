import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload };
    case ActionTypes.FETCH_POST:
      return { post: action.payload };
    case ActionTypes.UPDATE_POST:
      return { post: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
