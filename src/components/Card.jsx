const Card = (props) => {
  return (
    <div>
        <a href={props.user.url} target='_blank' rel='noopener noreferrer'>
          <div className='h-40 w-44 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={props.user.download_url} alt="" />
          </div>
          <h2>{props.user.author}</h2>
        </a>

    </div>
  )
}

export default Card