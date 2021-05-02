export const ADD_RUN = 'ADD_RUN';
export const DELETE_RUN = 'DELETE_RUN';
export const RESET_RUNS = 'RESET_RUNS';
import * as firebase from 'firebase';
// import '@firebase/firestore';
import firestore from '@react-native-firebase/firestore';

export const addRunAction = newRun => {
  //    var route = [];

  var lat = 0;
  var long = 0;
  var koor = {latitude: 0, longitude: 0};

  var polilen = [];
  //build route
  // for (i = 0; i < newRun.route.length; i++){
  //     geopoint = newRun.route[i]
  //     lat += geopoint.latitude;
  //     long += geopoint.longitude;

  // //    route.push({latitude: geopoint.latitude, longitude: geopoint.longitude});
  // }

  //get average latitude and average longitude to determine where to center the map
  // if (newRun.route.length != 0) {
  //     lat = lat /newRun.route.length;
  //     long /= newRun.route.length;
  // }

  console.log(
    'Route  in RunLogAction adalah = ' + JSON.stringify(newRun.route),
  );
  newRun.route.forEach(element => {
    koor.latitude = element.wc;
    koor.longitude = element.Rc;

    polilen.push(koor)
  });
  console.log('CHEK array <<<<< = ' + JSON.stringify(polilen));
  // console.log('Route long in RunLogAction adalah = ' +  long)

  return {
    type: ADD_RUN,
    id: newRun.id,
    note: newRun.note,
    time: newRun.time,
    distance: newRun.distance,
    pace: newRun.pace,
    calories: newRun.calories,
    start_time: newRun.start_time.toString(),
    end_time: newRun.end_time.toString(),
    route: polilen,
    lat: newRun.route[0].wc,
    long: newRun.route[0].Rc,
  };
};

export const deleteRunAction = id => {
  return {
    type: DELETE_RUN,
    id: id,
  };
};

export const resetRunsAction = () => {
  return {
    type: RESET_RUNS,
  };
};
