import Inferno from 'inferno';

export default function SampleList({list}) {
    let {text} = list;
    return(
      <li className="item-content">
        <div className="item-inner">
          <div className="item-title">{text}</div>
        </div>
      </li>
    );
}
