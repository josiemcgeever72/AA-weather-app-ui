import React                                            from "react";
import moment                                           from "moment";
import { CityInfo }                                     from "../components/AAInterfaces";
import { ErrorDisplay }                                 from "../components/ErrorDisplay";
import {LabelValueRow}                                  from "../components/LabelValueRow"
import { SelectComponentRow }                           from "../components/SelectComponentRow";
import { AAWeatherErrorDetail, AAWeatherException }     from "../exceptions/AAWeatherExecption";
import { CityInfoService }                              from "../services/CityInfoService";
import { labels }                                       from "../util/UIText";

interface State{
    cityList:       string[];
    selectedCity:   string;
    cityFound:      boolean;
    cityInfo:       CityInfo;
    errors:         AAWeatherErrorDetail[];
}
interface Props{}

export class CityInfoPage extends React.Component<Props, State>{
    private cityInfoService: CityInfoService

    constructor(props: Props){
        super(props);
        this.state ={   cityList: ['Beijing', 'Nairobi', 'New York', 'Mumbai', 'Paris', 'Sydney'],
                        selectedCity:   '',
                        cityFound: false,
                        cityInfo: { location:   {country: '', region: '', latitude: '', longitude: '', localDateTime: ''} ,
                                    weather:    {description: '', iconUrl: '', tempInCelius:'' },
                                    astronomy:  {sunrise: '', sunset:'', moonPhase: ''} ,
                                    name: ''},
                        errors: []
        };
        
        this.cityInfoService        = new CityInfoService();
        this.getWeatherDisplayText  = this.getWeatherDisplayText.bind(this);
        this.citySelected           = this.citySelected.bind(this);
    }

    private citySelected( name: string){
        this.setState({ selectedCity: name, cityFound: false, errors: []})
        this.cityInfoService.getCityInfo(name).then((cityInfo: CityInfo)            => this.setState({cityInfo: cityInfo, cityFound: true}))
                                              .catch ((errObj: AAWeatherException)  => this.setState({errors: errObj.errors}));
    }   

    private getWeatherDisplayText (){
        return this.state.cityInfo.weather.tempInCelius + '\u00b0C ' + '(' + this.state.cityInfo.weather.description + ') ' 
    }

    public render(){
        return(
            <>
            <ErrorDisplay errors={this.state.errors}/>
            <div className="form-group border" >
                <SelectComponentRow label       = {labels.city}           value={this.state.selectedCity}
                                    onChange    = {this.citySelected}      
                                    options     = {this.state.cityList.map( city => ({key: city, value:city}))}  />
            </div>
            {this.state.cityFound &&
                <div className="form-group border" >
                <LabelValueRow label={labels.weather}       value={this.getWeatherDisplayText()}                 imgUrl={this.state.cityInfo.weather.iconUrl}/>              
                <LabelValueRow label={labels.region}        value={this.state.cityInfo.location.region}/>
                <LabelValueRow label={labels.country}       value={this.state.cityInfo.location.country}/>
                <LabelValueRow label={labels.latitude}      value={this.state.cityInfo.location.latitude}/>
                <LabelValueRow label={labels.longitude}     value={this.state.cityInfo.location.longitude}/>
                <LabelValueRow label={labels.dateAndTime}   value={moment(this.state.cityInfo.location.localDateTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm')}/>
                <LabelValueRow label={labels.sunrise}       value={moment(this.state.cityInfo.astronomy.sunrise, 'HH:mm:ss').format('HH:mm A')}/>
                <LabelValueRow label={labels.sunset}        value={moment(this.state.cityInfo.astronomy.sunset,  'HH:mm:ss').format('HH:mm A')}/>
                <LabelValueRow label={labels.moonPhase}     value={this.state.cityInfo.astronomy.moonPhase}/>
                </div>
            }
            </>
        )
    }
}