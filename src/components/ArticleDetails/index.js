import React from 'react'
import {useLocation} from 'react-router-dom';
import {formatDistanceToNow} from 'date-fns'
import {Bars} from 'react-loader-spinner'
import AppContext from '../../Context/AppContext'
import Header from '../Header'
import {MainContainer, ListContainer, Loading,Img,Content, ArticleDetailsCard,ArticleSourcePublishCard,SourcePublishText, ArticleHeadingCard, Line, ArticleHeading, DescriptionImgCard} from '../../styledComponents'

const ArticleDetails = props => {
    const location = useLocation()
    const {pathname} = location

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

    const successView = (item) => {
        const {id,url, source,author, urlToImage, title, description, content, publishedAt} = item
        const {name} = source
        const time = formatDistanceToNow(new Date(publishedAt))
        return (
                <ArticleDetailsCard>
                    <ArticleSourcePublishCard>
                        <a href={url} className='link'><SourcePublishText>{name}</SourcePublishText></a>
                        <SourcePublishText time>{time} ago</SourcePublishText>
                    </ArticleSourcePublishCard>
                    <Line />
                    <ArticleHeading>{title}</ArticleHeading>
                    <SourcePublishText>  -By {author}</SourcePublishText>
                    <Line />
                    <DescriptionImgCard>
                    <Content>{content}</Content>
                        <Img src={urlToImage} alt={title} />
                    </DescriptionImgCard>
                    <SourcePublishText description >{description}</SourcePublishText>
                        

                </ArticleDetailsCard>
            
        )
    }
            
            
    

    const failure = (errorText) => (
        <div className='container h-75'>
            <img className='failure-img' src='https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=996&t=st=1707998153~exp=1707998753~hmac=8d9f888f86da9171d921f12ccac5cc9e61e0221dc8a0d978989ce0bfca812d5f' alt="failure img" />
            <h1>{errorText}</h1>
        </div>
    )

    const renderContent = (isLoading, item, errorText) => {
        switch (isLoading) {
            case "IN-PROGRESS":
                return loading()
            case "SUCCESS":
                return successView(item)
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
                    const found = list.find(each => each.id === parseInt(pathname.slice(10)))
                    return (
                        <MainContainer>
                            <Header />
                            <ListContainer >
                                {renderContent(isLoading, found, errorText)}
                            </ListContainer>
                        </MainContainer>
                    )
                }}
            
            </AppContext.Consumer>
        )
}

export default ArticleDetails