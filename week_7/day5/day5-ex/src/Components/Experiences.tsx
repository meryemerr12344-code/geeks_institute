import data from "../data/data.json";

function Experiences() {
  return (
    <div className="experiences">   
    {data.Experiences.map((experience) => (
        <div key={experience.companyName}>
          <img  className="company-logo rounded-full" src={experience.logo} alt={`${experience.companyName} logo`} />
        <div className="company-info">
           <a href={experience.url} target="_blank" rel="noopener noreferrer" className="text-blue-500  hover:underline">
            {experience.companyName}
          </a>
          </div>
          {experience.roles.map((role) => (
            <div key={role.title}>
              <h2 className="text-lg font-bold">{role.title}</h2>
              <p>{role.startDate} {role.location} </p>
              <p>{role.description}</p>
            </div>
          ))}
          
        </div>
      ))}

    </div>
    )
}

export default Experiences