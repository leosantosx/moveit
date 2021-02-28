import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'

export default (
    request: NextApiRequest, 
    response: NextApiResponse) => 
NextAuth(request, response, {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})