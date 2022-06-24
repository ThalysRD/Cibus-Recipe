import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';

function ExplorerFoodsNationality() {
  const title = 'Explore Nationalities';
  const { setPageTitle, setSearchPageButton, setExplorer, results } = useContext(Context);
  const [nationality, setNationality] = useState('');
  const [select, setSelect] = useState('false');
  const [allCountries, setAllCountries] = useState([]);
  const [filterCountrie, setFilterCountrie] = useState([]);

  useEffect(() => {
    setPageTitle(title);
    setSearchPageButton(true);
    setExplorer(false);

    const allNationalities = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const response = await fetch(URL);
      const responseJson = await response.json();
      setAllCountries(responseJson.meals);
    };

    allNationalities();
    const fi = async (countrie) => {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countrie}`;
      console.log(URL);
      const response = await fetch(URL);
      const responseJson = await response.json();
      console.log(responseJson);
      setFilterCountrie(responseJson.meals);
    };
    if (select === true) {
      fi(nationality);
    }
  }, [select, nationality]);

  const DOZE = 12;

  const handleNationality = ({ target }) => {
    setNationality(target.value);
    setSelect(true);
  };

  return (
    <section>
      <Header />
      <select
        onChange={ handleNationality }
        data-testid="explore-by-nationality-dropdown"
      >
        {allCountries
        && allCountries.map((nationalities) => (
          <option
            data-testid={ `${nationalities.strArea}-option` }
            key={ nationalities.strArea }
            value={ nationalities.strArea }
          >
            {nationalities.strArea}
          </option>))}
      </select>
      { select === true
        ? (filterCountrie.filter((element, index2) => index2 < DOZE)
          .map((resultado, index) => (
            <div key={ index }>
              <Link
                data-testid={ `${index}-recipe-card` }
                to={ `/foods/${resultado.idMeal}` }
              >
                <img
                  className="imagem"
                  src={ resultado.strMealThumb }
                  alt={ resultado.strMeal }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{resultado.strMeal}</p>
              </Link>
            </div>)))
        : (results
          .filter((element, index) => index < DOZE)
          .map((foods, index) => (
            <div key={ index }>
              <Link
                data-testid={ `${index}-recipe-card` }
                to={ `/foods/${foods.idMeal}` }
              >
                <img
                  className="imagem"
                  src={ foods.strMealThumb }
                  alt={ foods.strMeal }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{foods.strMeal}</p>
              </Link>
            </div>)))}

      <Footer />
    </section>);
}

export default ExplorerFoodsNationality;
