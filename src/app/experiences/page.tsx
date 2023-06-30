import experienceData from "../constant/experiences"
import Header from "../components/header"

function ExperienceItem(prop: {i: number, year: string, title: string, description: string}) {
  return (
    <li key={prop.i}>
      <div className="experience-year">{prop.year}</div>
      <div className="experience-content">
        <h4 className="experience-title">{prop.title}</h4>
        <p className="experience-description">
          {prop.description}
        </p>
      </div>
    </li>
  )
}

export default function Page() {

  const experienceItems = experienceData.map((experience, i) => {
    return (
      <ExperienceItem i={i} year={experience.year} title={experience.title} description={experience.description} />
    )
  })
  
  return (
    <div>
      <Header sectionTitle="Experience" />

      <ul className="experience-timeline">
        {experienceItems}
      </ul>
    </div>
  )
}