const apiKey = '42dPjdYAdU1nuJk8im0TDEy0wUvbxkHQgJCs0yShn935DKpkajYocoWcYnL8YV6_hpljjXhNoZKcesCIwbo7Tzu8BQPfYUEGFMq5xrJXzKMD_uWf2xCk5WuoEw9MXnYx';

const Yelp = {
  search(term, location, sortBy) {
    console.log('Starting fetch...')
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      console.log('converting response to JSON...')
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        console.log('Mapping JSON response...')
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
};

export default Yelp;