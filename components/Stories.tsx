import { useEffect, useState } from 'react'
import { ContextualCard } from '@faker-js/faker/helpers'
import faker from '@faker-js/faker'

import Story from './Story'

function Stories() {
  const [suggestions, setSuggestions] = useState<ContextualCard[]>([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) =>
      faker.helpers.contextualCard()
    )
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-20 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((item, index) => (
        <Story key={index} img={item.avatar} username={item.username} />
      ))}
    </div>
  )
}

export default Stories
