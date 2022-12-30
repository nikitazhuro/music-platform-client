import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const tracksAPI = createApi({
  reducerPath: 'tracks',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/tracks' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Track'],
  endpoints: (build) => ({
    getTracks: build.query({
      query: () => '/'
    }),
    createTrack: build.mutation({
      query: (body) => ({
        url: '/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Track'],
    }),
  }),
})

export const { useGetTracksQuery, useCreateTrackMutation } = tracksAPI;