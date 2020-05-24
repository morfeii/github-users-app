import Vue from "vue";

import { store } from "@/store";

import { API } from "@/common/const/api.const";
import { ActionName } from "@/common/const/action-name.const";

export const usersResolver = async (to, from, next) => {
  const { data } = await Vue.http.get(API.githubUsers);
  store.dispatch(ActionName.payloadUsers, data);
  next();
};
