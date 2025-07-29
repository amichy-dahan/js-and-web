async function getUserWithPosts() {

    const user = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
    let totalUsers = user.data.length
    let totalPosts = posts.data.length

   
    let totalComments = comments.data.length
    let avgPostsPerUser = totalPosts / user.data.length
    let avgCommentsPerPost = comments.data.length / posts.data.length

    let topUsers = []

    let postCount = 0;
    let commentCount = 0;

    for (let index = 0; index < 3; index++) {
        let userId = user.data[index].id;
        let userPosts = posts.data.filter(post => post.userId === userId);
        postCount = userPosts.length
        userPosts.forEach(post => {
            let commentsForPost = comments.data.filter(comment => comment.postId === post.id);
            commentCount += commentsForPost.length;
        });


        topUsers.push({
            name: user.data[index].name,
            postCount,
            commentCount
        })
    }
let recentPosts = []
    for (let index = posts.data.length-1; index > posts.data.length -6; index--) {
         recentPosts.push({post:posts.data[index].title})
    }
    return {
        summary: {
            totalUsers,
            totalPosts,
            totalComments,
            avgPostsPerUser,
            avgCommentsPerPost,
            topUsers,
            recentPosts

        }

    }
}
getUserWithPosts().then(result => {
    console.log(result);
});