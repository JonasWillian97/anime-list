import React from 'react';

function useDebounce (fn, delay) {
    function debounceFn (...params) {
        window.setTimeout(() => {
            fn(...params)
        }, delay)
    }
    return (
        debounceFn
    )
}

export default useDebounce;