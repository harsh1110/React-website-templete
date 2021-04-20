import React from 'react'

export const Testimonials = () => {
    return (
        <>
            <section id="section-testimonial" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carousel slide text-center" id="testimonial-carousel">
                                <ul className="carousel-indicators">
                                    <li data-target="#testimonial-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#testimonial-carousel" data-slide-to="1"></li>
                                    <li data-target="#testimonial-carousel" data-slide-to="2"></li>
                                </ul>
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <p>“ Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam. ”</p>

                                        <h4 className="client-name">Fedrer Venliy</h4>
                                    </div>
                                    <div className="item">
                                        <p>“ Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam. ”</p>

                                        <h4 className="client-name">Markus Stephen</h4>
                                    </div>
                                    <div className="item ">
                                        <p>“ Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam. ”</p>

                                        <h4 className="client-name">John Deally</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
