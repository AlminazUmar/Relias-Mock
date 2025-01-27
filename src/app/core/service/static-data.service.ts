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
}