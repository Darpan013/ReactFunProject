import React from 'react'

function Card9({username, image, age="unfilled data", Personality, Profession="Unfilled data" /*it'd give it to a default value, if data is nit filled */}) {
  // console.log("props", username);
  
    return(

         <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src={image || "Unfilled data"}
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h2 className="font-bold ">{username || "Unfilled data"}</h2>
            <h2>{Personality || "Unfilled data"}</h2>  {/* that OR data would give it to a default value, if data is nit filled */ }
          </div> 
          <div className="flex  justify-between">
            <p>{age}</p>
            <p>{Profession}</p>
          </div>
        </div>
      </div>
        
        )
}
export default Card9

