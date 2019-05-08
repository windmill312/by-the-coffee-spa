import update from 'immutability-helper';

import createReducer from '../utils/createReducer';

const defaultState = {
  items: [],
  cafeUid: null,
};

export const ADD_TO_CART = 'CART/ADD_TO_CART';
export const addToCart = ({ productUid, cafeUid, name, price }) => ({
  type: ADD_TO_CART,
  productUid,
  cafeUid,
  name,
  price,
});

export const cart = createReducer(defaultState, {
  [ADD_TO_CART]: (state, payload) =>
    payload.cafeUid === state.cafeUid
      ? update(state, {
          items: {
            $push: [{ productUid: payload.productUid, name: payload.name, price: payload.price }],
          },
        })
      : update(state, {
          items: {
            $set: [{ productUid: payload.productUid, name: payload.name, price: payload.price }],
          },
          cafeUid: { $set: payload.cafeUid },
        }),
});

export const joinCartWithProducts = state => state.cart.items;
export const joinCartWithCafe = state => state.cart.cafeUid;

// export const joinCartWithDishes = state =>
//   state.cart.items.map(productUid => state.dishes.items.find(dish => dish.productUid === productUid) || {});
