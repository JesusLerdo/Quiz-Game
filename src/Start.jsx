import { useNavigate } from 'react-router-dom'


function Start({setState}) {
  const Start = () => {
    setState(true);
  }
return (
  <div className='Start'>
    <h1 className='start' onClick={Start}>START GAME</h1>
  </div>
)
}

export default Start