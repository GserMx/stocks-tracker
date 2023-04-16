export default defineEventHandler((event) => {
  const authCookie = getCookie(event, "token");
  event.context.auth = { user: 123 };
});
