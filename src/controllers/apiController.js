const apiService = require('../services/apiService');

exports.getAllApis = async (req, res, next) => {
  try {
    const apis = await apiService.getAllApis();
    res.json(apis);
  } catch (err) {
    next(err);
  }
};

exports.getApi = async (req, res, next) => {
  try {
    const api = await apiService.getApi(req.params.id);
    if (!api) {
      return res.status(404).send('API not found');
    }
    res.json(api);
  } catch (err) {
    next(err);
  }
};

exports.createApi = async (req, res, next) => {
  try {
    const api = await apiService.createApi(req.body);
    res.status(201).json(api);
  } catch (err) {
    next(err);
  }
};

exports.updateApi = async (req, res, next) => {
  try {
    const api = await apiService.updateApi(req.params.id, req.body);
    if (!api) {
      return res.status(404).send('API not found');
    }
    res.json(api);
  } catch (err) {
    next(err);
  }
};

exports.deleteApi = async (req, res, next) => {
  try {
    const api = await apiService.deleteApi(req.params.id);
    if (!api) {
      return res.status(404).send('API not found');
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
