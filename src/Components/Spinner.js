import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (

        <div class="d-flex justify-content-center">
         <img src={loading} alt="loading" />
         </div>
    )
  }
}