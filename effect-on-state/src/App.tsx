import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [message, setMessage] = useState<string>("")
  const [likeCount, setLikeCount] = useState<number>(0)
  const [isRed, setIsRed] = useState<boolean>(false)

  useEffect(() => {
    console.log(message)
  }, [message])


  useEffect(() => {
    if (likeCount > 0) {
      console.log(likeCount)
    }
  }, [likeCount])

  useEffect(() => {
      console.log(`${isRed ? "red" : "blue"}`)
  }, [isRed])


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2>Message Logger</h2>
      <button onClick={() => setMessage("Hello From React")}>Send Message</button>
      <hr />
      <h2>Like Counter</h2>
      <button onClick={() => setLikeCount(prevState => prevState + 1)}>Like</button>
      <hr />
      <h2>Color Change</h2>
      <button onClick={() => setIsRed(!isRed)}>Change color</button>
      <div style={{ width: "100px", height: "100px", backgroundColor: `${isRed ? "red" : "blue" }` }}></div>
    </div>
  )
}

export default App
