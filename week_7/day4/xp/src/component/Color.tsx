import React from "react";
import Child from "./Child";
interface ColorState {
  favoriteColor: string
  show: boolean
}

class Color extends React.Component<{}, ColorState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      favoriteColor: "red",
      show: true
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
  setTimeout(() => {
    this.setState({ favoriteColor: "yellow" })
  }, 3000)
}
componentDidUpdate() {
  console.log("after update")
}
  changeColor = () => {
    this.setState({ favoriteColor: "blue" })
  }
getSnapshotBeforeUpdate() {
  console.log("in getSnapshotBeforeUpdate")
  return null
}
deleteChild = () => {
    this.setState({ show: false })
  }
  render() {
    return (
        
      <div className="flex flex-col items-center gap-8 mt-10">
    
        <p>My favorite color is: {this.state.favoriteColor}</p>

        <button
          className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition"
          onClick={this.changeColor}
        >
          Change color
        </button>


{this.state.show && <Child />}

        <button
          className="px-6 py-2 bg-red-500 text-white rounded-full"
          onClick={this.deleteChild}
        >
          Delete
        </button>
      </div>
    )
  }
}

export default Color;