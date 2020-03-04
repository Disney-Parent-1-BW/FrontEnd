import React, { useEffect, useState } from "react"
import {
  Row,
  Col,
  Form,
  Button,
  Input,
  InputNumber,
  Select,
  Cascader,
} from "antd"
import axios from "axios"
import styled from "styled-components"

const AddRequestForm = () => {
  const [parks, setParks] = useState({
    epcot: [],
    magicKingdom: [],
    hollywoodStudios: [],
    animalKingdom: [],
    blizzardBeach: [],
    typhoonLagoon: [],
  })
  const generateTimeArray = () => {
    var x = 30 //minutes interval
    var times = [] // time array
    var tt = 0 // start time
    var ap = ["AM", "PM"] // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60) // getting hours of day in 0-24 format
      var mm = tt % 60 // getting minutes of the hour in 0-55 format
      times[i] =
        ("0" + (hh % 12)).slice(-2) +
        ":" +
        ("0" + mm).slice(-2) +
        ap[Math.floor(hh / 12)] // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x
    }

    return times
  }

  useEffect(() => {
    if (parks.magicKingdom.length < 1) {
      axios
        .get("https://disneyparksapi.firebaseio.com/orlando/parks/0.json")
        .then(res => {
          setParks({
            ...parks,
            magicKingdom: res.data.lands
              .filter(land => {
                if (land.attractions) {
                  return land
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
                        label: attraction.name,
                      }
                    }),
                  }
                }
              }),
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    if (parks.epcot.length < 1) {
      axios
        .get("https://disneyparksapi.firebaseio.com/orlando/parks/1.json")
        .then(res => {
          setParks({
            ...parks,
            epcot: res.data.lands
              .filter(land => {
                if (land.attractions) {
                  return land
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
                        label: attraction.name,
                      }
                    }),
                  }
                }
              }),
          })
        })
        .catch(err => console.log(err))
    }
    if (parks.hollywoodStudios.length < 1) {
      axios
        .get("https://disneyparksapi.firebaseio.com/orlando/parks/2.json")
        .then(res => {
          setParks({
            ...parks,
            hollywoodStudios: res.data.lands
              .filter(land => {
                if (land.attractions) {
                  return land
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
                        label: attraction.name,
                      }
                    }),
                  }
                }
              }),
          })
        })
        .catch(err => console.log(err))
    }
    if (parks.animalKingdom.length) {
      axios
        .get("https://disneyparksapi.firebaseio.com/orlando/parks/3.json")
        .then(res => {
          setParks({
            ...parks,
            animalKingdom: res.data.lands
              .filter(land => {
                if (land.attractions) {
                  return land
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
                        label: attraction.name,
                      }
                    }),
                  }
                }
              }),
          })
        })
        .catch(err => console.log(err))
    }
    if (parks.blizzardBeach.length < 1) {
      axios
        .get("https://disneyparksapi.firebaseio.com/orlando/parks/4.json")
        .then(res => {
          setParks({
            ...parks,
            blizzardBeach: res.data.attractions.map(attraction => {
              return {
                value: attraction.name,
                label: attraction.name,
              }
            }),
          })
        })
        .catch(err => console.log(err))
    }
    if (parks.typhoonLagoon.length < 1) {
      axios
        .get("https://disneyparksapi.firebaseio.com/orlando/parks/5.json")
        .then(res => {
          setParks({
            ...parks,
            typhoonLagoon: res.data.attractions.map(attraction => {
              return {
                value: attraction.name,
                label: attraction.name,
              }
            }),
          })
        })
        .catch(err => console.log(err))
    }
    console.log(parks)
  }, [parks])

  const onSubmit = (values) => {
    console.log({
        time: values.time,
        location: values.location.join(' > ')
    });
  }

  const options = [
    {
      value: "magicKingdom",
      label: "Magic Kingdom",
      children: parks.magicKingdom,
    },
    {
      value: "epcot",
      label: "Epcot",
      children: parks.epcot,
    },
    {
      value: "hollywoodStudios",
      label: "Hollywood Studios",
      children: parks.hollywoodStudios,
    },
    {
      value: "animalKingdom",
      label: "Animal Kingdom",
      children: parks.animalKingdom,
    },
    {
      value: "blizzardBeach",
      label: "Blizzard Beach",
      children: parks.blizzardBeach,
    },
    {
      value: "typhoonLagoon",
      label: "Typhoon Lagoon",
      children: parks.typhoonLagoon,
    },
  ]

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <HeaderRow justify="space-between">
        <Col>
          <h2>Add Request</h2>
        </Col>
        <Col>
          <Button htmlType="submit" size="large" type="primary">
            SAVE
          </Button>
        </Col>
      </HeaderRow>
      <Form.Item
        name="location"
        label="Location"
        rules={[
          {
            required: true,
            message: "Please select a location!",
          },
        ]}
      >
        <Cascader
          showSearch
          placeholder="Please select a location"
          options={options}
        >
          {/* {locations.map(location => {
            return (
              <Select.Option key={location} value={location}>
                {location}
              </Select.Option>
            )
          })} */}
        </Cascader>
      </Form.Item>
      <Form.Item
        name="time"
        label="Meeting Time"
        rules={[
          {
            required: true,
            message: "Please select a time",
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Please select a meeting time"
          style={{ width: "260px" }}
        >
          {generateTimeArray().map(time => {
            return (
              <Select.Option key={time} value={time}>
                {time}
              </Select.Option>
            )
          })}
        </Select>
      </Form.Item>
    </Form>
  )
}

const HeaderRow = styled(Row)`
  border-bottom: 1px solid darkgray;
  padding-bottom: 20px;
`

export default AddRequestForm
