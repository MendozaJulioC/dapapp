
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

export const authOPtions = {
    session :{
        strategy:'jwt'
    },
    providers: [
        CredentialsProvider(
            {
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            async authorize(credentials, req) {
                const {email, password} =credentials;
                const res =  await  fetch(`https://j4ch.kratiaanalitik.net/api/auth/validate/email/${email}`);
                const user = await res.json()
                
                const isPasswordMatched = await bcrypt.compare(password, user.data[0].password)
                if (!isPasswordMatched) {
                   throw new Error('Error');
                   return null
                }else{
                    return {
                    "id":  user.data[0].id_user,
                    "name":  user.data[0].nom_user,
                    "email": user.data[0].email,
               
             
                  }
                }   
            }
        })
    ],
    pages:{
        signIn:'/login',
        signOut:'/'

    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOPtions)
export { handler as GET, handler as POST}




