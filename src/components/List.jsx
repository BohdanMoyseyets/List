import { NavLink, Route } from 'react-router-dom';
import AddItem from './addnew/AddItem';
import Item from './Item/Item';
import style from './List.module.css';

const List = (props) => {
    var ElementsList = props.listData.sort((a, b) => (a.priority > b.priority) ? 1 : -1).map((item, index) => <Item key={item.id} data={item} index={index} deleteItem={props.deleteItem}/>);

    return (
        <div className={style.list}>
            <div className={style.titles}>
                <div className={style.name}>Title</div>
                <div className={style.status}>Status</div>
                <div className={style.priority}>Priority</div>
                <div className={style.delete}>Delete</div>
                <div className={style.more}>view more</div>
            </div>
            {ElementsList}
            <div className={style.add_item_form}>
                <NavLink to={"/add"}><button>add new</button></NavLink>
                <Route path={"/add"} render={()=> <AddItem addItem={props.addItem} addItemChangeTitle={props.addItemChangeTitle} newTitleText={props.newTitleText}/>}/>
            </div>
        </div>
    );
}

export default List;
