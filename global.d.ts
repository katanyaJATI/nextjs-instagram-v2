declare module '@tailwindcss/forms'
interface StroyProps {
  img: string
  username: string
}

interface PostProps {
  id: string
  username: string
  userImg: string
  img: string
  caption: string
}

interface CommentProps {
  id: string
  userImage: string
  username: string
  comment: string
  timestamp: Firebase.ServerValue.TIMESTAMP
}

interface SignInProps {
  providers: Promise<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>
}
