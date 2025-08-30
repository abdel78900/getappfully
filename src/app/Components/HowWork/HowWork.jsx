import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="Our Process"
                            Title="From Idea to App Store in 3 Simple Steps"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><Image src="/assets/images/shape/workProcessShape1_1.png" alt="img" width={1416} height={225}   /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">STEP - 01</div>
                                    <div className="title">Discovery & Planning</div>
                                    <div className="text">We analyze your requirements and create a detailed roadmap</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">STEP - 02</div>
                                    <div className="title">Design & Development</div>
                                    <div className="text">UI/UX design and cross-platform app development</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">STEP - 03</div>
                                    <div className="title">Testing & Launch</div>
                                    <div className="text">Thorough testing and app store deployment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;