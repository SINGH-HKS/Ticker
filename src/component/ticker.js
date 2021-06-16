import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { save } from '../action/index'

const url = 'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD,tLTCUSD,tXMRUSD'
class Ticker extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        
        this.interval = setInterval(() => this.request(), 1000);
        
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    request = async () => {
        try {
            const req = await fetch(url)
            console.log(req);
            const response = await req.json()
            console.log(response);
            console.log(`STATUS ${req.status} - ${JSON.stringify(response)}`)
            this.props.save(response)
        }
        catch (err) {
            console.log(err)
        }
    }
   

    render() {
        return (
            <div>
                <div>

                    <div className='jumbotron ' style={{ alignContent: 'center' }} >
                        <div className='row'>
                            <div class='display-4  offset-5' style={{}}> Source- Bitfinex
                            </div>
                        </div>

                    </div>


                </div>
                <div className='container-fluid' style={{ marginTop: 15, width: '50%', alignSelf: 'center' }}>
                   
                    {this.props.SAVED_DATA.map(data => {
                        if(data[6]<0){
                           
                        return (
                            <div>
                            <div class="card">
                                <div class="card-header" style={{backgroundColor:'black',color:'white'}}>
                                {data[0].slice(1,)}
                                <span style={{ marginLeft: '600px'}}>{data[7].toFixed(2)}</span>
                                </div>
                                <div class="card-body" style={{backgroundColor:'black',color:'grey'}}>
                                VOL <span style={{ color: 'white' }}>{data[9].toFixed(2)} </span>
                                        <span style={{ color: 'red',marginLeft:'565px' }}>{data[5].toFixed(2)} | ▼ {(data[6] * 100).toFixed(2)}%</span>
                                        
                                </div>
                                <div class="card-footer" style={{backgroundColor:'black',color:'grey'}}>
                                LOW <span style={{ color: 'white' }}>{data[10]}</span>
                                        <span  style={{ marginLeft: 50, color: 'grey',marginLeft:'575px' }}>HIGH <span style={{ color: 'white' }}>{data[9]}</span></span>
                                </div>
                            </div>
                            </div>
                        )
                        }
                        else{
                            
                            return (
                                <div>
                                <div class="card">
                                    <div class="card-header" style={{backgroundColor:'black',color:'white'}}>
                                    {data[0].slice(1,)}
                                    <span style={{ marginLeft: '600px'}}>{data[7].toFixed(2)}</span>
                                    </div>
                                    <div class="card-body" style={{backgroundColor:'black',color:'grey'}}>
                                    VOL <span style={{ color: 'white' }}>{data[9]} </span>
                                            <span style={{ marginLeft: 30, color: 'green',marginLeft:'575px' }}>{data[5].toFixed(2)} | ▲ {(data[6] * 100).toFixed(2)}%</span>
                                            {console.log(this.color1)}
                                    </div>
                                    <div class="card-footer" style={{backgroundColor:'black',color:'grey'}}>
                                    LOW <span style={{ color: 'white' }}>{data[10]}</span>
                                            <span  style={{ marginLeft: 50, color: 'grey',marginLeft:'575px' }}>HIGH <span style={{ color: 'white' }}>{data[9]}</span></span>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    })}


                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   
    return {
        SAVED_DATA: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ save }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Ticker)