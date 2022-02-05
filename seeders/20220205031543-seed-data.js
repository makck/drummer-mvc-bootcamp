module.exports = {
  async up(queryInterface, Sequelize) {
    const drummersList = [
      {
        name: 'ck',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'ben',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('drummers', drummersList);

    const eventsList = [
      {
        date_of_event: new Date('2022-01-01'),
        name: 'Party 1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        date_of_event: new Date('2022-01-02'),
        name: 'Party 2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('events', eventsList);

    const reservationsList = [
      {
        drummer_id: 1,
        event_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 2,
        event_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('reservations', reservationsList);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drummers', null, {});
    await queryInterface.bulkDelete('reservations', null, {});
    await queryInterface.bulkDelete('events', null, {});
  },
};
