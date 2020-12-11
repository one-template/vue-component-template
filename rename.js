/**
 * @author xrkffgg
 * @created 2020.12.11
 * @description Quickly modify the project name
 * @description 快捷修改项目名称
 * @command node ./rename.js
 */

const { readFileSync, writeFileSync } = require('fs');

// Modify the following 3 as actual use in your own project
// 将下面 3 个修改为自己项目实际使用
const auth = 'xrkffgg';
const repo = 'vue-component-template';
const componentTag = 'component-template';

// The vue component label format will be used by default, or it can be customized
// 默认会采用 vue 组件标签格式，也可以自定义
// const componentName = 'ComponentTemplate';
const componentName = `${firstUpperCase(componentTag.split('-')[0])}${firstUpperCase(componentTag.split('-')[1])}`;  // 'ComponentTemplate'

// Switch
const re_license = false;
const re_package = true;
const re_docs = true;
const re_examples = true;
const re_src = true;

// Rename license
if (re_license) {
  let license = readFileSync('./LICENSE', { encoding:'utf8', flag:'r' });
  license = license.replace('xrkffgg', auth);
  writeFileSync('./LICENSE', license);
  console.log('Done license!');
}

// Rename package.json
if (re_package) {
  let package = JSON.parse(readFileSync('./package.json', { encoding:'utf8', flag:'r' }));
  package.name = repo;
  package.author = auth;
  package.repository.url = `git@github.com/${auth}/${repo}`;
  package.homepage = `https://github.com/${auth}/${repo}`;
  package.bugs.url = `https://github.com/${auth}/${repo}/issues`;
  writeFileSync('./package.json', JSON.stringify(package, null, 2));
  console.log('Done package!');
}

// Rename docs
if (re_docs) {
  let demoMd = readFileSync('./docs/demo.md', { encoding:'utf8', flag:'r' });
  demoMd = demoMd.replace(/component-template/g, componentTag);
  writeFileSync('./docs/demo.md', demoMd);

  let configJS = readFileSync('./docs/.vuepress/config.js', { encoding:'utf8', flag:'r' });
  configJS = configJS.replace(/vue-component-template/g, repo);
  configJS = configJS.replace(/one-template/g, auth);
  writeFileSync('./docs/.vuepress/config.js', configJS);

  let demo1 = readFileSync('./docs/.vuepress/components/demo/1.vue', { encoding:'utf8', flag:'r' });
  let demo2 = readFileSync('./docs/.vuepress/components/demo/2.vue', { encoding:'utf8', flag:'r' });
  demo1 = demo1.replace(/ComponentTemplate/g, componentName);
  demo1 = demo1.replace(/component-template/g, componentTag);
  demo2 = demo2.replace(/ComponentTemplate/g, componentName);
  demo2 = demo2.replace(/component-template/g, componentTag);
  writeFileSync('./docs/.vuepress/components/demo/1.vue', demo1);
  writeFileSync('./docs/.vuepress/components/demo/2.vue', demo2);

  let app = readFileSync('./docs/.vuepress/components/app.vue', { encoding:'utf8', flag:'r' });
  app = app.replace(/ComponentTemplate/g, componentName);
  writeFileSync('./docs/.vuepress/components/app.vue', app);
  console.log('Done docs!');
}

// Rename examples
if (re_examples) {
  let mainJS = readFileSync('./examples/main.js', { encoding:'utf8', flag:'r' });
  mainJS = mainJS.replace(/ComponentTemplate/g, componentName);
  mainJS = mainJS.replace(/component-template/g, componentTag);
  writeFileSync('./examples/main.js', mainJS);

  let appVue = readFileSync('./examples/App.vue', { encoding:'utf8', flag:'r' });
  appVue = appVue.replace(/component-template/g, componentTag);
  writeFileSync('./examples/App.vue', appVue);
  console.log('Done examples!');
}

// Rename src
if (re_src) {
  let indexJS = readFileSync('./src/index.js', { encoding:'utf8', flag:'r' });
  indexJS = indexJS.replace(/ComponentTemplate/g, componentName);
  writeFileSync('./src/index.js', indexJS);

  let appvue = readFileSync('./src/app.vue', { encoding:'utf8', flag:'r' });
  appvue = appvue.replace(/ComponentTemplate/g, componentName);
  writeFileSync('./src/app.vue', appvue);
  console.log('Done src!');
}

function firstUpperCase(source) {
  return source[0].toLocaleUpperCase().concat(source.slice(1))
};
