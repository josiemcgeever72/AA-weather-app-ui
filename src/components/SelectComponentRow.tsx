import React        from "react";
import { labels }   from "../util/UIText";
import { KeyValue } from "./AAInterfaces";

interface Props {
    label:                  string;
    value:                  string;
    id:                     string;
    options:                KeyValue[];
    includePleaseSelect?:   boolean;
    onChange:               (value:string)=>void;
}

export class SelectComponentRow extends React.Component<Props>{
    
    constructor(props: Props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    };
    
    private handleOnChange (event: React.FormEvent<HTMLSelectElement>){
        this.props.onChange( event.currentTarget.value)
    }

    public static defaultProps:Partial<Props> = {
        includePleaseSelect: true
    };
    public render(){
        var addPadding ={
            padding: '10px'
        }
        return(
            <div className="form-group row" style={addPadding}>
                <label className="col-sm-4 col-form-label" htmlFor={this.props.id}>{this.props.label}</label>
                <div className="col-sm-8">
                    <select name={this.props.id}
                            id={this.props.id}
                            value={this.props.value}
                            className='form-control'
                            onChange={this.handleOnChange}>
                        {this.props.includePleaseSelect && 
                            <option value="">{labels.ddPleaseSelect}</option>
                        }
                        {this.props.options.map(opt =>
                            <option key={opt.key}>{opt.value}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}