import React from 'react'
import { Link } from 'react-router-dom';

const home = () => {
    return (

        <>
            <main class="my-5">
                <div class="container shadow-lg">
                    <section class="text-center">
                        <h2 class="mb-5 my-3">
                            <strong>Latest posts</strong>
                        </h2>
                        <div class="row">
                            <div class="col-lg-60 col-md-12 mb-4">
                                <div class="col-lg-4 col-md-12 mb-4">
                                    <div class="card">
                                        <div>
                                            <img src="https://mdbootstrap.com/img/new/fluid/nature/012.jpg" class="card-img-top" alt="..." />
                                            <a href="#!">
                                                <div class="mask" style={{
                                                    backgroundColor: 'rgba(251, 251, 251, 0.15)',
                                                }}></div>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Demo</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet .</p>
                                            <Link to={`/blog/1`} class="btn btn-primary">Read more</Link>


                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>
            </main>

            <footer class="bg-primary text-center text-white mt-5 " >
                <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2025 Copyright:
                    <a class="text-white" href="https://github.com/rohit-codes7">rohit-codes7</a>
                </div>

            </footer>

        </>
    )
}

export default home;
