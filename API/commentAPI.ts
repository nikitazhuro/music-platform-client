import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { ICommentDto } from "../types/comment";

export const commentAPI = createApi({
  reducerPath: 'commentAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/comment'}),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (body: ICommentDto) => ({
        url: '/create',
        body,
        method: 'POST',
      }),
      invalidatesTags: ['Comment'],
    }),
    readComments: builder.query({
      query: (params) => ({
        params,
        url: '/'
      }),
      providesTags: ['Comment'],
    }),
    deleteComment: builder.mutation({
      query: (uuid: string) => ({
        method: 'DELETE',
        url: `/${uuid}`,
      }),
      invalidatesTags: ['Comment'],
    })
  })
})

export const {
  useCreateCommentMutation,
  useReadCommentsQuery,
  useDeleteCommentMutation,
} = commentAPI;
