

async function getUserWithPosts(userId) {
    let username =""
    let posts =[];
try{



 await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
    
    username = response.data.name
 })
    await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(response =>{
       if(response.data === 0 || response.data.length === 0){
         throw new Error("err")
       }else{
         for (const key in response.data) {
            posts.push(key +") "+  response.data[key].title);
        }
       }
       
    })
    console.log(username)
   for (const element of posts) {
      console.log(element)
   }

}catch (error){
    console.error("❌ Error:", error.message);
    return { error: error.message };

}
   // 3. Return combined data
}
getUserWithPosts(6)