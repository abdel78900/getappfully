"use client"
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Our Projects"
            ></BreadCumb>  
            
            <section className="project-section section-padding fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-md-8 text-center">
                            <div className="project-showcase">
                                <div className="project-image">
                                    <img src="/assets/images/wfq/main.jpeg" alt="World Football Quiz" style={{
                                        width: '100%',
                                        maxWidth: '400px',
                                        height: 'auto',
                                        borderRadius: '20px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }} />
                                </div>
                                <div className="project-content" style={{marginTop: '30px'}}>
                                    <h2>World Football Quiz</h2>
                                    <p className="description">
                                        The ultimate football knowledge challenge with over 1000+ questions, sudden death mode, 
                                        real match predictions, Wordle integration, and global rankings.
                                    </p>
                                    <div className="project-features" style={{margin: '20px 0'}}>
                                        <span className="feature-tag">1000+ Questions</span>
                                        <span className="feature-tag">Sudden Death</span>
                                        <span className="feature-tag">Live Predictions</span>
                                        <span className="feature-tag">Wordle Game</span>
                                        <span className="feature-tag">Global Rankings</span>
                                    </div>
                                    <div className="project-buttons">
                                        <a href="/world-football-quiz" className="theme-btn" style={{marginRight: '15px'}}>
                                            View Details
                                        </a>
                                        <div className="store-links" style={{marginTop: '20px'}}>
                                            <a href="#" className="store-btn">
                                                <img src="/assets/images/cta/ctaAppleStore1_1.png" alt="App Store" style={{height: '50px'}} />
                                            </a>
                                            <a href="#" className="store-btn" style={{marginLeft: '15px'}}>
                                                <img src="/assets/images/cta/ctaplayStore1_1.png" alt="Google Play" style={{height: '50px'}} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .project-showcase {
                    text-align: center;
                    padding: 40px 20px;
                }
                .project-content h2 {
                    color: #333;
                    margin-bottom: 20px;
                    font-size: 2.5rem;
                }
                .project-content .description {
                    color: #666;
                    font-size: 18px;
                    line-height: 1.6;
                    margin-bottom: 25px;
                }
                .feature-tag {
                    display: inline-block;
                    background: #5236FF;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 14px;
                    margin: 5px;
                    font-weight: 500;
                }
                .theme-btn {
                    background: #5236FF;
                    color: white;
                    padding: 15px 30px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                .theme-btn:hover {
                    background: #4a2de8;
                    color: white;
                    text-decoration: none;
                }
            `}</style>         
    </div>
  );
};

export default page;