import PATHS from '../constants/paths';
import helpers from '../utils/helpers';

const api = {
  getTasks: () => helpers.getApiInstance('GET', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}`),
  deleteTask: id => helpers.getApiInstance('DELETE', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}/${id}`),
  createTask: (id, text) =>
    helpers.getApiInstance('POST', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}`, { id, text }),
  changeTask: (id, text) =>
    helpers.getApiInstance('PUT', `${PATHS.BASE_PATH}${PATHS.TASKS_PATH}/${id}`, { id, text }),
};

export default api;