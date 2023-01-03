import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Userasync } from './Action/Action';

const MainUser = () => {
    const data = useSelector(y => y.user.data.data)

    const myDis = useDispatch();


    useEffect(() => {
        myDis(Userasync())
    }, [])
    return (
        <div>
            {data?.map((val, index) => {
                return (

                    <div key={index}>
                        <h6>{val.id}</h6>
                        <h6>{val.email}</h6>
                    </div>

                )
            })}
        </div>
    );
}

export default MainUser;
