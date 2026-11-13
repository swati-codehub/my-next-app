import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const instant = false;

let doctorProfile = {
  name: "Dr John Smith",
  exp: 20,
  qualification: "MBBS, MD (Cardiology)",
  specialization: "Cardiologist",
  hospital: "City Care Hospital",
  about: "Dr John Smith is an experienced cardiologist who specializes in heart-related diseases and treatments.",
  address: "City Care Hospital, Main Road, California.",
  faqs: [
    {
      question: "How many years of experience does Dr John Smith have?",
      answer: "20 years of experience."
    },
    {
      question: "Where does Dr John Smith practice?",
      answer: "City Care Hospital."
    },
    {
      question: "What is his specialization?",
      answer: "He specializes in cardiology."
    }
  ]
};

export default async function DoctorProfilePage({ params }) {
  const { state, city, speciality, doctor } = await params;

  return (
    <div>
     

      <div style={{ marginLeft: "180px", marginRight: "180px" }}>

        <header style={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>


<Image src="/doctor.png"width={150}height={150}alt="Dr John Smith"/>
          <h1 style={{fontSize: "40px", fontWeight:"bold"}}>{doctorProfile.name}</h1>

        </header>

        <section style={{ margin: "10px", padding: "10px" }}>
          <h3 style={{fontSize: "20px", fontWeight:"bold"}}>Basic Info</h3>

          <p>Qualification: {doctorProfile.qualification}</p>
          <p>Experience: {doctorProfile.exp} Years</p>
          <p>Specialization: {doctorProfile.specialization}</p>
          <p>Hospital: {doctorProfile.hospital}</p>

        </section>

        <section style={{ margin: "10px", padding: "10px" }}>
          <h3 style={{fontSize: "20px", fontWeight:"bold"}}>About</h3>

          <p>{doctorProfile.about}</p>
        </section>

        <section style={{ margin: "10px", padding: "10px" }}>
          <h3 style={{fontSize: "20px", fontWeight:"bold"}}>Address</h3>

          <p>{doctorProfile.address}</p>
        </section>

        <section style={{ margin: "10px", padding: "10px" }}>
          <h3 style={{fontSize: "20px", fontWeight:"bold"}}>FAQs</h3>

          {doctorProfile.faqs.map(faq => {
            return (
              <div>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            );
          })}
        </section>

      </div>
    </div>
  );
}