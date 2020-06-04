var express = require('express');
var router = express.Router();
import LocationManager from '../location/LocationManager';
/* GET home page. */
router.get('/', function(req, res, next) {
  let locationManager = new LocationManager();

  locationManager.getLocations(res);
});

module.exports = router;
