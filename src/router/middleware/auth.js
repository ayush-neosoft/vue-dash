export default function auth({ next, store }) {
  console.log("logged", store.state.auth_vuex.logged);
  if (!store.state.auth_vuex.logged) {
    return next({
      name: "Login"
    });
  }

  return next();
}
