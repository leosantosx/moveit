import { Db, MongoClient } from 'mongodb'

interface connectType{
    db: Db
    client: MongoClient
}

const client = new MongoClient(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,    
})


export default async function connect(): Promise<connectType> {
    if(!client.isConnected()) client.connect()

    const db = client.db('moveit')

    return { db, client }
}