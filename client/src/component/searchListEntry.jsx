import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SearchListEntry = ({ recipe }) => {
  let url = (recipe.title).split(' ').join('-');

  return (
    <Card centered raised color={'blue'}
          fluid={true}
          href={"https://spoonacular.com/" + url + '-' + recipe.id} 
          target="_blank"
    >
      <Card.Header content={recipe.title} />
      <Image src={recipe.image} height={200} />
    </Card>
  );
};

export default SearchListEntry;