import About4 from '@/app/Components/About/About4';
import Choose2 from '@/app/Components/Choose/Choose2';
import Choose4 from '@/app/Components/Choose/Choose4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import HowWork from '@/app/Components/HowWork/HowWork';
import Testimonial4 from '@/app/Components/Testimonial/Testimonial4';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="About Us"
            ></BreadCumb> 
            <About4
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About GetAppFully"
                title="Your Trusted Mobile App Development Partner"
                content="We are passionate mobile app developers specializing in cross-platform solutions. With years of experience in React Native and Flutter, we transform your ideas into powerful, user-friendly mobile applications that work seamlessly across iOS and Android platforms."
                FeatureList={[
                    "Expert team with 5+ years in mobile development",
                    "Proven track record with 150+ successful app launches",
                    "End-to-end development from concept to app store",
                ]}                
                btnname="View Our Work"
                btnurl="/project"
            ></About4>  
            <Choose2
               img1="/assets/images/wcu/wcuThumb2_1.png" 
               img2="/assets/images/wcu/wcuThumb2_2.png" 
               img3="/assets/images/wcu/wcuThumb2_3.png" 
               subtitle="Our Development Process" 
               title="From Concept to App Store in Record Time" 
               content="We follow a streamlined development process that ensures your mobile app is delivered on time, within budget, and exceeds your expectations. Our agile methodology keeps you involved every step of the way." 
               boximg1="/assets/images/icon/wcuIcon2_1.svg" 
               boxtitle1="Agile Development" 
               boxcontent1="Iterative development with regular updates and client feedback integration throughout the entire project lifecycle." 
               boximg2="/assets/images/icon/wcuIcon2_2.svg" 
               boxtitle2="Quality Assurance" 
               boxcontent2="Comprehensive testing on real devices, performance optimization, and rigorous quality checks before deployment." 
            ></Choose2> 
            <HowWork></HowWork>
            <Choose4></Choose4>  
            <Testimonial4></Testimonial4>                         
    </div>
  );
};

export default page;