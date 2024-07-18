import { useState } from 'react';
import ArticleService from '../service/articles';
import ArticleForm from './ArticleForm';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article';

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        const article = { title, body, description }
        dispatch(postArticleStart())
        try {
            await ArticleService.postArticle(article)
            navigate('/')
            dispatch(postArticleSuccess())
        } catch (error) {
            dispatch(postArticleFailure())
        }
    }

    const formProps = { title, setTitle, body, setBody, description, setDescription, formSubmit }

    return (
        <div className='text-center'>
            <h1 className='fs-2'>Create Article</h1>
            <div className='w-75 mx-auto'>
                <ArticleForm {...formProps} />
            </div>
        </div>
    );
}

export default CreateArticle;
