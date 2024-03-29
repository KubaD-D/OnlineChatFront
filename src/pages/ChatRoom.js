import { useState, useRef, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import ChatRoomsList from "../components/ChatRoomsList";
import ChatRoomSettingsBar from "../components/ChatRoomSettingsBar";
import { Modal, ModalBody } from "react-bootstrap";
import { fetchData } from "../utils/ApiService";

const ChatRoom = () => {
    const [chatRoomId, setChatRoomId] = useState(null);
    const [chatRoomTitle, setChatRoomTitle] = useState("Enter a chat room");
    const [chatRoomOwner, setChatRoomOwner] = useState(null);
    const [isModalActive, setIsModalActive] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalChildren, setModalChildren] = useState("");
    const [toggleChatListRefresh, setToggleChatListRefresh] = useState(false);

    useEffect(() => {

        const getChatRoomOwner = async () => {
            if(chatRoomId) {

                const url = `${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom/${chatRoomId}/owner`;

                const responseData = await fetchData(url, "GET");

                if(responseData && responseData.owner) {
                    setChatRoomOwner(responseData.owner)
                }
            }
        }

        getChatRoomOwner();

    }, [chatRoomId])

    const handleChatRoomDelete = () => {
        setToggleChatListRefresh(!toggleChatListRefresh);
        setChatRoomTitle("Please join a room");
        setChatRoomId(null);
    }

    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <h3 className="text-center bg-light m-0">{chatRoomTitle}</h3>
                    <ChatRoomsList 
                        key={toggleChatListRefresh}
                        setChatRoomId={setChatRoomId} 
                        setChatRoomTitle={setChatRoomTitle}
                        toggleChatListRefresh={toggleChatListRefresh}
                        setToggleChatListRefresh={setToggleChatListRefresh}
                        setModalTitle={setModalTitle} 
                        setModalChildren={setModalChildren} 
                        setIsModalActive={setIsModalActive} />
                    <ChatBox chatRoomId={chatRoomId} />
                    <ChatRoomSettingsBar 
                        chatRoomId={chatRoomId} 
                        chatRoomOwner={chatRoomOwner}
                        setModalTitle={setModalTitle} 
                        setModalChildren={setModalChildren} 
                        setIsModalActive={setIsModalActive}
                        handleChatRoomDelete={handleChatRoomDelete} />

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

export default ChatRoom;