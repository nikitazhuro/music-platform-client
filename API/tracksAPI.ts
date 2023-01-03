import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { ITrackCreateDto, ITrackDeleteDto } from './../types/track';

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
      query: () => '/',
      providesTags: ['Track'],
    }),
    getTrack: build.query({
      query: (uuid: string) => `/${uuid}`
    }),
    createTrack: build.mutation({
      query: (body: ITrackCreateDto) => ({
        url: '/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Track'],
    }),
    deleteTrack: build.mutation({
      query: (body: ITrackDeleteDto) => ({
        url: '/delete',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Track'],
    }),
  }),
})

export const {
  useGetTracksQuery,
  useCreateTrackMutation,
  useDeleteTrackMutation,
  useGetTrackQuery,
} = tracksAPI;