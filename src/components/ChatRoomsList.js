import useFetch from "../utils/useFetch";
import ChatRoomItem from "./ChatRoomItem";

const ChatRoomsList = ({ setChatRoomId, setChatRoomTitle }) => {
    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom`);

    if(!data) {
        return (
            <div className="chat-rooms-list col-md-2 bg-light d-flex flex-column">

            </div>
        )
    }

    return (
        <div className="chat-rooms-list col-md-2 bg-light d-flex flex-column">
            {data.map((chatRoom, index) => {
                return (
                <ChatRoomItem key={index} chatRoomId={chatRoom.id} setChatRoomId={setChatRoomId} chatRoomTitle={chatRoom.title} setChatRoomTitle={setChatRoomTitle} />
                );
            })}
        </div>
    );
}

export default ChatRoomsList;