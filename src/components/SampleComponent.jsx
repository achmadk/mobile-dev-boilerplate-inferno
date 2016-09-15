import React, {Component} from 'react'
import {fromJS} from 'immutable'

import {API} from 'api/sampleAPI'
import {APP_ID} from 'modules/utils/constants'


export default class SampleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { content: null }
  }
  componentDidMount() {
    var self = this
    API.Weather.all({ q: "London", appid: APP_ID }).then(response => {
      self.setState({ content: fromJS(response.data)})
    }).catch(err => console.log(err))
  }
  render() {
    console.log(this.state.content)
    return <div />
  }
}
