'use server'

import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.mclvblr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

let mongodb: MongoClient;

declare global {
  var __db: MongoClient | undefined;
}

if(process.env.NODE_ENV === "production") {
  mongodb = new MongoClient(uri);
} else {
  if(!global.__db) {
    global.__db = new MongoClient(uri);
  }
  mongodb = global.__db;
}

export {
  mongodb,
};
