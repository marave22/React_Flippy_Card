import React from 'react';

class Back extends React.Component {


    render() {
        return (
            <div className="container pt-5 pb-5 img-thumbnail h-100" onClick={this.props.onclick}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center text-secondary">Let's get in touch!</h2>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center pt-4">
                    <div className="row">
                        <div className="col-12 " onClick={(e)=>{e.stopPropagation()}}>
                            <form onSubmit={this.props.submit}>
                                <div className="row">
                                    <div className="col-6">
                                        <label className="pb-3" style={{width: "100%"}} htmlFor="name">
                                            <input className="form-control" id="name" type="text" name="name" placeholder="Your first name"/>
                                        </label>
                                        <label className="pb-3"  style={{width: "100%"}} htmlFor="email">
                                            <input className="form-control" id="email" type="email" name="email" placeholder="Your email address"/>
                                        </label>
                                        <label style={{width: "100%"}} htmlFor="position">
                                            <input className="form-control" id="position" type="text" name="position" placeholder="Your position"/>
                                        </label>
                                    </div>
                                    <div className="col-6">
                                        <label className="pb-3" style={{width: "100%"}} htmlFor="lastName">
                                            <input className="form-control" id="lastName" name="lastName" type="text" placeholder="Your last name"/>
                                        </label>
                                        <label className="pb-3"  style={{width: "100%"}} htmlFor="phone">
                                            <input className="form-control" id="phone" type="text" name="phone" placeholder="Phone number"/>
                                        </label>
                                        <label style={{width: "100%"}} htmlFor="">
                                            <input className="form-control"  id="message" type="text" name="text" placeholder="Tell about yourself"/>
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-secondary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Back;