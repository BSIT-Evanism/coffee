
import axios from 'axios';

const HeroSections = () => {
  // Import the Axios library (if using ES modules)

// Make an HTTP GET request
axios.get('https://fakestoreapi.com/products')
  .then(response => {
    // Handle the successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });


  return (
    <>
      <h1 className="font-['Pacifico'] text-[5em] p-5">Get the Coffee and Hear the Music you Love.</h1>
      <h1>Hello</h1>
    </>
  )
}

export default HeroSections;
