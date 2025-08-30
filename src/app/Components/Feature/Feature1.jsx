import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="Why Choose GetAppFully"
                            Title="Perfect Mobile Solutions for Startups, SMBs and Enterprises"
                        ></SectionTitle>                       
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Cross-Platform Efficiency"
                                        content="Single codebase for iOS and Android reduces development time by 50%"
                                    ></FeatureCard>
                                     <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="Native Performance"
                                        content="Apps perform like native while sharing code across platforms"
                                    ></FeatureCard>    
                                      <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Rapid Development"
                                        content="Faster time-to-market with our proven development frameworks"
                                    ></FeatureCard> 
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s">
                                    <Image src="/assets/images/wcu/wcuThumb1_1.png" alt="img" width={376} height={342}   />
                                        </div>
                                    <div className="shape"><Image src="/assets/images/shape/wcuThumbShape1_1.png" alt="img" width={376} height={377}   />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="24/7 Support"
                                        content="Dedicated technical support and maintenance for your mobile app"
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_5.svg"
                                        title="App Store Ready"
                                        content="Complete submission process for Google Play and Apple App Store"
                                    ></FeatureCard>                                                                          
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_6.svg"
                                        title="Scalable Architecture"
                                        content="Built to grow with your business and handle increasing user loads"
                                    ></FeatureCard> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;