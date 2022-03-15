import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Post from './Post'
import { db } from '../firebase'

function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([])
  useEffect(() => {
    return onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        const docs = snapshot.docs;
        const posts: PostProps[] = [];
        docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            username: doc.data().username,
            userImg: doc.data().profileImg,
            img: doc.data().image,
            caption: doc.data().caption,
          });
        });
        setPosts(posts);
      }
    )
  }, [db])

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
