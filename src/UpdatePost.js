import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { updatePost, getPost } from './Redux/action/post'
import FormUpdate from './FormUpdate'

const UpdatePost = (props) => {
    const postList = props.postData.post

    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')
    const isLoading = props.updatePostData.isLoading

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title: Title,
            body: Body,
            userId: 1
        }

        try {
            await props.dispatch(updatePost(data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            {isLoading && <span>INI LODING</span>}
            {postList.map((v, i) => {
                return (
                    <>
                        <span>{v.body}</span>
                        <br />
                        <button  >UPDATE</button>
                        <br />
                    </>
                )
            })}
            {!isLoading &&

                <form onSubmit={onSubmit} >
                    <input type="text" onChange={(e) => setBody(e.target.value)} />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    <button>UPDATE</button>
                </form>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        updatePostData: state.updatePost,
        postData: state.post
    }
}

export default compose(
    connect(mapStateToProps),
)(UpdatePost)