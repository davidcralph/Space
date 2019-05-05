import React from 'react';

class Fact extends React.Component {   
   constructor(props) { // Start based on https://stackoverflow.com/a/45176233
     super(props);
     this.handleClick = this.handleClick.bind(this);
     this.state = { fact: '', test: '' };
   }

   handleClick() {
     const array = [
       // From https://www.natgeokids.com/uk/discover/science/space/ten-facts-about-space
       'One million Earths could fit inside the sun – and the sun is considered an average-size star.', 
       'For years it was believed that Earth was the only planet in our solar system with liquid water. More recently, NASA revealed its strongest evidence yet that there is intermittent running water on Mars, too!',
       'Comets are leftovers from the creation of our solar system about 4.5 billion years ago – they consist of sand, ice and carbon dioxide.',
       'You wouldn’t be able to walk on Jupiter, Saturn, Uranus or Neptune because they have no solid surface!',
       'If you could fly a plane to Pluto, the trip would take more than 800 years!',
       'Space junk is any human-made object orbiting Earth that no longer serves a useful purpose. Scientists estimate there are about 500,000 pieces of space junk today, including fragments from rockets and satellites, and everyday items like spanners dropped during construction of the International Space Station!',
       'An asteroid about the size of a car enters Earth’s atmosphere roughly once a year – but it burns up before it reaches us. Phew!',
       'The highest mountain known to man is on an asteroid called Vesta. Measuring a whopping 22km in height, it is three times as tall as Mount Everest!',
       'There are more stars in the universe than grains of sand on all the beaches on Earth. That’s at least a billion trillion!',
       'The sunset on Mars appears blue.',
       // From https://www.space.com/35695-weirdest-solar-system-facts.html
       'Uranus is tilted on its side.',
       'Jupiter\'s moon Io has towering volcanic eruptions.',
       'Mars has the biggest volcano (that we know of).',
       'Mars has the longest valley,',
       'Venus has super-powerful winds.',
       'There is water ice everywhere.',
       'Mercury is still shrinking.',
       'There are mountains on Pluto.',
       'Jupiter\'s Great Red Spot is shrinking.',
       'Neptune radiates more heat than it gets from the sun.',
       'Jupiter has more heavy elements (proportionally) than the sun.',
       'Uranus has a very battered moon.',
       'Saturn has a two-tone moon.',
       'Organics are commonplace in the solar system.',
       'Mars has varying amounts of methane in its atmosphere.',
       'Saturn has a hexagonal-shaped storm.',
       'The solar atmosphere is much hotter than the surface.'
       ]
     this.setState({ fact: this.state.test + array[Math.floor(Math.random() * array.length)] });
   } // End based on https://stackoverflow.com/a/45176233

  render() {
    return (
      <div>
        <h2>Click the button below for a cool fact about space! (from natgeokids.com and space.com)</h2>
        <button onClick={this.handleClick.bind(this)} className='button'>Click Me!</button>
        <div>{this.state.fact}</div>
      </div>
    );
  }
}
export default Fact;
