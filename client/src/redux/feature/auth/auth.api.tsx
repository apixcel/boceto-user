import { api } from "@/redux/api/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (post) => ({
        url: "/auth/register",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (post: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["user"],
    }),
    logoutUser: builder.mutation({
      query: () => {
        return {
          url: `/auth/logout`,
          method: "POST",
          body: {},
          credentials: "include",
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (payload: { password: string; token: string }) => {
        console.log("reset payload", payload);

        return {
          url: "/auth/reset-password",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["user"],
    }),
    changePassword: builder.mutation({
      query: (payload: { oldPassword: string; password: string }) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["user"],
    }),
    getAuthor: builder.query({
      query: () => {
        return {
          url: `/auth/author`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateAuthor: builder.mutation({
      query: (payload: {
        firstName?: string;
        lastName?: string;
        image?: any;
        email: string;
      }) => {
        console.log("rtk ==", payload);

        return {
          url: "/auth/update",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["user"],
    }),
    forgotPassword: builder.mutation({
      query: (payload: { email: string }) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["user"],
    }),
    updateUserImage: builder.mutation({
      query: (file: FormData) => {
         // append the file under 'file'
    
        return {
          url: "/auth/update-avatar",
          method: "PUT",
          body: file,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});
export const {
  useRegisterMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetAuthorQuery,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useUpdateAuthorMutation,
  useForgotPasswordMutation,
  useUpdateUserImageMutation,
} = userApi;
