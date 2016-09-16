import Inferno from 'inferno'
import Component from 'inferno-component'

export default class SampleList extends Component {
  render() {
    let list = this.props.list
    return(
      <li className="item-content">
        <div className="item-inner">
          <div className="item-title">{list.text}</div>
        </div>
      </li>
    )
  }
}
