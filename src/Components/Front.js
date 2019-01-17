import React from 'react';

class Front extends React.Component {

    render() {
        const props = this.props;
        const person = props.person;
        return (
            <div onClick={props.onclick}>
                <div className="container pt-5 pb-5 img-thumbnail">
                    <div className="row  d-flex justify-content-center">
                        <div className="col-5" >
                            <img className="img-thumbnail d-block m-auto" src="http://u01.appmifile.com/images/2018/11/15/81e137cf-5110-42e2-a608-f990759228d4.png" alt="Card_Photo" style={{width: "300px"}}/>
                        </div>
                        <div className="col-5">
                            <div>
                                <h2 className="text-left text-danger">{person.position}</h2>
                                <p className="text-left text-secondary pt-3 pb-2">Name: <span className="text-dark">{person.name}</span></p>
                                <p className="text-left text-secondary pt-2 pb-2">Last Name: <span className="text-dark">{person.lastName}</span></p>
                                <p className="text-left text-secondary pt-2 pb-2">Email: <span className="text-dark">{person.email}</span></p>
                                <p className="text-left text-secondary pt-2 pb-2">Phone: <span className="text-dark">{person.phone}</span></p>
                                <p className="text-left text-secondary pt-2 pb-2">About Yourself: <span className="text-dark">{person.about}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Front;