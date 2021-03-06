import React, {useState, createContext, useEffect, useMemo} from 'react';

import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState('San Fransisco');
    const [location, setLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        if(!searchKeyword.length) {
            //dont do anything
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then(result => {
            setIsLoading(false);
            setLocation(result);
            console.log(result)
        }).catch(err => {
            setIsLoading(false);
            setError(err)
        });
    }
    
    useEffect(()=> {
        onSearch();
    },[])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >{children}
        </LocationContext.Provider>
    )
}