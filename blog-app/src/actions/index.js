export const GET_ALL_USERS= "GET_ALL_USERS";
export const GET_ALL_USER_POSTS= "GET_ALL_USERS_POSTS";
export const GET_ALL_COMMENTS_POSTS= "GET_ALL_COMMENTS_POSTS";
export const GET_ALL_POSTS= "GET_ALL_POSTS";

export function getAllUsers(){
    return function(dispatch){
     return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())//con esto se convierte el json a objeto javascript
    .then(json=> dispatch({type: GET_ALL_USERS, payload: json}))
}};

export function getAllUsersPosts(id){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(json => dispatch({type: GET_ALL_USER_POSTS, payload: json}))
    }
}

export function getAllCommentsPosts(postsId){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/comments?postsId=${postsId}`)
        .then(response => response.json())
        .then(json => dispatch({type: GET_ALL_COMMENTS_POSTS, payload: json}))
    }
}

export function getAllPosts(){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response =>response.json())
        .then(json => dispatch({type: GET_ALL_POSTS, payload: json}))
    }
}