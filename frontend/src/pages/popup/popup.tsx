import React, {useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'
import '@root/index.css'

import { login } from '@/modules/api';



const App: React.FC<{}> = () => {
  const now = new Date();
  useEffect(() =>{
    console.log('popup render', now);
    
  },[])

  return (
    <div>
      <h1 className="text-sm font-bold underline">
      Hello world!
    </h1>
    <button onClick={async()=>{
      const data = await login();
      console.log("pop" + data);
      
    }}>
      구글 로그인 버튼
    </button>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
