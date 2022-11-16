export default function ExperienceItem(props) {
  return (
    <>
      <div>
        <h3>Frontend developers {props.experienceItem.title}</h3>
        <div className="details">
          <h4>First company {props.experienceItem.employer}</h4>
          <h4>
            Sep 2018 {props.experienceItem.from} - present {props.experienceItem.to}
          </h4>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet {props.experienceItem.description}</p>
    </>
  );
}
