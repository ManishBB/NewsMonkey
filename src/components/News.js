import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [{
          "source": { "id": "reuters", "name": "Reuters" },
          "author": "Toby Sterling",
          "title": "Prosus doubles down on India with $4.7 bln deal for BillDesk",
          "description": "Prosus NV <a href=\"https://www.reuters.com/companies/PRX.AS\" target=\"_blank\">(PRX.AS)</a> doubled down on its investment in India on Tuesday with a $4.7 billion deal for payments platform BillDesk, making it one of the biggest players in the country's fast-gr…",
          "url": "https://www.reuters.com/world/india/prosus-buys-indian-payments-company-billdesk-47-billion-2021-08-31/",
          "urlToImage": "https://www.reuters.com/resizer/_EQTTavxC9Uc3JoHgs0RIhqsfGg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KDLGEZKKP5P35AQWM5HV4HAXIA.jpg",
          "publishedAt": "2021-08-31T07:55:51Z",
          "content": "A logo of Prosus is diplayed at Amsterdam's stock exchange building as Prosus begins trading on the Euronext stock exchange in Amsterdam, Netherlands, September 11, 2019. REUTERS/Piroschka van de Wou… [+2487 chars]"
        },
        {
          "source": { "id": "google-news-in", "name": "Google News (India)" },
          "author": "hindustantimes.com",
          "title": "'Won't tolerate insult of martyrs': Rahul Gandhi tweets amid outrage over Jallianwala Bagh memorial revamp",
          "description": "Rahul Gandhi tweeted about the Jallianwala Bagh memorial in Amritsar, where more than 1,000 people were killed and hundreds wounded on April 13, 1919, by British troops. | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/in-2-tweets-rahul-gandhi-comments-on-jallianwala-bagh-memorial-revamp-101630394058063.html",
          "urlToImage": "https://images.hindustantimes.com/img/2021/08/31/1600x900/Rahul_Gandhi_Jallianwala_Bagh_Jallianwala_Bagh_memorial_1630394399248_1630394405152.jpg",
          "publishedAt": "2021-08-31T07:30:12+00:00",
          "content": "Congress leader Rahul Gandhi on Tuesday commented on the government's revamp of the Jallianwala Bagh memorial in Punjab's Amritsar, where more than 1000 people were gunned down by British troops in 1… [+2354 chars]"
        },
        {
          "source": { "id": "techcrunch", "name": "TechCrunch" },
          "author": "Ingrid Lunden, Manish Singh",
          "title": "Prosus acquires Indian payments giant BillDesk for $4.7B, will merge with its PayU fintech group",
          "description": "More major consolidation underway in the world of payments: Prosus — the Dutch tech giant that bundles together Naspers’ fintech, e-commerce and other international investments and businesses outside of South Africa — today announced that it would pay $4.7 bi…",
          "url": "https://techcrunch.com/2021/08/30/prosus-acquires-indian-payments-giant-billdesk-for-4-7b-will-merge-with-its-payu-fintech-group/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2015/11/money-in-india-e1556609027558.jpg?w=749",
          "publishedAt": "2021-08-31T06:33:18Z",
          "content": "More major consolidation underway in the world of payments: Prosus — the Dutch tech giant that bundles together Naspers’ fintech, e-commerce and other international investments and businesses outside… [+3233 chars]"
        },
        {
          "source": { "id": "il-sole-24-ore", "name": "Il Sole 24 Ore" },
          "author": "Redazione",
          "title": "Coronavirus oggi. India, quasi 31mila nuovi casi e 350 vittime",
          "description": "Australia, accordo con Singapore per i vaccini L’Australia ha siglato un accordo con Singapore per lo scambio di dosi di vaccino. Canberra riceverà ...",
          "url": "https://www.ilsole24ore.com/art/coronavirus-oggi-india-quasi-31mila-nuovi-casi-e-350-vittime-AEdMnif",
          "urlToImage": "https://i2.res.24o.it/images2010/2021/08/AEdMnif/images/4f42cbbc-0a1b-11ec-b09b-e51e93e88457-fotohome0.jpg",
          "publishedAt": "2021-08-31T05:21:48Z",
          "content": "Singapore ha registrato per il settimo giorno consecutivo una media di oltre 100 casi di Covid al giorno, mettendo alla prova la capacità della città-stato di rilanciare leconomia con uno dei tassi d… [+35 chars]"
        },
        {
          "source": { "id": "google-news-in", "name": "Google News (India)" },
          "author": "TIMESOFINDIA.COM",
          "title": "Covid-19: India reports 30,941 new cases in last 24 hours",
          "description": "India News: India on Tuesday reported 30,941 new Covid-19 infections in the last 24 hours, pushing the country’s overall Covid-19 tally to 32,768,880, according t",
          "url": "https://timesofindia.indiatimes.com/india/covid-19-india-reports-30941-new-cases-in-last-24-hours/articleshow/85787577.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-85787681,width-1070,height-580,imgsize-16842,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-08-31T04:24:00+00:00",
          "content": "Covid-19: India reports 30,941 new cases in last 24 hours\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Covid-19: India reports 30,941 new cases in last 24 hours</li></ul>"
        },
        {
          "source": { "id": "google-news-in", "name": "Google News (India)" },
          "author": "hindustantimes.com",
          "title": "Breaking news: High-level group comprising EAM, NSA and senior officials to focus on safe return of Indians",
          "description": "Breaking News Updates August 31, 2021: Get latest news, breaking news, latest updates, live news, top headlines, breaking business news and top news of the hour.",
          "url": "https://www.hindustantimes.com/india-news/breaking-news-august-31-2021-101630368310382.html",
          "urlToImage": "https://images.hindustantimes.com/img/2021/08/31/1600x900/Breaking-News-Live-Blog-pic_1626307942790_1630368384239.jpg",
          "publishedAt": "2021-08-31T00:09:10+00:00",
          "content": "Welcome to hindustantimes.com live updates platform where you can find breaking news from India and across the world. Find fast updates about the latest news as it breaks.\r\nMissed an important news u… [+5665 chars]"
        },
        {
          "source": { "id": "google-news-in", "name": "Google News (India)" },
          "author": "TNN",
          "title": "Farmers demand action against SDM, Manohar Lal Khattar defends ‘strict’ action",
          "description": "India News: “Protection of democracy is the work of the administration. They are assigned to do this job. We have heard and seen the audio and video (of the SDM i",
          "url": "https://timesofindia.indiatimes.com/india/farmers-demand-action-against-sdm-manohar-lal-khattar-defends-strict-action/articleshow/85781801.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-85781829,width-1070,height-580,imgsize-24306,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-08-30T19:54:00+00:00",
          "content": "Farmers demand action against SDM, Manohar Lal Khattar defends strict action\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Farmers demand action against SDM, Manohar Lal Khattar defends strict action<… [+8 chars]"
        },
        {
          "source": { "id": "the-hindu", "name": "The Hindu" },
          "author": "Ananth Krishnan",
          "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
          "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
          "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
          "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
          "publishedAt": "2021-07-22T15:47:01Z",
          "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
        },
        {
          "source": { "id": "rte", "name": "RTE" },
          "author": "RTÉ News",
          "title": "UK continues with reopening plan despite concerns",
          "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
          "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
          "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
          "publishedAt": "2021-05-15T09:33:48Z",
          "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Rajat Pandit",
          "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
          "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
          "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-23T08:29:00Z",
          "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Times Of India",
          "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
          "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
          "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-23T05:44:49Z",
          "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "PTI",
          "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
          "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
          "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-23T05:43:00Z",
          "content": null
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Bloomberg",
          "title": "Even record death toll may hide extent of India’s Covid crisis",
          "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
          "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-23T04:41:00Z",
          "content": null
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Dipak K Dash",
          "title": "Government to provide 5 kg free food grains to poor for May & June",
          "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
          "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-23T04:23:00Z",
          "content": null
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "TIMESOFINDIA.COM",
          "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
          "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
          "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-23T03:54:00Z",
          "content": null
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Times Of India",
          "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
          "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
          "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-22T16:20:06Z",
          "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
          "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
          "publishedAt": "2020-04-25T03:00:09Z",
          "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
        }
      ];


    constructor(){
        super();
        console.log("From news item!")
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    async componentDidMount(){
        console.log("cdl")
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=87925e2b98644535b4cd74a092bd9900";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles : parsedData.articles})
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey Top Headlines!</h2>

                <div className="row">
                    { this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
                
            </div>
        )
    }
}

export default News
