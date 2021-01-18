import React from 'react';
import style from './AddItem.module.css';
import { NavLink} from 'react-router-dom';

const AddItem = (props) => {

  let newItemTitle = React.createRef();
  let newItemPriority = React.createRef();

  let onAddItem = () => {
    let number = newItemPriority.current.value;
    props.addItem(number);
}

let onChangeTitle = () => {
  let text = newItemTitle.current.value;
  props.addItemChangeTitle(text);
}

  return (
    <div className={style.add_item}>
      <div>Add New Item</div>
      <div>
        <label>Title</label>
        <input onChange={onChangeTitle} type="text" ref={newItemTitle} value={props.newTitleText} placeholder={"Input title"} />
      </div>
      <div>
        <label>Priority</label>
        <select ref={newItemPriority}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
      <button onClick={onAddItem}><NavLink to="">Add</NavLink></button>
      <button><NavLink to=""> Cancel</NavLink></button>
      </div>
    </div>
  );
}

export default AddItem;