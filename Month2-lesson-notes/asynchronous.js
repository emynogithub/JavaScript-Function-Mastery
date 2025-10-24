function delay(ms) {
    return new Promise((resolve, reject) => {
        if(ms < 0) {
            return reject(new Error("The promise has failed"))
        }

        setTimeout(() => {
            resolve(`Waited for ${ms} to run`)
        }, ms)
    })
}


async function runDelay() {
    try{
     const message = await delay(10000000)
     console.log(message)
    }catch(err) {
        console.log(err)
    }finally {
        console.log("Finished")
    }
}

runDelay()


// async function displayCommentsForUser(userId) {
//     try {
//         const user = await getUser(userId);
//         const posts = await getPostsForUser(user.id);
//         const comments = await getCommentsForPost(posts[0].id);

//         console.log('Comments for first post:', comments);
//     } catch (error) {
//         console.log(error)
//     }finally {
//         console.log("Successfully get the final promise")
//     }
// }


function displayCommentsForUser(userId) {
  return getUser(userId)
  .then(user => getPostsForUser(user.id))
  .then(post => getCommentsForPost(post[0].id))
  .then(comments => {
     console.log("ldjflksjfs")
  }).catch(err  => {
    console.log(err)
  }).finally (() =>{
    console.log("finished")
  })
}



displayCommentsForUser(5)