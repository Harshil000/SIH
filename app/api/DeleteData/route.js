import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    let body = await request.json()
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri)
    try {
        const database = client.db('Users')
        const newcollection = database.collection(body.name)
        await newcollection.deleteOne({ img : body.img })
        const datalist = await newcollection.find({}).toArray();
        return NextResponse.json({ success: true, data: datalist })
    }
    finally {
        await client.close()
    }
}