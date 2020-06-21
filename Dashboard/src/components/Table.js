import React, { Component } from "react";
import firebase from "../Firebase";
import { Table, Tag, Space } from "antd";
import moment from 'moment'
import Visualise from './Visualise'

class Tabled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],

      isLoading: true,
    };

  }
  componentDidMount() {
    var tempAct = [];

    firebase
      .database()
      .ref("/Activites/-MAI3y9hAq5XloWo-dVQ/activities/activities/")
      .on("value", (snapshot) => {
        let data = snapshot.val();
        for (let act in data) {
          let tl = data[act].time_entries.length;
          var startDate = moment(data[act].time_entries[0].start_time, 'YYYY-M-DD HH:mm:ss')
            var endDate = moment(data[act].time_entries[tl - 1].end_time, 'YYYY-M-DD HH:mm:ss')
            var secondsDiff = endDate.diff(startDate, 'seconds')
          tempAct.push({
            id: data[act].id,
            name: data[act].name,
            start_time: data[act].time_entries[0].start_time,
            end_time: data[act].time_entries[tl - 1].end_time,
            time_spent: secondsDiff
          });
        }

        this.setState({ activities: tempAct, isLoading: false });
      });
  }

  render() {
    console.log(this.state);
    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        key: "name",
      },
      {
        title: "Application",
        dataIndex: "name",
        key: "app",
      },
      {
        title: "Start date",
        dataIndex: "start_time",
        key: "s",
      },
      {
        title: "End date",
        dataIndex: "end_time",
        key: "e",
      },
      {
        title: "Time spent(seconds)",
        dataIndex: "time_spent",
        key: "time",
      },
    ];
    var data = [];
    this.state.activities.map((act, index) => {
      data.push({
        id: act.id,
        name: act.name,
        start_time: act.start_time,
        end_time: act.end_time,
        time_spent:act.time_spent,
        key: index,
        
      });
    });

    var dataload = <Table columns={columns} dataSource={data} />;

    return <div>{this.state.isLoading ? "PLease wait" : dataload}
          <Visualise data = {this.state.activities} /> 
    </div>;
  } 
}

export default Tabled;
