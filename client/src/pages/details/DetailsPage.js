import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// custom components
import BasicParkInfo from './components/BasicParkInfo/BasicParkInfo';
import GeneralWeatherInfo from './components/GeneralWeatherInfo/GeneralWeatherInfo';
import DetailedWeatherForecast, {WeatherForecastItem} from './components/DetailedWeatherForecast/DetailedWeatherForecast'
import CampgroundsInfo, {CampgroundItem} from './components/CampgroundsInfo/CampgroundsInfo';

// utilities
import api from '../../utils/apiParkDetail';



class DetailsPage extends React.Component {
  // declaring state
  state = {
    npsBasicData: [],
    weatherForecast: [],
    campgrounds: []
  }

  code = this.props.match.params.parkcode;

  update_npsBasicData = (parkcode) => {
    parkcode = parkcode.toString();
    api.basicInfo(parkcode)
      .then(results => {
        this.setState({ npsBasicData: results.data })
      })
      .catch(error => console.log(error));
  }

  update_weatherForecast = (parkcode) => {
    parkcode = parkcode.toString();
    api.weatherInfo(parkcode)
      .then(results => {
        this.setState({ weatherForecast: results.data.properties.periods})
      })
      .catch(error => console.log(error))
  }

  update_campgrounds = (parkcode) => {
    parkcode = parkcode.toString();
    api.campgroundInfo(parkcode)
      .then(results => {
        if (results.data.data.length > 0) {
          this.setState({ campgrounds: results.data.data})
        }
        // some parks don't have campground, need to figure out how to account for that.
        else {
          this.setState({campgrounds: "No campgrounds found"})
        }
       
        // console.log(results.data.data);
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.update_npsBasicData(this.code);
    this.update_weatherForecast(this.code);
    this.update_campgrounds(this.code);
  }

  render() {
    return (
      <Row>
        {this.state.npsBasicData.length === 0 || this.state.weatherForecast.length === 0 
        || this.state.campgrounds.length === 0
         ?
          <Col md={12}>
            <h2>Loading...</h2>
          </Col>
          :
          <Col md={12}>
            <BasicParkInfo
             heading={this.state.npsBasicData.data[0].fullName}
             description={this.state.npsBasicData.data[0].description}
            />
            <GeneralWeatherInfo
              weatherInfo={this.state.npsBasicData.data[0].weatherInfo}
            />
            <DetailedWeatherForecast>
              {this.state.weatherForecast.map(weather=>{
                return(
                  <WeatherForecastItem 
                    name = {weather.name}
                    temperature={weather.temperature}
                    forecast={weather.detailedForecast}
                  />
                )
              })}

            </DetailedWeatherForecast>

            <CampgroundsInfo>
              {this.state.campgrounds.map(camp=>{
                return(
                  <CampgroundItem 
                    name={camp.name}
                    description={camp.description}
                  
                  />
                )
              })}
            </CampgroundsInfo>

            {console.log(this.state.campgrounds)}


          </Col>}
      </Row>
    )
  }

}

export default DetailsPage;