const ADD_ITEM = 'ADD_ITEM';
const ADD_ITEM_CHANGE_TITLE = 'ADD_ITEM_CHANGE_TITLE';
const DELETE_ITEM = 'DELETE_ITEM';

let initial_state = {
    listData: [
        {
            id: 1, title: "Bread", status:"have", priority: 5
        },
        {
            id: 2, title: "water", status:"ran out", priority: 2
        },
        {
            id: 3, title: "Meet", status:"ran out", priority: 1
        },
        {
            id: 4, title: "Fish", status:"have", priority: 4
        }
    ],
    newTitleText: ""

}

const listReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_ITEM: {
           let new_id = state.listData.length > 0 ?  Math.max.apply(Math, state.listData.map(function(o) { return o.id; })) + 1 : 1;
            let newItemData = {
                id: new_id,
                title: state.newTitleText,
                status: "have",
                priority: action.addPriority
            };
            return {
                ...state,
                listData: [...state.listData, newItemData],
                newTitleText: ""
            };
        }
        case ADD_ITEM_CHANGE_TITLE: {
            return {
                ...state,
                newTitleText: action.newTitleText
            };
        }
        case DELETE_ITEM: {
            let a = [...state.listData.splice(action.itemID, 1)];
            return {
                ...state,
                listData: [...state.listData]
            };
        }
        default:
            return state;
    }

}


export const addItemCreator = (number) => ({ type: ADD_ITEM, addPriority: number });
export const addItemChangeTitleCreator = (text) => ({ type: ADD_ITEM_CHANGE_TITLE, newTitleText: text });
export const deleteItemCreator = (id) => ({ type: DELETE_ITEM, itemID: id });

export default listReducer;
