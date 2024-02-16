import { Modal, ModalBody } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";
import { putData } from "../utils/ApiService";

const Profile = () => {

    const [isModalActive, setIsModalActive] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalChildren, setModalChildren] = useState("");

    const oldPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const repeatNewPasswordRef = useRef(null);
    const passwordsDontMatchRef = useRef(null);

    const { username } = useAuth();

    const handlePasswordChange = async () => {
        const oldPassword = oldPasswordRef.current.value;
        const newPassword = newPasswordRef.current.value;
        const repeatNewPassword = repeatNewPasswordRef.current.value;

        if(newPassword !== repeatNewPassword) {
            newPasswordRef.current.classList.add("is-invalid");
            repeatNewPasswordRef.current.classList.add("is-invalid");
            passwordsDontMatchRef.current.textContent = "Passwords must match";
            
            setTimeout(() => {
                newPasswordRef.current.classList.remove("is-invalid");
                repeatNewPasswordRef.current.classList.remove("is-invalid");
                passwordsDontMatchRef.current.textContent = "";
            }, 3000)

        } else if(oldPassword === newPassword) {

            oldPasswordRef.current.classList.add("is-invalid");
            newPasswordRef.current.classList.add("is-invalid");
            repeatNewPasswordRef.current.classList.add("is-invalid");
            passwordsDontMatchRef.current.textContent = "Old and new passwords cannot be the same";

            setTimeout(() => {

                oldPasswordRef.current.classList.remove("is-invalid");
                newPasswordRef.current.classList.remove("is-invalid");
                repeatNewPasswordRef.current.classList.remove("is-invalid");
                passwordsDontMatchRef.current.textContent = "";

            }, 3000)

        } else {

            const url = `${process.env.REACT_APP_BACKEND_URL}/api/User/change-password`;
            const data = {
                oldPassword,
                newPassword
            };

            const response = await putData(url, data, false);

            if(response && response.ok) {
                setIsModalActive(false);
            } else {
                oldPasswordRef.current.classList.add("is-invalid");
                passwordsDontMatchRef.current.textContent = "Wrong old password";

                setTimeout(() => {
                    oldPasswordRef.current.classList.remove("is-invalid");
                    passwordsDontMatchRef.current.textContent = "";
                }, 3000);
            }
        }
    }

    const handleClickChangePassword = () => {

        setModalTitle("Change your password");

        setModalChildren(

            <div className="w-100">
                <div className="text-center text-danger">
                    <span ref={passwordsDontMatchRef}></span>
                </div>

                <label htmlFor="old-password">Old password:</label>
                <input type="password" 
                        id="old-password" 
                        className="mb-4 form-control"
                        ref={oldPasswordRef} />

                <label htmlFor="new-password">New password:</label>
                <input type="password" 
                        id="new-password" 
                        className="mb-4 form-control"
                        ref={newPasswordRef} />

                <label htmlFor="repeat-new-password">Repeat new password:</label>
                <input type="password" 
                        id="repeat-new-password" 
                        className="mb-4 form-control"
                        ref={repeatNewPasswordRef} />

                <div className="d-flex justify-content-center w-100">
                    <button className="btn btn-warning" onClick={handlePasswordChange}>Change password</button>
                </div>

            </div>
        );

        setIsModalActive(true);
    }

    const handleClickDeleteAccount = () => {

        setModalTitle("Are you sure you want to delete your account?");

        setModalChildren(
            <div className="d-flex justify-content-center w-100">
                <button className="btn btn-danger">DELETE YOUR ACCOUNT</button>
            </div>
        );

        setIsModalActive(true);
    }

    return (
        <>

            <div className="d-flex flex-wrap justify-content-center">
                <h1 className="w-100 text-center">Welcome, {username}</h1>

                <div className="d-flex flex-column justify-content-center border rounded mt-5 p-4">

                    <button className="btn btn-warning" onClick={handleClickChangePassword}>Change your password</button>
                    <br />
                    <button className="btn btn-danger" onClick={handleClickDeleteAccount}>Delete your account</button>

                </div>
            </div>

            <Modal show={isModalActive} onHide={() => setIsModalActive(false)} animation={false} >
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <ModalBody className="d-flex justify-content-between ">{modalChildren}</ModalBody>

            </Modal>

        </>
    );
}

export default Profile;