import Link from "next/link";
import Image from "next/image";
export const instant = false;

let doctors = [
  {
    name: "Dr. John Smith",
    specialty: "Cardiology",
    experience: 15,
    link: "dr-john-smith"
  },
  {
    name: "Dr. Emily Johnson",
    specialty: "Neurology",
    experience: 10,
    link: "dr-emily-johnson"
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Orthopedics",
    experience: 8,
    link: "dr-michael-brown"
  },
  {
    name: "Dr. Sarah Davis",
    specialty: "Pediatrics",
    experience: 12,
    link: "dr-sarah-davis"
  }
];

export default async function SpecialityPage({ params }) {

  const { state, city, speciality } = await params;

  return (
    <div style={{ marginLeft: "180px", marginRight: "180px" }}>

      <header style={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>

        <h1 style={{fontSize: "40px", fontWeight:"bold"}}>{speciality.toUpperCase()}</h1>

        <p style={{fontSize: "20px",}}>Find top-rated doctors and medical facilities in your area.</p>

      </header>

      <section style={{ margin: "20px", padding: "20px" }}>

        <h3 style={{fontSize: "20px", fontWeight:"bold"}}>All Doctors</h3>

        {doctors.map(doc => {
          return (
            <Link
              href={`/${state}/${city}/${speciality}/${doc.link}`}
              key={doc.link}
              style={{ textDecoration: "none", color: "white" }}
            >

              <div style={{ border: "1px solid lightgray", borderRadius: "10px", padding: "10px", margin: "10px" }}>

                <h4>{doc.name}</h4>

                <p>{doc.specialty}</p>

                <p>{doc.experience} years of experience</p>

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