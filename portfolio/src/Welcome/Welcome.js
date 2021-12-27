import './Welcome.css'
import {BsChevronDoubleDown} from 'react-icons/bs'
const Welcome = props => {
    console.log(props);

    const handleOnClickDownArrow = () => {
        props.projectRef.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="heading">
            <div className='text'>
                <div className='welcome'>
                    Welcome 
                </div>
                <a className='downarrow' onClick={handleOnClickDownArrow}>
                    <BsChevronDoubleDown size={"40px"}/>
                </a>
            </div>
        </div>
    )
}

export default Welcome;