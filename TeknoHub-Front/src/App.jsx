import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav class="flex justify-between bg-yellow-300 p-5">
      <h1 class="">TeknoHub</h1>
      <ul class="flex gap-5">
        <li>Home</li>
        <li>Contact</li>
        <li>Apads</li>
      </ul>
    </nav>
      <h1>I was Here</h1>\
      <h2>Penambahan customer view</h2>
    </>
  )
}

export default App
