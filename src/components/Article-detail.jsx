import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ArticleService from '../service/articles';
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from '../slice/article';
import moment from 'moment';
import { Loader } from '../ui';

const ArticleDetail = () => {
    const { slug } = useParams()
    const dispatch = useDispatch(state => state.article)
    const { articleDetail, isLoading } = useSelector(state => state.article)
    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        }
        getArticleDetail()
    }, [slug])

    return isLoading ? (
        <Loader />
    ) : (
        articleDetail !== null && (
            <div>
                {isLoading && <Loader />}
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
                        <p className="col-md-8 fs-4">{articleDetail.description}</p>
                        <p className='text-muted'>
                            <span className='fw-300'>Created At: </span>
                            {moment(articleDetail.createdAt).format('DD MMM, YYYY')}
                        </p>
                        <div>{articleDetail.body}</div>
                    </div>
                </div>
            </div>
        )
    );
}

export default ArticleDetail;
