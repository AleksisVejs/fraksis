<template>
  <div class="code-block relative">
    <!-- Terminal Header -->
    <div class="terminal-header">
      <div class="terminal-dots">
        <div class="terminal-dot bg-red-500"></div>
        <div class="terminal-dot bg-yellow-500"></div>
        <div class="terminal-dot bg-green-500"></div>
      </div>
      <div class="terminal-title">{{ filename }}</div>
      <div class="w-4"></div>
    </div>

    <!-- Code Content -->
    <div class="p-2 overflow-auto text-sm">
      <div v-for="(line, index) in codeLines" :key="index" class="code-line mb-1">
        <div class="line-number">{{ index + 1 }}</div>
        <div class="whitespace-pre" v-html="highlightSyntax(line)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'js', // javascript is default
  },
  filename: {
    type: String,
    default: 'script.js',
  },
})

const codeLines = computed(() => {
  return props.code.split('\n')
})

// Simple syntax highlighting function
const highlightSyntax = (line) => {
  if (props.language === 'js' || props.language === 'javascript') {
    // Comments
    line = line.replace(/(\/\/.*$)/g, '<span class="code-comment">$1</span>')

    // Keywords
    const keywords = [
      'const',
      'let',
      'var',
      'function',
      'return',
      'if',
      'else',
      'for',
      'while',
      'class',
      'import',
      'export',
      'from',
      'async',
      'await',
      'try',
      'catch',
      'throw',
      'new',
      'this',
    ]
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g')
      line = line.replace(regex, `<span class="code-keyword">${keyword}</span>`)
    })

    // Strings
    line = line.replace(/(['"`])(.*?)\1/g, '<span class="code-string">$1$2$1</span>')

    // Functions
    line = line.replace(/(\w+)(\s*\()/g, '<span class="code-function">$1</span>$2')

    // Variables after const/let/var
    line = line.replace(/(const|let|var)(\s+)(\w+)/g, '$1$2<span class="code-variable">$3</span>')
  }

  if (props.language === 'html') {
    // Tags
    line = line.replace(/(&lt;\/?)(\w+)/g, '$1<span class="code-tag">$2</span>')

    // Attributes
    line = line.replace(/(\s+)(\w+)(=)/g, '$1<span class="code-variable">$2</span>$3')

    // Strings
    line = line.replace(/(['"`])(.*?)\1/g, '<span class="code-string">$1$2$1</span>')
  }

  return line
}
</script>

<style scoped>
.code-block {
  font-family: 'JetBrains Mono', monospace;
  position: relative;
  max-height: 400px;
}
</style>
