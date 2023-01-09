import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { IAlbumDeleteDto, IAlbumUpdateTrack } from '../types/album';

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
      query: (uuid: string) => `/${uuid}`,
      providesTags: ['Album'],
    }),
    createAlbum: build.mutation({
      query: (body: FormData) => ({
        url: '/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Album'],
    }),
    updateAlbumTracks: build.mutation({
      query: (body: IAlbumUpdateTrack) => ({
        url: `/${body.albumUUID}`,
        method: 'PATCH',
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
  useLazyGetAlbumQuery,
  useUpdateAlbumTracksMutation,
  useDeleteAlbumMutation,
  useGetAlbumQuery,
  useGetAlbumsQuery,
  util: { getRunningQueriesThunk },
} = albumsAPI;
