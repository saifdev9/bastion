import React from 'react'
import { useSelector  } from 'react-redux'
import DashLayout from './../components/UI/dashboard-components/DashLayout';
import Error from '../components/UI/Error';



export function DashboardLayout(props) {

   const user = useSelector(state => state.login.user)
   const logged = useSelector(state => state.login.loggedIn)

  return (
    <>
      {logged ? <DashLayout logged={logged} user={user}/> : <Error message={"You are not logged in , please login!"} code={401} /> }
    </>
  )
}