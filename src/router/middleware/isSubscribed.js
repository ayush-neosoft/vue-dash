export default function isSubscribed({ next, store }) {
  console.log("subscribed", store.state.auth_vuex.subscribed);
  if (!store.state.auth_vuex.subscribed) {
    return next({
      name: "Account"
    });
  }

  return next();
}
