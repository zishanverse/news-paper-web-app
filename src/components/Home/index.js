import React from 'react'
import {Bars} from 'react-loader-spinner'
import ArticleItem from '../ArticleItem'
import AppContext from '../../Context/AppContext'
import Header from '../Header'
import {MainContainer, ListContainer, Loading, ArticleList} from '../../styledComponents'

const Home = () => {

    

    function loading() {
        return (
            <Loading>
                <Bars
                    visible={true}
                    height="60"
                    width="60"
                    color="#fff"
                    ariaLabel="progress-bar-loading" />
            </Loading>
        )
    }

    const successView = (list) => {
        return (
                <ArticleList>
                    {list.map(each => <ArticleItem key={each.id} item={each}/>)}
                </ArticleList>
            
        )
    }
            
            
    

    const failure = (errorText) => (
        <div className='container h-75'>
            <img className='failure-img' src='https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=996&t=st=1707998153~exp=1707998753~hmac=8d9f888f86da9171d921f12ccac5cc9e61e0221dc8a0d978989ce0bfca812d5f' alt="failure img" />
            <h1>{errorText}</h1>
        </div>
    )

    const renderContent = (isLoading, list, errorText) => {
        switch (isLoading) {
            case "IN-PROGRESS":
                return loading()
            case "SUCCESS":
                return successView(list)
            case "FAILURE":
                return failure(errorText)
            default:
                return null
        }
    }

        return (
            <AppContext.Consumer>
                {value => {
                    const {isLoading, list, errorText} = value
                    
                    return (
                        <MainContainer>
                            <Header />
                            <ListContainer>
                                {renderContent(isLoading, list, errorText)}
                            </ListContainer>
                        </MainContainer>
                    )
                }}
            
            </AppContext.Consumer>
        )
}

export default Home