import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initDrummerModel from './drummer.mjs';
import initReservationModel from './reservation.mjs';
import initEventModel from './event.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.Drummers = initDrummerModel(sequelize, Sequelize.DataTypes);
db.Events = initEventModel(sequelize, Sequelize.DataTypes);
db.Reservations = initReservationModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
