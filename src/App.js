import React, {useState, useEffect} from 'react'
import {Routes, Route, redirect} from 'react-router-dom';
import AppContext from './Context/AppContext'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import ArticleDetails from './components/ArticleDetails'
import NotFound from './components/NotFound'
import './App.css';


const App = () => {
    const [isLoading, setLoading] = useState("INITIAL")
    const [list, setList] = useState([])
    const [errorText, setErrorText] = useState('')

    useEffect(() => {
        effect()
    }, []);

    const effect = async () => {
        setLoading("IN-PROGRESS")
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 6688ce93f5c84bab8242d740d86665b9'
            }
        }
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch', options)
        
        if (response.ok) {
            const data = await response.json()
            setLoading("SUCCESS")
            const update = data.articles.slice(0,9).map((each, index) => ({...each, id: index}))
    
            setList(update)
        }
        else {
            setLoading("FAILURE")
            setErrorText(response.message)
        }
    }

    return (
    <AppContext.Provider value={{isLoading, setLoading: setLoading, list, setList: setList, errorText, setErrorText: setErrorText}}>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/articles/:id" element={<ArticleDetails />} />
          <Route exact path="/bad-path" element={<NotFound />} />
          <Route element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
    )

}
  
  


export default App
