
import './App.css';
import Countries from './components/Countries/Countries';


function App () {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries () {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(data => setCountries(data))
//   }
//     , [])
//   return (
//     <div>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} flags={country.flag}></Country>)
//       }
//       <h1>Countries:{countries.length}</h1>
//     </div>
//   )
// }
// function Country (props) {
//   return (
//     <div className='country'>
//       <h1>Country Name:{props.name}</h1>
//       <h4>Population:{props.population}</h4>
//       <img src={props.flags} alt="" />

//     </div>)
// }
export default App;
