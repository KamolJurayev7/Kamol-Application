import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleService from '../service/articles';
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from '../slice/article';
import ArticleForm from './ArticleForm';

const EditArticles = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const { slug } = useParams()

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                setTitle(response.article.title)
                setDescription(response.article.description)
                setBody(response.article.body)
                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        }
        getArticleDetail()
    }, []);

    const formSubmit = () => {

    }

        const formProps = { title, setTitle, body, setBody, description, setDescription, formSubmit }
        return (
            <div>
                <h1 className='text-center'>Edit Articles</h1>
                <div className='w-75 mx-auto'>
                    <ArticleForm {...formProps} />
                </div>
            </div>
        );
    }

    export default EditArticles;
