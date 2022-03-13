import { useEffect, useState } from 'react'
import { ContextualCard } from '@faker-js/faker/helpers'
import faker from '@faker-js/faker'

import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {
  const { data: session } = useSession()
  const [suggestions, setSuggestions] = useState<ContextualCard[]>([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) =>
      faker.helpers.contextualCard()
    )
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="border-gray-20 mt-8 flex space-x-2 overflow-x-scroll rounded-sm border bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image!} username={session.user.username} />
      )}
      {suggestions.map((item, index) => (
        <Story key={index} img={item.avatar} username={item.username} />
      ))}
    </div>
  )
}

export default Stories
