import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const ResidentCard = ({residentURL}) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const bgByStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  }
     
    
    useEffect(() =>{
        axios.get(residentURL)
        .then(({data})=> setResidentInfo(data))
        .catch((err)=> console.log(err));

    },[])
  return <article className="border-[#8EFF8B] border-4 ">
    <header className="relative border-[#8EFF8B] border-2">
      <img src={residentInfo?.image} alt="" />
      <div className="flex items-center gap-2 absolute bottom-8 left-1/3
      bg-black/50 text-white p-1 px-2 border-[#8EFF8B] border-2">
        <div className={`h-3 bg-black aspect-square rounded-full  ${bgByStatus[residentInfo?.status]}`}></div>
        <span>{residentInfo?.status}</span>
      </div>
    </header>
    <section className="bg-opacity-10 text-white ">
      <h5 className=" text-[23px] p-3 ">{residentInfo?.name}</h5>
      <article className="grid">
         <div className="flex justify-between p-2">
        <ul>
        <li><span className="text-gray-700">Origin</span> </li>
        <br />
        <li><span className="text-gray-700">Times appear</span> </li>
        <br />
        <li><span className="text-gray-700">Species</span> </li>
      </ul>
      <ul>
        <li >{residentInfo?.origin.name}</li>
        <br />
        <li >{residentInfo?.episode.length}</li>
        <br />
        <li >{residentInfo?.species}</li>
      </ul>
      </div>
      </article>
     
      
    </section>
  </article>
  
}
export default ResidentCard