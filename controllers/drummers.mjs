export default function initDrummersController(db) {
  const index = (request, response) => {
    db.Drummers.findAll()
      .then((drummers) => {
        response.render('indexlist', { drummers });
      })
      .catch((error) => console.log(error));
  };
  return {
    index,
  };
}
