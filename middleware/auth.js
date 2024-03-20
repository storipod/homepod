export default function ({ store, redirect }) {
  if (!store?.state?.app?.isLoggedIn) {
    redirect('/login');
  }
}
