import Link from 'next/link'
import React, { Component, Fragment, useEffect, useState } from 'react'
import axios from 'axios'

export default class extends Component {
    constructor(props) {
      
      super(props);
        this.state = {
          data: [{}]
                }
       
        }

        componentDidMount() {
          const self = this;
          axios.get('https://headless.mali-car.hr/wp-json/hme/v1/menus/2').then(res => 
          {
          
          self.setState({data: res.data})
          });

          

        }     
        

    render() {
    
      return (
       
       <Fragment>
          <ul>
         {this.state.data.map((result, index) => {
           let slug = result.url;
           
           console.log(slug)
              return (
                
                <li key={index} className={result.classes}>
                  
                  <Link href={ `/pages/${ result.post_name }` }>
                  <a href={ `/pages/${  result.post_name}` }>
                  {result.title}</a></Link>
                  </li>
                
               )
            
          
           
         
        })}
        </ul>
        </Fragment>
      )
    }
  }
