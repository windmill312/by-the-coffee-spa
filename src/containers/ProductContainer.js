import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as cart from '../modules/cart';
import ProductInfo from '../components/ProductsList/ProductInfo';

const mapDispatchToProps = {
  addToCart: cart.addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(ProductInfo));
