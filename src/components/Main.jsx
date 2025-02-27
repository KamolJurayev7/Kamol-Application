import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../ui';
import ArticleService from '../service/articles';
import { getArticlesStart, getArticlesSuccess } from '../slice/article';

const Main = () => {
    const dispatch = useDispatch()
    const { isLoading, articles } = useSelector(state => state.article)
    const { loggedIn, user } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const getArticles = async () => {
        dispatch(getArticlesStart())
        try {
            const response = await ArticleService.getArticles()
            dispatch(getArticlesSuccess(response.articles))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getArticles() }, []);

    const deleteArticles = async (slug) => {
        try {
            await ArticleService.deleteArticle(slug)
            getArticles()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {isLoading && <Loader />}
            <div className='album py-5'>
                <div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {articles.map(item => (
                            <div className="col">
                                <div key={item.id} className="card h-100 shadow-sm">
                                    <svg
                                        className="card-img-top"
                                        width="100%"
                                        height="225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <rect width="100%" height="100%" fill="#55595c">
                                        </rect>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text fw-bold m-0">{item.title}</p>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button onClick={() => { navigate(`/article/${item.slug}`) }} type="button" className="btn btn-sm btn-outline-success">View</button>
                                            {loggedIn && user.username === item.author.username && (
                                                <>
                                                    <button onClick={()=>{navigate(`/edit-article/${item.slug}`)}} type="button" className="btn btn-sm btn-outline-warning">Edit</button>
                                                    <button onClick={() => { deleteArticles(item.slug) }} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                                </>
                                            )}
                                        </div>
                                        <small className="text-muted fw-bold text-capitalize">{item.author.username}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
