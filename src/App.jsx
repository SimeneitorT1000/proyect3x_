import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "./assets/helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";
import { Portal } from "./components/Portal";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const randomDimension = getRandomNumber(126);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-[url('/bgcuerpo2.png')] bg-repeat-y w-full min-h-screen" style={{backgroundSize: '100% auto'}}>


        <Portal />

      
         <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      
       
      
        

      
        <ResidentList residents={locationInfo?.residents ?? []}/>

  
      
      
    </main>
  );
}

export default App;
