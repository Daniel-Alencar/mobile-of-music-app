const INICIAL_STATE = {
  value: 100
}

function sliderValue(state = INICIAL_STATE, action: any) {
  console.log(action);

  if(action.type === 'CHANGE_VALUE') {
    return {
      value: action.value
    }
  }
  return state;
}

export default sliderValue;