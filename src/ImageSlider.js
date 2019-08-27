// your ImageSlider code here!
import React from 'react'
class ImageSlider extends React.Component {

constructor(){
  super()
  this.state = {
    currentSlideIndex: 0
  }
}

// currentSlide = () => {
//   const newCount = this.state.currentSlideIndex + 1
//   this.setState({
//     currentSlideIndex: newCount
//   })
// }

  render () {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}

export default ImageSlider
