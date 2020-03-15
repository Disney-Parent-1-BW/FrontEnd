import axios from "axios";
import { ADD_PARK } from "../reducers/parksReducer";

const parks = ["blizzardBeach", "typhoonLagoon"];

export const addParkData = (park, query) => dispatch => {
  if (parks.includes(park)) {
    axios
        .get(query)
        .then(res => {
            dispatch({
                type: ADD_PARK,
                payload: {
                    name: park,
                    data: res.data.attractions.map(attraction => {
                        return {
                            value: attraction.name,
                            label: attraction.name,
                        }
                    })
                }
            })
        })
        .catch(err => console.log(err))
  } else {
    axios
      .get(query)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: ADD_PARK,
          payload: {
            name: park,
            data: res.data.lands
              .filter(land => {
                if (land.attractions) {
                  return land;
                }
              })
              .map(land => {
                if (land.attractions) {
                  return {
                    value: land.name,
                    label: land.name,
                    children: land.attractions.map(attraction => {
                      return {
                        value: attraction.name,
                        label: attraction.name
                      };
                    })
                  };
                }
              })
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
