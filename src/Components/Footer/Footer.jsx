import './Footer.scss'
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className=' p-5'>
      <h1 className='dancing-script text-2xl text-center'>Weather Predictor</h1>
      <p className='text-center'>GenRio &copy; {date} | All Rights Reserved</p>
    </div>
  )
}

export default Footer