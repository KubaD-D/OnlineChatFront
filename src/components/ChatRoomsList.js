import useFetch from "../utils/useFetch";
import ChatRoomItem from "./ChatRoomItem";

const ChatRoomsList = ({ setChatRoomId }) => {
    const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/ChatRoom`);

    if(!data) {
        return (
            <ChatRoomItem chatRoomId={"Loading..."} />
        )
    }

    return (
        <div className="chat-rooms-list col-md-2 bg-light">
            {data.map((chatRoom, index) => {
                return (
                <ChatRoomItem key={index} chatRoomId={chatRoom.id} setChatRoomId={setChatRoomId} chatRoomTitle={chatRoom.title} />
                );
            })}
        </div>
    );
}

export default ChatRoomsList;