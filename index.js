const axios = require('axios')

const routes=["13.388860,52.517037","13.397634,52.529407","13.428555,52.523219"]
const getRoutes=(routes)=> routes.join(';')

axios.get(`http://router.project-osrm.org/route/v1/driving/${getRoutes(routes)}?overview=false`)
  .then(response => console.log("response! :", response.data.routes[0])) 

  