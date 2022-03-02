import {
    GET_ALL_USERS,
    GET_ALL_COMMENTS_POSTS,
    GET_ALL_POSTS,
    GET_ALL_USER_POSTS
} from '../actions/index'
//me traigo los tipos en vez de las actions en si, para evitar errores de tipeo. De todas formas la info ya esta guradada

const initialState={
    users: [],
    posts: [],
    usersPosts: [],
    commentsPosts: []
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,//esto me trae el payload desde actions, o sea json o data
            };
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
       case GET_ALL_USER_POSTS:
           return { 
                ...state,
                usersPosts: action.payload// de esta forma si se pisa la info, abajo no
                //userPosts: state.userPost.concat(action.payload)
                //userPosts: [...state.userPosts, ...action.payload]
                //[{post}, {post}]
           };
       /*  case GET_ALL_COMMENTS_POSTS:
            return {
                ...state,
                commentsPosts: action.payload
            }; */
        default:
            return state;
    }
}