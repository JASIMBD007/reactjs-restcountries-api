import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);//receiving props.countries

    //Object destructuring to avoid multiple use of props
    const { area, region, population, name, capital, flags } = props.country;
    return (
        <div className='country'>
            <h1>Country Name:{name.common}</h1>
            <h2>Capital:{capital}</h2>
            <p>Region:{region}</p>
            <p>Population:{population}</p>
            <p><small>Area:{area}</small></p>
            <img className='flags' src={flags.svg} alt="" />

            {/* 
            // (without destructuring
            {/* <h1>Country Name:{props.country.name.common}</h1>
            <p>Region:{props.country.region}</p>
            <p>Population:{props.country.population}</p>
            <p>Area:{}</p> */}

        </div>
    );
};

export default Country;