import React from 'react';

const SearchListEntry = ({ recipe }) => {
  let url = (recipe.title).split(' ').join('-');

  return (
    <div id="card">
      <a href={"https://spoonacular.com/" + url + '-' + recipe.id}>
        <img src={recipe.image} alt={recipe.title} />
      </a>
      <h1>{recipe.title}</h1>
    </div>
  );
};

export default SearchListEntry;