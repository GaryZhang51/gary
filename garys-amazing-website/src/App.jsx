import { useState } from 'react'

function App() {
  const [hit, setHit] = useState(100)

  let isdead = ''
  if (hit <= 0) {
    isdead = 'the kid is dead'
  } else {
    isdead = 'the kid is still alive'
  }
  if (hit <= -50) {
    console.log('amongus')
    isdead = 'the kid is dead and you are a monster'
  } 

  return (
    <div>
      <p>press to hit a kid!</p>
      <p>the kid is has {hit} health points left</p>
      <button onClick={
        () => {
          setHit(hit - 1)
        }
      }>Jab</button>
      <button onClick={
        () => {
          setHit(hit - 2)
        }
      }>Right Hook</button>
      <button onClick={
        () => {
          setHit(hit - 4)
        }
      }>Kick His Fat little face</button>

      <p>{isdead}</p>
    </div>
  )
}

export default App
