import { NextApiRequest, NextApiResponse } from 'next'
import connect from './utils/database'

export default async (
    request: NextApiRequest, 
    response: NextApiResponse
) => {

    if(request.method == 'POST'){
        const { name, level } = request.body

        if(!name || !level){
            return response.status(400).json({ error: 'wrong parameters'})
        }


        const { db } = await connect()

        const user = await db.collection('users').insertOne({
            name,
            level,
        })

        response.status(201).json(user.ops[0])
    }

    else if(request.method == 'GET'){
        const { db } = await connect()

        const users = await db.collection('users')

        response.status(200).json({ users })
    }
    else{
        return response.status(400).json({ error: 'wrong method request'})
    }

}