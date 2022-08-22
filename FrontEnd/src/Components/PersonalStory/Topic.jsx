const Topic = ({props}) => {
const columns = Object.keys(props)
  return (
    columns.forEach(
      col =>
        <div>
          props.col
        </div>
    )
  )
}

export default Topic;