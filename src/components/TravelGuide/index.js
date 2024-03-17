import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageItem from '../PackageItem'
import './index.css'

class TravelGuide extends Component {
  state = {isLoading: false, packagesList: []}

  componentDidMount() {
    this.renderApiDetails()
  }

  renderApiDetails = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedList = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      console.log(updatedList)
      this.setState({packagesList: updatedList, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loaderContainer">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {packagesList} = this.state
    return (
      <ul className="unorderedList">
        {packagesList.map(each => (
          <PackageItem key={each.id} details={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="appContainer">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? this.renderLoadingView() : this.renderSuccessView()}
      </div>
    )
  }
}

export default TravelGuide
