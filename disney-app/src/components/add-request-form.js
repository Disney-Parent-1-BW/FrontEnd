import React, { useEffect, useState } from "react"
import {
  Row,
  Col,
  Form,
  Button,
  Select,
  Cascader,
} from "antd"
import axios from "axios"
import { connect } from 'react-redux';
import { addParkData } from '../actions/parkActions';
import AxiosWithAuth from '../components/axiosWithAuth';
import styled from "styled-components"
import { useHistory } from "react-router-dom";

let i = 0;

const AddRequestForm = (props) => {
  const [parks, setParks] = useState({
    epcot: [],
    magicKingdom: [],
    hollywoodStudios: [],
    animalKingdom: [],
    blizzardBeach: [],
    typhoonLagoon: [],
  })
  const history = useHistory();

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
    props.addParkData('magicKingdom', 'https://disneyparksapi.firebaseio.com/orlando/parks/0.json');
    props.addParkData('epcot', 'https://disneyparksapi.firebaseio.com/orlando/parks/1.json');
    props.addParkData('hollywoodStudios', 'https://disneyparksapi.firebaseio.com/orlando/parks/2.json');
    props.addParkData('animalKingdom', 'https://disneyparksapi.firebaseio.com/orlando/parks/3.json');
    props.addParkData('blizzardBeach', 'https://disneyparksapi.firebaseio.com/orlando/parks/4.json');
    props.addParkData('typhoonLagoon', 'https://disneyparksapi.firebaseio.com/orlando/parks/5.json');
  }, [])

  const onSubmit = (values) => {
    
    const postValues = {
        location: values.location.join(' > '),
        time: values.time,
        
    };
    AxiosWithAuth().post(`https://disney-kids.herokuapp.com/api/requests`, postValues)
    .then(res => {
      console.log(res);
      history.push('/requests')
    })
    .catch(err => {
      console.log(err);
    })

  }

  const options = [
    {
      value: "magicKingdom",
      label: "Magic Kingdom",
      children: props.magicKingdom,
    },
    {
      value: "epcot",
      label: "Epcot",
      children: props.epcot,
    },
    {
      value: "hollywoodStudios",
      label: "Hollywood Studios",
      children: props.hollywoodStudios,
    },
    {
      value: "animalKingdom",
      label: "Animal Kingdom",
      children: props.animalKingdom,
    },
    {
      value: "blizzardBeach",
      label: "Blizzard Beach",
      children: props.blizzardBeach,
    },
    {
      value: "typhoonLagoon",
      label: "Typhoon Lagoon",
      children: props.typhoonLagoon,
    },
  ]

  return (
    <Form layout="vertical" onFinish={(onSubmit)}>
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

const mapStateToProps = (state) => {
  console.log(state.parksReducer);
  return state.parksReducer
}

export default connect(mapStateToProps, {
  addParkData
})(AddRequestForm);
