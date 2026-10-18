import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProjectDataApi = createApi({
  reducerPath: "ProjectDataApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }),

  endpoints: (builder) => ({
    getProjects: builder.query<any, void>({
      query: () => "project-dates?populate=*",
    
   
    }),
  getProjectById: builder.query<any, string>({
      query: (id) => `project-dates/${id}?populate=*`,
    }),

}

)
  ,
});

export const { useGetProjectsQuery,useGetProjectByIdQuery } = ProjectDataApi;