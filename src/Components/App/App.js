import React from 'react';
import './App.css';
import axios from 'axios';


import RecipeList from '../RecipeList/RecipeList';
import SearchBar from '../SearchBar/SearchBar';
import Navbar from '../Navbar/Navbar';
import About from '../Navbar/About';
import Favourite from '../Navbar/Favourite';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';

// import edamam from '../../Utils/edamam';

class App extends React.Component {
  state = {
    recipes: [],
    page: 'search',
    favs: []
  };
  // page is the path the nav bar wants to display

  searchEdamam = (ingredient, excluded, sortBy) => {
    let healthValue = '';

    if (sortBy === 'low-fat') healthValue = '&diet=low-fat';
    else if (sortBy) healthValue = '&health=' + sortBy;


    // no of results returned from search - default is 10
    let maxResults = 6;
    // build up the api call
    let search = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'
      + 'q=' + ingredient
      + healthValue
      + '&to=' + maxResults
      + '&excluded=' + excluded
      + '&app_id=cb77ee15&app_key=9fc5801c84197306956b21346122b774';

    axios.get(search)
      .then((response) => {
        console.log(response.data);
        let recipeArray = response.data.hits.map((item, i) => {
          let recipeObj = {};
          recipeObj.recipeUrl = item.recipe.url;
          recipeObj.recipeId = i;
          recipeObj.recipeTitle = item.recipe.label;
          recipeObj.recipeImage = item.recipe.image;
          recipeObj.recipeIngredients = item.recipe.ingredientLines;
          return recipeObj;
        })
        this.setState({ recipes: recipeArray });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // called by nav bar - changes state so that the render displays the correct thing
  clickAbout = (pageVal) => {
    this.setState({ page: pageVal });
  }

  clickFav = (pageVal) => {
    this.setState({ page: pageVal });
    axios.get('https://v5zpl2jk91.execute-api.eu-west-2.amazonaws.com/dev/favourite')
        .then((response) => {
          // handle success   
          this.setState({favs:response.data.favourite})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

  



  render() {
    // render normal search stuff
    if (this.state.page === 'search') {
      return (
        <div className="App" >
          <Navbar NavBar={this.NavBar} aboutFunc={this.clickAbout} favFunc={this.clickFav}/>
          <SearchBar searchEdamam={this.searchEdamam} />
          <RecipeList recipes={this.state.recipes} />
          <Footer />
        </div >
      );
    }
    // render about page
    else if (this.state.page === 'about') {
      return (
        <div className="App" >
          <Navbar NavBar={this.NavBar} aboutFunc={this.clickAbout} favFunc={this.clickFav} />
          <About />
        </div >
      )
    }
    // render fav page
    else if (this.state.page === 'fav') {
      return (
        <div className="App" >
          <Navbar NavBar={this.NavBar} aboutFunc={this.clickAbout} favFunc={this.clickFav} />
          <br />
          <h4> Favourite Recipes </h4>
          {this.state.favs.map(item => {
              return <Favourite key={item.id}
                favUrl={item.recipeURL}
              />
            })}
        </div >
      )
    }
  }

}

export default App;

