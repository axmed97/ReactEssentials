import reactCoreConcepts from "./../assets/react-core-concepts.png";
const reactDescriptors = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactCoreConcepts} alt="" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptors[genRandomInt(2)]} Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque
        saepe libero quisquam fugit sapiente?
      </p>
    </header>
  );
}

export default Header