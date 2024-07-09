import React, { useCallback } from 'react';
import { useSelector } from 'react-redux'
const ValidationError = () => {
    const { error } = useSelector(state => state.auth)

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(names => {
            const msg = error[names].join(', ')
            return `${names} - ${msg}`
        })
    }, [error])

    console.log(error !== null && errorMessage());

    return error !== null && errorMessage().map(err => (
        <div key={err} className="alert alert-danger m-1 p-1" role="alert">
            {err}
        </div>
    ))



}

export default ValidationError
