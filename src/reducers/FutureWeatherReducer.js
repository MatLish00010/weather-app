export default function FutureWeatherReducer(state, action) {
  if (action.type === 'success') {
    return {
      data: action.data,
      place: action.place,
      error: null,
      loading: false
    };
  } if (action.type === 'input') {
    return {
      ...state,
      input: action.input
    };
  } if (action.type === 'place') {
    return {
      ...state,
      loading: true,
      place: action.place
    };
  } if (action.type === 'error') {
    return {
      ...state,
      error: action.message,
      loading: false
    };
  }
  throw new Error('`That action type isn"t supported`');
}
