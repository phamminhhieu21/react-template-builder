import { FC, useState } from 'react'

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fullname, setFullname] = useState('Localhost')
  return (
    <div>
      <h1>{fullname}</h1>
      <h2>Bài viết được viết tại blog {process.env.HOST}</h2>
    </div>
  )
}

export default App
