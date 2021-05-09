import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getPost } from './Redux/action/post'

function Post(props) {
    const postList = props.postData.post

    useEffect(() => {
        initPost()
        return () => {

        }
    }, [])

    const initPost = async () => {
        try {
            await props.dispatch(getPost())
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            {postList.map((v, i) => {
                return (
                    <span>{v.body}</span>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        postData: state.post
    }
}

export default compose(
    connect(mapStateToProps),
)(Post)