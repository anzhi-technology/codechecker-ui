import { post ,get,del } from '@/utils/request';
import config from '@/utils/config'

/**
* 项目列表页面的所有请求
* */

/*获取项目列表*/
export function getProjectsList(data = {}) {
  return get(`${config.adminPrefix}/project/list`, data);
}

/*获取任务列表*/
export function getTasksList(data = {}) {
  return get(`${config.adminPrefix}/project/tasks`, data);
}

/*获取单个项目信息*/
export function getSingleProject(hcode,data = {}) {
  return get(`${config.adminPrefix}/project/${hcode}`, data);
}

/*解析cron表达式*/
export function analyzeCron(cron,data = {}) {
  return get(`${config.adminPrefix}/project/cron?cron=${cron}&num=5`, data);
}

/*检测jarPath*/
export function checkClassPath(data = {}) {
  return post(`${config.adminPrefix}/project/listClassPathFile`, data);
}

/*添加项目*/
export function addProject(data = {}) {
  return post(`${config.adminPrefix}/project/add`, data);
}

/*编辑项目*/
export function editProject(data = {}) {
  return post(`${config.adminPrefix}/project/update`, data);
}

/*删除项目*/
export function deleteProject(id,data = {}) {
  return del(`${config.adminPrefix}/project/${id}`, data);
}

/*扫描项目*/
export function scanProject(data = {}) {
  return post(`${config.adminPrefix}/project/scan`, data);
}

/*删除任务*/
export function deleteTask(sid,data = {}) {
  return del(`${config.adminPrefix}/project/task/${sid}`, data);
}
/*终止任务*/
export function cancelTask(projectId,data = {}) {
  return post(`${config.huntLeakPrefix}/scanStatus/cancel?projectId=${projectId}`, data);
}