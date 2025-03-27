import './App.css';
import bridge from './bridge.jpg';  
import station from './station.jpg'; 
import landscape from './landscape.jpg'; 
import ferhmanbelttunnel from './ferhmanbelttunnel.jpg'; 
import svinesund from './svinesund.jpg';


// main function
function App() {
  function renderProjectCard(image, title, description, gridArea) {
    return (
      <div className="project-card" style={{ gridArea }}>
        <img src={image} alt={title} className="project-image" />
        <div className="overlay">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="read-more">Read more</button>
        </div>
      </div>
    );
  }
  //nested function
  //this function creates the 12 red stripes needed for the overlay
  function renderStripes() {
   
    const stripes = [];
    for (let i = 0; i < 12; i++) {
     
      const gridColumn = `${2*i + 1} / span 1`;
      stripes.push(
        <div key={i} className="stripe" style={{ gridColumn }}></div>
      );
    }
    return stripes;
  }
  //nested function. 
  //This function creates a container in which there are 5 cards. The cards are positioned using display grid.
  
  function renderContainer() {
    return (
      <div className="container">
        {renderProjectCard(
          landscape,
          "Stad Ship Tunnel",
          "The Stad Ship Tunnel (Stad skipstunnel) is a planned canal and tunnel to bypass the Stad peninsula in Stad Municipality in Vestland county, Norway.",
          "1 / 1 / 2 / 6" //Each card has its grid pattern where (the first and third number state the rows)(the third and last number state the column)
        )}
        {renderProjectCard(
          ferhmanbelttunnel,
          "Fehmarn Belt Fixed Link",
          "The Fehmarn Belt Fixed Link (Femern Bælt-forbindelsen) is an immersed tunnel that is currently being constructed to connect the Danish island of Lolland with the German island of Fehmarn.",
          "1 / 6 / 2 / 12" 
        )}
        {renderProjectCard(
          station,
          "Rail Baltica",
          "Rail Baltica is an ongoing greenfield railway infrastructure project.",
          "2 / 1 / 3 / 4" 
        )}
        {renderProjectCard(
          bridge,
          "Øresund Bridge",
          "Øresundsbron is a combined railway and motorway bridge across the Øresund strait.",
          "2 / 4/ 3 / 8"
        )}
        {renderProjectCard(
          svinesund,
          "Svinesund Bridge",
          "Through arch bridge crossing Iddefjord, joining Sweden and Norway.",
          "2 / 8 / 3 / 12"
        )}
      </div>
    );
  }

  return (
    <div className="app">
      <div className="striped-overlay">
        {renderStripes()}
      </div>
      {renderContainer()}
    </div>
  );
}

export default App;

