import { Navbar } from "./layout/navbar";
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import {Route, Routes} from "react-router"

function App() {
  
  return (
    <main className="bg-background font-sans flex flex-col  overflow-hidden w-full min-h-dvh pb-8">
      <Navbar />
      <Routes>
        
      <Route path="/" element={<Home/>} />
        
      <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
