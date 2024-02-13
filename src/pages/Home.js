import NavBar from "../components/NavBar";
import { Container, Table } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Home = () => {

    const { username } = useAuth();

    return (

        <>
            <NavBar />
            <Container className="d-flex flex-wrap justify-content-center">
                <div className="text-center w-100 mb-5">
                    <button type="button" className="btn btn-primary mt-2">Create new chat room</button>
                </div>

                <Table className="border w-50 text-center">
                    <thead>
                        <tr>
                            <th>Chat room id</th>
                            <th>Join</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                test id
                            </td>
                            <td>
                                <div className="d-inline-block">
                                    <button className="btn btn-primary">test button</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </Container>

        </>

    );

}

export default Home;