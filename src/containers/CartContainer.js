import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { joinCartWithCafe, joinCartWithProducts } from '../modules/cart';
import Cart from '../components/Cart';

const mapStateToProps = state => ({
  cartItems: joinCartWithProducts(state),
  cafeUid: joinCartWithCafe(state),
});

export default connect(mapStateToProps)(withRouter(Cart));
