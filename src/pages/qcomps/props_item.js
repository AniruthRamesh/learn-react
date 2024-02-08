function Item({ name, isPacked }) {
  let tag
  isPacked ? tag = <li className="item"><del>{name}</del></li> : tag = <li className="item"> {name} </li>
  return tag
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
