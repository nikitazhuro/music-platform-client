import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { IAlbumDeleteDto } from '../types/album';

export const albumsAPI = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/albums' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Album'],
  endpoints: (build) => ({
    getAlbums: build.query({
      query: () => '/',
      providesTags: ['Album'],
    }),
    getAlbum: build.query({
      query: (uuid: string) => `/${uuid}`
    }),
    createAlbum: build.mutation({
      query: (body: FormData) => ({
        url: '/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Album'],
    }),
    deleteAlbum: build.mutation({
      query: (body: IAlbumDeleteDto) => ({
        url: '/delete',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Album'],
    }),
  }),
})

export const {
  useCreateAlbumMutation,
  useDeleteAlbumMutation,
  useGetAlbumQuery,
  useGetAlbumsQuery,
} = albumsAPI;
