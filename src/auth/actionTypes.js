export const AUTH = {
  REGISTER_STARTED: 'auth/register_started',
  REGISTER_FAILED: 'auth/register_failed',
  REGISTER_SUCCEEDED: 'auth/register_succeeded',
  LOGIN_STARTED: 'auth/login_started',
  LOGIN_FAILED: 'auth/login-failed',
  LOGIN_SUCCEEDED: 'auth/login_succeeded',
  LOGOUT: 'auth/logout',
};

export const OPERATIONS = {
  ALL_USERS_SUCCEEDED: 'operations/all_users_succeeded',
  ALL_USERS_STARTED: 'operations/all_users_started',
  ALL_USERS_FAILED: 'operations/all_users_failed',

  ONE_USER_SUCCEEDED: 'operations/one_user_succeeded',
  ONE_USER_STARTED: 'operations/one_user_started',
  ONE_USER_FAILED: 'operations/one_user_failed',

  UPDATE_USER_SUCCEEDED: 'operations/update_user_succeeded',
  UPDATE_USER_STARTED: 'operations/update_user_started',
  UPDATE_USER_FAILED: 'operations/update_user_failed',

  ALL_TRAINERS_SUCCEEDED: 'operations/all_trainers_succeeded',
  ALL_TRAINERS_STARTED: 'operations/all_trainers_started',
  ALL_TRAINERS_FAILED: 'operations/all_trainers_failed',
}
