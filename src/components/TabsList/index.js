import './index.css'

const TabsList = props => {
  const {tabDetails, isTabActive, onClickTabItem} = props
  const {displayText, tabId} = tabDetails
  const displayTabActive = isTabActive ? 'active-button' : ''
  const onClickChangeTab = () => {
    onClickTabItem(tabId)
  }
  return (
    <li className="tab-items">
      <button
        type="button"
        className={`tab-button ${displayTabActive}`}
        onClick={onClickChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
