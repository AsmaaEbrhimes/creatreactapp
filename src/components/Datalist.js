

import React from 'react';

const Datalist = ({ Person }) => {
    return <>
        <div className="date">
            {Person.length ? (Person.map((ele) => {
                return (
                    <div key={ele.id}className="content-date p-2 mt-4 border-bottom">
                        <div className="content-image">
                            <div className="image">
                                <img src={ele.img} alt="صورة" />
                            </div>
                            <div className="desc">
                                <p>{ele.name} </p>
                                <p>{ele.date}</p>
                            </div>
                        </div>

                    </div>)
            })) : <h1 className="d-flex pt-4">لا يوجد اي مواعيد عمل</h1>}
        </div>
    </>;
}



export default Datalist;
