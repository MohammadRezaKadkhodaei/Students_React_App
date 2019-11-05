import React, {useState} from 'react';
import MenuItems from '../MenuItems/MenuItems';
import Button from '../../../component/UI/button/button'
import Modal from '../../../component/UI/Modal/Modal';
import SignIn from '../../../component/User/SignIn/SignIn';
import './Toolbar.css';
const Toolbar = () =>{
    const [showModal,setShowModal] = useState(false)
    const modalHandler = () =>{
        setShowModal(true)
    }
    const modalClosed = () =>{
        setShowModal(false)
    }
    return(
        <header className="Toolbar">
            <div>kadkhodaei</div>
            <nav>
                <MenuItems/>
            </nav>
            <div>
                <Button btnType="Success" clicked={modalHandler}>ورود</Button>
            </div>
                <Modal show={showModal} modalClosed={modalClosed}>
                    <SignIn/>
                </Modal>
        </header>
    )

}
export default Toolbar;