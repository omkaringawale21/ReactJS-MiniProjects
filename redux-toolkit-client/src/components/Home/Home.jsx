import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/getUserDetails';

const Home = () => {
    const dispatch = useDispatch();
    const details = useSelector((state) => state?.userinfo);

    const handleClick = () => {
        dispatch(getUsers());
    }

    return (
        <div className="container">
            <div className="btn_container">
                <button type="button" className="btn" onClick={handleClick} >Click Here</button>
            </div>
            <div className="grid_container">
                {
                    details?.users?.map((e, i) => {
                        return (
                            <div className="box" key={i}>
                                <p>{e?.name}</p>
                                <p>{e?.email}</p>
                                <p>{e?.phone}</p>
                                <p>{e?.website}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Home;