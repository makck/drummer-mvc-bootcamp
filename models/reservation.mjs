export default function initReservationModel(sequelize, DataTypes) {
  return sequelize.define(
    'reservation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      drummer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drummers',
          key: 'id',
        },
      },
      event_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'events',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
