export const initialState = {
  basket: [],
  user: null,
};

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + parseFloat(item.price), 0);

// dispatch: listening
const reducer = (state, action) => {
  // console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // use index instead of id in order to prevent from deleting multiple same items at once!
      // const itemIndex = state.basket.findIndex(
      //   (basketItem) => basketItem.id === action.id
      // );
      // let newBasket = [...state.basket];

      // if (itemIndex >= 0) {
      //   newBasket.splice(itemIndex, 1); // chopping out by one
      // } else {
      //   console.warn(
      //     `Can't remove product (id: ${action.id}) as its not in basket!`
      //   );
      // }

      // return { ...state, basket: newBasket };

      return {
        ...state,
        basket: state.basket.filter(item => item.cartId !== action.cartId)
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

export default reducer;
