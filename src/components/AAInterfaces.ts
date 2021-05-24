export interface CityInfo{
    name:           string;
    location:       Location;
    astronomy:      Astronomy;
    weather:        Weather;
}

export interface Weather{
    tempInCelius:   string;
    description:    string;
    iconUrl:        string;
}

export interface Location{
    country:        string;
    region:         string;
    latitude:       string;
    longitude:      string; 
    localDateTime:  string;

}

export interface Astronomy{
    sunrise:        string;
    sunset:         string;
    moonPhase:      string;
}

export interface KeyValue{
    key:            string;
    value:          string;
}