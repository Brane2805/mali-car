import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {
    constructor(props) {
      super(props);
        this.state = {
          data: [{}]
                }
       
        }
        componentDidMount() {
          //get request
      axios.get('https://headless.mali-car.hr/wp-json/hme/v1/menus/2').then(res => 
      {
      
      this.setState({data: res.data});
         }); 

        }
              
      
         
      
  
    render() {
         
      return (
       
       <Fragment>
          <ul>
         {this.state.data.map((result, index) => {
         
            return (
              <li key={index}>{result.title}</li>
              )
         
        })}
        </ul>
        </Fragment>
      )
    }
  }
