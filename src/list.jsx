// function ListApp() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];
//   const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);
//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animals.map((animal) => {
//           return <li key={animal}>{animal}</li>;
//         })}
//       </ul>
//       <ul>{animalsList}</ul>
//     </div>
//   );
// }

// export { ListApp };

// function ListItem(props) {
//   return <li>{props.animal}</li>;
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         // return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//         return animal.startsWith("L") && <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   );
// }

// function App() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }

// export { App };

// function List(props) {
//   if (!props.animals) {
//     return <div>Loading...</div>;
//   }

//   if (props.animals.length === 0) {
//     return <div>There are no animals is the list!</div>;
//   }

//   return (
//     <ul>
//       {" "}
//       {props.animals.map((animal) => {
//         return <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   );
// }

// function App() {
//   const animals = ["Duck", "Worm", "Horse"];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }

// export default App;

function List(props) {
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

//or
function List2(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

function App() {
  const animals = ["Bug"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
      <List2 animals={animals} />
    </div>
  );
}

export default App;
