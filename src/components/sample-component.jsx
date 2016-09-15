import Inferno from 'inferno'
import Component from 'inferno-component'
import {fromJS} from 'immutable'

import SampleList from 'components/sample-list'

export default class SampleComponent extends Component {
  render() {
    return (
      <div className="list-block">
        {
          this.props.todos.map((todo, i) => <SampleList key={i} list={todo} />)
        }
      </div>
    )
  }
}
