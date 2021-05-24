import React                    from "react";
import { AAWeatherErrorDetail } from "../exceptions/AAWeatherExecption";

interface Props {
    errors: AAWeatherErrorDetail[];
}

export class ErrorDisplay extends React.Component<Props>{
 
    public render() {
        return (
            <>
            {this.props.errors.length > 0 && 
                <div className="container">
                    <div className="alert alert-danger show" >
                        <ul>
                            {this.props.errors.map((err,i) => <li key={i}>{err.message}</li>)}
                        </ul>
                    </div>
                </div>
            }
            </>
        );

    }
}