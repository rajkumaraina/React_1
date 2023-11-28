import './index.css'
const FinalElement = props => {
  const {matter} = props
  const {headerText, description, className} = matter
  return (
    <li className={className}>
      <div className="cont">
        <h1 className="Heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default FinalElement
