export default (state = 0,action) => {
  switch (action.type) {
    case 'INCREMENT':
          state=state+1;
      return state;
      break;

      case 'DECERMENT':
      state=state-1;
      return state;
      break;

      case 'CLEAR':
      return  state=0;
      break;

      case 'ADD':
           state=state+10;
      return  state;
      break;

       case 'SUB':
           state=state-10;
      return  state;
      break;

       case 'SAVE':
      return  state;
      break;


    default:
      return state;
    }
}

