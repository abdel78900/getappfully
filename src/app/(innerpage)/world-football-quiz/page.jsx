"use client"
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
            bgimg="/assets/images/bg/breadcumgBg.png"
            Title="World Football Quiz"
        ></BreadCumb>
        
        {/* Hero Section */}
        <section className="project-details-section section-padding">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-6">
                        <div className="project-details-content">
                            <h1 className="title">World Football Quiz</h1>
                            <p className="subtitle">The Ultimate Football Knowledge Challenge</p>
                            <p className="description">
                                Dive into the most comprehensive football quiz game ever created! Test your knowledge with over 1000 carefully crafted questions covering everything from legendary players to historic matches, current teams to classic moments in football history.
                            </p>
                            
                            <div className="features-grid">
                                <div className="feature-item">
                                    <div className="icon">⚽</div>
                                    <div className="content">
                                        <h4>1000+ Questions</h4>
                                        <p>Extensive database covering all aspects of football</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">💀</div>
                                    <div className="content">
                                        <h4>Sudden Death Mode</h4>
                                        <p>High-stakes gameplay where one wrong answer ends it all</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">🔮</div>
                                    <div className="content">
                                        <h4>Live Predictions</h4>
                                        <p>Make predictions on real matches and compete with friends</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">🎯</div>
                                    <div className="content">
                                        <h4>Wordle Integration</h4>
                                        <p>Football-themed word puzzles with multiple difficulty levels</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">🏆</div>
                                    <div className="content">
                                        <h4>Rankings & Rewards</h4>
                                        <p>Global leaderboards and achievement system</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">🎮</div>
                                    <div className="content">
                                        <h4>Immersive Gameplay</h4>
                                        <p>Engaging mechanics that keep you coming back</p>
                                    </div>
                                </div>
                            </div>

                            <div className="download-buttons">
                                <h3>Download Now</h3>
                                <div className="store-buttons">
                                    <Link href="#" className="store-btn apple">
                                        <Image src="/assets/images/cta/ctaAppleStore1_1.png" alt="Download on App Store" width={180} height={60} />
                                    </Link>
                                    <Link href="#" className="store-btn google">
                                        <Image src="/assets/images/cta/ctaplayStore1_1.png" alt="Get it on Google Play" width={180} height={60} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6">
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src="/assets/images/wfq/main.jpeg" alt="World Football Quiz Main Screen" width={350} height={0} style={{borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', height: 'auto'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="screenshot-gallery section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2>App Screenshots</h2>
                    <p>Explore the beautiful interface and engaging gameplay</p>
                </div>
                <div className="row gy-4">
                    <div className="col-md-4">
                        <div className="screenshot-item" style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src="/assets/images/wfq/quizpage.jpeg" alt="Quiz Interface" width={250} height={0} style={{borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', height: 'auto'}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="screenshot-item" style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src="/assets/images/wfq/sudden.jpeg" alt="Sudden Death Mode" width={250} height={0} style={{borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', height: 'auto'}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="screenshot-item" style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src="/assets/images/wfq/listprono.jpeg" alt="Predictions Feature" width={250} height={0} style={{borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', height: 'auto'}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="screenshot-item" style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src="/assets/images/wfq/wordlequiz.jpeg" alt="Wordle Game" width={250} height={0} style={{borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', height: 'auto'}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="screenshot-item" style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src="/assets/images/wfq/achievements.jpeg" alt="Achievements" width={250} height={0} style={{borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', height: 'auto'}} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="screenshot-item" style={{display: 'flex', justifyContent: 'center'}}>
                            <Image src="/assets/images/wfq/rewards.jpeg" alt="Rewards System" width={250} height={0} style={{borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', height: 'auto'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Game Features Detail */}
        <section className="game-features section-padding" style={{backgroundColor: '#f8f9fa'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="features-content">
                            <h2>Game Features</h2>
                            <div className="feature-list">
                                <div className="feature-detail">
                                    <h4>📚 Massive Question Database</h4>
                                    <p>Over 1000 meticulously crafted questions covering all eras of football, from classic legends to modern superstars, covering leagues, tournaments, and memorable moments.</p>
                                </div>
                                <div className="feature-detail">
                                    <h4>⚡ Sudden Death Challenge</h4>
                                    <p>Test your nerves in our intense sudden death mode where one wrong answer eliminates you. How far can your football knowledge take you?</p>
                                </div>
                                <div className="feature-detail">
                                    <h4>🔮 Real Match Predictions</h4>
                                    <p>Predict real football match outcomes and compete with other players. Earn points for accurate predictions and climb the prediction leaderboards.</p>
                                </div>
                                <div className="feature-detail">
                                    <h4>🎯 Football Wordle</h4>
                                    <p>Enjoy our unique football-themed Wordle game with multiple difficulty levels. Guess player names, team names, and football terminology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="features-content">
                            <h2>Competitive Gaming</h2>
                            <div className="feature-list">
                                <div className="feature-detail">
                                    <h4>🏆 Global Rankings</h4>
                                    <p>Compete with football fans worldwide and see where you rank on our global leaderboards. Track your progress and challenge friends.</p>
                                </div>
                                <div className="feature-detail">
                                    <h4>🎁 Multiple Rewards</h4>
                                    <p>Unlock achievements, earn badges, and collect rewards as you progress through different game modes and challenges.</p>
                                </div>
                                <div className="feature-detail">
                                    <h4>🎮 Immersive Experience</h4>
                                    <p>Beautiful graphics, smooth animations, and engaging sound effects create an immersive football quiz experience like no other.</p>
                                </div>
                                <div className="feature-detail">
                                    <h4>📱 Cross-Platform</h4>
                                    <p>Available on both iOS and Android with seamless synchronization between devices. Play anywhere, anytime.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Ready to Test Your Football Knowledge?</h2>
                        <p>Join thousands of football fans and start your ultimate quiz challenge today!</p>
                        <div className="download-section">
                            <div className="store-buttons-large">
                                <Link href="#" className="store-btn-large apple">
                                    <Image src="/assets/images/cta/ctaAppleStore1_1.png" alt="Download on App Store" width={200} height={70} />
                                </Link>
                                <Link href="#" className="store-btn-large google">
                                    <Image src="/assets/images/cta/ctaplayStore1_1.png" alt="Get it on Google Play" width={200} height={70} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style jsx>{`
            .screenshot-placeholder {
                background: #f0f0f0;
                border: 2px dashed #ccc;
                border-radius: 8px;
                padding: 60px 20px;
                text-align: center;
                min-height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .screenshot-placeholder p {
                margin: 5px 0;
                color: #666;
            }
            .small-text {
                font-size: 14px;
                opacity: 0.7;
            }
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .feature-item {
                display: flex;
                align-items: flex-start;
                gap: 15px;
                padding: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .feature-item .icon {
                font-size: 24px;
                min-width: 40px;
            }
            .feature-item h4 {
                margin: 0 0 10px 0;
                font-size: 18px;
            }
            .feature-item p {
                margin: 0;
                color: #666;
                font-size: 14px;
            }
            .download-buttons {
                margin-top: 40px;
            }
            .store-buttons {
                display: flex;
                gap: 20px;
                margin-top: 20px;
            }
            .store-buttons-large {
                display: flex;
                gap: 30px;
                justify-content: center;
                margin-top: 30px;
            }
            .feature-detail {
                margin-bottom: 30px;
            }
            .feature-detail h4 {
                margin-bottom: 10px;
                color: #333;
            }
            .feature-detail p {
                color: #666;
                line-height: 1.6;
            }
            .screenshot-gallery {
                background: #fff;
            }
            .cta-section {
                background: linear-gradient(135deg, #5236FF 0%, #7C4DFF 100%);
                color: white;
            }
            .cta-section h2 {
                color: white;
                margin-bottom: 20px;
            }
            .cta-section p {
                color: rgba(255,255,255,0.9);
                font-size: 18px;
            }
        `}</style>
    </div>
  );
};

export default page;