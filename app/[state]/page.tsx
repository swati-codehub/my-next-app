import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

  export const instant = false;
let cities =[{
  state: "california",
  cities: [{
    featured:true,
    link: "los-angeles",
    display: "Los Angeles",
    description: "Los Angeles is a city in the United States."
  },{
    featured:true,
link:"san-francisco",
display: "San Francisco",
    description: "San Francisco is a city in the United States."
    

   }, {
link:"san-diego",
display: "San Diego",
    description: "San Diego is a city in the United States."
}]
}, {
  state: "new-york",
  cities: [{
link:"new-york-city",
display: "New York City",
    description: "New York is a city in the United States."
  }]
},{
  state: "texas",
  cities: [{
link:"dallas",
display: "Dallas",
    description: "Dallas is a city in the United States."
}]
},{}]

  
export default async function StatePage({ params }) {
  const { state } = await params;
  let citiesForState = cities.find(city=> city.state === state)?.cities

  return (
    <div style={{marginLeft: "110px", marginRight: "110px", marginTop: "20px"}}>
      <section style={{margin:"40px",display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <h1 style={{margin:"10px",fontWeight:"bold", fontSize:"40px"}}>{"Healthcare in " + state.charAt(0).toUpperCase() + state.slice(1)}</h1>
        <p style={{margin:"10px", color: "gray", fontSize:"18px"}}>Find top-rated doctors and medical facilities in your area. Explore healthcare options across California's major cities.</p>

      </section>

     <section style={{justifyContent: "start", margin: "20px", padding: "20px"}}>
  <h3 style={{fontSize: "20px", fontWeight:"bold"}} >Featured Healthcare Destinations</h3>

  <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
    {citiesForState?.filter(city => city.featured).map(city => {
      return (
        <Link href={`/${state}/${city.link}`} key={city.link} style={{textDecoration: "none", color: "white"}}>
          <div style={{border: "1px solid lightgray", borderRadius: "10px", padding: "10px", margin: "10px", display: "flex", flexDirection: "column"}}>
            <Image src="/city.png" width={100} height={150} alt={city.display} />
            <h4>{city.display}</h4>
            <p>{city.description}</p>
          </div>
        </Link>
      )
    })}
  </div>
</section>
<section style={{margin: "20px", padding: "20px", height: "100%"}}>
  <h3 style={{fontSize: "20px", fontWeight:"bold"}}>All Locations</h3>

  {citiesForState.map(city => {
    return (
      <Link href={`/${state}/${city.link}`} key={city.link} style={{textDecoration: "none", color: "white"}}>
        <div style={{border: "1px solid lightgray", borderRadius: "10px", padding: "10px", margin: "10px", display: "flex"}}>
          <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
            <Image src="/city.png" width={50} height={50} alt={city.display} />
          </div>

          <div>
            <h4>{city.display}</h4>
            <p>{city.description}</p>
          </div>
        </div>
      </Link>
    )
  })}
</section>

      <section style={{margin:"40px"}}>
        <h3 style={{fontSize: "20px", fontWeight:"bold"}}>All Cities</h3>
        <div style={{margin:"10px"}}>
        {citiesForState.map(city => {
          return (
             <div style={{border: "1px solid lightgray", borderRadius: "10px", padding: "10px", margin:"20px", display:"flex", flexDirection:"row" }}>
          <div>
            <Image src="/city.png" width={100} height={100} />
            <div  style={{marginLeft:"10px"}}>
            
 <Link style={{fontWeight:"bold"}} href={`/${state}/${city.link}`}>{city.display}</Link>
              <p style={{fontSize:"14px", color:"gray",marginTop:"10px"}}>{city.description}</p>
            </div>
          </div>
            </div>
             
          )
        })}
        </div>
      </section>

      <section style={{padding:"40px",margin:"40px", border:"1px solid lightgray", borderRadius: "10px", backgroundColor: "#FFD700", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3 style={{margin:"10px"}}>Expand Your Practice?</h3>
        <p style={{margin:"10px"}}>Join our growing network and connect with patients in your area. Claim your free profile today.</p>
        <button style={{margin:"10px"}}>Join Our Network</button>
      </section>

    </div>
  );
}