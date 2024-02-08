import PersonFamous from "./PersonFamous";

export default function Gallery() {
  const obj = [{
    name : "Maria Skłodowska-Curie",
    profession : "physicist and chemist",
    awardsNumber : 4,
    awardFor : "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discovered : "polonium (element)",
    image : "https://i.imgur.com/szV5sdGs.jpg"
  }, 
  {
    name : "Katsuko Saruhashi",
    profession : "geochemist",
    awardsNumber : 2,
    awardFor : "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovered : "a method for measuring carbon dioxide in seawater",
    image: "https://i.imgur.com/YfeOqp2s.jpg"

  }]
  
  return (
    
    <div>
      <PersonFamous person={obj[0]}/>
      <PersonFamous person={obj[1]}/>
    </div>
  );
}
