import React from 'react';
import { Card } from 'semantic-ui-react';

const SearchListEntry = ({ recipe }) => {
  let url = (recipe.title).split(' ').join('-');

  return (
    <Card raised image={recipe.image}
          fluid={false}
          header={recipe.title}
          href={"https://spoonacular.com/" + url + '-' + recipe.id} 
          target="_blank"
    />
  );
};

export default SearchListEntry;