export interface AAWeatherErrorDetail{
    code:       string;
    message:    string;
}

export class AAWeatherException extends Error{
    errors: AAWeatherErrorDetail[];
    constructor(errors: AAWeatherErrorDetail[]){
        super();
        this.errors=errors;
    }
}
