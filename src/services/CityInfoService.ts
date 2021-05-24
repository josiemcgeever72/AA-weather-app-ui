import { APIService } from './APIService';

export class CityInfoService {
    private cityInfoPath:   string;
    private apiService:     APIService;

    constructor(){
        this.cityInfoPath   = process.env.REACT_APP_AA_WEATHER_API_BASE_URL + 'weather';
        this.apiService     = new APIService();
    }
    
    public getCityInfo(name:string){
        return this.apiService.getData(this.cityInfoPath, name);
    }
}