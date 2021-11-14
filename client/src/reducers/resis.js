export default (resis = {}, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return resis;
        default:
            return resis;
    }
}