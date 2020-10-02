import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"

export default function index() {
  return (
    <>
	<Helmet>
        <title>Gilead Digital Zone — QR Castle</title>
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
    	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript" />
        <script src="../js/bootstrap.min.js" type="text/javascript" />
    </Helmet>
    <main className="secondary-template">
        <div className="container-fluid drive-in">
            <Navbar activePage='drive-in'/>
            <header>
                <div className="container">
                    <div className="heading-cloud-wrapper row">
                        <h1>Drive-Innovation <br/>Theater</h1>
                    </div>
                </div>
            </header>

			<section className="light-bg row" id="welcome">
                <div className="container">
                    <img src="../img/popcorn-bug.svg" className="bug"/>
                    <h2>Welcome!</h2>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/463565573" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                    <p>
                        This is where you’ll find the latest video stories about digital innovation happening around Gilead. We will be posting new videos regularly so check back often!
                    </p>
                </div>
            </section>

            <section className="light-bg row" id="now-showing">
                <div className="container">
                    <img src="../img/popcorn-bug.svg" className="bug"/>
                    <h2>Now Showing</h2>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/463555097" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                    <p>
                        Learn how the Middle East Medical Affairs team uses a digital platform to expand its reach to local HIV specialists, provide them with much needed scientific information and learn about their interests and behaviors.
                    </p>
                    {
                    // <div class="row margin-top-md">
                    //     <div className="col-sm-6 ">
                    //         <div className="yellow-video-block">
                    //             <h3>Video Title</h3>
                    //                 <div className="embed-responsive embed-responsive-16by9">
                    //                     <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/xxx" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    //                 </div>
                    //             <p>
                    //                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ...
                    //             </p>
                    //         </div>
                    //         <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                    //     </div>
                    //     <div className="col-sm-6 ">
                    //         <div className="yellow-video-block">
                    //             <h3>Video Title</h3>
                    //                 <div className="embed-responsive embed-responsive-16by9">
                    //                     <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/xxx" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    //                 </div>
                    //             <p>
                    //                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ...
                    //             </p>
                    //         </div>
                    //         <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                    //     </div>
                    //     <div className="col-sm-6 ">
                    //         <div className="yellow-video-block">
                    //             <h3>Video Title</h3>
                    //                 <div className="embed-responsive embed-responsive-16by9">
                    //                     <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/xxx" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    //                 </div>
                    //             <p>
                    //                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ...
                    //             </p>
                    //         </div>
                    //         <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                    //     </div>
                    //     <div className="col-sm-6 ">
                    //         <div className="yellow-video-block">
                    //             <h3>Video Title</h3>
                    //                 <div className="embed-responsive embed-responsive-16by9">
                    //                     <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/xxx" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    //                 </div>
                    //             <p>
                    //                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ...
                    //             </p>
                    //         </div>
                    //         <img src="../img/headshot-bottom-bg.svg" className="yellow-video-block-img"/>
                    //     </div>
                    // </div>
                }
                </div>
            </section>
           

	        <footer>
	            <div className="container">
	                <div className="copyright">©2020 Gilead</div>
	            </div>
	        </footer>
	        <a href="/" id="back-compass"></a>
	        </div>
	    </main>
    </>
	)
}