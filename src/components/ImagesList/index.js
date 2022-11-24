import './index.css'

const ImagesList = props => {
  const {imageDetails, onChangeImageButton} = props
  const {id, thumbnailUrl} = imageDetails
  const onClickImage = () => {
    onChangeImageButton(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="image-logo" />
      </button>
    </li>
  )
}

export default ImagesList
