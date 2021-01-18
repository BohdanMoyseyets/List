import { connect } from "react-redux"
import { addItemChangeTitleCreator, addItemCreator, deleteItemCreator } from "../redux/reducers/list-reducer"
import List from "./List"


const mapStateToProps = (state) => {
    return{
        listData: state.list.listData,
        newTitleText: state.list.newTitleText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addItem: (number) => {dispatch(addItemCreator(number))},
        addItemChangeTitle: (text) => {dispatch(addItemChangeTitleCreator(text))},
        deleteItem: (id) => {dispatch(deleteItemCreator(id))}
    }

}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;