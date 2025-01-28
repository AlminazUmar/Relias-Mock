import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class StaticDataService{
    getNavBarItems(){
        return[
            {label:'Solutions',key:'solutions'},
            {label:'Who We Serve',key:'whoWeServe'},
            {label:'Why Relias',key:'whyRelias'},
            {label:'Resources',key:'resources'},
            {label:'Company',key:'company'}
        ]
    }
    getHomeContent(){
        return[
        {head:'Learning',content:'Develop your staff with accredited, award-winning content and easy-to-administer learning solutions that engage staff, improve retention, and meet competency requirements.'},
        {head:'Compliance',content:'Reduce the risk of penalties and fines with easy-to-maintain regulatory training and compliance management solutions that drive strong completion rates, simplify the audit process, and automate how you monitor regulatory change.'},
        {head:'Performance',content:'Grow staff capabilities and manage competencies with integrated tools designed to assess, develop, and deliver necessary learning for upskilling and improvement.'},
        {head:'Quality',content:'Optimize care improvement though real-time data insights, patient feedback, and prescriptive interventions to identify and close gaps in care delivery and patient experience.'},
        {head:'Recruiting',content:'Target verified nurses with your brand or employer message using our talent acquisition and advertising solutions and match them with a best-fit role using validated assessments that improve nurse satisfaction and retention.'}
        ]
    }
    getHomeContentSection3(){
        return[
            {
                title:'Award-winning content',
                content:'Knowledge is at the core of who we are and what we do. Relias has over 3,000 courses built by in-house healthcare and adult learning experts. Our education solutions ensure that your workforce has access to the knowledge it needs to provide the best care.',
                image:'images/section3-1.webp'
            },
            {
                title:'Proven technology',
                content:'The technology behind Relias better engages your staff and focuses on simplifying your responsibilities and improving the care you provide. The Relias Platform, content delivery tools, and integration capabilities save you time, promote course completion, and create compliance.',
                image:'images/section3-2.webp'
            },
            {
                title:'End-to-end support',
                content:'We understand that your time and resources are limited. Relias’ customer success, support, and professional services teams are here to provide end-to-end support to customize, implement, and integrate our solutions into your existing platforms and systems. We’re your partner every step of the way.',
                image:'images/section3-3.webp'
            },
            {
                title:'In-house experts',
                content:'We understand you because we are you. Our in-house clinicians work every day to ensure that our best-in-class education, expert guidance, and industry insights will move your organization and your workforce forward.',
                image:'images/section3-4.webp'
            },
            {
                title:'Strong community ',
                content:'We believe a strong community of healthcare workers yields better outcomes for everyone. Our online communities connect nurses, physicians, allied health professionals, and learning administrators and reinforce the value of learning for all healthcare workers to give them the resources and support they need to thrive.',
                image:'images/section3-5.webp'
            },
        ]
    }
}