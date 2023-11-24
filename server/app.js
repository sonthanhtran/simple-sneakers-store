const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');

require('dotenv').config()

const port = 3000;

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'postgres', 
  }
)

async function testSequelize() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been establish successfully")
  } catch (err) {
    console.error('Unable to connect to the database', err)
  }
}

testSequelize();
