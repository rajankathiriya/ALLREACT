import { React, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"

const MainPostSaga = () => {
    const mydata = useSelector(y => y.posts.data)

    const myDis = useDispatch()

    useEffect(() => {
        myDis({ type: "FETCH_SUCCESS" })
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata?.map((val) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default MainPostSaga;
