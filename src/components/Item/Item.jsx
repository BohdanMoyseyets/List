import style from './Item.module.css';

const Item = (props) => {
    let onDeleteItem = () => {
        props.deleteItem(props.index);
    }
  return (
    <div className={style.item}>
        <div className={style.name}>{props.data.title}</div>
        <div className={style.status}>{props.data.status}</div>
        <div className={style.priority}>{props.data.priority}</div>
        <div className={style.delete}><button onClick={onDeleteItem}>Delete</button></div>
        <div className={style.more}>view more</div>
      
    </div>
  );
}

export default Item;