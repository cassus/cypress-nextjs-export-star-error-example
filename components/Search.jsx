import * as React from 'react'

import {Hello} from '../components/Hello'

export function Search () {
  const [value, setValue] = React.useState('')

  return (
    <div>
      <input
        aria-label="search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <p className="search-text">You are searching for: {value}</p>

      <Hello />

      <style jsx>{`
        input {
          border-radius: 20px;
        }
        div {
          padding: 16px;
          background: tomato;
        }
      `}</style>
    </div>
  )
}
