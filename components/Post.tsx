import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Comments from './Comments'

function Post({ id, username, caption, img, userImg }: PostProps) {
  const { data: session } = useSession()
  const [comment, setComment] = useState<string>('')
  const [comments, setComments] = useState<CommentProps[]>([])
  const [likes, setLikes] = useState<string[]>([])
  const [hasLike, setHasLike] = useState<boolean>(false)

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        const docs = snapshot.docs;
        const comments: CommentProps[] = [];
        docs.forEach((doc) => {
          comments.push({
            id: doc.id,
            userImage: doc.data().profileImg,
            username: doc.data().username,
            comment: doc.data().image,
            timestamp: doc.data().caption,
          });
        });
        setComments(comments)
      }
    )
  }, [db, id])

  useEffect(() => {
    onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
      setLikes(snapshot.docs.map((e) => e.id) as string[])
    )
  }, [db, id])

  console.log({likes})

  useEffect(() => {
    setHasLike(likes.some((like) => like === session?.user.uid))
  }, [likes])

  const sendComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const commentToSend = comment.trim()
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session?.user.username,
      timestamp: serverTimestamp(),
      userImage: session?.user.image,
    })

    setComment('')
  }

  const likePost = async () => {
    if (!hasLike) {
      await setDoc(doc(db, 'posts', id, 'likes', session!.user.uid), {
        username: session!.user.username,
      })
    } else {
      await deleteDoc(doc(db, 'posts', id, 'likes', session!.user.uid))
    }
  }

  return (
    <div className="my-7 rounded-sm border bg-white">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Image */}
      <img src={img} alt="" className="w-full object-cover" />
      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          {hasLike ? (
            <HeartIconSolid color='red' onClick={likePost} className="actionBtnPost" />
          ) : (
            <HeartIcon onClick={likePost} className="actionBtnPost" />
          )}
          <ChatIcon className="actionBtnPost" />
          <PaperAirplaneIcon className="actionBtnPost" />
        </div>
        <BookmarkIcon className="actionBtnPost" />
      </div>

      {/* Caption */}
      <p className="truncate p-5">
        {
          likes.length > 0 && (
            <p className='font-bold mb-1'>{likes.length} likes</p>
          )
        }
        <span className="mr-1 font-bold">{username}</span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && <Comments comments={comments} />}

      {/* Input Box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border-none outline-none focus:ring-0"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
