import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('radio-group');

export default createComponent({
  mixins: [ParentMixin('vanRadio')],

  props: {
    value: null,
    disabled: Boolean,
    direction: String,
    checkedColor: String,
    iconSize: [Number, String],
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    },
  },

  render() {
    return (
      <div class={bem([this.direction])} role="radiogroup">
        {this.slots()}
      </div>
    );
  },
});
