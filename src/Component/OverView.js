import React from 'react'

export const OverView = () => {
    return (
        <>
            <section id="section-overview" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="service-wrapper">
                            <div className="service-inner wow fadeInRight" data-wow-delay=".2s">
                                <i class="fas fa-users"></i>
                                <div className="service-box">
                                    <h3>User Story</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                                </div>
                            </div>
							<div className="service-inner wow fadeInRight" data-wow-delay=".5s">
                                <i class="fas fa-university"></i>
                                <div className="service-box">
                                    <h3>Wireframe</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                                </div>
                            </div>
							<div className="service-inner wow fadeInRight" data-wow-delay=".8s">
                                <i class="fas fa-pencil-alt"></i>
                                <div className="service-box">
                                    <h3>Graphic Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                                </div>
                            </div>
							<div className="service-inner wow fadeInRight" data-wow-delay="1.1s">
                                <i class="fas fa-globe-africa"></i>
                                <div className="service-box">
                                    <h3>Web Development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                                </div>
                            </div>
						</div>
                    </div>
		        </div>
            </section>
        </>
    )
}
