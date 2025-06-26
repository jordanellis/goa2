'use server'

import type { MongoHero } from "@/types/hero";
import { mongodb } from "./client";
import { ObjectId } from "mongodb";

async function heroesClient() {
  const db = await mongodb.db("sample_mflix");
  const collection = await db.collection<MongoHero>("heroes");
  return collection
}

export async function getHeroes() {
  const collection = await heroesClient();
  
  return collection.find({}).toArray();
}

export async function getHeroById(id: string) {
  const collection = await heroesClient();
  const query = {_id: new ObjectId(id)};
  
  return collection.findOne(query);
}

export async function createHero(hero: MongoHero) {
  const collection = await heroesClient();
  
  return collection.insertOne(hero);
}