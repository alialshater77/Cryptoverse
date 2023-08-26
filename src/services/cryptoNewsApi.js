import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptonNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'bf45ed20f2msh239074e0859d6d2p1aa0b4jsn6ea4a2058cda',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url , headers : cryptonNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
