import React from 'react';
// import bg from '../../../images/bg.jpg'


// const testimonialbg = {
//     background: `url(${bg})`,
//     backgroundColor: 'rgba(45, 58, 74, 0.9)',
//     backgroundBlendMode: 'darken, luminosity',
//     // marginTop: 175
// }
const Testimonial = () => {
    return (
        <div  className="bg-light py-5 ">
            <h1 className="text-success mb-3">TESTIMONIAL</h1>
            <div className="row" >
                <div className="col-md-6  p-5">
                    <p className="d-flex justify-content-start">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.</p>
                    <h6>-----Mizan---</h6>
                </div>

                <div className="col-md-6 p-5">
                <p className="d-flex justify-content-start">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.</p>
                    <h6>-----Forid---</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;