//const comments = createComment("first", "comment");
const Blog = {
    title: "1",
    body: "test",
    author: "Sakib",
    views: 3232,
    comments: [
        { title: 1, body: "hi" },
        { title: 2, body: "hi" },
    ],
    isLive: true,
};
console.log(Blog); // in normal way

//in dynamic way comments creating by the below

// function createComment(first, comment) {
//     return {
//         first,
//         comment,
//     };
// }