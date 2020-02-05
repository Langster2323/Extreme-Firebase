const initState = {
    posts: [
        {id: '1', title: 'asd saldkjf asdlfkjas sdlfkj', body: 'saldkjfasl sadk asdfsadf lkue  vlksdjir sakel seerl aslalkjerga keufgglawoqpv uuipvzmn'},
        {id: '2', title: 'asd saldkjf asdlfkjas sdlfkj', body: 'saldkjfasl sadk asdfsadf lkue  vlksdjir sakel seerl aslalkjerga keufgglawoqpv uuipvzmn'},
        {id: '3', title: 'asd saldkjf asdlfkjas sdlfkj', body: 'saldkjfasl sadk asdfsadf lkue  vlksdjir sakel seerl aslalkjerga keufgglawoqpv uuipvzmn'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;