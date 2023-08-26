import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'bf45ed20f2msh239074e0859d6d2p1aa0b4jsn6ea4a2058cda',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url , headers : cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId , timePeriod}) => {
                return {
                    url: `/coin/${coinId}/history`,
                    headers:{
                        'X-RapidAPI-Key': 'bf45ed20f2msh239074e0859d6d2p1aa0b4jsn6ea4a2058cda',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    },
                    params: {
                        timePeriod: `${timePeriod}`
                    }
                }
            }
        }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
