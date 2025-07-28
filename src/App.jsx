import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card9 from './components/components'

function App() {
  const [count, setCount] = useState(0)

  let myOBJ = {
    username : "Sumit",
    age : 31,
    Personality : "Noob",
    Profession : "Hindi Teacher"
  }




  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Vihaan Family Members</h1>
      <Card9 username = {myOBJ.username} image ="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg" age ={myOBJ.age} Personality={myOBJ.Personality} Profession ={myOBJ.Profession}/>
      <Card9 username = "Prashant" image = "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/571319f1-8b3b-42a2-9c18-dee2176d79a1.png" age = "30" Personality="Legendary" Profession="Software Engineer"/>
      <Card9 username = "Mohit" image = "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/74565405-38ae-4809-8513-409d769083e4.png" age = "24" Personality="Noob" Profession="Beggar"/>
      <Card9 username = "Rahul" image = "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/f581d921-d383-4de8-b07d-9f587101e15b.png" age = "24" Personality="Noob" Profession="shopkeeper"/>
      <Card9 username = "Jaspreet" image = "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/149cf6b1-beea-4a23-b0e9-54f0036774c6.png" age = "38" Personality="Cool" Profession="Mechanic"/>
      <Card9 username = "Paras" image = "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/4c231967-2802-4e64-8cc4-89a975c7269d.png" age = "26" Personality="Noob" Profession="Cook"/>
    </>
  )
}

export default App
