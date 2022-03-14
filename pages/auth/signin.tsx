import { getProviders, signIn as SignInProvider } from 'next-auth/react'
import Header from '../../components/Header'

function signIn({ providers }: SignInProps) {
  return (
    <>
      <Header />
      <div className="mx-4 -mt-56 flex min-h-screen flex-col items-center justify-center text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="text-sm italic">
          This is not the real app. this is built for educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-400"
                onClick={() =>
                  SignInProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
