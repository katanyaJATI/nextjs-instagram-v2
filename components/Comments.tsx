import Moment from "react-moment"

function Comments({ comments }) {
  return (
    <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
      {comments.map((comment) => (
        <div key={comment.id} className="mb-3 flex items-center space-x-2">
          <img
            className="h-7 rounded-full"
            src={comment.data().userImage}
            alt=""
          />
          <p className="flex-1 text-sm">
            <span className="font-bold">{comment.data().username} </span>
            {comment.data().comment}
          </p>

          <Moment fromNow className="text-sm pr-4">
            {comment.data().timestamp?.toDate()}
          </Moment>

        </div>
      ))}
    </div>
  )
}

export default Comments
