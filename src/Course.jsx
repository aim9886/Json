import React, { Component } from 'react'
// import Course from './Course';

class course extends Component {
    render(){
        let payloadData = this.props.data
        return (
            <div className='mainBlock'>
                <center>
                    <div>
                        <img src={payloadData[0].photo} alt=""/>
                        <h3>{payloadData[0].course_name}</h3>
                        <p>{payloadData[0].trainer_name}</p>
                        <p>{payloadData[0].duration}</p>
                        <ol>
                            {payloadData[0].languages.map((x)=>{
                                return <li>{x}</li>
                            })}
                        </ol>
                    </div>
                </center>

                <center>
                    <div>
                        <img src={payloadData[1].photo} alt=""/>
                        <h3>{payloadData[1].course_name}</h3>
                        <p>{payloadData[1].trainer_name}</p>
                        <p>{payloadData[1].duration}</p>
                        <ol>
                            {payloadData[1].languages.map((x)=>{
                                return <li>{x}</li>
                            })}
                        </ol>
                    </div>
                </center>

                <center>
                    <div>
                        <img src={payloadData[2].photo} alt=""/>
                        <h3>{payloadData[2].course_name}</h3>
                        <p>{payloadData[2].trainer_name}</p>
                        <p>{payloadData[2].duration}</p>
                        <ol>
                            {payloadData[2].languages.map((x)=>{
                                return <li>{x}</li>
                            })}
                        </ol>
                    </div>
                </center>
            </div>
        )
    }
}

export default course