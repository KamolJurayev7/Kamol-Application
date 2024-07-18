import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Register, Navbar, ArticleDetail, CreateArticle } from './components/allComponents'
import AuthService from './service/auth';
import { useDispatch } from 'react-redux'
import { signUserFailure, signUserSuccess } from './slice/auth';
import { getItem } from './helpers/persistance-storage';
import ArticleService from './service/articles';
import { getArticlesStart, getArticlesSuccess } from './slice/article';
const App = () => {
  const dispatch = useDispatch()


  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
      console.log(response);
    } catch (error) {
      dispatch(signUserFailure())
    }
  }

  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = getItem()
    if (token) {
      getUser()
    }
    getArticles()
  }, []);

  return (
    <div className=''>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            <Route path="/create-article" element={<CreateArticle />} />
          </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
