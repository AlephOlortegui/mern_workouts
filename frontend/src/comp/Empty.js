import SRC from '../imgs/dead_pool_nobg.png'
const Empty = () => {
  return (
    <div className='empty'>
        <img src={SRC} alt="rick"  width={600}/>
        <h1>No <br /> workouts yet</h1>
    </div>
  )
}

export default Empty