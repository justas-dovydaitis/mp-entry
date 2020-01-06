export const query = (type, payload) => {
    console.log('action')
    return { type: type, payload }
};
