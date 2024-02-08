export default function PersonFamous({person, size = 100}){

  const {name, image, profession, awardsNumber, awardFor, discovered} = person;
  return (

      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src= {image}
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awardsNumber} </b>
            {awardFor}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
  
  )
}