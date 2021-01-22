import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: name => dispatch({ type: 'ADD_RESTAURANT', payload: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
