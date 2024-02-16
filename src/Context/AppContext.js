import React from 'react'

const AppContext = React.createContext({
    isLoading: "INITIAL",
    setLoading: ( ) => {},
    list: [],
    setList: () => {},
    errorText: '',
    setErrorText: () => {}
})

export default AppContext