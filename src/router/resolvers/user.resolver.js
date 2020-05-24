import Vue from "vue";

import { API } from "@/common/const/api.const";

export const userResolver = async (to, from, next) => {
  const { data } = await Vue.http.get(
    `${API.githubUsers}/${to.params.username}`
  );
  to.meta.user = data;
  next();
};
