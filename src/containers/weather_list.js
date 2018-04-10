import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color="red" />
        </td>
        <td>
          <Chart data={humidities} color="orange" />
        </td>
        <td>
          <Chart data={pressures} color="blue" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  //when key value identical  same as return {weather: weather} where param is state.weather (no brackets)
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
