import React from 'react'

export const Contact = () => {
    return (
        <>
            <section id="section-contact" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading-title">Contact me</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6 col-sm-6 wow fadeInRight">
                            <div className="contact-form">
                                <form className="contact-box">
                                    <div className="form-group">
                                        <label>Name*</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email address*</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Message*</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </form>

                                <div className="row">
                                    <div className="col-md-12">
                                        <a href="#" className="btn btn-default">Contact me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="col-md-6 col-sm-6 wow fadeInLeft">
                            <div className="contact-left">
                                <p>Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei.</p>
                                <div className="location">
                                    <p>122 34rd Some Street</p>
                                    <p>Vendelliers, NYK</p>
                                    <p>United Country 12</p>
                                </div>
                                <ul>
                                    <li><span>Email :</span> <a>contact@yoursite.com</a></li>
                                    <li><span>Phone :</span> <a>1-234-567-89</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
