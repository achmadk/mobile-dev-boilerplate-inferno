import Inferno from 'inferno'
import Component from 'inferno-component'

import SampleList from 'components/sample-list'

export default class SampleComponent extends Component {
  render() {
    return (
      <div className="list-block">
        <ul>
        {
          this.props.todos.map((todo, i) => <SampleList key={i} list={todo} />)
        }
        </ul>
      </div>
    )
  }
}
