import service from '../services/mock-api-service';
import template from '../../templates/homepage.hbs';
import renderTemplate from '../utils/render-template';

const controller = {
  render(params, callback) {
   // TODO: make ajax request
   let model = service.getFeatures();
   renderTemplate(template, model, callback);
 }
};

export default controller;
