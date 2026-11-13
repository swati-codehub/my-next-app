import Images from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const instant = false;

let specialties = [{
link: "cardiology",
display: "Cardiology",
description: "Cardiology department specializes in heart-related treatments.",
featured: true
}, {
link: "dermatology",
display: "Dermatology",
description: "Dermatology department specializes in skin related treatments",
featured: true
}, {
link: "neurology",
display: "Neurology",
description: "Neurology department specializes in musculosketal related treatments.",
featured: false
}, {
link: "pediatrics",
display: "Pediatrics",
description: "Pediatrics department provides medical care for children.",
featured: false
}];

export default async function StatePage({ params }) {

const { state, city } = await params;

return (
<div style={{ marginLeft: "180px", marginRight: "180px" }}>

  <header style={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
    <h1 style={{fontSize: "40px", fontWeight:"bold"}}>{city.toUpperCase()}</h1>
    <p style={{fontSize: "20px"}}>Find top-rated doctors and medical facilities in your area.</p>
  </header>

  <section style={{ margin: "20px", padding: "20px" }}>
    <h3 style={{fontSize: "20px", fontWeight:"bold"}}>Featured Departments</h3>

    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

      {specialties.filter(dept => dept.featured).
        map(dept => {
          return (
            <Link href={`/${state}/${city}/${dept.link}`} key={dept.link} style={{ textDecoration: "none", color: "white" }}>

              <div style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "10px", margin: "10px", display: "flex", flexDirection: "column" }}>

                <Images src="/dept.png" width={400} height={150} alt={dept.display} />

                <h4>{dept.display}</h4>

                <p>{dept.description}</p>

              </div>
            </Link>
          )
        })}

    </div>
  </section>

  <section style={{ margin: "20px", padding: "20px", height: "100%" }}>
    <h3 style={{fontSize: "20px", fontWeight:"bold"}}>All Departments</h3>

    {specialties.map(dept => {
      return (
        <Link href={`/${state}/${city}/${dept.link}`} key={dept.link} style={{ textDecoration: "none", color: "white" }}>

          <div style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "10px", margin: "10px", display: "flex" }}>

            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <Images src="/dept.png" width={50} height={50} alt={dept.display} />
            </div>

            <div>
              <h4>{dept.display}</h4>
              <p>{dept.description}</p>
            </div>

          </div>
        </Link>
      )
    })}

  </section>

  <hr />

  <footer style={{ marginTop: "20px" }}>
    <p>Copyright 2025</p>
  </footer>

</div>

);
}