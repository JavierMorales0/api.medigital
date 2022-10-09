/*
 * Created on Wed Sep 21 2022
 *
 * Authors: Javier Morales, Edgar Reyes, Carlos Cordero, Brian Rodas, Keny Chavez
 * Copyright (c) 2022 MEdigital
 */

/**
 * IMPORTS
 */
import express from 'express'
import 'dotenv/config'

import conn from './database/mongo.js'
import PatientController from './controllers/PatientController.js'

/**
 * REQUIRED CONSTANTS
 **/
const port = process.env.PORT || 3000

/**
 * CREATION OF THE APP FROM EXPRESS
 */

const app = express()

// CONNECT TO DB
conn()
// Setting the configuration for the application
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/**
 * ENDPOINTS TO SET THE RESPECTIVE CONTROLLER
 */
app.use('/api/patients', PatientController)

/**
 * LISTENING APP
 */
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
