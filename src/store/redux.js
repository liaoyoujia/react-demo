const defaultState = {
  value: '',
  listData: [1, 2, 3]
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'CHANGEVALUE') {
    newState.value = action.value
    return newState
  }
  if (action.type === 'CHANGELIST') {
    newState.listData = [...newState.listData, action.value]
    newState.value = ''
    return newState
  }
  if (action.type === 'DELETEITEM') {
    // console.log(action.index);

    newState.listData.splice(action.index, 1)
    return newState
  }
  return state
  // switch (action.type) {
  //   case 'INCREMENT':
  //     console.log(newState.value, action.value, 31231);

  //     return newState.value = action.value
  //   case 'DECREMENT':
  //     return state - 1
  //   default:
  //     return state
  // }
}