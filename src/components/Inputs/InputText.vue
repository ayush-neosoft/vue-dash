<template>
  <div class="md-layout-item md-size-50">
    <md-field>
      <label>{{ label }}</label>
      <md-input 
        :type="type"
        :value="value"
        @input="$emit('input', { key: title, value: $event })"
      />
      <span class="md-helper-text">
        {{ hint }}
      </span>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
    type : { type: String , required: true, default: 'text' },
    title : { type: String , required: true, default: '' },
    value : { type: String , required: false, default: '' },
    label: { type: String , required: true, default: '' },
    hint: { type: String, required: false , default:'some help text' }
  },
  data() {
    return {
      // model: null
    }
  }
}
</script>