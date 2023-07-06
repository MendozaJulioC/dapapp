import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

import Page from './page'

import Nav from '../components/navs/Navs'

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login?callbackUrl=/dashboard')
  }

  return ( 
  <>
   <Nav usuario={ session?.user?.name} />
    <Page/>
  </>
  
 
  )
}

export default ServerProtectedPage