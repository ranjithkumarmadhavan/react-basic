import profilePic from './assets/profile.png'

function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Madras Programmer</h2>
            <p className='card-text'>I make youtube videos and play chess</p>
        </div>
    )

}

export default Card