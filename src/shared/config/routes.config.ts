export const routes = {
  login: '/login',
  register: '/register',
  home: '/',
  questions: '/questions',
  quiz: '/quiz',
  answers: '/answers',
  userSubmission: (id: string) => `/answers/${id}`, //auth, user who submitted and admin can access
}
