import React from "react";

interface Props {
    label:      string;
    value:      string;
    imgUrl?:    string;
}

export class LabelValueRow extends React.Component<Props>{
    
    public render(){
        var addPadding ={
            padding: '0 10px'
        }
    
        return(
            <div className="form-group row" style={addPadding}>
                <label className="col-sm-4 col-form-label">{this.props.label}</label>
                <div className="col-sm-8">{this.props.value}
                    {this.props.imgUrl  && <img src={this.props.imgUrl}/>}
                </div>
            </div>
        );
    }
}