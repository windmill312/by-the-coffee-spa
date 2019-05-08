import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Products from '../components/ProductsList/Products';
import * as cart from '../modules/cart';

const mapDispatchToProps = {
  addToCart: cart.addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Products));
