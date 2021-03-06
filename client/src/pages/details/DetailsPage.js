import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
// custom components
import BasicParkInfo from './components/BasicParkInfo/BasicParkInfo';
import GeneralWeatherInfo from './components/GeneralWeatherInfo/GeneralWeatherInfo';
import DetailedWeatherForecast, { WeatherForecastItem } from './components/DetailedWeatherForecast/DetailedWeatherForecast'
import CampgroundsInfo, { CampgroundItem, NoCampgroundsFound } from './components/CampgroundsInfo/CampgroundsInfo';
import LoadingSpinner from '../../shared_components/LoadingSpinner/LoadingSpinner';

// utilities
import api from '../../utils/apiParkDetail';
// styling
import './detailsPage.css';



class DetailsPage extends React.Component {
  // declaring state
  state = {
    npsBasicData: [],
    weatherForecast: [],
    campgrounds: [],
    campgroundsExist: null
  }

  // get the park code from params.
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
        this.setState({ weatherForecast: results.data.properties.periods.slice(0, 7) })
      })
      .catch(error => console.log(error))
  }

  update_campgrounds = (parkcode) => {
    parkcode = parkcode.toString();
    api.campgroundInfo(parkcode)
      .then(results => {
        if (results.data.data.length > 0) {
          this.setState(
            {
              campgrounds: results.data.data,
              campgroundsExist: true
            }
          )
        }
        // some parks don't have campground, need to account for that.
        else {
          this.setState({ campgroundsExist: false })
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
      <Row className="detailsPage-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Details about {this.code}</title>
        </Helmet>

        {this.state.npsBasicData.length === 0 || this.state.weatherForecast.length === 0 || this.state.campgroundsExist === null
          ?
          <Col className={"spinnerHolder"} md={12}>
            <LoadingSpinner></LoadingSpinner>
          </Col>
          :
          <Col md={12}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Details about {this.state.npsBasicData.data[0].fullName}</title>
            </Helmet>
            <BasicParkInfo
              heading={this.state.npsBasicData.data[0].fullName}

            />
            <GeneralWeatherInfo
              weatherInfo={this.state.npsBasicData.data[0].weatherInfo}
              parkDescription={this.state.npsBasicData.data[0].description}
            />
            <DetailedWeatherForecast>
              {this.state.weatherForecast.map(weather => {
                return (
                  <WeatherForecastItem
                    name={weather.name}
                    temperature={weather.temperature}
                    forecast={weather.detailedForecast}
                  />
                )
              })}

            </DetailedWeatherForecast>

            {this.state.campgroundsExist === true ?
              <CampgroundsInfo>
                {this.state.campgrounds.map(camp => {
                  return (
                    <CampgroundItem
                      name={camp.name}
                      description={camp.description}
                      totalsites={camp.campsites.totalsites}
                      tentsites={camp.campsites.tentonly}
                      electrical={camp.campsites.electricalhookups}
                      potablewater={camp.amenities.potablewater[0]}
                      showers={camp.amenities.showers[0]}
                      cellservice={camp.amenities.cellphonereception}

                    />

                  )
                })}
              </CampgroundsInfo>

              :
              <NoCampgroundsFound></NoCampgroundsFound>
            }
         
          </Col>}
      </Row>
    )
  }

}

export default DetailsPage;