export const people = [{
  id: Math.random() * 1000,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: Math.random() * 1000,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId) {
    return "https://i.imgur.com/" + imageId + "s.jpg"
}
export default function List() {
  const listItems = people.map((person) =>
    <li key = {person.id}>
      <img src={getImageUrl(person.imageId)}/>
    </li>
  );
  return <ul>{listItems}</ul>;
}