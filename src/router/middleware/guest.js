export default function guest({ next, store }) {
  console.log("logged", store.state.auth_vuex.logged);
  if (store.state.auth_vuex.logged) {
    return next({
      name: "Dashboard"
    });
  }

  return next();
}
