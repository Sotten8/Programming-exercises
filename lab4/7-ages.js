'use strict';

const ages = (persons) => {
  const ages = {};
  for (const names in persons) {
      const age = persons[names].died - persons[names].born;
      ages[names] = age; 
  };
  return ages;
};

module.exports = { ages };
