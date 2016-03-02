import React, { Component } from 'react'
import AudioControls from './AudioControls'
import Progress from './Progress'
import './Card.css'

export default class Card extends Component {
  render () {

    return <div className='Card Card-isClosed'>
      <div className='Card-inner'>

        <div className='Card-content'>
          <div className='Card-title'>
            <AudioControls />
            {this.props.children}
            <Progress />
          </div>
        </div>

      </div>
    </div>
  }
}

module.exports = Card