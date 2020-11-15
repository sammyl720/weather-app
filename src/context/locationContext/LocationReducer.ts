export default (state, action) => {
  switch(action.type){
    case 'ADD_ZIPCODE':
      return { ...state, locations: [action.payload, ...state.locations]}
    case 'REMOVE_ZIPCODE':
      return { ...state, locations: state.locations.filter(zip => zip !== action.payload)}
    default:
      return state;
  }
}