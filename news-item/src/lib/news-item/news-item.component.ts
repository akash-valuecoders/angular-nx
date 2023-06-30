import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FetchNewsService } from '../fetch-news.service';


@Component({
  selector: 'news-app-workspace-news-item',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {

  data = [
    {
      source: {
        id: null,
        name: "NDTV News"
      },
      author: "NDTV Sports Desk",
      title: "ICC World Cup 2023 Schedule: India To Begin Campaign Against Australia On October 08 - NDTV Sports",
      description: "India's full schedule at ICC ODI World Cup 2023: Rohit Sharma's men begin the tournament against Australia on October 08 in Chennai, with the Pakistan match scheduled on October 15 in Ahmedabad.",
      url: "https://sports.ndtv.com/icc-cricket-world-cup-2023/team-indias-full-schedule-at-odi-world-cup-2023-pakistan-clash-on-october-15-in-ahmedabad-4156027",
      urlToImage: "https://c.ndtvimg.com/2021-10/fk02tiqs_india-pakistan_650x400_24_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-06-27T10:11:00Z",
      content: "Hosts India have their priorities defined after the International Cricket Council announced the schedule for the ODI World Cup 2023 on Tuesday in Mumbai. The tournament will begin with the England vs… [+2121 chars]"
    },
    {
      source: {
        id: null,
        name: "News-Medical.Net"
      },
      author: null,
      title: "Is COVID-19 severity of infection a new risk factor for chronic pain? - News-Medical.Net",
      description: "Researchers investigated whether SARS-CoV-2 infection severity could increase the risk of chronic pain.",
      url: "https://www.news-medical.net/news/20230627/Is-COVID-19-severity-of-infection-a-new-risk-factor-for-chronic-pain.aspx",
      urlToImage: "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_752152_16878583109995062.jpg",
      publishedAt: "2023-06-27T09:38:00Z",
      content: "In a recent study published in PLOS ONE, researchers investigated whether severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) infection severity could increase the risk of chronic pain.\r\nStu… [+5167 chars]"
    },
    {
      source: {
        id: "mashable",
        name: "Mashable"
      },
      author: "Elisha Sauers",
      title: "Webb telescope just found something unprecedented in the Orion Nebula - Mashable",
      description: "Astronomers are excited about the detection of a special molecule in space.",
      url: "https://mashable.com/article/james-webb-space-telescope-orion-nebula",
      urlToImage: "https://helios-i.mashable.com/imagery/articles/04V5ueh7o3wM8jBWLERagS2/hero-image.fill.size_1200x675.v1687809371.png",
      publishedAt: "2023-06-27T09:00:00Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "Livemint"
      },
      author: "Livemint",
      title: "HDFC - HDFC Bank merger to be effective July 1, says Deepak Parekh | Mint - Mint",
      description: "The boards of HDFC Bank and HDFC will meet on June 30 post-market hours to clear and approve the merger, said Deepak Parekh.",
      url: "https://www.livemint.com/market/stock-market-news/hdfc-hdfc-bank-merger-to-be-effective-july-1-says-deepak-parekh-11687856166192.html",
      urlToImage: "https://www.livemint.com/lm-img/img/2023/06/27/600x338/hdfcsharesrOG21x414LiveMint_1687856337070_1687856337224.JPG",
      publishedAt: "2023-06-27T08:59:58Z",
      content: "The merger of housing finance major HDFC with the country's largest private lender HDFC Bank will be effective from July 1, said HDFC Chairman Deepak Parekh. The boards of HDFC and HDFC Bank will mee… [+1316 chars]"
    },
    {
      source: {
        id: "google-news",
        name: "Google News"
      },
      author: null,
      title: "Samsung to launch Galaxy M34 5G smartphone in India on July 7: Details here - Business Standard",
      description: null,
      url: "https://families.google.com/service-restricted",
      urlToImage: null,
      publishedAt: "2023-06-27T08:47:33Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "OpIndia"
      },
      author: "ANI",
      title: "‘We are not the ones who sit in AC rooms and issue fatwas’, says PM Modi while interacting with booth workers in Madhya Pradesh: Here is what he said - OpIndia",
      description: "Ahead of the Madhya Pradesh assembly election to be held later this year, Prime Minister Narendra Modi on Tuesday said that Bharatiya Janata Party's (BJP) booth workers are its biggest power as they make sure to reach out to the people at the grassroots level…",
      url: "https://www.opindia.com/2023/06/we-dont-who-sit-in-ac-rooms-issue-fatwas-pm-modi-booth-workers-madhya-pradesh/",
      urlToImage: "https://www.opindia.com/wp-content/uploads/2023/06/cortffog_pm-modi-in-germany-pti-650_650x400_02_May_22.jpg",
      publishedAt: "2023-06-27T08:40:43Z",
      content: "Ahead of the Madhya Pradesh assembly election to be held later this year, Prime Minister Narendra Modi on Tuesday said that Bharatiya Janata Party’s (BJP) booth workers are its biggest power as they … [+2491 chars]"
    },
    {
      source: {
        id: null,
        name: "The Tribune India"
      },
      author: "The Tribune India",
      title: "Venus Williams Keto Gummies Reviews (Scam Or Legit) Jennifer Lawrence Weight Loss Available in US, CA, UK! & Where to Buy Shark Tank Keto Gummies? - The Tribune India",
      description: null,
      url: "https://www.tribuneindia.com/news/brand-connect/venus-williams-keto-gummies-reviews-scam-or-legit-jennifer-lawrence-weight-loss-available-in-us-ca-uk-where-to-buy-shark-tank-keto-gummies-520704",
      urlToImage: null,
      publishedAt: "2023-06-27T08:24:00Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "India.com"
      },
      author: "Zee Media Bureau",
      title: "Live | Nagaland State Lottery Sambad Result 27-06-2023 (OUT): DEAR Godavari 1 PM Lucky Draw Tuesday - Zee News",
      description: "Live | Nagaland State Lottery Sambad Result 27-06-2023 (ANNOUNCED): DEAR Godavari 1 PM Lucky Draw Tu",
      url: "https://zeenews.india.com/india/live-updates/nagaland-state-lottery-sambad-result-27-06-2023-tuesday-out-dear-godavari-wave-goose-1-pm-6-pm-8-pm-lucky-draw-result-declared-1-crore-first-prize-2627425",
      urlToImage: "https://english.cdn.zeenews.com/sites/default/files/2023/06/27/1228845-nagaland-lottery-dear-sambad.jpg",
      publishedAt: "2023-06-27T07:52:35Z",
      content: "Nagaland Sambad Lottery Today Result 27-06-2023 Tuesday Live: The latest Nagaland State Lottery 1 pm, 6 pm, and 8 pm is shared here on daily basis. Get the Latest Nagaland state lottery winning numbe… [+1388 chars]"
    },
    {
      source: {
        id: null,
        name: "Hindustan Times"
      },
      author: "HT Tech",
      title: "After Google Pixel battery drain issue pops up, frustrated users take to Reddit to complain - HT Tech",
      description: "Many users are complaining about a problem in Google Pixel phones where the battery is draining faster than usual. The issue has emerged after a June update.",
      url: "https://tech.hindustantimes.com/mobile/news/after-google-pixel-battery-drain-issue-pops-up-frustrated-users-take-to-reddit-to-complain-71687849616266.html",
      urlToImage: "https://images.hindustantimes.com/tech/img/2023/06/27/1600x900/battery_1686654536299_1687849817217.jpg",
      publishedAt: "2023-06-27T07:17:20Z",
      content: "Earlier this month, Google released a new update for Pixel smartphones where new features were added to the supported devices. The features brought the macro focus mode to videos for Pixel 7 Pro as w… [+2034 chars]"
    },
    {
      source: {
        id: null,
        name: "The Quint"
      },
      author: "Tania Bagwan",
      title: "White House Slams Harassment of Reporter Who Questioned Modi About Human Rights - The Quint",
      description: "The White House stated, \"we absolutely condemn any harassment of journalists anywhere under any circumstances\" in a press briefing on Monday.",
      url: "https://www.thequint.com/news/world/white-house-condemns-harassment-of-journalist-who-asked-modi-question-about-human-rights",
      urlToImage: "https://images.thequint.com/thequint%2F2023-06%2Fb9e9076f-d088-43d3-832e-34d1e060abed%2F22061_ap06_22_2023_000379b.jpg",
      publishedAt: "2023-06-27T06:55:18Z",
      content: "The White House has strongly condemned the harassment of the Wall Street Journal journalist Sabrina Siddiqui who questioned Indian Prime Minister Narendra Modi about human rights, democracy and free … [+558 chars]"
    },
    {
      source: {
        id: null,
        name: "WION"
      },
      author: "WION Video Team",
      title: "Obesity not just a cosmetic concern | At least 1 in 3 of world's adult population overweight - WION",
      description: "The World Health Organisation defines overweight and obesity as abnormal or excessive fat accumulation that presents a risk to health. The issue has grown to epidemic proportions; and rates of overweight and obesity continue to grow in adults and children. Fr…",
      url: "https://www.wionews.com/videos/obesity-not-just-a-cosmetic-concern-at-least-1-in-3-of-worlds-adult-population-overweight-609139",
      urlToImage: "http://cdn.wionews.com/sites/default/files/2023/06/27/2706_KS_WION_OBESITY_11AM-1687848911-00000003.jpg",
      publishedAt: "2023-06-27T06:55:01Z",
      content: "© 2023. Indiadotcom Digital Private Limited. All Rights Reserved."
    },
    {
      source: {
        id: null,
        name: "Business Insider India"
      },
      author: "Rahul Verma",
      title: "New Samsung Foldable leaks reveal design and specifications for Z Flip 5 and Z Fold 5 ahead of launch - Business Insider India",
      description: "New Galaxy Z Flip 5 and Z Fold 5 leaks reveal design and complete specifications ahead of launch.Galaxy Z Flip 5 to sport a 6.7-inch foldable display, 3.4-inch",
      url: "https://www.businessinsider.in/tech/news/new-samsung-foldable-leaks-reveal-design-and-specifications-for-z-flip-5-and-z-fold-5-ahead-of-launch/articleshow/101301013.cms",
      urlToImage: "https://www.businessinsider.in/photo/101301013/new-samsung-foldable-leaks-reveal-design-and-specifications-for-z-flip-5-and-z-fold-5-ahead-of-launch.jpg?imgsize=47714",
      publishedAt: "2023-06-27T06:52:00Z",
      content: "With approximately one month left until the upcoming Samsung\r\n Galaxy Unpacked event, we now have a fair understanding of what to anticipate from the next iterations of the Galaxy Z Flip 5 and Galaxy… [+3264 chars]"
    },
    {
      source: {
        id: null,
        name: "Livemint"
      },
      author: "Asit Manohar",
      title: "Stock market holiday: NSE, BSE to remain closed on this date not on Wednesday. Details here | Mint - Mint",
      description: "Stock market holiday has been shifted to Thursday instead of Wednesday for Bakri Id 2023",
      url: "https://www.livemint.com/market/stock-market-news/stock-market-holiday-nse-bse-to-remain-closed-on-this-date-not-on-wednesday-details-here-11687846772935.html",
      urlToImage: "https://www.livemint.com/lm-img/img/2023/06/27/600x338/Stock_market_holiday_1687847183569_1687847183703.jpg",
      publishedAt: "2023-06-27T06:32:12Z",
      content: "Stock market holiday: Trading at BSE and NSE will remain suspended on Thursday instead of Wednesday. As per the information available on NSE's official website, Indian stock market will remain open o… [+1867 chars]"
    },
    {
      source: {
        id: null,
        name: "123telugu.com"
      },
      author: null,
      title: "OTT: Sweet Kaaram Coffee gets its premiere date - 123telugu",
      description: "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
      url: "https://www.123telugu.com/mnews/ott-sweet-kaaram-coffee-gets-its-premiere-date.html",
      urlToImage: "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2023-06-27T06:30:00Z",
      content: "Amazon Prime Video, a leading OTT service, has announced the premiere of a new Tamil web series titled Sweet Kaaram Coffee. Created by Reshma Ghatala and produced under the banner of Lion Tooth Studi… [+1125 chars]"
    },
    {
      source: {
        id: null,
        name: "Financial Express"
      },
      author: "The Financial Express",
      title: "Share Market LIVE: Nifty jumps above 18730, Sensex soars 160 pts; Bank Nifty above 43780, HDFC Life, Airtel gain - The Financial Express",
      description: null,
      url: "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-sgx-nifty-bank-nifty-asia-us-markets-adani-enterprises-stock-tuesday-27-june/3143866/",
      urlToImage: null,
      publishedAt: "2023-06-27T06:26:22Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "Jagran.com"
      },
      author: "Ashish Singh",
      title: "OnePlus Nord 3 5G, Nord CE 3 5G, Buds 2r Confirmed To Debut On July 5; Check Expected Specs, Price And More - Jagran English",
      description: "OnePlus Nord Summer Launch Event OnePlus Nord 3 5G Nord CE 3 5G and Buds 2r confirmed to debut in India on July 5",
      url: "https://english.jagran.com/technology/oneplus-nord-3-5g-nord-ce-3-5g-buds-2r-confirmed-to-debut-on-july-5-check-expected-specs-price-and-more-10084757",
      urlToImage: "https://imgeng.jagran.com/images/2023/jun/OnePlus Nord 3 Launch Event1687847304245.jpg",
      publishedAt: "2023-06-27T06:22:00Z",
      content: "OnePlus, a popular Chinese smartphone maker, is now all set to introduce its next-generation mid-range OnePlus Nord 3 along with the OnePlus Nord CE 3 5G, OnePlus Nord Buds 2r, and OnePlus BWZ2 ANC i… [+1851 chars]"
    },
    {
      source: {
        id: null,
        name: "The Quint"
      },
      author: "Nikhila Henry",
      title: "Does BRS Leaders Joining Congress Point to Tight Poll Battle in Telangana? - The Quint",
      description: "Twelve leaders of BRS joined the Congress on 26 June in the presence of Rahul Gandhi. Will KCR have to face a tough poll battle?",
      url: "https://www.thequint.com/south-india/does-brs-leaders-joining-congress-point-to-tight-poll-battle-in-telangana",
      urlToImage: "https://images.thequint.com/thequint%2F2023-06%2F3587708f-86f9-4fd7-8d9b-6d811e2a39fa%2F1__3_.jpg",
      publishedAt: "2023-06-27T05:58:47Z",
      content: "In 2019, when Chandrababu Naidu was busy travelling across the country to forge an alliance of Opposition parties to rally against the Bharatiya Janata Party (BJP), Andhra Pradesh political circles w… [+1087 chars]"
    },
    {
      source: {
        id: null,
        name: "BBC News"
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Pasoori: Bollywood remake of hit Pakistani song divides Indians - BBC",
      description: "Indians are reacting sharply to Bollywood's remake of Pasoori, a popular Pakistani pop sing released last year.",
      url: "https://www.bbc.com/news/world-asia-india-66027341",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/2DE6/production/_124905711_11.jpg",
      publishedAt: "2023-06-27T05:42:23Z",
      content: "Indians are reacting sharply to Bollywood's remake of Pasoori, a Pakistani pop song which became a smash hit in both nations last year.\r\nOriginally sung by Ali Sethi and Shae Gill, the quirky number … [+2426 chars]"
    },
    {
      source: {
        id: null,
        name: "Hindustan Times"
      },
      author: "HT Tech",
      title: "Space miracle or dud? Comet Tsuchinshan-ATLAS to fly by Earth; know when to watch - HT Tech",
      description: "Comet C/2023 A3 is set to pass Earth in 2024 and it will outshine the night sky, as per astronomers",
      url: "https://tech.hindustantimes.com/tech/news/space-miracle-or-dud-comet-tsuchinshan-atlas-to-fly-by-earth-know-when-to-watch-71687842295935.html",
      urlToImage: "https://images.hindustantimes.com/tech/img/2023/06/27/1600x900/comet_1_1677992934323_1687842371518.jpg",
      publishedAt: "2023-06-27T05:09:11Z",
      content: "While asteroids pass by Earth virtually every day and some small ones crash into it, Comets are a rarity and when they come calling, it is exciting time not just for the astronomers, but also for the… [+2108 chars]"
    },
    {
      source: {
        id: null,
        name: "Insidesport.in"
      },
      author: "Triyasha Chatterjee",
      title: "India vs Kuwait LIVE: Blue Tigers AIM to for perfect record in SAFF Championship 2023 Group Stage - Follow LIVE - InsideSport",
      description: "India vs Kuwait LIVE: Indian Football Team will play final group game. Sunil Chhetri and co are already in SAFF Championship 2023 Semifinal",
      url: "https://www.insidesport.in/ind-vs-kuw-live-score-saff-championship-2023-india-vs-kuwait-todays-saff-championship-2023-match/",
      urlToImage: "https://www.insidesport.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-26-at-18.38.16.jpg",
      publishedAt: "2023-06-27T05:05:00Z",
      content: "The upcoming India vs. Kuwait match in the SAFF Championship 2023 on June 27 is generating immense excitement among fans and enthusiasts. Kuwait has emerged as a formidable team in the tournament, wh… [+2776 chars]"
    }
  ]
  constructor(private _fetchNewsService: FetchNewsService) { }

  ngOnInit(): void {
    // this._fetchNewsService.fetchTopNews().subscribe((result)=>{
    //   if (result) {
    //     console.log(result)
    //     this.data = result.articles
    //   }
    // })
  }
}
