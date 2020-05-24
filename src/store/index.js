import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

import { CollectionFilter } from "@/common/models/collection-filter.model";

import { SnackbarMessageName } from "@/common/const/snackbar-message-name.const";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    users: [],
    selectedUsers: [],
    searchCriteria: "",
    snackbarText: ""
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    addSelectedUser({ selectedUsers }, user) {
      const foundUser = selectedUsers.find(({ id }) => id === user.id);
      if (!foundUser) {
        selectedUsers.push(user);
      }
    },

    removeSelectedUser(state, userId) {
      state.selectedUsers = state.selectedUsers.filter(
        ({ id }) => id !== userId
      );
    },

    emptySelectedUsers(state) {
      state.selectedUsers = [];
    },

    setSearchCriteria(state, criteria) {
      state.searchCriteria = criteria;
    },

    setSnackbarText(state, text) {
      state.snackbarText = text;
    }
  },
  getters: {
    filteredUsers: ({ users, searchCriteria }) => (...props) =>
      new CollectionFilter(users, searchCriteria, ...props).filter(),

    filteredSelectedUsers: ({ selectedUsers, searchCriteria }) => (...props) =>
      new CollectionFilter(selectedUsers, searchCriteria, ...props).filter()
  },
  actions: {
    payloadUsers({ commit }, users) {
      commit("setUsers", users);
    },

    userSelection({ commit }, user) {
      commit("addSelectedUser", user);
    },

    userDeletion({ commit }, userId) {
      commit("removeSelectedUser", userId);
    },

    selectedUsersReset({ commit }) {
      commit("emptySelectedUsers");
    },

    criteriaUpdate({ commit }, criteria) {
      commit("setSearchCriteria", criteria);
    },

    snackbarTextUpdate({ commit }, text) {
      commit("setSnackbarText", text);
    },

    snackbarTextReset({ commit }) {
      commit("setSnackbarText", SnackbarMessageName.none);
    }
  }
});
