# Demo

Two methods are provided here, and you can also add your own.

## Demo1

This is a demo.

<demo-code1>
  <demo-1></demo-1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <component-template></component-template>
      </div>
    </template>
  </highlight-code>
</demo-code1>

## Demo2

This is another demo.

<demo-code2>
  <demo-2></demo-2>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <component-template msg="hello"></component-template>
      </div>
    </template>
    <style scoped>
      .demo {
        color: red;
      }
    </style>
  </highlight-code>
</demo-code2>
