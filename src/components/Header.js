import "./../App.css";


export default function Header({title}) {
  return (
    <header>
      <h1>{`${title}'s ToDo List`}</h1>
    </header>
  );
}
