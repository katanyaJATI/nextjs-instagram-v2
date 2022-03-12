import Post from './Post'

const DUMMY_DATE = [
  {
    id: '123',
    username: 'katanyajati',
    userImg: 'https://i.pravatar.cc/300',
    img: 'https://i.pravatar.cc/300',
    caption: 'Wowwww! This is Dopee!!!',
  },
  {
    id: '123',
    username: 'katanyajati',
    userImg: 'https://i.pravatar.cc/300',
    img: 'https://i.pravatar.cc/300',
    caption: 'Wowwww! This is Dopee!!!',
  },
  {
    id: '123',
    username: 'katanyajati',
    userImg: 'https://i.pravatar.cc/300',
    img: 'https://i.pravatar.cc/300',
    caption: 'Wowwww! This is Dopee!!!',
  },
]

function Posts() {
  return (
    <div>
      {DUMMY_DATE.map((post) => (
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
