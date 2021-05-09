import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { insertCart } from './Redux/action/insertCart'

function Cart(props) {
    const cartList = props.cartData.cart

    const onAdd = async () => {
        try {
            const data = [...props.cartData.cart]
            const newData = 'indomi'
            data.push(newData)
            await props.dispatch(insertCart({ cart: data }))
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            {cartList.map((v, i) => {
                return <div key={i}>{v}</div>
            })}
            <button onClick={onAdd}>Tambah</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
}

export default compose(
    connect(mapStateToProps),
)(Cart)