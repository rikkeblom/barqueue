import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Current Queue Lenght</h1>
      <QueueContainer />
    </div>
  );
}

function QueueContainer() {
  return (
    <section>
      <BeerIcon />
      <BeerIcon />
      <BeerIcon />
    </section>
  );
}

function BeerIcon() {
  return <img alt="Beer Bottle" src="beer-bottle-svgrepo-com.svg"></img>;
}

function ImportQueueNumber() {
  const url = "https://kea-alt-del.dk/kata-distortion/";

  fetch(url)
    .then((res) => res.json())
    .then((data) => showQueue(data));

  setTimeout(ImportQueueNumber, 10000);
  return null;
}

function showQueue(data) {
  let queueLenghtString = data.inQueue;
  let queueLenght = parseInt(queueLenghtString);
  console.log(queueLenght);

  // for (let i = 0; queueLenght > i; i++) {
  //   return <img alt="Beer Bottle" src="beer-bottle-svgrepo-com.svg"></img>;
  // }
}

ImportQueueNumber();
export default App;
