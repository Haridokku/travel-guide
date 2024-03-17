import './index.css'

const PackageItem = props => {
  const {details} = props
  const {imageUrl, name, description} = details
  return (
    <li className="listItem">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="head">{name}</h1>
      <p className="describe">{description}</p>
    </li>
  )
}
export default PackageItem
