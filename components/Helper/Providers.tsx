'use client'
import appStore from '@/store/appStore'
import React from 'react'


import { Provider } from 'react-redux'

const Providers = ({children}) => {
  return (
    <Provider store={appStore}>
        {children}
    </Provider>
  )
}

export default Providers