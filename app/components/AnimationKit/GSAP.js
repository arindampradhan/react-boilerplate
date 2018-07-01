import React from 'react'
import ReactDOM from 'react-dom'
import TweenMax from 'gsap'

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this)
  }

  componentWillAppear(callback) {
    TweenMax.from(this.el, 1, { alpha: 0, onComplete: callback })
  }

  componentDidAppear() {
    console.log('in')
  }

  componentWillLeave(callback) {
    TweenMax.to(this.el, 0, { alpha: 0, onComplete: callback })
  }

  componentDidLeave() {
    console.log('out')
  }

  render() {

    return (
      <div className="page page--home">
        <div className="page__inner">
          asdlkdsajklasjkljsadlskdjlads
        </div>
      </div>
    )
  }
}

export default Home
