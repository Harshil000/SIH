import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    let body = await request.json()
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri)
    try {
        const database = client.db('Users')
        const newcollection = database.collection(body.nickname)
        await newcollection.insertOne(body.data)
        return NextResponse.json({ "success": true  , data: body.data})
    }
    finally {
        await client.close()
    }
}