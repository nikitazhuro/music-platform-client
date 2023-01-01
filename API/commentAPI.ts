import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const commentAPI = createApi({
  reducerPath: 'commentAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/comment'}),
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (body) => ({
        url: '/create',
        body,
        method: 'POST',
      })
    }),
    readComments: builder.query({
      query: () => '/'
    }),
    deleteComment: builder.mutation({
      query: (body) => ({
        method: 'DELETE',
        url: '/delete',
        body,
      })
    })
  })
})

export const {
  useCreateCommentMutation,
  useReadCommentsQuery,
  useDeleteCommentMutation,
} = commentAPI;

export default commentAPI;
