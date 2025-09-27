import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand1 from '../Components/Brand/Brand1';
import About1 from '../Components/About/About1';
import HowWork from '../Components/HowWork/HowWork';
import Choose1 from '../Components/Choose/Choose1';
import Feature1 from '../Components/Feature/Feature1';
import Counter1 from '../Components/Counter/Counter1';
import Faq1 from '../Components/Faq/Faq1';
import Testimonial from '../Components/Testimonial/Testimonial';
import Feature2 from '../Components/Feature/Feature2';
import Pricing1 from '../Components/Pricing/Pricing1';
import Cta1 from '../Components/Cta/Cta1';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
  return (
    <div>
            <HeroBanner1
                subtitle="<span>New!</span>Your Mobile App"
                title="Cross-Platform Mobile App Development"
                content="Build native iOS and Android applications with a single codebase. We use React Native, Flutter, and cutting-edge technologies to deliver optimal performance and exceptional user experiences."
                btnname="Start a Project"
                btnurl="/contact"
                btntwo="Our Services"
                btn2url="/service"
                cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="150+"
                cuscontent="Apps Delivered"
                rating="4.9/5"
                ratingcon="Client Satisfaction"
                img="/assets/images/banner.webp"
            ></HeroBanner1>
            <Brand1></Brand1>   
            <About1
                img1="/assets/images/expert.webp"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About GetAppFully"
                title="Expert Cross-Platform Mobile Development"
                content="We specialize in developing native mobile applications for iOS and Android using cross-platform technologies. Our expertise covers React Native, Flutter, and the latest frameworks to create high-performance and intuitive applications."
                FeatureList={[
                    "Native iOS & Android apps with single codebase",
                    "Modern technologies: React Native, Flutter, Expo",
                    "Optimized UI/UX and smooth performance",
                ]}                
                btnname="Learn More"
                btnurl="/about"
            ></About1>  
            <HowWork></HowWork> 
            <Choose1
                subtitle="Why Choose Us"
                title="Benefits of Cross-Platform Development"
                content="Cross-platform development offers significant advantages for businesses looking to reach both iOS and Android users efficiently while maintaining high quality and performance standards."
                FeatureList={[
                    "Cost-Effective Solution",
                    "Faster Time to Market",
                ]} 
                FeatureList2={[
                    "Native Performance",
                    "Unified Codebase",
                ]}                 
                btnname="Get Started"
                btnurl="/contact"
            ></Choose1>
            <Feature1></Feature1> 
            <Counter1></Counter1>
            <Faq1></Faq1> 
            <Testimonial></Testimonial>  
            <Feature2></Feature2>
 
            <Cta1
                subtitle="Ready to Build?"
                title="Transform your idea into a powerful mobile app today!"
                content="Let's discuss your project and create a custom mobile application that engages your users across iOS and Android platforms with cutting-edge technology."
                btnurl1="/contact"
                btnurl2="/contact"
                img="/assets/images/cta/ctaThumb1_1.png"
            ></Cta1>     
            <Blog1></Blog1>                         
    </div>
  );
};

export default page;