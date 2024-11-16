export const routes = {
  login: '/login',
  register: '/register',
  home: '/',
  questions: '/questions',
  quiz: '/quiz',
  submissions: '/submissions',
  userSubmission: (id: string) => `/submissions/${id}`, //auth, user who submitted and admin can access
}
