import React, {
  Component
} from 'react'
import store from './store/index'


class App extends Component {
  constructor(props) {
    super(props)

    this.changeValue = this.changeValue.bind(this)
    this.changeList = this.changeList.bind(this)
    this.deleteList = this.deleteList.bind(this)
    this.handStore = this.handStore.bind(this)
    this.state = store.getState()
    store.subscribe(() => {
      this.handStore()
    })

  }
  handStore() {
    this.setState(store.getState())
  }
  changeValue() {
    const value = this.input.value
    store.dispatch({
      type: 'CHANGEVALUE',
      value
    })

  }
  changeList() {
    const value = this.input.value
    store.dispatch({
      type: 'CHANGELIST',
      value
    })
  }
  deleteList(index) {
    store.dispatch({
      type: 'DELETEITEM',
      index
    })
  }
  render() {
    const {
      value,
      listData
    } = this.state

    return ( <
      div >
      <
      input value = {
        value
      }
      ref = {
        input => {
          this.input = input
        }
      }
      onChange = {
        this.changeValue
      }
      /> <
      button onClick = {
        this.changeList
      } > 提交 < /button> <
      br / >
      <
      ul > {
        listData.map((item, index) => {
          return ( <
            li key = {
              index
            }
            onClick = {
              () => {
                this.deleteList(index)
              }
            } > {
              item
            } <
            /li>
          )
        })
      } <
      /ul> < /
      div >
    )
  }
}

export default App