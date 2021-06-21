const INICIAL_STATE = {
  value: 0
}

function sliderValue(state = INICIAL_STATE, action: any) {

  switch(action.type) {
    case 'CHANGE_VALUE_FROM_SLIDER':
      return {
        ...state,
        value: action.value
      }

    default:
      return state;
  }
}

export default sliderValue;