declare module '@tailwindcss/forms'
type StroyProps = {
  img: string
  username: string
}
type PostProps = {
  id: string
  username: string
  userImg: string
  img: string
  caption: string
}
type SignInProps = {
  providers: Promise<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>
}
