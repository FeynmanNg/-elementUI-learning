/* eslint-disable */
export default {
  props: {
    width: {
      type: [String, Number],
      default: '50%',
    },
  },
  data() {
    return {
      specialIndex: false,
    };
  },
  methods: {
    /**
     * 调整元素索引
     * @param {number} index 当前元素
     * @param {number} activeIndex 居中元素
     * @param {number} lengthIndex 元素个数
     */
    processIndex(index, activeIndex, length) {
      {
        if (activeIndex === 0) {
          return index === 1
            ? 1
            : index === 2
            ? 2
            : index === 3
            ? 3
            : index === 4
            ? -3
            : index === 5
            ? -2
            : index === 6
            ? -1
            : 0;
        }
        if (activeIndex === 1) {
          return index === 2
            ? 1
            : index === 3
            ? 2
            : index === 4
            ? 3
            : index === 5
            ? -3
            : index === 6
            ? -2
            : index === 0
            ? -1
            : 0;
        }
        if (activeIndex === 2) {
          return index === 3
            ? 1
            : index === 4
            ? 2
            : index === 5
            ? 3
            : index === 6
            ? -3
            : index === 0
            ? -2
            : index === 1
            ? -1
            : 0;
        }
        if (activeIndex === 3) {
          return index === 4
            ? 1
            : index === 5
            ? 2
            : index === 6
            ? 3
            : index === 0
            ? -3
            : index === 1
            ? -2
            : index === 2
            ? -1
            : 0;
        }
        if (activeIndex === 4) {
          return index === 5
            ? 1
            : index === 6
            ? 2
            : index === 0
            ? 3
            : index === 1
            ? -3
            : index === 2
            ? -2
            : index === 3
            ? -1
            : 0;
        }
        if (activeIndex === 5) {
          return index === 6
            ? 1
            : index === 0
            ? 2
            : index === 1
            ? 3
            : index === 2
            ? -3
            : index === 3
            ? -2
            : index === 4
            ? -1
            : 0;
        }
        if (activeIndex === 6) {
          return index === 0
            ? 1
            : index === 1
            ? 2
            : index === 2
            ? 3
            : index === 3
            ? -3
            : index === 4
            ? -2
            : index === 5
            ? -1
            : 0;
        }
      }
    },
    calcCardTranslate(index, activeIndex) {
      const parentWidth = this.$parent.$el.offsetWidth;
      const width = this.$el.offsetWidth;
      return index * 60 * 1.5 + (parentWidth - width) / 2;
    },
    /**
     * 调整元素位置、缩放
     * @param {number} index 当前元素
     * @param {number} activeIndex 居中元素
     * @param {number} oldIndex 上一元素
     */
    translateItem(index, activeIndex, oldIndex) {
      const parentType = this.$parent.type;
      const parentDirection = this.parentDirection;
      const length = this.$parent.items.length;
      if (parentType !== 'card' && oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }
      index = this.processIndex(index, activeIndex, length);
      this.index = index;
      if (parentType === 'card') {
        if (parentDirection === 'vertical') {
          console.warn(
            '[Element Warn][Carousel]vertical direction is not supported in card mode'
          );
        }
        this.inStage = Math.round(Math.abs(index)) <= 1;
        this.specialIndex = Math.round(Math.abs(index)) >= 3;
        this.active = index === 0;
        this.translate = this.calcCardTranslate(index, activeIndex);
        const absIdx = Math.abs(index);
        this.scale =
          absIdx == 0
            ? 1
            : absIdx == 1
            ? 0.85
            : absIdx == 2
            ? 0.8
            : absIdx == 3
            ? 0.75
            : absIdx == 4
            ? 0.6
            : 0.5;
      } else {
        this.active = index === activeIndex;
        const isVertical = parentDirection === 'vertical';
        this.translate = this.calcTranslate(index, activeIndex, isVertical);
      }

      this.ready = true; // 控制显隐
    },
  },
};