import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

import Page from './page'
import Nav from '../components/navs/Navs'

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions)
  let imageavatar='';
  
  if (!session) {
    redirect('/login?callbackUrl=/dashboard')
  }

  if(!session?.user?.image){
    imageavatar = 'https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/logos/logo_footer.png'
  }else{  imageavatar = session.user.image }
  return ( 
    <>
    <Nav usuario={ session?.user?.name}  avatar = {imageavatar} />
      <Page/>
    </>
  )
}

export default ServerProtectedPage