import React from 'react'
import ReactDOM from 'react-dom/client'

//
//header
//  logo
//  Home
//  Categories
//  Help
//  Cart
//body
//  Search
//  card-container
//      cards
//footer
//  Copyright
//  Contact us
//  Help
//

const data = {
    "restaurants": [
        {
            "info": {
                "id": "58312",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Lake Mall",
                "areaName": "Kalighat",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.2,
                "parentId": "721",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 44,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-25 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹179"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-lake-mall-kalighat-kolkata-58312",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "13927",
                "name": "Wow! Momo",
                "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                "locality": "Kasba",
                "areaName": "Kasba",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Tibetan",
                    "Healthy Food",
                    "Asian",
                    "Chinese",
                    "Snacks",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.5,
                "parentId": "1776",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/wow-momo-kasba-kolkata-13927",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "3022",
                "name": "Aminia Restaurant",
                "cloudinaryImageId": "ub35uaf2iferroprejgy",
                "locality": "Golpark",
                "areaName": "Golpark",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "Indian",
                    "Kebabs",
                    "Tandoor"
                ],
                "avgRating": 4.5,
                "parentId": "47",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-25 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/aminia-restaurant-golpark-kolkata-3022",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "39309",
                "name": "KFC",
                "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                "locality": "Kasba",
                "areaName": "Kasba RB Connector",
                "costForTwo": "₹450 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.4,
                "parentId": "547",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-25 02:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-kasba-kasba-rb-connector-kolkata-39309",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "3638",
                "name": "Gupta Brothers -Ballygunge",
                "cloudinaryImageId": "s6osrxqumlqssg6wvu65",
                "locality": "Elgin Road",
                "areaName": "Ballygunge",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Desserts",
                    "South Indian",
                    "Indian",
                    "Chaat",
                    "Mexican"
                ],
                "avgRating": 4.4,
                "parentId": "358878",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 22:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/gupta-brothers-ballygunge-elgin-road-ballygunge-kolkata-3638",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "216675",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Kasba",
                "areaName": "East Kolkata Township",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.4,
                "parentId": "166",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-kasba-east-kolkata-township-kolkata-216675",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "29424",
                "name": "Momo I am",
                "cloudinaryImageId": "vuygl4mrkquhg0ma5dqv",
                "areaName": "Golpark",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Asian",
                    "Chinese",
                    "Tibetan"
                ],
                "avgRating": 4.6,
                "parentId": "2055",
                "avgRatingString": "4.6",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/momo-i-am-golpark-kolkata-29424",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "67722",
                "name": "Kookie Jar",
                "cloudinaryImageId": "0b69d733f3174c1d7ef9829e2a2fc33b",
                "locality": "Niharika Apartment, Ground Floor",
                "areaName": "Gariahat",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Desserts",
                    "Snacks",
                    "Bakery",
                    "Ice Cream"
                ],
                "avgRating": 4.8,
                "parentId": "5550",
                "avgRatingString": "4.8",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 20:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                            "shortDescription": "Perfect Cake Delivery",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                        "shortDescription": "Perfect Cake Delivery"
                                    }
                                }
                            ]
                        }
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kookie-jar-niharika-apartment-ground-floor-gariahat-kolkata-67722",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "18117",
                "name": "Hindusthan Sweets",
                "cloudinaryImageId": "criuo3dsgvodsed1vxl2",
                "locality": "Near 8B Bus stand",
                "areaName": "Jadavpur",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Snacks",
                    "Sweets"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "3371",
                "avgRatingString": "4.6",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 20:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/hindusthan-sweets-near-8b-bus-stand-jadavpur-kolkata-18117",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "182029",
                "name": "The Yellow Straw",
                "cloudinaryImageId": "8f52ceb30e31faed0c2d6ee81b8c639d",
                "locality": "Acropolis",
                "areaName": "Acropolis Mall",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Juices",
                    "Beverages",
                    "Salads",
                    "Healthy Food",
                    "Snacks",
                    "Desserts",
                    "South Indian",
                    "Ice Cream"
                ],
                "avgRating": 4.5,
                "parentId": "10442",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 22:15:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-yellow-straw-acropolis-acropolis-mall-kolkata-182029",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "3018",
                "name": "Tero Parbon",
                "cloudinaryImageId": "625513ab52bee051fca05e6c15b5472f",
                "locality": "Golpark",
                "areaName": "Golpark",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Bengali",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "203238",
                "avgRatingString": "4.4",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 22:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/tero-parbon-golpark-kolkata-3018",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "120155",
                "name": "Cakes",
                "cloudinaryImageId": "xo4xq9ufqmplnusb9nqs",
                "locality": "RAJDANGA MAIN ROAD",
                "areaName": "RAJDANGA MAIN ROAD",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Desserts",
                    "Bakery"
                ],
                "avgRating": 4.6,
                "parentId": "4861",
                "avgRatingString": "4.6",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 1.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 21:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/cakes-rajdanga-main-road-kolkata-120155",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "69297",
                "name": "Machhli Baba Fries",
                "cloudinaryImageId": "dvaa3cfy1v7tkdmesb7s",
                "locality": "Block Eg",
                "areaName": "Rajdanga Main Road",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Bengali",
                    "Street Food",
                    "Rolls & Wraps",
                    "Kebabs",
                    "Fast Food"
                ],
                "avgRating": 4.5,
                "parentId": "4413",
                "avgRatingString": "4.5",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 1.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-25 00:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/machhli-baba-fries-block-eg-rajdanga-main-road-kolkata-69297",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "18110",
                "name": "Bhojohori Manna",
                "cloudinaryImageId": "998b9bfa20e65aeb41fb893624609233",
                "locality": "Ballygunge",
                "areaName": "Ballygunge",
                "costForTwo": "₹900 for two",
                "cuisines": [
                    "Bengali",
                    "Biryani"
                ],
                "avgRating": 4.3,
                "parentId": "113",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 22:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/bhojohori-manna-ballygunge-kolkata-18110",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "25625",
                "name": "Barista Coffee",
                "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
                "locality": "Gariahat",
                "areaName": "Gariahat",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Beverages",
                    "Snacks",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "2359",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 22:45:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/barista-coffee-gariahat-kolkata-25625",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "45571",
                "name": "Rang De Basanti Dhaba",
                "cloudinaryImageId": "2083f9883ebf4e25972bb0f93984981c",
                "locality": "E M Bypass",
                "areaName": "E M Bypass",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Kebabs",
                    "Mughlai",
                    "Biryani",
                    "Punjabi",
                    "Desserts",
                    "Tandoor",
                    "Indian",
                    "Beverages",
                    "Snacks"
                ],
                "avgRating": 4.4,
                "parentId": "758",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-25 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/rang-de-basanti-dhaba-e-m-bypass-kolkata-45571",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "165270",
                "name": "Mama Mia! - Italian Ice Creams & Cakes",
                "cloudinaryImageId": "2a7770f90e4a76d046bfa8aa944c68b7",
                "locality": "Ballygunge",
                "areaName": "Vip Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Ice Cream",
                    "Desserts",
                    "Bakery"
                ],
                "avgRating": 4.7,
                "parentId": "471728",
                "avgRatingString": "4.7",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-25 02:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        },
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-ballygunge-vip-nagar-kolkata-165270",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "98861",
                "name": "Deja Bowl",
                "cloudinaryImageId": "fybypkgqba2zhph0lvsr",
                "locality": "Ruby",
                "areaName": "East Kolkata Township",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Biryani",
                    "Punjabi",
                    "Desserts",
                    "Indian"
                ],
                "avgRating": 4.4,
                "parentId": "6527",
                "avgRatingString": "4.4",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-25 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/deja-bowl-ruby-east-kolkata-township-kolkata-98861",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "339597",
                "name": "Dariole",
                "cloudinaryImageId": "wb7o5n1mtjrtf7xi9yyr",
                "locality": "R.K.Chatterjee Road",
                "areaName": "Kasba",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "parentId": "6960",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 17,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 21:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/dariole-r-k-chatterjee-road-kasba-kolkata-339597",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "18850",
                "name": "Krazy For Chocolates",
                "cloudinaryImageId": "jbogkihrq1hm1ytapylu",
                "locality": "Inside Acropolis Mall",
                "areaName": "East Kolkata Township",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "569",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-24 22:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/krazy-for-chocolates-inside-acropolis-mall-east-kolkata-township-kolkata-18850",
                "type": "WEBLINK"
            }
        }
    ]
}

const Header = () => {
    return (
        <div className="header">
            <img id="restaurent-logo" alt="app-logo" src="data:image/png;base64,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" />
            <ul id="nav-items">
                <li>Home</li>
                <li>Categories</li>
                <li>Help</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const Card = (props) => {
    const {name, avgRating, locality, areaName, costForTwo, cuisines, cloudinaryImageId} = props.restaurant.info;
    const {link} = props.restaurant.cta;
    
    return (
        <div id="card-base" onClick={()=>{window.open(link)}}>
            <div id="card">
                <div id="food-image-div">
                    <img id="food-image" alt="food-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
                </div>
                
                <div id="card-title">
                    <div id="res-name">
                        {name}
                    </div>
                    <div id="food-rating">{avgRating}</div>
                </div>
                <hr></hr>
                <div id="restaurent-name">{cuisines.join(", ")}</div>
                {locality}, {areaName}
            </div>
        </div>

    )
}

const Body = (props) => {
    const {restaurants} = props.data;
    
    return (
        <div className='body'>
            {/* <input type="text" /> */}
            <div id="card-container">
                {restaurants.map((restaurant)=>{
                    return <Card restaurant={restaurant} key={restaurant.info.id}/>
                })}
                
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([<Header key={1} />, <Body data={data} key={2}/>]);