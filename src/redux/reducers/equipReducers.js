import * as actionType from '../constants/equipConstants';


export const getEquipmentsReducer = (state = { equipments: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS:
            return { equipments: action.payload }

        case actionType.GET_PRODUCT_FAIL:
            return { error: action.payload }

        default:
            return state;

    }
}


// export const getProductDetailsReducer = (state = { product: [] }, action) => {
//     switch (action.type) {
//         case actionType.GET_PRODUCT_DETAIL_SUCCESS:
//             return { product: action.payload}

//         case actionType.GET_PRODUCT_DETAIL_FAIL:
//             return { product: action.payload}

//         default:
//             return state;
//     }
// }


// export const getProductByCategoryReducer = (state = { items: [] }, action) => {
//     switch (action.type) {
//         case actionType.GET_PRODUCT_CATEGORY_SUCCESS:
//             return { items: action.payload}

//         case actionType.GET_PRODUCT_CATEGORY_FAIL:
//             return { items: action.payload}

//         default:
//             return state;
//     }
// }