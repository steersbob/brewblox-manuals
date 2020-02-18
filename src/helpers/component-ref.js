import Vue from 'vue';

const componentRegex = /(\w+).vue$/;

// Globally register all vue components in the RequireContext
export const autoRegister = context =>
  context
    .keys()
    .filter(fname => componentRegex.test(fname))
    .map(fileName => {
      const match = fileName.match(componentRegex);
      const componentConfig = context(fileName);
      Vue.component(match[1], componentConfig.default || componentConfig);
      return match[1].toString();
    });
