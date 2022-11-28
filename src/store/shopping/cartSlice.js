import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
}

const setItemsFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem('cartItems', JSON.stringify(item))
    localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existItem = state.cartItems.find((item) => item.id === newItem.id)
            state.totalQuantity++

            if (!existItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existItem.quantity++
                existItem.totalPrice = Number(existItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity), 0
            )
            setItemsFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)

        },

        removeItem(state, action) {
            const id = action.payload
            const existItem = state.cartItems.find((item) => item.id === id)
            state.totalQuantity--

            if (existItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
            }
            else {
                existItem.quantity--
                existItem.totalPrice = Number(existItem.totalPrice) - Number(existItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                (total + Number(item.price) * Number(item.quantity)), 0
            )
            setItemsFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
        },

        deleteItem(state, action) {
            const id = action.payload
            const existItem = state.cartItems.find((item) => item.id === id)

            if (existItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) =>
                (total + Number(item.price) * Number(item.quantity)), 0
            )
            setItemsFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice