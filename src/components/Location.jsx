import axios from "axios";


const Location = ({ locationInfo, setLocationInfo }) => {

  const handleSubmit =(e)=>{
    e.preventDefault();
    const newLocationID= e.target.newLocation.value;

    axios
    .get(`https://rickandmortyapi.com/api/location/${newLocationID}`)
    .then(({data})=> setLocationInfo(data))
    .catch((err)=> console.log(err));
  };
  
  return (

    <section className="  text-white pt-[550px] grid gap-8 max-md:pt-[400px]">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex border-2 border-green-500 rounded">
          <div>
            <input 
            type="number"
            name="newLocation"
            placeholder="Type a location ID..."
            required
            className="px-4 py-2 w-full  bg-transparent outline-none
            max-md:w-[200px]"
          />
          </div>
          
          <button type="submit" className="px-4 bg-green-500 hover:bg-green-600 rounded-r flex items-center gap-2">
            <span className="max-md:hidden">Search</span> <i className="ri-search-line"></i>
          </button>
        </div>
      </form>
      <article className="text-center border-2 border-green-500 w-[50%] mx-auto max-lg:border-0 grid gap">
        <h2 className="text-2xl font-bold text-[24px] text-green-500 p-5 max-md:text-[15px]">Welcome to {locationInfo?.name}</h2>
        <ul className="list-none text-gray-600 flex justify-center gap-20 p-6  max-lg:hidden">
          <li>Type: {locationInfo?.type}</li>
          <li>Dimension: {locationInfo?.dimension}</li>
          <li>Population: {locationInfo?.residents?.length}</li>
        </ul>
      </article>
    </section>
  );
};
export default Location;
