import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createPost, getPost } from './Redux/action/post'

const FormUpdate = (props) => {

    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')
    const isLoading = props.createPostData.isLoading
    const { isError } = props.createPostData

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title: Title,
            body: Body,
            userId: 1
        }

        try {
            await props.dispatch(createPost(data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {!isError && <span>ERROR LUR</span>}
            {isLoading && <span>INI LODING</span>}
            {!isLoading &&
                <form onSubmit={onSubmit} >
                    <input type="text" onChange={(e) => setBody(e.target.value)} />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    <button>TAMBAH</button>
                </form>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        createPostData: state.createPost
    }
}

export default compose(
    connect(mapStateToProps),
)(FormUpdate)