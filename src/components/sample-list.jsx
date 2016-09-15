import Inferno from 'inferno'
import Component from 'inferno-component'

export default class SampleList extends Component {
  render() {
    let list = this.props.list
    return(
      <li>{list.text}</li>
    )
  }
}
