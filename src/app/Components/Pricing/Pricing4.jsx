"use client"
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";

const Pricing4 = () => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section className="pricing-section section-padding fix">
        <div className="container">
            <div className="section-title text-center mxw-685 mx-auto">
                <div className="subtitle">
                    Our Packages <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                </div>
                <h2 className="title">Mobile App Development Packages</h2>
                <p className="text">Choose the package that best fits your project needs and budget. All packages include cross-platform development for iOS and Android.
                </p>
            </div>
            <div className="pricing-wrapper style1">
                <div className="tab-section d-flex justify-content-center align-items-center">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className={`nav-item ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} role="presentation">
                            <button className="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                                aria-selected="true">Standard Packages</button>
                        </li>
                        <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}  role="presentation">
                            <button className="nav-link" id="pills-yearly-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly"
                                aria-selected="false" tabIndex="-1">Premium Packages</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly" role="tabpanel"
                        aria-labelledby="pills-monthly-tab">
                        <div className="row gy-5">

                            <PricingCard
                                name="Starter Package"
                                price="$2,500"
                                monthly="Fixed Price"
                                content="Perfect for simple mobile apps with basic functionality. Ideal for startups and small businesses."
                                FeatureList={[
                                    "Simple app with 3-5 screens",
                                    "Cross-platform (iOS & Android)",
                                    "Basic UI/UX design",
                                    "App store submission",
                                    "30 days post-launch support",
                                ]} 
                                btnname="Get Started"
                                btnurl="/contact"
                            ></PricingCard>

                            <PricingCard
                                name="Professional Package"
                                price="$5,500"
                                monthly="Fixed Price"
                                content="Comprehensive mobile app solution with advanced features and custom backend integration."
                                FeatureList={[
                                    "Complex app with 10-15 screens",
                                    "Custom backend & API integration",
                                    "Advanced UI/UX design",
                                    "Push notifications & analytics",
                                    "90 days support & maintenance",
                                ]} 
                                btnname="Choose Professional"
                                btnurl="/contact"
                            ></PricingCard>

                            <PricingCard
                                name="Enterprise Package"
                                price="$12,000+"
                                monthly="Custom Quote"
                                content="Full-scale enterprise mobile solution with advanced security, scalability, and custom features."
                                FeatureList={[
                                    "Unlimited screens & features",
                                    "Enterprise-grade security",
                                    "Custom architecture & scalability",
                                    "Advanced integrations & APIs",
                                    "1 year support & maintenance",
                                ]} 
                                btnname="Get Custom Quote"
                                btnurl="/contact"
                            ></PricingCard>

                        </div>
                    </div>
                    <div className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                        <div className="row gy-5">

                        <PricingCard
                                name="Advanced Package"
                                price="$8,500"
                                monthly="Fixed Price"
                                content="Feature-rich mobile app with complex functionality, perfect for growing businesses and established companies."
                                FeatureList={[
                                    "Advanced app with 20+ screens",
                                    "Real-time features & chat",
                                    "Payment gateway integration",
                                    "Admin panel & analytics",
                                    "6 months support included",
                                ]} 
                                btnname="Choose Advanced"
                                btnurl="/contact"
                            ></PricingCard>

                            <PricingCard
                                name="Enterprise Plus"
                                price="$15,000+"
                                monthly="Custom Quote"
                                content="Ultimate mobile solution with enterprise-grade features, custom integrations, and dedicated support team."
                                FeatureList={[
                                    "Enterprise architecture",
                                    "Multi-tenant & white-label",
                                    "Advanced security & compliance",
                                    "Dedicated development team",
                                    "Priority support & maintenance",
                                ]} 
                                btnname="Contact Sales"
                                btnurl="/contact"
                            ></PricingCard>

                            <PricingCard
                                name="Custom Solution"
                                price="Contact Us"
                                monthly="Custom Quote"
                                content="Tailored mobile app development solution designed specifically for your unique business requirements and scale."
                                FeatureList={[
                                    "Fully customized solution",
                                    "Unlimited features & screens",
                                    "Advanced AI/ML integration",
                                    "24/7 dedicated support",
                                    "Lifetime updates included",
                                ]} 
                                btnname="Discuss Your Project"
                                btnurl="/contact"
                            ></PricingCard>                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing4;